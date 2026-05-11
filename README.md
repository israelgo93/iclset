# ICLSET 2026

Landing page oficial inicial de **ICLSET 2026 — International Conference on Life Sciences and Emerging Technologies**, organizada por la Universidad Laica Eloy Alfaro de Manabí y la Facultad de Ciencias de la Vida y Tecnologías.

La primera versión es informativa, bilingüe y está preparada para evolucionar en una fase posterior hacia una plataforma con Supabase, inscripciones, certificados y administración.

## Información del evento

- **Nombre:** International Conference on Life Sciences and Emerging Technologies.
- **Sigla:** ICLSET 2026.
- **Institución:** Universidad Laica Eloy Alfaro de Manabí.
- **Facultad:** Facultad de Ciencias de la Vida y Tecnologías.
- **Sede:** Paraninfo Alfonso Aguilar Ruilova, ULEAM.
- **Ciudad:** Manta, Manabí, Ecuador.
- **Fechas:** 15, 16 y 17 de julio de 2026.
- **Modalidad:** híbrida, presencial y virtual sincrónica.
- **Lema:** Biociencia, Agrociencia y Tecnología: investigación que transforma territorios.

## Stack

- Next.js 16 con App Router.
- React 19.
- TypeScript estricto.
- Tailwind CSS v4 con tokens CSS-first y OKLCH.
- shadcn/ui para componentes base.
- Motion for React para animaciones discretas.
- lucide-react para iconografía.
- Supabase preparado para fase 2, sin dependencia en el render de fase 1.
- pnpm como package manager.

## Rutas implementadas

- `/es` y `/en`: landing principal.
- `/es/call-for-papers` y `/en/call-for-papers`: convocatoria, contribuciones, revisión y plantillas.
- `/es/program` y `/en/program`: programa preliminar por día.
- `/es/tracks` y `/en/tracks`: tracks científicos.
- `/es/publications` y `/en/publications`: proceso editorial y revistas aliadas.
- `/es/venue` y `/en/venue`: sede, Manta, ULEAM y modalidad híbrida.
- `/es/committees` y `/en/committees`: comités y organización.
- `/es/contact` y `/en/contact`: canales institucionales.

## Contenido centralizado

Todo el contenido sensible vive en `src/content`:

- `conference.ts`: identidad, fechas, sede, CTAs y métricas.
- `navigation.ts`: navegación bilingüe.
- `tracks.ts`: tres tracks y sus ejes.
- `important-dates.ts`: fechas confirmadas y pendientes.
- `schedule.ts`: programa preliminar.
- `journals.ts`: revistas aliadas.
- `committees.ts`: grupos de comité.
- `faqs.ts`: preguntas frecuentes.
- `site.ts`: metadatos globales.
- `references.ts`: referencias académicas y técnicas.

Los datos no confirmados se mantienen como **Por confirmar / To be confirmed** para no publicar fechas, autoridades, chairs, enlaces o tarifas no aprobadas.

## Estructura principal

```txt
src/
  app/
    [locale]/
      page.tsx
      call-for-papers/page.tsx
      program/page.tsx
      tracks/page.tsx
      publications/page.tsx
      venue/page.tsx
      committees/page.tsx
      contact/page.tsx
    sitemap.ts
    robots.ts
    globals.css
  components/
    layout/
    sections/
    shared/
    ui/
  content/
  lib/
    supabase/
  types/
```

## Secciones de la landing

La home incluye header, hero, métricas, tracks, Call for Papers, fechas clave, programa preliminar, proceso editorial, revistas aliadas, sede, comités, FAQ, CTA final y footer.

El diseño actual usa una dirección visual clara: fondos blancos y neutros, acentos azul/cyan/emerald/lime, cards limpias, bordes suaves y contraste AA. Los fondos oscuros quedan reservados para acentos mínimos, no como estilo dominante.

## SEO y accesibilidad

- Metadata por ruta con `title`, `description`, Open Graph, Twitter card y `alternates.languages`.
- JSON-LD tipo `Event` en la landing.
- `sitemap.xml` y `robots.txt`.
- HTML semántico con un `h1` por página.
- Navegación por teclado, estados `focus-visible` y contraste AA.
- Animaciones con soporte para `prefers-reduced-motion`.

## Supabase fase 2

El proyecto incluye clientes preparados en `src/lib/supabase`, inicializados de forma diferida y sin uso obligatorio en la landing estática.

Variables previstas:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SITE_URL=
```

El dominio publico de produccion es `https://iclset.com`. En produccion `NEXT_PUBLIC_SITE_URL` debe mantenerse como `https://iclset.com` para sitemap, canonical y metadata.

Uso futuro: inscripciones, participantes, certificados digitales, validación QR, administración de contenido, formularios dinámicos y newsletter.

## Comandos

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm format
```

## Despliegue AWS ECS Fargate

El proyecto esta publicado como contenedor en Amazon ECS Fargate:

- `next.config.ts` usa `output: "standalone"`.
- `Dockerfile` genera una imagen optimizada para Next.js.
- `/healthz` responde `200` para health checks de ALB/ECS.
- `.github/workflows/deploy-ecs.yml` contiene el flujo de build, push a ECR y deploy a ECS.
- La guia operativa esta en `docs/aws-ecs-fargate.md`.
- Dominio: `https://iclset.com`.
- ECS cluster: `iclset-production`.
- ECS service: `iclset-web`.
- ECR repository: `iclset`.

Build local de contenedor:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:3000 -t iclset:local .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 iclset:local
```

## Estado actual

- Landing bilingüe publicada en AWS ECS Fargate.
- Páginas internas iniciales implementadas y disponibles en produccion.
- Build de producción validado.
- Documentación base y guias de despliegue actualizadas.
- Contacto provisional: `israel.gomez@uleam.edu.ec`.
- Pendiente: aprobación institucional de enlaces CMT, plantillas, chairs, tarifas, redes, indexaciones e imagenes oficiales.
