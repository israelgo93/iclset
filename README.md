# ICLSET 2026

Sitio oficial de **ICLSET 2026 - International Conference on Life Sciences and Emerging Technologies**, organizada por la Universidad Laica Eloy Alfaro de Manabi y la Facultad de Ciencias de la Vida y Tecnologias.

## Información del evento

- **Nombre:** International Conference on Life Sciences and Emerging Technologies.
- **Sigla:** ICLSET 2026.
- **Institucion:** Universidad Laica Eloy Alfaro de Manabi.
- **Facultad:** Facultad de Ciencias de la Vida y Tecnologias.
- **Sede:** Paraninfo Alfonso Aguilar Ruilova, ULEAM.
- **Ciudad:** Manta, Manabi, Ecuador.
- **Fechas:** 15, 16 y 17 de julio de 2026.
- **Modalidad:** híbrida, presencial y virtual sincrónica.
- **Lema:** Biociencia, Agrociencia y Tecnologia: investigacion que transforma territorios.

## Stack

- Next.js 16 con App Router.
- React 19.
- TypeScript estricto.
- Tailwind CSS v4 con tokens CSS-first y OKLCH.
- shadcn/ui para componentes base.
- Motion for React para animaciones controladas.
- lucide-react para iconografia.
- Supabase preparado sin dependencia obligatoria para render publico.
- pnpm como package manager.

## Rutas

- `/es` y `/en`: home principal.
- `/es/call-for-papers` y `/en/call-for-papers`: convocatoria, contribuciones, revisión doble ciega y Microsoft CMT.
- `/es/program` y `/en/program`: programa académico por día.
- `/es/tracks` y `/en/tracks`: tracks científicos y ejes temáticos.
- `/es/publications` y `/en/publications`: proceso editorial y revistas aliadas.
- `/es/venue` y `/en/venue`: sede, Manta, ULEAM y modalidad híbrida.
- `/es/committees` y `/en/committees`: chairs, comités y organización.
- `/es/contact` y `/en/contact`: canales institucionales.
- `/en/cmt-acknowledgment.html`: pagina estatica verificable por `curl` con el acknowledgement obligatorio de Microsoft CMT y `charset=UTF-8`.

## Contenido centralizado

Todo el contenido sensible vive en `src/content`:

- `conference.ts`: identidad, fechas, sede, CTAs y metricas.
- `navigation.ts`: navegacion bilingue.
- `tracks.ts`: tres tracks, carreras articuladoras, ejes y chairs.
- `important-dates.ts`: cronograma oficial y fechas CMT.
- `registration-fees.ts`: valores de inscripción publicados para estudiantes, personal ULEAM, participantes externos y autores.
- `schedule.ts`: programa académico por día.
- `journals.ts`: revistas aliadas con URLs e indexación.
- `springer.ts`: ruta Springer del track tecnológico, requisitos de formato, indexación Scopus y tarifa de publicación.
- `committees.ts`: chairs, comité honorífico, organizador y científico.
- `faqs.ts`: preguntas frecuentes.
- `site.ts`: metadatos globales.
- `cmt.ts`: acknowledgement, enlaces oficiales de ayuda CMT y bloques de lineamientos para autores y envío.
- `templates.ts`: plantillas Word descargables para artículos y resúmenes.

## Visuales

- Icono del evento: `public/brand/iclset-icon.svg`.
- Imagenes del programa: `public/program/day-1.svg`, `public/program/day-2.svg`, `public/program/day-3.svg`.
- Hero con animacion Motion inspirada en biociencia, agrociencia y tecnologia.
- Layout mobile-first para Android, iOS, tablet, desktop y wide desktop.

## SEO y accesibilidad

- Metadata por ruta con `title`, `description`, Open Graph, Twitter card y `alternates.languages`.
- JSON-LD tipo `Event`.
- `sitemap.xml` y `robots.txt`.
- HTML semántico con un `h1` por página.
- Navegación por teclado, estados `focus-visible` y contraste AA.
- Animaciones con soporte para `prefers-reduced-motion`.

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
- Guia operativa: `docs/aws-ecs-fargate.md`.
- Dominio principal: `https://iclset.com`.
- Dominio institucional: `https://iclset.uleam.ec`.
- ECS cluster: `iclset-production`.
- ECS service: `iclset-web`.
- ECR repository: `iclset`.

Build local de contenedor:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:3000 -t iclset:local .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 iclset:local
```

## Estado actual

- Sitio bilingue publicado en AWS ECS Fargate.
- Dominios `iclset.com`, `www.iclset.com` e `iclset.uleam.ec` activos con HTTPS.
- Tracks, ejes, chairs, comités, fechas, programa y revistas actualizados desde la documentación oficial.
- Valores de inscripción visibles en home desde contenido tipado: estudiantes USD 15, personal ULEAM USD 25, participantes externos USD 35 y autores USD 25.
- Ruta Springer documentada y visible para el track tecnológico: libro `Innovation and Research – Smart Technologies and Systems`, serie Lecture Notes in Networks and Systems indexada en Scopus, ISBN/ISSN, DOI por artículo, revisión doble ciego, formato Springer, PDF, manuscrito en inglés y tarifa de publicación USD 400.
- Requisitos de Microsoft CMT visibles en Call for Papers: author guidelines, submission guidelines, where to submit y how to submit.
- Acknowledgement CMT publicado como texto plano estatico en `/en/cmt-acknowledgment.html`.
- Build de produccion requerido antes de commit o despliegue.
- Contacto institucional operativo: `israel.gomez@uleam.edu.ec`.

## Planificación CMT

- Mantener `/en/call-for-papers` como página pública central para CFP, fechas futuras, lineamientos de autores, lineamientos de envío, dónde enviar y cómo enviar.
- Mantener `/en/committees` como evidencia pública de chairs, comité honorífico, comité organizador y comité científico.
- Mantener `/en/cmt-acknowledgment.html` como página HTML estática para verificación automática de Microsoft CMT.
- Validar en cada despliegue que el acknowledgement responde con `Content-Type: text/html; charset=UTF-8` y contiene el texto exacto solicitado por Microsoft CMT.
- El enlace oficial de envío de trabajos es `https://cmt3.research.microsoft.com/ICLSET2026/`; no habilitar canales alternos de recepción.
