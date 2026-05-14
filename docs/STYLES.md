# STYLES.md

## Dirección visual

El sitio oficial de ICLSET 2026 debe combinar tres mundos:

1. **Rigor académico internacional**
   Inspiración: ICLR, NeurIPS, CVPR, CLEI y CITIS.
2. **Ciencia aplicada al territorio**
   Costa, biodiversidad, agroindustria, sostenibilidad y transferencia de conocimiento.
3. **Tecnología emergente**
   IA, datos, software, IoT, transformación digital y sistemas inteligentes.

El resultado debe sentirse como una conferencia científica moderna, no como una web institucional pesada.  
Debe ser sobria, elegante, clara, rápida y visualmente memorable.

## Concepto de marca digital

Nombre conceptual recomendado:

**Territories of Knowledge**

Idea visual:

- Capas topográficas del territorio costero.
- Redes de nodos científicos.
- Gradientes inspirados en océano, vegetación, biotecnología y circuitos.
- Elementos sutiles de mapa, biomorfismo, ondas, datos y retículas.
- Fondo oscuro premium con bloques claros para lectura académica.

## Paleta cromática

### Colores principales

```css
:root {
  --iclset-navy: oklch(21% 0.055 250);
  --iclset-blue: oklch(54% 0.18 245);
  --iclset-cyan: oklch(77% 0.14 210);
  --iclset-emerald: oklch(70% 0.16 155);
  --iclset-lime: oklch(82% 0.17 128);
  --iclset-sand: oklch(90% 0.045 82);
  --iclset-ink: oklch(17% 0.035 250);
  --iclset-muted: oklch(64% 0.035 250);
  --iclset-surface: oklch(98% 0.01 250);
  --iclset-card: oklch(100% 0 0);
}
```

### Uso recomendado

- Navy: fondos principales, header, footer, hero dark.
- Blue: tecnología, enlaces, CTAs principales.
- Cyan: acentos científicos, detalles de datos y hover.
- Emerald: ciencias biológicas, biodiversidad, ambiente.
- Lime: agrociencias, sostenibilidad, agricultura.
- Sand: fondos cálidos, bloques de sede y territorio.
- Ink: textos principales.
- Muted: textos secundarios.
- Surface/Card: secciones claras y cards.

## Paleta por track

### Track 1 · Ciencias Biológicas y Ambientales

```css
--track-bio: oklch(68% 0.16 155);
--track-bio-soft: oklch(94% 0.04 155);
```

Uso:

- Cards del track.
- Iconos de biodiversidad.
- Tags de temas como ecosistemas, biotecnología, cambio climático.

### Track 2 · Agrociencias

```css
--track-agro: oklch(78% 0.17 115);
--track-agro-soft: oklch(95% 0.045 115);
```

Uso:

- Cards del track.
- Iconos de producción, agroindustria y economía circular.
- Etiquetas de sostenibilidad, inocuidad y modelos de agronegocio.

### Track 3 · Tecnologías de la Información

```css
--track-tech: oklch(62% 0.19 250);
--track-tech-soft: oklch(94% 0.04 250);
```

Uso:

- Cards del track.
- Iconos de IA, software, ciberseguridad, IoT y datos.
- Elementos interactivos y navegación.

## Tailwind CSS v4

Usar configuración CSS-first en `src/app/globals.css`.

```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;

  --color-iclset-navy: oklch(21% 0.055 250);
  --color-iclset-blue: oklch(54% 0.18 245);
  --color-iclset-cyan: oklch(77% 0.14 210);
  --color-iclset-emerald: oklch(70% 0.16 155);
  --color-iclset-lime: oklch(82% 0.17 128);
  --color-iclset-sand: oklch(90% 0.045 82);
  --color-iclset-ink: oklch(17% 0.035 250);
  --color-iclset-muted: oklch(64% 0.035 250);

  --radius-card: 1.5rem;
  --radius-section: 2rem;

  --shadow-soft: 0 24px 80px rgb(15 23 42 / 0.12);
  --shadow-glow: 0 0 80px rgb(34 211 238 / 0.18);

  --ease-iclset: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Tipografía

### Recomendación

- Fuente principal: Geist Sans o Inter.
- Fuente mono: Geist Mono.
- No usar más de dos familias.

### Escala tipográfica

```txt
Hero headline:
  mobile: 48px / 0.95
  tablet: 72px / 0.95
  desktop: 96px / 0.9

H1 interno:
  48px a 72px

H2:
  36px a 56px

H3:
  24px a 32px

Body:
  16px a 18px

Small:
  14px

Caption:
  12px
```

### Estilo de titulares

- Fuertes, de pocas palabras.
- Evitar párrafos largos en hero.
- Usar mezcla de español académico con copy directo.
- Ejemplo:
  - “Investigación que transforma territorios”
  - “Tres tracks, una visión científica”
  - “Publicación académica con trazabilidad editorial”
  - “Manta conecta ciencia, agro y tecnología”

## Layout

### Contenedor

```txt
max-width: 1200px o 1280px
padding mobile: 24px
padding desktop: 32px a 48px
```

### Grid

- Hero: 12 columnas desktop, 1 columna mobile.
- Tracks: 3 columnas desktop, 1 columna mobile.
- Fechas importantes: timeline vertical en mobile, horizontal o grid en desktop.
- Programa: tabs por día.
- Revistas aliadas: grid de cards.
- Comité: cards compactas.
- FAQ: acordeón.

## Secciones del sitio

### 1. Header

Estilo:

- Transparente sobre hero, sólido al hacer scroll.
- Logo/sigla a la izquierda.
- Navegación al centro o derecha.
- Selector de idioma visible.
- CTA destacado: “Call for Papers”.

Altura recomendada:

- 72px desktop.
- 64px mobile.

### 2. Hero

Debe incluir:

- Marca ICLSET 2026 con icono oficial del evento.
- H1 emocional-académico.
- Descripción breve.
- CTAs.
- Stats rápidos.
- Visual abstracto de ciencia, territorio y tecnología.

Componentes visuales:

- Gradiente radial.
- Líneas topográficas.
- Nodos conectados.
- Cards flotantes de tracks.
- Countdown opcional.

### 3. Stats

Cards:

- 3 tracks.
- 2.662 asistentes esperados.
- 50+ papers esperados.
- 5 revistas aliadas.
- Modalidad híbrida.

### 4. Tracks

Cada card debe tener:

- Icono.
- Nombre.
- Carreras articuladoras.
- Ejes resumidos.
- Chair.
- CTA “Ver ejes”.

### 5. Call for Papers

Debe parecer bloque prioritario:

- Fecha de envío.
- Tipos de contribución.
- Revisión doble ciego.
- Plantillas.
- CMT.
- CTA.

### 6. Proceso editorial

Usar stepper visual:

```txt
Recepción → Revisión doble ciego → Decisión editorial → Presentación → Canalización a revista
```

### 7. Programa preliminar

Tabs:

- Día 1.
- Día 2.
- Día 3.

Mostrar solo resumen en home y detalle en `/program`.

### 8. Revistas aliadas

Cards limpias con:

- Nombre.
- Institución.
- Área sugerida.
- Indexación regional.
- Link externo.

### 9. Sede

Bloque visual de Manta y ULEAM:

- Ciudad.
- Campus.
- Paraninfo.
- Modalidad híbrida.
- Zoom institucional.
- Conectividad y acceso.

### 10. FAQ

Preguntas iniciales:

- ¿Quién puede participar?
- ¿Qué tipos de trabajos se aceptan?
- ¿La revisión es doble ciego?
- ¿Dónde se envían los trabajos?
- ¿El evento es presencial o virtual?
- ¿Los certificados son digitales?
- ¿Habrá publicación en revistas?
- ¿Cuál es el costo de inscripción?

### 11. Footer

Debe contener:

- ICLSET 2026.
- ULEAM.
- FCVT.
- Links principales.
- Contacto.
- Redes institucionales.
- Texto de copyright.
- Créditos técnicos si aplica.

## Componentes UI

### Botones

Variantes:

- Primary: azul/cyan sobre fondo oscuro o claro.
- Secondary: outline.
- Ghost: navegación.
- Track: por color de track.

Radio:

- `rounded-full` para CTAs.
- `rounded-2xl` para botones secundarios en cards.

### Cards

Estilo:

- `rounded-[1.5rem]`
- borde sutil
- fondo blanco/translúcido
- sombra suave
- hover con elevación mínima
- transición 200ms a 300ms

### Badges

Uso:

- Conferencia internacional hibrida.
- Híbrido.
- Doble ciego.
- CMT.
- ISBN.
- Latindex.
- Dialnet.

### Timeline

- Línea vertical en mobile.
- Cards por fecha.
- Colores por estado: confirmado, activo, cerrado.

## Animación con Motion

Patrones recomendados:

```ts
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
```

Reglas:

- Hero: entrada suave.
- Stats: stagger.
- Tracks: hover sutil.
- Timeline: reveal por scroll.
- No abusar de parallax.
- No usar animaciones que bloqueen interacción.

## Responsive

Breakpoints:

- Mobile: 360px a 767px.
- Tablet: 768px a 1023px.
- Desktop: 1024px a 1439px.
- Wide: 1440px+.

Prioridad:

- Mobile-first.
- Header mobile con sheet.
- CTAs visibles sin scroll excesivo.
- Hero no debe ocupar más de 100vh en móviles.

## Accesibilidad visual

- Contraste mínimo AA.
- Tamaño mínimo de texto: 14px.
- Botones mínimo 44px de alto.
- Focus rings visibles.
- Evitar texto sobre gradientes sin overlay.
- `prefers-reduced-motion`.

## Estilo de imágenes e ilustraciones

- Usar fotografías reales de ULEAM/Manta cuando estén disponibles.
- Mientras no existan imágenes aprobadas, usar visuales abstractos.
- Evitar imágenes genéricas de stock demasiado corporativas.
- Las imágenes institucionales deben optimizarse con `next/image`.

## Iconografía

Librería recomendada: `lucide-react`.

Iconos sugeridos:

- Leaf, Waves, Microscope para Bio/Ambiente.
- Sprout, Wheat, Factory para Agrociencias.
- Cpu, BrainCircuit, ShieldCheck, Database para TI.
- CalendarDays, MapPin, Users, BookOpen, FileText, Globe2 para secciones generales.

## Tono visual por página

- Home: inspiracional y ejecutivo.
- Call for Papers: claro, académico y directo.
- Program: ordenado y operativo.
- Tracks: exploratorio y científico.
- Publications: serio, editorial y confiable.
- Venue: cálido, territorial y logístico.
- Committees: institucional y sobrio.

## Anti-patrones

No usar:

- Carruseles innecesarios.
- Popups invasivos.
- Animaciones constantes.
- Fondos con baja legibilidad.
- Tablas gigantes en mobile.
- Texto excesivo en hero.
- Dependencias pesadas para interacciones simples.
- Formularios sin flujo operativo aprobado.
- Colores desconectados de ciencia, territorio y tecnología.

## Ajuste visual institucional · 2026-05-13

La dirección visual activa usa un sistema claro, académico y tecnológico:

- Hero con icono ICLSET y visual animado de biociencia, agrociencia y tecnología construido con Motion for React.
- Fondos principales blancos, `surface` y `sand` suave, con acentos controlados en azul, cyan, emerald y lime.
- Navy reservado para marca, textos principales y contraste, no como fondo dominante permanente.
- Programa académico con imágenes SVG propias para los tres días, aspect ratio estable y layout responsive.
- Cards limpias con bordes sutiles, sombras suaves y contenido documental real.
- Layout mobile-first para Android, iOS, tablet, desktop y wide desktop.
- Icono del evento en `public/brand/iclset-icon.svg`, representando hoja, red tecnológica y resiliencia territorial.
- Visuales de programa en `public/program/day-1.svg`, `public/program/day-2.svg` y `public/program/day-3.svg`.

## Rediseno UI tech-agro · 2026-05-13

La interfaz activa se ajusta hacia una presencia mas tecnologica, diferenciadora y contemporanea sin cambiar el contenido institucional aprobado.

### Decisiones aplicadas

- Header, hero, page heroes, CTA final y footer usan fondo `navy` con reticula tecnica, glows controlados y alto contraste.
- El hero incorpora efecto reactivo al puntero, paneles glass y una animacion Motion que integra hoja, nodos, rutas y geometria para representar biociencia, agrociencia y tecnologias emergentes.
- Las cards principales usan bloques solidos por eje: azul para tecnologia, emerald para biociencia/ambiente, lime para agrociencias y cyan para accion editorial.
- Los botones se vuelven mas tactiles: mayor altura, radio full, sombra sutil, elevacion hover y colores mas energicos.
- El programa usa media cards con fondos solidos por dia y marcos estables para las imagenes SVG.
- Las paginas internas heredan un hero oscuro consistente para que el sitio completo se sienta como una conferencia internacional de tecnologia aplicada.
- Las animaciones deben seguir siendo puntuales, respetar `prefers-reduced-motion` y no bloquear lectura ni navegacion.

### Uso de color

- `navy`: superficies principales de alto impacto y navegacion.
- `blue`: tecnologia, rutas digitales, enlaces y datos.
- `cyan`: accion principal, CMT, editorial y detalles de sistema.
- `emerald`: biociencia, ambiente, biodiversidad y sede.
- `lime`: agrociencia, sostenibilidad y transferencia territorial.

## Rediseno UI moderno paleta iC · 2026-05-12

Segunda iteracion del rediseno alineada con la identidad del logo iC (gradiente azul celeste a verde). El sitio adopta una superficie clara dominante, gradientes controlados, animaciones Motion sutiles y una identidad de marca consistente desde el favicon hasta la imagen OpenGraph.

### Nueva paleta de marca

Tokens disponibles en `src/app/globals.css` y mapeados a Tailwind v4 via `@theme`:

```css
:root {
  --iclset-navy: oklch(20% 0.06 250);
  --iclset-ink: oklch(18% 0.04 250);
  --iclset-muted: oklch(52% 0.025 240);
  --iclset-surface: oklch(98% 0.012 220);

  --iclset-blue: oklch(63% 0.21 240);
  --iclset-blue-soft: oklch(94% 0.04 235);
  --iclset-sky: oklch(74% 0.16 230);
  --iclset-cyan: oklch(80% 0.14 215);
  --iclset-cyan-soft: oklch(95% 0.04 215);
  --iclset-emerald: oklch(72% 0.18 158);
  --iclset-emerald-soft: oklch(94% 0.05 158);
  --iclset-green: oklch(78% 0.22 142);
  --iclset-green-soft: oklch(95% 0.06 142);
  --iclset-lime: oklch(86% 0.2 130);
}
```

#### Uso recomendado

- `blue`: CTAs primarios, enlaces, tecnologia y datos.
- `sky` / `cyan`: gradiente intermedio del logo, acentos de sistema.
- `emerald` / `green`: biociencia, ambiente, sostenibilidad.
- `lime`: agrociencias, transferencia y micro-acentos.
- `navy` / `ink`: tipografia principal, footer y CTA final.
- `surface` / `card`: superficies claras dominantes en home y paginas internas.

### Decisiones aplicadas

- Header con fondo `white/55` que pasa a `white/88` con sombra suave al hacer scroll mediante Motion `useScroll`.
- Hero principal con fondo claro, glows radiales azul a verde, reticula tecnica y `PointerGlow` adaptado a superficies claras.
- Logo iC vectorial nuevo en `public/brand`:
  - `iclset-icon.svg` (256x256, version con fondo blanco redondeado).
  - `iclset-icon-mark.svg` (160x160, monograma sin fondo).
  - `iclset-logo.svg` y `iclset-logo-light.svg` (640x160, logotipo completo claro y oscuro).
  - `favicon.svg` (32x32) y `manifest-icon-512.svg` para PWA.
  - `iclset-og.svg` (1200x630) para Open Graph y Twitter card.
- `manifest.webmanifest` registra los iconos del sitio y el tema visual.
- Boton `default` adopta gradiente `iclset-blue → iclset-sky → iclset-emerald` con sombra azul, hover de elevacion sutil y radius `rounded-full`. Nuevas variantes: `solid`, `green` y `glass`.
- Cards de tracks, fechas, comites, publicaciones y sede ahora usan fondos blancos con bordes degradados, anillos sutiles y sombras de color al hover. Animaciones de entrada por scroll y elevacion tactil mediante Motion.
- Stats con tarjetas en gradiente vertical y stagger por scroll.
- Hero animado redibujado con el monograma iC, hoja, barra azul, C en gradiente azul a verde y nodos por eje.
- Footer en navy con reticula tecnica oscura, logo iC y glows azul a verde controlados.
- Final CTA con fondo navy degradado y glows azul/verde, manteniendo contraste alto.

### Animaciones Motion

- Entrada de hero, cards y stats con `whileInView`, `staggerChildren` y easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Hover de cards con `whileHover` `y: -6` y sombras de color.
- Boton primario con micro interacciones por hover (icono + elevacion).
- `PointerGlow` (variante `light` y `dark`) acompana al cursor sin distraer.
- `MotionCard` y `Reveal` son helpers reutilizables.
- Toda animacion respeta `prefers-reduced-motion`.

### Restricciones

- No cambiar nombres, fechas, chairs, tracks o revistas desde componentes visuales.
- Usar gradientes con moderacion: principalmente para hero, boton primario, fondos de cards de stats/tracks y CTA final.
- No introducir fondos navy dominantes en home, page heroes y secciones intermedias.
- Mantener contraste AA, foco visible y dimensiones estables en mobile, tablet, desktop y wide.
- No sobrecargar con animaciones constantes; el movimiento debe reforzar jerarquia e interaccion.

## Ajuste editorial CMT · 2026-05-14

- La seccion CMT en Call for Papers debe ser documental, escaneable y sobria; no debe parecer un banner promocional.
- Los titulos `AUTHOR GUIDELINES`, `SUBMISSION GUIDELINES`, `WHERE TO SUBMIT` y `HOW TO SUBMIT` deben quedar visibles como textos reales en la pagina.
- El acknowledgement debe mantenerse como parrafo simple, sin negrita, cursiva ni transformaciones visuales que modifiquen el texto requerido por Microsoft CMT.
- La pagina `/en/cmt-acknowledgment.html` prioriza verificacion automatica sobre diseño; debe conservar HTML minimo, texto plano y `charset=UTF-8`.
