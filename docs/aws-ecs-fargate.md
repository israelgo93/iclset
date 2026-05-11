# Despliegue en AWS ECS Fargate

Esta guia deja el sitio ICLSET 2026 listo para publicarse como contenedor en Amazon ECS con Fargate. La landing actual no depende de base de datos para renderizar.

## Arquitectura recomendada

- Amazon ECR para almacenar la imagen Docker.
- Amazon ECS con Fargate para ejecutar el contenedor Next.js.
- Application Load Balancer publico con listener HTTPS.
- AWS Certificate Manager para el certificado TLS.
- Route 53 para apuntar `iclset.com` al ALB.
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
3. Certificado ACM validado para `iclset.com` y, si aplica, `www.iclset.com`.
4. Repositorio ECR, por ejemplo `iclset`.
5. ECS cluster, por ejemplo `iclset-production`.
6. Task definition Fargate con contenedor `iclset-web`, puerto `3000` y CPU/memoria inicial `0.25 vCPU / 0.5 GB`.
7. ECS service con al menos `desired count = 1`.
8. Application Load Balancer con target group HTTP hacia puerto `3000`.
9. Health check del target group en `/healthz`, con respuesta `200`.
10. Security group del ALB abierto a `80/443` y security group de ECS permitiendo trafico solo desde el ALB hacia `3000`.

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
AWS_ROLE_TO_ASSUME=arn:aws:iam::<account-id>:role/<github-actions-deploy-role>
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
6. Apuntar Route 53 al ALB con registro A/AAAA alias.
7. Configurar variables/secreto en GitHub.
8. Ejecutar el workflow `Deploy to Amazon ECS`.
9. Validar `https://iclset.com/es`, `https://iclset.com/en`, `https://iclset.com/sitemap.xml` y Open Graph.

## Pendientes no tecnicos

La publicacion tecnica puede hacerse con placeholders actuales. Antes de difusion institucional siguen pendientes CMT, plantillas, contacto oficial, redes, chairs, comites, tarifas, imagenes oficiales y revision de copy.
