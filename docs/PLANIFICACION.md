# PLANIFICACION.md

## Objetivo general

Mantener el sitio oficial de ICLSET 2026 con enfoque académico, bilingüe, moderno y escalable.  
El sitio publica la convocatoria, tracks, fechas clave, programa académico, proceso editorial, revistas aliadas, comités, sede y canales institucionales con base en la documentación oficial del proyecto.

## Alcance del sitio oficial

Incluye:

- Home principal bilingüe.
- Páginas internas básicas.
- Call for Papers.
- Tracks.
- Programa académico.
- Revistas aliadas.
- Valores de inscripción.
- Proceso editorial.
- Comité y organización.
- Sede y modalidad híbrida.
- Preguntas frecuentes.
- SEO, Open Graph y JSON-LD.
- Preparación para despliegue.
- Preparación técnica no bloqueante para integraciones posteriores.

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

Convertir la documentación institucional en una estructura clara de contenido publico.

### Actividades

- Revisar proyecto ICLSET 2026.
- Revisar presentación ejecutiva.
- Revisar presupuesto del sitio y componentes operativos.
- Extraer datos oficiales.
- Separar información pública de información operativa.
- Revisar sitios de referencia internacionales y regionales.
- Revisar repositorios científicos y plataformas de indexación.

### Entregables

- `AGENTS.md`
- `STYLES.md`
- `PLANIFICACION.md`
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

- Coherencia visual en todo el sitio.
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

## Hito 4 · Home principal

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

Dejar el sitio listo para publicación institucional y difusión.

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

Conectar servicios sin convertir el sitio publico en un sistema operativo pesado.

### Integraciones publicas

- Links a CMT.
- Links de descarga de plantillas.
- Links a revistas aliadas.
- Mailto o formulario simple.
- Google Analytics o Plausible, si se aprueba.
- Pixel de redes solo si la institución lo solicita.

### Integraciones operativas posteriores

- Supabase Auth.
- Supabase DB.
- Supabase Storage.
- Certificados digitales.
- Validación por QR.
- Administración de inscripciones.
- Formularios dinámicos.

### Criterios de aceptación

- No se bloquea el lanzamiento por integraciones no críticas.
- Los enlaces importantes están listos o excluidos hasta aprobación institucional.
- Las variables de entorno están documentadas.

## Hito 8 · Despliegue

### Objetivo

Publicar el sitio en un entorno estable.

### Plataforma seleccionada

- AWS ECS Fargate para ejecucion del contenedor Next.js.
- Amazon ECR para imagenes Docker.
- Application Load Balancer para trafico publico.
- ACM para TLS.
- Route 53 para dominio y alias DNS.
- GitHub Actions con OIDC para despliegue continuo.

### Actividades

- Configurar dominio.
- Configurar SSL.
- Configurar variables de entorno.
- Configurar build.
- Configurar redirects.
- Configurar headers básicos.
- Configurar monitoreo simple.
- Publicar y validar el sitio oficial.

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

- Sitio aprobado.
- Lista de cambios aplicados.
- Manual corto para actualización de contenido.

## Hito 10 · Evolución operativa

### Objetivo

Evolucionar de sitio publico a operacion digital.

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

Mitigación: publicar solo datos aprobados y centralizados en `src/content`.

### Riesgo: exceso de alcance

Mitigación: mantener el alcance publico y no construir dashboard ni pagos sin aprobación institucional.

### Riesgo: retraso por diseño institucional

Mitigación: usar sistema visual modular y ajustar logo/colores oficiales cuando estén aprobados.

### Riesgo: dependencia de CMT

Mitigación: usar CTA configurable y publicar únicamente enlaces aprobados.

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

## Estado de implementación inicial · 2026-05-11

### Completado

- Proyecto Next.js 16 creado en `C:\Proyectos\iclset`.
- App Router configurado con rutas bilingües `/es` y `/en`.
- Landing principal implementada con hero, métricas, tracks, Call for Papers, fechas clave, programa preliminar, proceso editorial, revistas, sede, comités, FAQ, CTA final y footer.
- Páginas internas implementadas para Call for Papers, programa, tracks, publicaciones, sede, comités y contacto.
- Contenido sensible centralizado en `src/content`.
- Tipos base creados en `src/types`.
- Supabase preparado en `src/lib/supabase`, sin dependencia de base de datos para el sitio público.
- SEO inicial configurado con metadata por ruta, `sitemap.ts`, `robots.ts` y JSON-LD de evento en home.
- README completo creado con información del proyecto, estructura, contenido y comandos.

### Decisiones aplicadas

- Se mantiene una versión visual clara, neutral y moderna, sin fondos oscuros dominantes.
- Los datos no aprobados se excluyen del contenido público hasta su validación.
- No se implementan registro, pagos, dashboard, certificados ni base de datos productiva.
- Se usa `pnpm` y TypeScript estricto.

### Pendiente institucional

- Enlace final de Microsoft CMT configurado: `https://cmt3.research.microsoft.com/ICLSET2026/`.
- Enlaces de plantillas para autores.
- Chairs y miembros de comité.
- Tarifas de inscripción.
- URLs oficiales de revistas aliadas e indexaciones validadas.
- Redes institucionales e imágenes oficiales.

## Estado de despliegue AWS ECS Fargate - 2026-05-11

### Completado

- Dominio `https://iclset.com` publicado.
- Dominio institucional adicional `https://iclset.uleam.ec` publicado.
- AWS region `us-east-1`.
- ECR repository `iclset` creado.
- ECS cluster `iclset-production` creado.
- ECS service `iclset-web` activo con una tarea Fargate.
- ALB `iclset-web-alb` creado con target group `iclset-web-tg`.
- Health check `/healthz` validado.
- Certificado ACM emitido para `iclset.com` y `www.iclset.com`.
- Certificado ACM adicional emitido para `iclset.uleam.ec` y asociado al listener HTTPS del ALB.
- Route 53 alias configurado para apex y `www`.
- GitHub Actions con OIDC configurado para build, push a ECR y deploy a ECS.
- Workflow `Deploy to Amazon ECS` validado correctamente.
- Contacto provisional actualizado a `israel.gomez@uleam.edu.ec`.

### Validaciones de publicacion

- `https://iclset.com/healthz` responde `200`.
- `https://iclset.com/es` responde `200`.
- `https://iclset.com/en` responde `200`.
- `https://iclset.com/sitemap.xml` responde `200`.
- `https://iclset.uleam.ec/healthz` responde `200`.
- `https://iclset.uleam.ec/es` responde `200`.
- `https://iclset.uleam.ec/en` responde `200`.
- HTTP redirige a HTTPS con `301`.

## Actualización documental y visual - 2026-05-13

### Completado

- Tracks actualizados desde `docs/v4-Proyecto_ICLSET_2026-signed.pdf` y `docs/Presentacion_Ejecutiva_ICLSET_2026.pptx`.
- Ejes temáticos completos publicados para Ciencias Biológicas y Ambientales, Agrociencias y Tecnologías de la Información.
- Chairs y comités actualizados: General Chair, Program Chair, Track Chairs, Publication Chair, Local Organizing Chair, Communication Chair, Comité Honorífico, Comité Organizador, Comité Científico Nacional e Internacional.
- Cronograma oficial incorporado: aprobación, configuración CMT, Call for Papers, recepción en CMT, revisión doble ciego, notificación, versiones finales, inscripciones, ejecución y seguimiento editorial.
- Programa académico actualizado por día con actividades, horarios, modalidad, sede y salas Zoom.
- Revistas aliadas actualizadas con URLs oficiales e indexación Latindex y Dialnet.
- Hero renovado con icono del evento y animación Motion inspirada en biociencia, agrociencia y tecnología.
- Imágenes SVG creadas para los tres días del programa y el icono oficial del evento.
- Copy publico actualizado para eliminar referencias a versiones, progreso tecnico y estructura futura.

## Actualización CMT - 2026-05-14

### Completado

- Requisitos oficiales de Microsoft CMT incorporados en la página Call for Papers: author guidelines, submission guidelines, where to submit y how to submit.
- Enlace público de envío configurado hacia el sitio oficial de ICLSET 2026 en Microsoft CMT.
- Se explicita que no se reciben trabajos por correo electrónico ni por plataformas distintas a Microsoft CMT.
- Acknowledgement obligatorio de CMT publicado como texto plano estático y verificable en `/en/cmt-acknowledgment.html`.
- La ruta de acknowledgement debe responder con `Content-Type: text/html; charset=UTF-8`; no usar `charset=utf8mb4` porque CMT lo reporta como charset inválido.

## Actualización de valores de inscripción - 2026-05-17

### Completado

- Valores de inscripción centralizados en `src/content/registration-fees.ts`.
- Nueva sección pública en home con estudiantes USD 15, personal ULEAM USD 25, participantes externos USD 35 y autores de papers o pósters USD 25.
- Acceso directo desde el hero hacia la sección de valores.
- FAQ de costo de inscripción conectada al contenido tipado para evitar duplicación manual.

## Actualización editorial - 2026-07-20

### Completado

- Retirado el bloque editorial diferenciado por track de las versiones en español e inglés.
- Eliminados los requisitos y la tarifa de publicación asociados exclusivamente a ese bloque.
- Publicaciones, Call for Papers, lineamientos CMT, FAQ y metadatos conservan únicamente información editorial general y confirmada.

## Actualización UI programa y sede - 2026-05-21

### Completado

- Programa académico de home rediseñado como tres cards visibles, con imagen primero, resumen corto y agenda por día.
- Agendas del programa colapsadas por defecto en móvil y abiertas en tablet/desktop para lectura comparativa.
- Fechas redundantes retiradas del cuerpo de las cards; las fechas completas se mantienen sobre las imágenes y en el calendario.
- Bloque de fechas operativas reemplazado por CTA para agregar ICLSET 2026 a Google Calendar o descargar archivo `.ics` para otros calendarios.
- Recordatorio de calendario configurado para un día antes del inicio del evento.
- Sección de sede ajustada con video de fondo solo en tablet/desktop, overlay de contraste y fallback móvil sin video.
- Verificación bilingüe y responsive definida como paso obligatorio antes del commit de estos cambios.

## Actualizacion convocatoria, ponencias virtuales y tarifas - 2026-06-15

### Completado

- Cierre de recepcion de envios actualizado del 14 de junio al 28 de junio de 2026; la fecha anterior queda visible con tachado en Call for Papers.
- Nueva card de participacion de ponencias virtuales en la seccion Call for Papers, con enlace hacia `#abstract-template` para orientar al usuario a la plantilla de resumenes.
- Nueva tarifa `Docentes FACIVITEC` por USD 15 para docentes de la Facultad de Ciencias de la Vida y Tecnologias.
- Textos de tarifas ajustados para incluir docentes FACIVITEC y mantener equivalencia bilingue.
- Cards destacadas de ponencias virtuales y docentes FACIVITEC con contorno luminoso animado mediante CSS, sin introducir cards internas.
- Titulo y descripcion de la card de tarifas reducidos para mejorar lectura y evitar saturacion visual.
- Validacion visual realizada en navegador local sobre `/es`, incluyendo comprobacion de consola, enlace hacia la plantilla de resumenes y contorno animado en ambas cards.

## Actualización jornada inaugural track TI - 2026-07-08

### Completado

- Agenda del Día 1 actualizada con el cronograma oficial de la jornada inaugural del track de Tecnologías de la Información.
- La home y `/program` mantienen la agenda resumida por bloques, sin biografías dentro del acordeón del día.
- Nueva página bilingüe `/es/program/day-1-it-track` y `/en/program/day-1-it-track` con línea de tiempo, detalle protocolar, conferencias, mesa redonda, panelistas, biografías y ponentes.
- Fotografías de los ponentes extraídas del documento fuente y publicadas en `public/speakers/day-1-ti`.
- Sitemap actualizado para incluir la nueva ruta bilingüe.
- Validación realizada sobre contenido en español e inglés, tildes, consola del navegador, mobile snapshot, `pnpm lint`, `pnpm typecheck` y `pnpm build`.

## Actualización programa general y páginas por día - 2026-07-14

### Completado

- Programa académico conciliado con `Programa_General_ICLSET_2026_2.docx` y con las fichas de ponentes recibidas para Bio/Ambiente y Agrociencias.
- Agenda resumida de home y `/program` actualizada con los bloques oficiales del Día 1, Día 2 y Día 3.
- Presentaciones de pósters incorporadas en las tres jornadas.
- Día 1 ampliado con la jornada inaugural del track TI y las salas paralelas de Agroindustria, Agronegocios y Agropecuaria.
- Día 2 ampliado con las sesiones de Ciencias Biológicas y Ambientales, Tecnologías de la Información y Agrociencias.
- Día 3 actualizado con Casa Abierta FACIVITEC y presentación de pósters en Plaza Centenario desde las 09:00.
- Páginas bilingües detalladas disponibles en `/program/day-1-it-track`, `/program/day-2-tracks` y `/program/day-3-open-house` para los locales `es` y `en`.
- Fotografías confirmadas incorporadas para Issam Touhami, Manuel Peralvo, Gerardo Pámanes-Carrasco, Sahian Macías Zambrano y David Segovia Araujo.
- La fotografía identificada como Carlomagno Aguilera Solórzano no se asocia a Carlo Magno Delgado por tratarse de nombres distintos; su actividad usa placeholder.
- Biografías, resúmenes y palabras clave de Issam Touhami y Manuel Peralvo incorporados en español e inglés.
- Sitemap actualizado con las tres rutas detalladas.
