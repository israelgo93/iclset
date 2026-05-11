# Skill: AWS ECS Fargate para Next.js

Usar esta skill para publicar una app Next.js como contenedor en Amazon ECS con Fargate.

## Preparacion del proyecto

En `next.config.ts`:

```ts
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
};
```

Crear `/healthz` para health checks:

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

Dockerfile recomendado:

```dockerfile
FROM node:22-alpine AS base
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.1.0 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

## Recursos AWS

Crear:

- ECR repository: `<project>`.
- IAM role ECS execution: `<project>-ecs-execution-role`.
- IAM role ECS task: `<project>-ecs-task-role`.
- CloudWatch log group: `/ecs/<project>-web`.
- ECS cluster: `<project>-production`.
- ECS task definition family: `<project>-web`.
- ECS service: `<project>-web`.

Configuracion base de task:

- Launch type: Fargate.
- CPU/memory inicial: `256 / 512`.
- Network mode: `awsvpc`.
- Container port: `3000`.
- Environment: `NEXT_PUBLIC_SITE_URL=https://domain.com`.
- Logs: `awslogs`.

## Comandos de referencia

```powershell
& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" ecr create-repository --repository-name <project> --image-scanning-configuration scanOnPush=true --encryption-configuration encryptionType=AES256 --region us-east-1

& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" ecs create-cluster --cluster-name <project>-production --region us-east-1

& "C:\Program Files\Amazon\AWSCLIV2\aws.exe" ecs describe-services --cluster <project>-production --services <project>-web --region us-east-1
```

## Validacion

- ECS service `ACTIVE`.
- `desiredCount = 1`.
- `runningCount = 1`.
- Target group `healthy`.
- `/healthz` responde `200`.
