# Skill: CI/CD desde GitHub Actions hacia AWS ECS Fargate

Usar esta skill para preparar, implementar o revisar un despliegue generico de una aplicacion contenedorizada desde GitHub Actions hacia Amazon ECS Fargate usando Amazon ECR, OIDC, ALB, ACM y DNS.

Esta guia no contiene datos particulares de ningun proyecto. Reemplazar siempre `<project>`, `<owner>/<repo>`, `<account-id>`, `<region>`, dominios, ARNs, VPC, subnets y security groups con valores confirmados del proyecto destino.

## Entradas requeridas

- Cuenta AWS y region.
- Repositorio GitHub en formato `<owner>/<repo>`.
- Rama de despliegue y environment de GitHub, si aplica.
- Nombre corto del proyecto para recursos AWS.
- Dominio publico y proveedor DNS.
- Puerto del contenedor y ruta de health check.
- Variables de entorno de build y runtime.
- VPC, subnets y security groups existentes, o permiso para crearlos.

## Principios obligatorios

- No usar access keys permanentes en GitHub.
- Usar GitHub Actions OIDC con `AWS_ROLE_TO_ASSUME`.
- Limitar `iam:PassRole` a los roles ECS execution/task necesarios.
- Mantener el security group de ECS cerrado a internet; solo el ALB debe poder acceder al puerto del contenedor.
- Exponer una ruta rapida de health check, por ejemplo `/healthz`, que responda `200`.
- Etiquetar la imagen con `github.sha`.
- Validar build local antes de desplegar.
- En PowerShell, no usar heredoc; usar archivos JSON temporales, `ConvertTo-Json` o argumentos directos de AWS CLI.

## Preparacion de la aplicacion

1. Confirmar package manager, version y comandos.
2. Ejecutar calidad local:

```powershell
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

3. Confirmar que la app escucha en `0.0.0.0` y en el puerto esperado.
4. Crear una ruta de health check:

```ts
export function GET() {
  return new Response("ok", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
```

5. Para Next.js, usar `output: "standalone"` en `next.config.ts`.
6. Crear Dockerfile multi-stage y probarlo localmente:

```powershell
docker build --build-arg NEXT_PUBLIC_SITE_URL="http://localhost:3000" -t "<project>:local" .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL="http://localhost:3000" "<project>:local"
Invoke-WebRequest -Uri "http://localhost:3000/healthz" -UseBasicParsing
```

## Recursos AWS necesarios

- ECR repository: `<project>`.
- CloudWatch log group: `/ecs/<project>-web`.
- IAM role ECS execution: `<project>-ecs-execution-role`.
- IAM role ECS task: `<project>-ecs-task-role`.
- ECS cluster: `<project>-production`.
- ECS task definition family: `<project>-web`.
- ECS service: `<project>-web`.
- Application Load Balancer publico: `<project>-web-alb`.
- Target group: `<project>-web-tg`, tipo `ip`, protocolo HTTP, puerto del contenedor y health check `/healthz`.
- Listener HTTPS `443` con certificado ACM.
- Listener HTTP `80` redirigiendo a HTTPS.
- Route 53 alias o CNAME externo hacia el DNS del ALB.

Valores base recomendados para inicio:

```txt
Launch type: Fargate
Network mode: awsvpc
CPU/memory inicial: 256 / 512
Desired count inicial: 1
Container port: 3000, salvo que la app use otro
Health matcher: 200
```

## OIDC entre GitHub y AWS

Crear el provider OIDC solo si no existe:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" iam create-open-id-connect-provider --url "https://token.actions.githubusercontent.com" --client-id-list "sts.amazonaws.com" --thumbprint-list "6938fd4d98bab03faadb97b34396831e3780aea1"
```

Trust policy minima:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<account-id>:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": [
            "repo:<owner>/<repo>:ref:refs/heads/main",
            "repo:<owner>/<repo>:environment:production"
          ]
        }
      }
    }
  ]
}
```

Permisos minimos del rol deploy:

```txt
ecr:GetAuthorizationToken
ecr:BatchCheckLayerAvailability
ecr:CompleteLayerUpload
ecr:DescribeRepositories
ecr:InitiateLayerUpload
ecr:PutImage
ecr:UploadLayerPart
ecs:DescribeTaskDefinition
ecs:RegisterTaskDefinition
ecs:UpdateService
ecs:DescribeServices
iam:PassRole limitado a roles ECS execution/task
```

## Variables de GitHub

Variables:

```txt
AWS_REGION=<region>
ECR_REPOSITORY=<project>
ECS_CLUSTER=<project>-production
ECS_SERVICE=<project>-web
ECS_TASK_DEFINITION_FAMILY=<project>-web
ECS_CONTAINER_NAME=<project>-web
NEXT_PUBLIC_SITE_URL=https://example.com
```

Secret:

```txt
AWS_ROLE_TO_ASSUME=arn:aws:iam::<account-id>:role/<project>-github-actions-deploy
```

## Workflow base

El workflow debe:

1. Usar permisos `contents: read` e `id-token: write`.
2. Hacer checkout.
3. Configurar credenciales AWS con `aws-actions/configure-aws-credentials`.
4. Iniciar sesion en ECR.
5. Construir y subir la imagen Docker.
6. Descargar la task definition actual.
7. Eliminar campos de solo lectura con `jq`.
8. Renderizar la nueva imagen del contenedor.
9. Desplegar en ECS y esperar estabilidad.

## Validacion

GitHub:

```powershell
gh variable list --repo "<owner>/<repo>"
gh secret list --repo "<owner>/<repo>"
gh workflow run "Deploy to Amazon ECS" --repo "<owner>/<repo>" --ref "main"
gh run watch --repo "<owner>/<repo>"
```

AWS:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" ecs describe-services --cluster "<project>-production" --services "<project>-web" --region "<region>"
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" elbv2 describe-target-health --target-group-arn "<target-group-arn>" --region "<region>"
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" logs tail "/ecs/<project>-web" --follow --region "<region>"
```

Publicacion:

```powershell
Invoke-WebRequest -Uri "https://example.com/healthz" -UseBasicParsing
Invoke-WebRequest -Uri "https://example.com/" -UseBasicParsing
curl.exe -I "http://example.com/healthz"
```

El resultado esperado es:

- ECS service `ACTIVE`.
- `desiredCount` igual a `runningCount`.
- Target group `healthy`.
- `/healthz` responde `200`.
- Rutas publicas responden `200`.
- HTTP redirige a HTTPS.
- DNS resuelve al ALB.
- Certificado ACM esta `ISSUED` y cubre el hostname.

## Fallos comunes

- OIDC falla por `sub` incorrecto en la trust policy.
- El workflow no tiene `id-token: write`.
- El environment de GitHub no coincide con la trust policy.
- ECR falla por region o repositorio incorrecto.
- ECS no registra task definition por falta de `iam:PassRole`.
- El servicio no estabiliza porque la app no escucha en `0.0.0.0`.
- Target group unhealthy por puerto, health path o security group incorrecto.
- HTTPS falla porque ACM esta en otra region o el certificado no esta emitido.
