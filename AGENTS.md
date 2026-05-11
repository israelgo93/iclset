# AGENTS.md

## Proyecto

ICLSET 2026 — International Conference on Life Sciences and Emerging Technologies  
Universidad Laica Eloy Alfaro de Manabí, Facultad de Ciencias de la Vida y Tecnologías  
Primera edición · Manta, Manabí, Ecuador · 15, 16 y 17 de julio de 2026  
Modalidad híbrida: presencial y virtual sincrónica.

Lema base: **Biociencia, Agrociencia y Tecnología: investigación que transforma territorios**.

## Objetivo del sitio

Construir la primera landing page oficial e informativa de ICLSET 2026.  
La versión inicial debe priorizar difusión, claridad académica, confianza institucional, convocatoria de artículos, programa, tracks, revistas aliadas, fechas clave, sede, contacto y enlaces de descarga.

Esta primera versión NO debe incluir todavía:

- Registro de usuarios.
- Pagos en línea.
- Panel administrativo completo.
- Base de datos productiva obligatoria.
- Gestión editorial propia dentro del sitio.

La arquitectura debe quedar preparada para una segunda fase con Supabase, inscripciones, certificados, administración de participantes y posibles módulos de publicaciones.

## Stack técnico obligatorio

- Next.js 16 compatible.
- App Router.
- TypeScript estricto.
- React 19 compatible.
- Tailwind CSS v4.
- CSS moderno con variables, `@theme`, container queries, OKLCH y tokens.
- Motion for React, antes Framer Motion, para animaciones controladas.
- shadcn/ui para componentes base reutilizables.
- Supabase preparado para fase posterior.
- pnpm como package manager recomendado.
- ESLint y Prettier.
- Accesibilidad AA como estándar mínimo.
- SEO técnico completo.
- Contenido bilingüe: español e inglés.

## Principios de desarrollo

1. Server Components por defecto.
   Usar Client Components solamente donde exista interacción real: tabs, acordeones, menú mobile, animaciones, countdown o filtros.

2. Landing estática primero.
   Priorizar SSG, contenido local tipado y rendimiento. No crear una base de datos si la versión inicial solo necesita contenido informativo.

3. Supabase ready, no Supabase dependent.
   Preparar estructura y variables de entorno para que en fase 2 se pueda conectar Supabase sin reescribir el sitio.

4. Componentes pequeños y composables.
   Evitar componentes gigantes. Cada sección debe vivir en su propio archivo.

5. Diseño institucional moderno.
   El sitio debe sentirse académico, internacional, confiable y contemporáneo. No debe parecer una plantilla genérica de WordPress ni un afiche pegado en HTML.

6. Todo contenido sensible debe salir de archivos de configuración tipados.
   Fechas, tracks, chairs, revistas, cronograma, tarifas y enlaces deben estar en `src/content`.

7. UX clara para tres públicos.
   - Autores e investigadores.
   - Estudiantes y asistentes.
   - Autoridades, aliados y revistas.

8. Bilingüe desde el inicio.
   No traducir al final. Toda sección debe tener copy en `es` y `en`.

## Arquitectura recomendada

```txt
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
      call-for-papers/
        page.tsx
      program/
        page.tsx
      tracks/
        page.tsx
      venue/
        page.tsx
      committees/
        page.tsx
      publications/
        page.tsx
      contact/
        page.tsx
    sitemap.ts
    robots.ts
    globals.css

  components/
    layout/
      site-header.tsx
      site-footer.tsx
      mobile-nav.tsx
      language-switcher.tsx
    sections/
      hero-section.tsx
      stats-section.tsx
      tracks-section.tsx
      cfp-section.tsx
      timeline-section.tsx
      program-preview-section.tsx
      publications-section.tsx
      venue-section.tsx
      partners-section.tsx
      faq-section.tsx
      final-cta-section.tsx
    ui/
      # shadcn/ui components

  content/
    site.ts
    navigation.ts
    conference.ts
    tracks.ts
    schedule.ts
    important-dates.ts
    journals.ts
    committees.ts
    faqs.ts
    references.ts

  lib/
    constants.ts
    metadata.ts
    i18n.ts
    utils.ts
    supabase/
      client.ts
      server.ts
      middleware.ts

  types/
    conference.ts
    locale.ts
```

## Rutas iniciales

### `/es` y `/en`

Landing principal con hero, resumen, tracks, fechas clave, call for papers, programa preliminar, revistas aliadas, sede, FAQ y CTA.

### `/es/call-for-papers` y `/en/call-for-papers`

Página informativa para autores con:

- Tipos de contribución: full paper y póster científico.
- Revisión doble ciego.
- Plantillas.
- CMT como plataforma editorial.
- Fechas importantes.
- Requisitos de anonimización.
- CTA hacia CMT cuando el enlace esté disponible.

### `/es/program` y `/en/program`

Programa preliminar por día:

- Día 1: inauguración, keynotes, panel TI, sesiones paralelas.
- Día 2: keynotes, panel Bio-Ambiente, panel Ciencia Abierta, sesiones paralelas.
- Día 3: feria de pósters y clausura.

### `/es/tracks` y `/en/tracks`

Detalle de los tres tracks:

- Ciencias Biológicas y Ambientales.
- Agrociencias.
- Tecnologías de la Información.

### `/es/publications` y `/en/publications`

Proceso editorial, revisión doble ciego, libro de actas, revistas aliadas y canalización post-conferencia.

### `/es/venue` y `/en/venue`

Manta, ULEAM, Paraninfo Alfonso Aguilar Ruilova, modalidad híbrida, Zoom institucional, conectividad y ubicación.

### `/es/committees` y `/en/committees`

Chairs, comité honorífico, comité organizador y comité científico.

### `/es/contact` y `/en/contact`

Canales institucionales, correo, redes, ubicación y formulario estático o mailto en fase 1.

## Contenido base obligatorio

### Identidad

- Nombre completo: International Conference on Life Sciences and Emerging Technologies.
- Sigla: ICLSET 2026.
- Institución: Universidad Laica Eloy Alfaro de Manabí.
- Facultad: Facultad de Ciencias de la Vida y Tecnologías.
- Ciudad: Manta.
- Provincia: Manabí.
- País: Ecuador.
- Fechas: 15, 16 y 17 de julio de 2026.
- Modalidad: híbrida, presencial y virtual sincrónica.

### Mensaje principal de hero

ES:

> Biociencia, agrociencia y tecnología para transformar territorios.

EN:

> Life sciences, agroscience, and emerging technologies shaping resilient territories.

### Submensaje de hero

ES:

> Una conferencia internacional híbrida con revisión por pares doble ciego, libro de actas y canalización de artículos aceptados hacia revistas académicas aliadas.

EN:

> A hybrid international conference with double-blind peer review, proceedings, and post-conference journal pathways through allied academic journals.

### CTAs principales

ES:

- Ver Call for Papers.
- Descargar plantillas.
- Consultar programa.
- Conocer revistas aliadas.

EN:

- View Call for Papers.
- Download templates.
- Explore the program.
- View partner journals.

## Datos tipados sugeridos

```ts
export const conference = {
  acronym: "ICLSET 2026",
  name: {
    es: "International Conference on Life Sciences and Emerging Technologies",
    en: "International Conference on Life Sciences and Emerging Technologies",
  },
  tagline: {
    es: "Biociencia, Agrociencia y Tecnología: investigación que transforma territorios",
    en: "Life Sciences, Agroscience, and Technology: research transforming territories",
  },
  dates: {
    start: "2026-07-15",
    end: "2026-07-17",
    display: {
      es: "15, 16 y 17 de julio de 2026",
      en: "July 15, 16, and 17, 2026",
    },
  },
  location: {
    city: "Manta",
    province: "Manabí",
    country: "Ecuador",
    venue: "Universidad Laica Eloy Alfaro de Manabí",
    mainHall: "Paraninfo Alfonso Aguilar Ruilova",
  },
  modality: {
    es: "Híbrida: presencial + virtual sincrónica",
    en: "Hybrid: in-person + synchronous virtual",
  },
} as const;
```

## Componentes mínimos

- `HeroSection`
- `ConferenceStats`
- `TracksGrid`
- `CallForPapersCard`
- `ImportantDatesTimeline`
- `ProgramPreview`
- `PublicationFlow`
- `PartnerJournals`
- `VenueBlock`
- `CommitteesPreview`
- `FaqSection`
- `FinalCTA`
- `LanguageSwitcher`
- `MobileNav`

## Reglas de animación

- Usar Motion solo en Client Components.
- No animar todo. Animar entrada de secciones, cards, timeline y botones importantes.
- Evitar animaciones agresivas o distracciones.
- Respetar `prefers-reduced-motion`.
- Duración recomendada: 0.35s a 0.65s.
- Easing recomendado: `cubic-bezier(0.22, 1, 0.36, 1)`.

## Reglas de accesibilidad

- HTML semántico.
- Un solo `h1` por página.
- Contraste AA.
- Estados `focus-visible`.
- Navegación por teclado.
- Imágenes con `alt` significativo.
- No depender solo del color para comunicar estado.
- Links y botones con texto claro.
- Formulario de contacto accesible si se implementa.
- Motion desactivable con `prefers-reduced-motion`.

## SEO y metadatos

Cada página debe tener:

- `title`
- `description`
- `openGraph`
- `twitter`
- `alternates.languages`
- canonical
- JSON-LD tipo `Event`
- sitemap
- robots

JSON-LD mínimo para la landing:

```ts
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "ICLSET 2026 — International Conference on Life Sciences and Emerging Technologies",
  startDate: "2026-07-15T08:00:00-05:00",
  endDate: "2026-07-17T17:30:00-05:00",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Universidad Laica Eloy Alfaro de Manabí",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manta",
      addressRegion: "Manabí",
      addressCountry: "EC",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Universidad Laica Eloy Alfaro de Manabí",
  },
};
```

## Internacionalización

Estrategia recomendada:

- Rutas por locale: `/es` y `/en`.
- Español como idioma principal por contexto institucional.
- Inglés como idioma internacional académico.
- No mezclar idiomas dentro de una misma página.
- Mantener equivalencia de navegación y CTAs en ambos idiomas.
- Usar `hreflang`.

Estructura mínima:

```ts
export type Locale = "es" | "en";

export const locales = ["es", "en"] as const;
export const defaultLocale: Locale = "es";
```

## Supabase en fase 1

En la fase inicial se permite crear la carpeta `src/lib/supabase`, pero no se debe obligar a usar Supabase para renderizar la landing.

Variables preparadas:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Uso futuro:

- Inscripciones.
- Participantes.
- Certificados digitales.
- Administración de contenido.
- Validación de QR.
- Formularios de contacto.
- Newsletter.
- Gestión de roles.

## Criterios de aceptación de la primera entrega

- Landing responsive y bilingüe.
- Lighthouse recomendado: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.
- App Router y TypeScript sin errores.
- Contenido cargado desde `src/content`.
- Navegación clara.
- Call for Papers visible desde el hero.
- Tracks y revistas aliadas visibles en home.
- Programa preliminar visible.
- Sede y modalidad híbrida visibles.
- Sitemap y metadata configurados.
- Código sin `any` innecesario.
- Sin dependencias innecesarias.
- Preparado para despliegue en AWS Lightsail o Vercel.

## Buenas prácticas para agentes de IA

Cuando un agente modifique este proyecto debe:

- Leer primero `AGENTS.md`, `STYLES.md` y `PLANIFICACION.md`.
- No inventar fechas, autoridades, chairs, revistas ni tarifas.
- Mantener el contenido institucional con tono formal.
- Conservar la estructura bilingüe.
- Crear componentes tipados.
- Usar Server Components por defecto.
- No introducir bases de datos sin necesidad.
- No introducir paquetes pesados para tareas simples.
- Mantener accesibilidad y SEO.
- Ejecutar validaciones antes de entregar.

## Comandos iniciales sugeridos

```bash
pnpm create next-app@latest iclset-2026 --yes --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd iclset-2026

pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card badge separator tabs accordion sheet dropdown-menu

pnpm add motion lucide-react next-intl zod
pnpm add @supabase/supabase-js @supabase/ssr
pnpm add -D prettier prettier-plugin-tailwindcss
```

## Referencias técnicas base

- Next.js App Router: https://nextjs.org/docs/app
- Next.js 16: https://nextjs.org/blog/next-16
- Next.js 16.2: https://nextjs.org/blog/next-16-2
- Tailwind CSS v4: https://tailwindcss.com/blog/tailwindcss-v4
- shadcn/ui Next.js: https://ui.shadcn.com/docs/installation/next
- shadcn/ui Tailwind v4: https://ui.shadcn.com/docs/tailwind-v4
- Motion for React: https://motion.dev/docs/react
- Supabase Next.js: https://supabase.com/docs/guides/auth/quickstarts/nextjs
- Supabase SSR: https://supabase.com/docs/guides/auth/server-side/nextjs
- Microsoft CMT: https://cmt3.research.microsoft.com/About

## Estado del repositorio · 2026-05-11

- La primera versión local de la landing ya está implementada con Next.js 16, React 19, Tailwind CSS v4, shadcn/ui y TypeScript estricto.
- Las rutas `/es` y `/en`, junto con las páginas internas iniciales, están disponibles.
- La documentación principal vive en `README.md` y los datos editables en `src/content`.
- Los agentes deben seguir evitando `any`, fechas inventadas, chairs inventados, enlaces no confirmados, bases de datos obligatorias y funcionalidades de fase 2 antes de aprobación.

## Estado de despliegue AWS ECS Fargate - 2026-05-11

- Sitio publicado en `https://iclset.com`.
- GitHub Actions despliega con OIDC hacia AWS, sin access keys permanentes.
- Workflow: `Deploy to Amazon ECS`.
- AWS region: `us-east-1`.
- ECR repository: `iclset`.
- ECS cluster: `iclset-production`.
- ECS service: `iclset-web`.
- ALB: `iclset-web-alb`.
- Target group: `iclset-web-tg`.
- Health check: `/healthz`.
- Route 53 gestiona alias para `iclset.com` y `www.iclset.com`.
- El contacto provisional del sitio es `israel.gomez@uleam.edu.ec`.
- Procedimientos reutilizables documentados en `SKILLS.md` y `skills/`.
