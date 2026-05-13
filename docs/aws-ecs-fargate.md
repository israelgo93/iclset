# Despliegue en AWS ECS Fargate

Esta guia documenta el despliegue de ICLSET 2026 como contenedor en Amazon ECS con Fargate. El sitio actual no depende de base de datos para renderizar.

## Estado actual

- Dominio publico principal: `https://iclset.com`.
- Dominio institucional adicional: `https://iclset.uleam.ec`.
- Cuenta AWS: `761018886122`.
- Region: `us-east-1`.
- Route 53 hosted zone: `Z06338863HEV56FVQYT1B`.
- ECR repository: `iclset`.
- ECS cluster: `iclset-production`.
- ECS service: `iclset-web`.
- ECS task family: `iclset-web`.
- Container name: `iclset-web`.
- ALB: `iclset-web-alb`.
- Target group: `iclset-web-tg`.
- Health check: `/healthz`.
- GitHub repository: `israelgo93/iclset`.
- GitHub Actions workflow: `Deploy to Amazon ECS`.
- Ultimo despliegue validado: `https://github.com/israelgo93/iclset/actions/runs/25702895800`.

## Arquitectura recomendada

- Amazon ECR para almacenar la imagen Docker.
- Amazon ECS con Fargate para ejecutar el contenedor Next.js.
- Application Load Balancer publico con listener HTTPS.
- AWS Certificate Manager para el certificado TLS.
- Route 53 para apuntar `iclset.com` al ALB.
- DNS externo de `uleam.ec` para apuntar `iclset.uleam.ec` al mismo ALB.
- CloudWatch Logs para stdout/stderr del contenedor.
- GitHub Actions con OIDC para construir, subir a ECR y desplegar.

## Variables del sitio

Configurar en ECS y en GitHub Actions:

```txt
NEXT_PUBLIC_SITE_URL=https://iclset.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Las variables de Supabase quedan vacias en fase 1 si no se usa base de datos.

## Recursos AWS necesarios

1. Region AWS elegida.
2. Hosted zone de Route 53 para `iclset.com`.
3. Certificado ACM validado para `iclset.com` y `www.iclset.com`.
4. Certificado ACM adicional validado para `iclset.uleam.ec`.
5. Repositorio ECR, por ejemplo `iclset`.
6. ECS cluster, por ejemplo `iclset-production`.
7. Task definition Fargate con contenedor `iclset-web`, puerto `3000` y CPU/memoria inicial `0.25 vCPU / 0.5 GB`.
8. ECS service con al menos `desired count = 1`.
9. Application Load Balancer con target group HTTP hacia puerto `3000`.
10. Health check del target group en `/healthz`, con respuesta `200`.
11. Security group del ALB abierto a `80/443` y security group de ECS permitiendo trafico solo desde el ALB hacia `3000`.

## Configuracion de GitHub Actions

Crear las siguientes variables del repositorio:

```txt
AWS_REGION=us-east-1
ECR_REPOSITORY=iclset
ECS_CLUSTER=iclset-production
ECS_SERVICE=iclset-web
ECS_TASK_DEFINITION_FAMILY=iclset-web
ECS_CONTAINER_NAME=iclset-web
NEXT_PUBLIC_SITE_URL=https://iclset.com
```

Crear el siguiente secreto:

```txt
AWS_ROLE_TO_ASSUME=arn:aws:iam::761018886122:role/iclset-github-actions-deploy-role
```

El rol debe permitir:

- `ecr:GetAuthorizationToken`
- `ecr:BatchCheckLayerAvailability`
- `ecr:CompleteLayerUpload`
- `ecr:InitiateLayerUpload`
- `ecr:PutImage`
- `ecr:UploadLayerPart`
- `ecs:DescribeTaskDefinition`
- `ecs:RegisterTaskDefinition`
- `ecs:UpdateService`
- `ecs:DescribeServices`
- `iam:PassRole` limitado a los roles de execution/task de ECS

## Build local

```bash
pnpm install
pnpm lint
pnpm typecheck
pnpm build
docker build --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:3000 -t iclset:local .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 iclset:local
```

Verificar:

```txt
http://localhost:3000/es
http://localhost:3000/en
http://localhost:3000/healthz
http://localhost:3000/sitemap.xml
```

## Orden de publicacion

1. Confirmar que `iclset.com` esta administrado en Route 53.
2. Solicitar o validar certificado ACM en la misma region del ALB.
3. Crear ECR y subir una primera imagen.
4. Crear ECS cluster, task definition y service.
5. Crear ALB, target group y health check `/healthz`.
6. Apuntar Route 53 al ALB con registro A alias para `iclset.com` y `www.iclset.com`.
7. Apuntar `iclset.uleam.ec` desde el DNS externo de `uleam.ec` con CNAME hacia el DNS del ALB.
8. Configurar variables/secreto en GitHub.
9. Ejecutar el workflow `Deploy to Amazon ECS`.
10. Validar `https://iclset.com/es`, `https://iclset.com/en`, `https://iclset.com/healthz`, `https://iclset.com/sitemap.xml`, `https://iclset.uleam.ec/es` y `https://iclset.uleam.ec/en`.

## Validacion operativa

```powershell
gh workflow run "Deploy to Amazon ECS" --repo israelgo93/iclset --ref main
gh run watch --repo israelgo93/iclset

& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" ecs describe-services --cluster iclset-production --services iclset-web --region us-east-1
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" elbv2 describe-target-health --target-group-arn arn:aws:elasticloadbalancing:us-east-1:761018886122:targetgroup/iclset-web-tg/3c39e21e48aa300e --region us-east-1

Invoke-WebRequest -Uri "https://iclset.com/healthz" -UseBasicParsing
Invoke-WebRequest -Uri "https://iclset.com/es" -UseBasicParsing
Invoke-WebRequest -Uri "https://iclset.com/en" -UseBasicParsing
Invoke-WebRequest -Uri "https://iclset.com/sitemap.xml" -UseBasicParsing
curl.exe -I https://iclset.uleam.ec/healthz
curl.exe -I https://iclset.uleam.ec/es
curl.exe -I https://iclset.uleam.ec/en
```

## Dominio institucional adicional

`iclset.uleam.ec` esta configurado como CNAME externo en la zona DNS de `uleam.ec`:

```txt
iclset.uleam.ec CNAME iclset-web-alb-837958938.us-east-1.elb.amazonaws.com
```

El certificado ACM adicional para `iclset.uleam.ec` esta emitido en `us-east-1` y asociado como certificado SNI adicional al listener HTTPS `443` del ALB.

```txt
ACM certificate ARN: arn:aws:acm:us-east-1:761018886122:certificate/078b5f1c-0e7c-4b9d-9a14-405bf9438a4f
```

## Estado editorial del sitio

El sitio contiene informacion editorial oficial extraida de la documentacion institucional: tracks, ejes tematicos, chairs, comites, fechas, programa, revistas aliadas, CMT, tarifas e imagenes de referencia del evento.
