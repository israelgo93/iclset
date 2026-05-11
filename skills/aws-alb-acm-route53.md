# Skill: ALB, ACM y Route 53

Usar esta skill para exponer un servicio ECS Fargate con HTTPS y dominio propio.

## Recursos

- Application Load Balancer publico.
- Security group ALB con entrada `80` y `443` desde internet.
- Security group ECS con entrada `3000` solo desde el security group del ALB.
- Target group HTTP puerto `3000`, target type `ip`, health check `/healthz`.
- Certificado ACM en la misma region del ALB.
- Listener HTTPS `443` hacia el target group.
- Listener HTTP `80` redirigiendo a HTTPS.
- Alias A en Route 53 para apex y `www`.

## ACM

Solicitar certificado:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" acm request-certificate --domain-name example.com --subject-alternative-names www.example.com --validation-method DNS --region us-east-1
```

Crear en Route 53 los registros `ResourceRecord` de `DomainValidationOptions`. Esperar estado `ISSUED`:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" acm describe-certificate --certificate-arn <cert-arn> --region us-east-1
```

## ALB y target group

Target group:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" elbv2 create-target-group --name <project>-web-tg --protocol HTTP --port 3000 --vpc-id <vpc-id> --target-type ip --health-check-enabled --health-check-protocol HTTP --health-check-path /healthz --matcher HttpCode=200 --region us-east-1
```

Listeners:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" elbv2 create-listener --load-balancer-arn <alb-arn> --protocol HTTPS --port 443 --certificates CertificateArn=<cert-arn> --default-actions Type=forward,TargetGroupArn=<tg-arn> --region us-east-1

& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" elbv2 modify-listener --listener-arn <http-listener-arn> --default-actions 'Type=redirect,RedirectConfig={Protocol=HTTPS,Port=443,StatusCode=HTTP_301}' --region us-east-1
```

## Route 53

Crear `A Alias` para:

- `example.com`
- `www.example.com`

El alias apunta al DNS del ALB y usa el canonical hosted zone id del ALB.

## Validacion

```powershell
Invoke-WebRequest -Uri "https://example.com/healthz" -UseBasicParsing
Invoke-WebRequest -Uri "https://example.com/es" -UseBasicParsing
Invoke-WebRequest -Uri "https://example.com/en" -UseBasicParsing
Invoke-WebRequest -Uri "https://example.com/sitemap.xml" -UseBasicParsing
```

Debe responder:

- `/healthz`: `200`.
- Rutas publicas: `200`.
- HTTP debe redirigir a HTTPS con `301`.
