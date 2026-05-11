# Skill: GitHub Actions con AWS OIDC

Usar esta skill para conectar un repositorio GitHub con AWS sin access keys permanentes.

## Entradas requeridas

- Cuenta AWS.
- Region AWS.
- Repo GitHub en formato `owner/repo`.
- Rama de despliegue, normalmente `main`.
- Nombre del rol deploy, por ejemplo `<project>-github-actions-deploy-role`.
- Nombres de ECS/ECR ya definidos.

## Configuracion GitHub

En el repositorio:

1. `Settings > Actions > General`.
2. Activar `Allow all actions and reusable workflows`.
3. En `Workflow permissions`, dejar permisos de lectura y habilitar pull requests si el proyecto lo requiere.
4. Si existe environment `production`, verificar que no tenga aprobadores obligatorios para despliegues automatizados.

Variables del repo:

```txt
AWS_REGION=us-east-1
ECR_REPOSITORY=<project>
ECS_CLUSTER=<project>-production
ECS_SERVICE=<project>-web
ECS_TASK_DEFINITION_FAMILY=<project>-web
ECS_CONTAINER_NAME=<project>-web
NEXT_PUBLIC_SITE_URL=https://example.com
```

Secret:

```txt
AWS_ROLE_TO_ASSUME=arn:aws:iam::<account-id>:role/<project>-github-actions-deploy-role
```

## Rol OIDC en AWS

Crear provider si no existe:

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" iam create-open-id-connect-provider --url https://token.actions.githubusercontent.com --client-id-list sts.amazonaws.com --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1
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

Permisos minimos del rol:

- `ecr:GetAuthorizationToken`
- `ecr:BatchCheckLayerAvailability`
- `ecr:CompleteLayerUpload`
- `ecr:DescribeRepositories`
- `ecr:InitiateLayerUpload`
- `ecr:PutImage`
- `ecr:UploadLayerPart`
- `ecs:DescribeTaskDefinition`
- `ecs:RegisterTaskDefinition`
- `ecs:UpdateService`
- `ecs:DescribeServices`
- `iam:PassRole` limitado a los roles ECS execution/task.

## Workflow base

El workflow debe hacer:

1. Checkout.
2. `aws-actions/configure-aws-credentials` con `role-to-assume`.
3. Login a ECR.
4. `docker build` con `NEXT_PUBLIC_SITE_URL` como build arg.
5. Push a ECR.
6. Descargar task definition actual.
7. Reemplazar imagen del contenedor.
8. Desplegar task definition en ECS y esperar estabilidad.

## Validacion

```powershell
gh variable list --repo <owner>/<repo>
gh secret list --repo <owner>/<repo>
gh workflow run "Deploy to Amazon ECS" --repo <owner>/<repo> --ref main
gh run watch --repo <owner>/<repo>
```
