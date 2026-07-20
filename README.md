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
- Supabase preparado sin dependencia obligatoria para render público.
- pnpm como package manager.

## Rutas

- `/es` y `/en`: home principal.
- `/es/call-for-papers` y `/en/call-for-papers`: convocatoria, contribuciones, revisión doble ciega y Microsoft CMT.
- `/es/program` y `/en/program`: programa académico por día.
- `/es/program/day-1-it-track` y `/en/program/day-1-it-track`: programa completo del Día 1 con jornada inaugural TI y sesiones de Agrociencias.
- `/es/program/day-2-tracks` y `/en/program/day-2-tracks`: programa completo del Día 2 para Bio/Ambiente, TI y Agrociencias.
- `/es/program/day-3-open-house` y `/en/program/day-3-open-house`: programa del Día 3 con Casa Abierta FACIVITEC y pósters científicos.
- `/es/tracks` y `/en/tracks`: tracks científicos y ejes temáticos.
- `/es/publications` y `/en/publications`: proceso editorial y revistas aliadas.
- `/es/venue` y `/en/venue`: sede, Manta, ULEAM y modalidad híbrida.
- `/es/committees` y `/en/committees`: chairs, comités y organización.
- `/es/contact` y `/en/contact`: canales institucionales.
- `/en/cmt-acknowledgment.html`: página estática verificable por `curl` con el acknowledgement obligatorio de Microsoft CMT y `charset=UTF-8`.

## Contenido centralizado

Todo el contenido sensible vive en `src/content`:

- `conference.ts`: identidad, fechas, sede, CTAs y métricas.
- `navigation.ts`: navegación bilingüe.
- `tracks.ts`: tres tracks, carreras articuladoras, ejes y chairs.
- `important-dates.ts`: cronograma oficial y fechas CMT.
- `registration-fees.ts`: valores de inscripción publicados para estudiantes, docentes FACIVITEC, personal ULEAM, participantes externos y autores.
- `schedule.ts`: programa académico por día.
- `program-days.ts`: cronograma bilingüe detallado de los tres días y sus sesiones por track.
- `program-speakers.ts`: perfiles, biografías, resúmenes y fotografías confirmadas de ponentes.
- `journals.ts`: revistas aliadas con URLs e indexación.
- `committees.ts`: chairs, comité honorífico, organizador y científico.
- `faqs.ts`: preguntas frecuentes.
- `site.ts`: metadatos globales.
- `cmt.ts`: acknowledgement, enlaces oficiales de ayuda CMT y bloques de lineamientos para autores y envío.
- `templates.ts`: plantillas Word descargables para artículos y resúmenes.

## Fuentes documentales del programa

- `docs/Programa_General_ICLSET_2026_2.docx`: fuente principal para fechas, horarios, actividades, tracks, sedes, responsables y enlaces Zoom.
- `docs/Fotos y  nombres AGROCIENCIAS.docx`: fuente de identificación y fotografías para ponentes de Agrociencias.
- `docs/Issam Tohuami _Datos - Fotos y Resumen.docx`: ficha biográfica, fotografía, resumen y palabras clave de Issam Touhami.
- `docs/Manuel Peralvo_Datos - Fotos y Resumen.docx`: ficha biográfica, fotografía, resumen y palabras clave de Manuel Peralvo.

Cuando una ficha individual difiere del programa general en fecha u hora, prevalece el programa general. Las fotografías solo se asocian cuando el nombre de la persona coincide de forma verificable.

## Visuales

- Icono del evento: `public/brand/iclset-icon.svg`.
- Imágenes del programa: `public/program/day-1.svg`, `public/program/day-2.svg`, `public/program/day-3.svg`.
- Hero con animación Motion inspirada en biociencia, agrociencia y tecnología.
- Programa académico en home con tarjetas claras tipo glass, imágenes por día, agenda desplegable y CTA para agregar ICLSET 2026 a Google Calendar u otros calendarios mediante archivo `.ics`.
- Los tres días disponen de una página detallada con bloques por track, línea de tiempo, sedes, moderación, accesos virtuales, ponentes y fotografías confirmadas.
- Las presentaciones de pósters científicos son visibles en el Día 1, Día 2 y Día 3.
- En móvil, las agendas de cada día del programa se muestran colapsadas por defecto para que el usuario las despliegue cuando necesite consultar horarios.
- Sección de sede con video de fondo de Manta solo en tablet/desktop; en móvil se mantiene una versión clara sin video para rendimiento y legibilidad.
- Cards destacadas de ponencias virtuales y docentes FACIVITEC con contorno luminoso animado, sin anidar cards internas.
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

- Sitio bilingüe publicado en AWS ECS Fargate.
- Dominios `iclset.com`, `www.iclset.com` e `iclset.uleam.ec` activos con HTTPS.
- Tracks, ejes, chairs, comités, fechas, programa y revistas actualizados desde la documentación oficial.
- Valores de inscripción visibles en home desde contenido tipado: estudiantes USD 15, docentes FACIVITEC USD 15, personal ULEAM USD 25, participantes externos USD 35 y autores USD 25.
- Convocatoria actualizada: cierre de recepción de envíos reprogramado del 14 de junio al 28 de junio de 2026, mostrando la fecha anterior tachada en la sección Call for Papers.
- Nueva modalidad visible en Call for Papers: participación de ponencias virtuales con enlace directo hacia la plantilla de resúmenes.
- La información editorial pública se limita al proceso general de revisión, el libro de actas y las revistas aliadas confirmadas.
- Requisitos de Microsoft CMT visibles en Call for Papers: author guidelines, submission guidelines, where to submit y how to submit.
- Plantillas actualizadas: artículos y resúmenes.
- Acknowledgement CMT publicado como texto plano estatico en `/en/cmt-acknowledgment.html`.
- Programa académico rediseñado con menor carga de gradientes, mayor contraste de texto, agenda colapsada en móvil, agenda abierta en tablet/desktop y enlaces de calendario bilingües.
- Programa oficial actualizado desde `Programa_General_ICLSET_2026_2.docx`, con sesiones paralelas de Agrociencias en el Día 1; Bio/Ambiente, TI y Agrociencias en el Día 2; y Casa Abierta FACIVITEC en el Día 3.
- Páginas detalladas publicadas para los tres días, con equivalencia completa entre español e inglés, perfiles disponibles y placeholders para ponentes sin fotografía.
- Presentaciones de pósters publicadas en las tres jornadas conforme a la actualización institucional.
- Sede híbrida rediseñada con cards compactas, video de fondo en desktop/tablet desde el segundo 7 del video institucional y fallback móvil sin video.
- Build de producción requerido antes de commit o despliegue.
- Contacto institucional operativo: `israel.gomez@uleam.edu.ec`.

## Planificación CMT

- Mantener `/en/call-for-papers` como página pública central para CFP, fechas futuras, lineamientos de autores, lineamientos de envío, dónde enviar y cómo enviar.
- Mantener `/en/committees` como evidencia pública de chairs, comité honorífico, comité organizador y comité científico.
- Mantener `/en/cmt-acknowledgment.html` como página HTML estática para verificación automática de Microsoft CMT.
- Validar en cada despliegue que el acknowledgement responde con `Content-Type: text/html; charset=UTF-8` y contiene el texto exacto solicitado por Microsoft CMT.
- El enlace oficial de envío de trabajos es `https://cmt3.research.microsoft.com/ICLSET2026/`; no habilitar canales alternos de recepción.
