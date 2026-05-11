# PLANIFICACION.md

## Objetivo general

Desarrollar la primera landing page oficial de ICLSET 2026 con enfoque informativo, académico, bilingüe, moderno y escalable.  
La fase inicial debe permitir publicar la convocatoria, presentar los tracks, comunicar fechas clave, mostrar programa preliminar, explicar el proceso editorial, visibilizar revistas aliadas y preparar la base técnica para una futura plataforma con Supabase.

## Alcance de la primera versión

Incluye:

- Landing principal bilingüe.
- Páginas internas básicas.
- Call for Papers.
- Tracks.
- Programa preliminar.
- Revistas aliadas.
- Proceso editorial.
- Comité y organización.
- Sede y modalidad híbrida.
- Preguntas frecuentes.
- SEO, Open Graph y JSON-LD.
- Preparación para despliegue.
- Preparación técnica para Supabase en fase 2.

No incluye:

- Registro de usuarios.
- Pagos en línea.
- Dashboard administrativo.
- Gestión editorial interna.
- Certificados digitales automatizados.
- Base de datos productiva.
- Integración obligatoria con pasarela de pagos.

## Hito 0 · Revisión documental y referencias

### Objetivo

Convertir la documentación institucional en una arquitectura clara de sitio.

### Actividades

- Revisar proyecto ICLSET 2026.
- Revisar presentación ejecutiva.
- Revisar presupuesto de landing/plataforma.
- Extraer datos oficiales.
- Separar información pública de información operativa.
- Revisar sitios de referencia internacionales y regionales.
- Revisar repositorios científicos y plataformas de indexación.

### Entregables

- `AGENTS.md`
- `STYLES.md`
- `PLANIFICACION.md`
- `PROMPT_INICIAL.md`
- `REFERENCIAS.md`

### Criterios de aceptación

- Las fuentes oficiales del proyecto quedan reflejadas.
- Se identifican referencias visuales y funcionales.
- Se define el stack técnico.
- Se define estructura de contenido bilingüe.

## Hito 1 · Setup del proyecto

### Objetivo

Crear la base técnica del sitio con Next.js 16, TypeScript y Tailwind v4.

### Actividades

- Crear proyecto con `create-next-app`.
- Configurar TypeScript estricto.
- Configurar Tailwind v4.
- Configurar shadcn/ui.
- Configurar Prettier.
- Crear estructura `src`.
- Crear layout base.
- Crear rutas por idioma.
- Crear metadata base.
- Crear estructura de contenido tipado.

### Comandos sugeridos

```bash
pnpm create next-app@latest iclset-2026 --yes --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd iclset-2026
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card badge separator tabs accordion sheet dropdown-menu
pnpm add motion lucide-react next-intl zod
pnpm add @supabase/supabase-js @supabase/ssr
pnpm add -D prettier prettier-plugin-tailwindcss
```

### Entregables

- Proyecto inicial compilando.
- `src/app/[locale]/page.tsx`.
- `src/app/globals.css`.
- `src/content`.
- `src/components`.
- `src/lib`.
- `src/types`.

### Criterios de aceptación

- `pnpm dev` corre sin errores.
- App Router activo.
- TypeScript activo.
- Tailwind v4 funcionando.
- shadcn/ui funcionando.
- Idiomas `/es` y `/en` funcionando.

## Hito 2 · Sistema de diseño

### Objetivo

Implementar los tokens visuales y componentes base.

### Actividades

- Definir colores en OKLCH.
- Definir tipografía.
- Definir radios, sombras y espaciados.
- Crear variantes de botones.
- Crear cards.
- Crear badges.
- Crear layout container.
- Crear componentes de sección.
- Definir patrones de animación.

### Entregables

- `globals.css` con tokens.
- Componentes base reutilizables.
- Variantes de UI.
- Layout general.

### Criterios de aceptación

- Coherencia visual en toda la landing.
- Responsive mobile-first.
- Contraste AA.
- Animaciones discretas y controladas.
- No hay CSS duplicado innecesario.

## Hito 3 · Contenido institucional tipado

### Objetivo

Centralizar todo el contenido oficial en módulos TypeScript.

### Archivos sugeridos

```txt
src/content/conference.ts
src/content/tracks.ts
src/content/schedule.ts
src/content/important-dates.ts
src/content/journals.ts
src/content/committees.ts
src/content/faqs.ts
src/content/navigation.ts
```

### Actividades

- Crear objetos bilingües.
- Tipar tracks.
- Tipar revistas.
- Tipar cronograma.
- Tipar FAQ.
- Tipar navegación.
- Preparar `Locale`.
- Revisar copy español/inglés.

### Criterios de aceptación

- No hay texto importante hardcodeado en componentes.
- Español e inglés tienen contenido equivalente.
- Se puede actualizar una fecha desde un solo archivo.

## Hito 4 · Landing principal

### Objetivo

Construir la home pública de alto impacto.

### Secciones

1. Header.
2. Hero.
3. Stats.
4. Tracks.
5. Call for Papers.
6. Fechas importantes.
7. Programa preliminar.
8. Proceso editorial.
9. Revistas aliadas.
10. Sede.
11. Aliados/colaboradores.
12. FAQ.
13. CTA final.
14. Footer.

### Criterios de aceptación

- El usuario entiende qué es ICLSET en menos de 10 segundos.
- El Call for Papers es visible sin esfuerzo.
- Los tres tracks se identifican claramente.
- Las fechas del evento son visibles.
- El sitio transmite confianza académica.
- Mobile funciona correctamente.

## Hito 5 · Páginas internas

### Objetivo

Separar información densa en páginas consultables.

### Páginas

- `/[locale]/call-for-papers`
- `/[locale]/program`
- `/[locale]/tracks`
- `/[locale]/publications`
- `/[locale]/venue`
- `/[locale]/committees`
- `/[locale]/contact`

### Criterios de aceptación

- Cada página tiene metadata propia.
- Cada página tiene navegación de retorno.
- La información está organizada para lectura académica.
- No se saturan las secciones de home.

## Hito 6 · SEO, accesibilidad y performance

### Objetivo

Dejar la landing lista para publicación institucional y difusión.

### Actividades

- Configurar `metadata`.
- Configurar Open Graph.
- Configurar Twitter cards.
- Configurar JSON-LD `Event`.
- Crear `sitemap.ts`.
- Crear `robots.ts`.
- Agregar `hreflang`.
- Revisar headings.
- Revisar contraste.
- Optimizar imágenes.
- Probar Lighthouse.
- Revisar Core Web Vitals.

### Criterios de aceptación

- Performance 90+.
- Accessibility 95+.
- Best Practices 95+.
- SEO 95+.
- HTML semántico.
- No errores críticos de consola.

## Hito 7 · Integraciones ligeras

### Objetivo

Conectar servicios sin convertir la landing en una plataforma pesada.

### Integraciones fase 1

- Links a CMT.
- Links de descarga de plantillas.
- Links a revistas aliadas.
- Mailto o formulario simple.
- Google Analytics o Plausible, si se aprueba.
- Pixel de redes solo si la institución lo solicita.

### Preparación fase 2

- Supabase Auth.
- Supabase DB.
- Supabase Storage.
- Certificados digitales.
- Validación por QR.
- Administración de inscripciones.
- Formularios dinámicos.

### Criterios de aceptación

- No se bloquea el lanzamiento por integraciones no críticas.
- Los enlaces importantes están listos o marcados como pendientes.
- Las variables de entorno están documentadas.

## Hito 8 · Despliegue

### Objetivo

Publicar la landing en un entorno estable.

### Opciones

- AWS Lightsail para línea presupuestaria institucional.
- Vercel para máxima compatibilidad con Next.js.
- AWS Amplify si se requiere ecosistema AWS administrado.

### Actividades

- Configurar dominio.
- Configurar SSL.
- Configurar variables de entorno.
- Configurar build.
- Configurar redirects.
- Configurar headers básicos.
- Configurar monitoreo simple.
- Publicar versión inicial.

### Criterios de aceptación

- Sitio público con HTTPS.
- Dominio funcionando.
- `/es` y `/en` accesibles.
- Sitemap público.
- Open Graph correcto.
- Sin errores 404 en navegación principal.

## Hito 9 · QA y aprobación institucional

### Objetivo

Validar contenido, diseño y operación antes de difusión masiva.

### Checklist

- Fechas correctas.
- Nombres correctos.
- Chairs correctos.
- Tracks correctos.
- Tarifas correctas.
- Revistas aliadas correctas.
- Modalidad clara.
- Call for Papers claro.
- CMT visible.
- Plantillas descargables.
- Contacto institucional correcto.
- Español revisado.
- Inglés revisado.
- Mobile revisado.
- Accesibilidad revisada.

### Entregables

- Landing aprobada.
- Lista de cambios aplicados.
- Manual corto para actualización de contenido.

## Hito 10 · Fase 2 futura

### Objetivo

Evolucionar de landing a plataforma.

### Módulos posibles

- Registro de participantes.
- Inscripciones por tipo.
- Carga de comprobantes.
- Integración de pagos institucionales.
- Administración de participantes.
- Generación de certificados digitales.
- Validación de certificados por QR.
- Newsletter.
- Panel de contenidos.
- Dashboard de métricas.
- Integración más profunda con CMT o enlaces por track.
- Archivo de memorias y galería.

### Base de datos preliminar

Tablas futuras:

- `participants`
- `registrations`
- `payments`
- `certificates`
- `tracks`
- `submissions_metadata`
- `news`
- `faqs`
- `contacts`

## Riesgos y mitigación

### Riesgo: contenido institucional incompleto

Mitigación: usar placeholders marcados como “por confirmar” y centralizados en `src/content`.

### Riesgo: exceso de alcance

Mitigación: fase 1 informativa; no construir dashboard ni pagos.

### Riesgo: retraso por diseño institucional

Mitigación: usar sistema visual modular y ajustar logo/colores oficiales cuando estén aprobados.

### Riesgo: dependencia de CMT

Mitigación: usar CTA configurable. Si el enlace no está listo, mostrar “próximamente”.

### Riesgo: rendimiento bajo por animaciones

Mitigación: Motion solo donde aporte valor, imágenes optimizadas y Server Components por defecto.

## Roadmap sugerido de trabajo

### Semana 1

- Setup.
- Sistema de diseño.
- Contenido base.
- Hero y estructura home.

### Semana 2

- Tracks.
- Call for Papers.
- Programa.
- Revistas.
- Sede.
- Bilingüe.

### Semana 3

- Páginas internas.
- SEO.
- Accesibilidad.
- QA.
- Deploy inicial.

### Semana 4

- Ajustes institucionales.
- Integración de links finales.
- Revisión de copy.
- Publicación oficial.

## Estado de implementaciÃ³n inicial Â· 2026-05-11

### Completado

- Proyecto Next.js 16 creado en `C:\Proyectos\iclset`.
- App Router configurado con rutas bilingÃ¼es `/es` y `/en`.
- Landing principal implementada con hero, mÃ©tricas, tracks, Call for Papers, fechas clave, programa preliminar, proceso editorial, revistas, sede, comitÃ©s, FAQ, CTA final y footer.
- PÃ¡ginas internas implementadas para Call for Papers, programa, tracks, publicaciones, sede, comitÃ©s y contacto.
- Contenido sensible centralizado en `src/content`.
- Tipos base creados en `src/types`.
- Supabase preparado en `src/lib/supabase`, sin dependencia de base de datos en fase 1.
- SEO inicial configurado con metadata por ruta, `sitemap.ts`, `robots.ts` y JSON-LD de evento en home.
- README completo creado con informaciÃ³n del proyecto, estructura, contenido y comandos.

### Decisiones aplicadas

- Se mantiene una versiÃ³n visual clara, neutral y moderna, sin fondos oscuros dominantes.
- Los datos no aprobados se muestran como "Por confirmar" o "To be confirmed".
- No se implementan registro, pagos, dashboard, certificados ni base de datos productiva.
- Se usa `pnpm` y TypeScript estricto.

### Pendiente institucional

- Enlace final de Microsoft CMT.
- Enlaces de plantillas para autores.
- Chairs y miembros de comitÃ©.
- Tarifas de inscripciÃ³n.
- URLs oficiales de revistas aliadas e indexaciones validadas.
- Redes institucionales y dominio pÃºblico final.
