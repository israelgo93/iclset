# Skills operativas del proyecto

Este indice documenta procedimientos reutilizables para agentes que deban replicar el despliegue de ICLSET 2026 o un proyecto similar en AWS.

## Skills disponibles

- [GitHub Actions con AWS OIDC](skills/github-actions-aws-oidc.md): configurar variables, secretos, rol OIDC y workflow de despliegue.
- [AWS ECS Fargate para Next.js](skills/aws-ecs-fargate-nextjs.md): preparar Docker, ECR, ECS cluster, task definition y service.
- [ALB, ACM y Route 53](skills/aws-alb-acm-route53.md): publicar el servicio con HTTPS, health checks y alias DNS.

## Principios

- No guardar access keys permanentes en GitHub.
- Preferir GitHub Actions OIDC con `AWS_ROLE_TO_ASSUME`.
- Usar `output: "standalone"` en Next.js para imagen Docker optimizada.
- Mantener `/healthz` para ALB/ECS.
- Ejecutar `pnpm lint`, `pnpm typecheck` y `pnpm build` antes de commit o deploy.
- En PowerShell no usar heredoc; usar archivos JSON temporales o `ConvertTo-Json`.

## Estado ICLSET

- Produccion: `https://iclset.com`.
- Repo: `israelgo93/iclset`.
- Workflow: `Deploy to Amazon ECS`.
- AWS region: `us-east-1`.
- ECS cluster: `iclset-production`.
- ECS service: `iclset-web`.
