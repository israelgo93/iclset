import type { ScheduleDay } from "@/types/conference";

export const schedule: ScheduleDay[] = [
  {
    day: {
      es: "Día 1",
      en: "Day 1",
    },
    date: {
      es: "Miércoles 15 de julio de 2026",
      en: "Wednesday, July 15, 2026",
    },
    summary: {
      es: "Inauguración, keynote transversal, keynote TI, paneles y sesiones paralelas por track.",
      en: "Opening ceremony, cross-cutting keynote, IT keynote, panels, and parallel sessions by track.",
    },
    image: {
      src: "/keynote/day-1.png",
      alt: {
        es: "Inauguración con conferencia magistral y escenarios con biodiversidad, ADN y tecnología",
        en: "Opening ceremony with keynote and stages featuring biodiversity, DNA, and technology",
      },
    },
    items: [
      {
        time: "08:00-09:00",
        title: {
          es: "Registro de asistentes",
          en: "Attendee registration",
        },
        description: {
          es: "Acreditación presencial y acceso virtual para participantes.",
          en: "In-person check-in and virtual access for participants.",
        },
        modality: {
          es: "Paraninfo + virtual",
          en: "Auditorium + virtual",
        },
      },
      {
        time: "09:00-10:00",
        title: {
          es: "Inauguración institucional",
          en: "Institutional opening",
        },
        description: {
          es: "Palabras del Decano FCVT, presentación artística e intervención del Rector ULEAM.",
          en: "Remarks by the FCVT Dean, artistic presentation, and ULEAM Rector address.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "10:00-11:00",
        title: {
          es: "Conferencia magistral inaugural",
          en: "Opening keynote",
        },
        description: {
          es: "Keynote internacional transversal para los tres tracks.",
          en: "Cross-cutting international keynote for the three tracks.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "11:30-12:30",
        title: {
          es: "Conferencia magistral - Tecnologías de la Información",
          en: "Keynote - Information Technologies",
        },
        description: {
          es: "Sesión central del track de tecnologías emergentes.",
          en: "Main session for the emerging technologies track.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "12:30-13:30",
        title: {
          es: "Panel transversal - Tecnologías de la Información",
          en: "Cross-cutting panel - Information Technologies",
        },
        description: {
          es: "Mesa de diálogo sobre transformación digital y aplicaciones territoriales.",
          en: "Dialogue panel on digital transformation and territorial applications.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "15:00-17:30",
        title: {
          es: "Panel Agro-Tecnología y sesiones paralelas",
          en: "Agro-Technology panel and parallel sessions",
        },
        description: {
          es: "Tres salas Zoom simultáneas para papers por track: Bio/Ambiente, Agrociencias y TI.",
          en: "Three simultaneous Zoom rooms for papers by track: Bio/Environment, Agrosciences, and IT.",
        },
        modality: {
          es: "Virtual por track",
          en: "Virtual by track",
        },
      },
    ],
  },
  {
    day: {
      es: "Día 2",
      en: "Day 2",
    },
    date: {
      es: "Jueves 16 de julio de 2026",
      en: "Thursday, July 16, 2026",
    },
    summary: {
      es: "Keynotes Bio/Ambiente, panel Bio-Ambiente, panel Ciencia Abierta y sesiones paralelas.",
      en: "Bio/Environment keynotes, Bio-Environment panel, Open Science panel, and parallel sessions.",
    },
    image: {
      src: "/keynote/day-2.png",
      alt: {
        es: "Jornada Bio-Ambiente con keynotes, paneles y diálogo de ciencia abierta",
        en: "Bio-Environment day with keynotes, panels, and open science dialogue",
      },
    },
    items: [
      {
        time: "09:00-10:00",
        title: {
          es: "Conferencia magistral - Ciencias Biológicas y Ambientales",
          en: "Keynote - Biological and Environmental Sciences",
        },
        description: {
          es: "Investigación aplicada en biodiversidad, ambiente y resiliencia territorial.",
          en: "Applied research in biodiversity, environment, and territorial resilience.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "10:00-11:00",
        title: {
          es: "Conferencia magistral - Ciencias Biológicas y Ambientales",
          en: "Keynote - Biological and Environmental Sciences",
        },
        description: {
          es: "Segundo bloque magistral del track Bio/Ambiente.",
          en: "Second keynote block for the Bio/Environment track.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "11:30-12:30",
        title: {
          es: "Panel transversal Bio-Ambiente",
          en: "Bio-Environment cross-cutting panel",
        },
        description: {
          es: "Mesa redonda sobre ambiente, biodiversidad y territorio.",
          en: "Roundtable on environment, biodiversity, and territory.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "12:30-13:30",
        title: {
          es: "Panel transversal Ciencia Abierta",
          en: "Open Science cross-cutting panel",
        },
        description: {
          es: "Discusión sobre transferencia, publicación y ciencia abierta.",
          en: "Discussion on transfer, publishing, and open science.",
        },
        modality: {
          es: "Plenaria Paraninfo",
          en: "Auditorium plenary",
        },
      },
      {
        time: "15:00-17:30",
        title: {
          es: "Sesiones paralelas por track - bloque B",
          en: "Parallel sessions by track - block B",
        },
        description: {
          es: "Presentación de papers en tres salas Zoom institucionales simultáneas.",
          en: "Paper presentations in three simultaneous institutional Zoom rooms.",
        },
        modality: {
          es: "Virtual",
          en: "Virtual",
        },
      },
    ],
  },
  {
    day: {
      es: "Día 3",
      en: "Day 3",
    },
    date: {
      es: "Viernes 17 de julio de 2026",
      en: "Friday, July 17, 2026",
    },
    summary: {
      es: "Feria de pósters en Plaza Centenario, mesa de editores y clausura.",
      en: "Poster fair at Plaza Centenario, editors' roundtable, and closing ceremony.",
    },
    image: {
      src: "/keynote/day-3.png",
      alt: {
        es: "Feria de pósters científicos, mesa de editores y clausura institucional",
        en: "Scientific poster fair, editors roundtable, and institutional closing",
      },
    },
    items: [
      {
        time: "10:00-12:00",
        title: {
          es: "Feria de pósters científicos",
          en: "Scientific poster fair",
        },
        description: {
          es: "Casa abierta con presentación de pósters asociados a los tres tracks.",
          en: "Open fair with poster presentations associated with the three tracks.",
        },
        modality: {
          es: "Plaza Centenario ULEAM",
          en: "ULEAM Plaza Centenario",
        },
      },
      {
        time: "12:00-13:00",
        title: {
          es: "Mesa de editores y revistas aliadas",
          en: "Editors and partner journals roundtable",
        },
        description: {
          es: "Articulación editorial con Encriptar, YAKU, ALLPA, Conectividad y Ecuadorian Science Journal.",
          en: "Editorial coordination with Encriptar, YAKU, ALLPA, Conectividad, and Ecuadorian Science Journal.",
        },
        modality: {
          es: "Híbrida",
          en: "Hybrid",
        },
      },
      {
        time: "13:00-13:30",
        title: {
          es: "Clausura",
          en: "Closing ceremony",
        },
        description: {
          es: "Cierre institucional y menciones a mejores artículos y pósters por track.",
          en: "Institutional closing and mentions for best papers and posters by track.",
        },
        modality: {
          es: "Virtual",
          en: "Virtual",
        },
      },
    ],
  },
];
