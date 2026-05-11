# PROMPT_INICIAL.md

## Prompt básico para iniciar el desarrollo en una IA de código

Actúa como un desarrollador senior full stack especializado en Next.js 16, TypeScript, Tailwind CSS v4, diseño de landing pages académicas y arquitectura escalable para plataformas de congresos científicos.

Vamos a construir la primera landing page oficial de ICLSET 2026, International Conference on Life Sciences and Emerging Technologies, organizada por la Universidad Laica Eloy Alfaro de Manabí y su Facultad de Ciencias de la Vida y Tecnologías.

El sitio debe ser moderno, institucional, bilingüe en español e inglés, rápido, accesible y preparado para evolucionar en una segunda fase hacia una plataforma con Supabase. La primera fase es solamente informativa, sin registro de usuarios, sin pagos en línea y sin base de datos productiva obligatoria.

Usa este stack:

- Next.js 16 compatible con App Router.
- TypeScript estricto.
- Tailwind CSS v4 con CSS-first configuration.
- shadcn/ui para componentes base.
- Motion for React para animaciones suaves.
- lucide-react para iconos.
- Supabase preparado, pero no obligatorio en la fase inicial.
- SEO completo con metadata, Open Graph, sitemap, robots y JSON-LD de tipo Event.
- Rutas bilingües con `/es` y `/en`.

Antes de escribir código, revisa y respeta estos archivos:

- `AGENTS.md`
- `STYLES.md`
- `PLANIFICACION.md`
- `REFERENCIAS.md`

Crea la estructura inicial del proyecto con:

- `src/app/[locale]/page.tsx`
- `src/app/[locale]/layout.tsx`
- `src/app/globals.css`
- `src/components/layout`
- `src/components/sections`
- `src/content`
- `src/lib`
- `src/types`

La landing principal debe incluir:

1. Header con navegación y selector de idioma.
2. Hero con nombre del congreso, fechas, sede, modalidad y CTAs.
3. Métricas principales.
4. Tracks temáticos.
5. Call for Papers.
6. Fechas importantes.
7. Programa preliminar.
8. Proceso editorial.
9. Revistas aliadas.
10. Sede y modalidad híbrida.
11. FAQ.
12. CTA final.
13. Footer institucional.

Datos base:

- Nombre: ICLSET 2026.
- Nombre completo: International Conference on Life Sciences and Emerging Technologies.
- Fechas: 15, 16 y 17 de julio de 2026.
- Lugar: Manta, Manabí, Ecuador.
- Sede: Universidad Laica Eloy Alfaro de Manabí.
- Modalidad: híbrida, presencial y virtual sincrónica.
- Lema: Biociencia, Agrociencia y Tecnología: investigación que transforma territorios.
- Tracks:
  - Ciencias Biológicas y Ambientales.
  - Agrociencias.
  - Tecnologías de la Información.
- Proceso: revisión por pares doble ciego, libro de actas y canalización a revistas aliadas.
- Plataforma editorial: Microsoft CMT.
- Revistas aliadas:
  - Encriptar.
  - YAKU.
  - ALLPA.
  - Revista Científica Conectividad.
  - Ecuadorian Science Journal.

Estilo visual:

- Fondo hero oscuro premium con gradientes en azul, cyan, emerald y lime.
- Cards limpias con bordes sutiles.
- Tipografía moderna tipo Geist o Inter.
- Diseño académico internacional, no plantilla genérica.
- Animaciones sutiles.
- Mobile-first.
- Accesibilidad AA.

Reglas importantes:

- Usa Server Components por defecto.
- Usa Client Components solo para interacción real.
- No inventes fechas ni datos institucionales.
- Centraliza contenido en `src/content`.
- Mantén tipos estrictos.
- No uses `any` sin justificación.
- No agregues dependencias innecesarias.
- No construyas dashboard ni pagos en fase 1.
- El sitio debe compilar sin errores.
- Termina cada paso con una lista breve de archivos creados y próximos pasos técnicos.

Empieza creando la estructura del proyecto, los tokens de diseño en `globals.css`, los tipos base y los archivos de contenido iniciales.

## Resultado inicial aplicado · 2026-05-11

Se creó la primera versión local del sitio con Next.js 16, rutas bilingües, contenido tipado en `src/content`, secciones modulares, páginas internas, SEO base, sitemap, robots, JSON-LD y preparación para Supabase fase 2.

La implementación usa una variante visual clara y moderna, sin fondos oscuros dominantes, manteniendo acentos científicos en azul, cyan, emerald y lime.
