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
      es: "Jornada inaugural del track TI, sesiones paralelas de Agrociencias y presentación de pósters científicos.",
      en: "IT track opening program, parallel Agrosciences sessions, and scientific poster presentations.",
    },
    detailPage: {
      href: "/program/day-1-it-track",
      label: {
        es: "Ver programa completo",
        en: "View full program",
      },
      ariaLabel: {
        es: "Abrir el programa completo del Día 1 en una nueva pestaña",
        en: "Open the full Day 1 program in a new tab",
      },
    },
    image: {
      src: "/keynote/day-1.jpg",
      alt: {
        es: "Jornada inaugural de Tecnologías de la Información y sesiones de Agrociencias",
        en: "Information Technologies opening program and Agrosciences sessions",
      },
    },
    items: [
      {
        time: "08:00-08:30",
        title: {
          es: "Registro y acreditación",
          en: "Registration and accreditation",
        },
        description: {
          es: "Acreditación presencial y habilitación del acceso virtual.",
          en: "In-person accreditation and virtual access enablement.",
        },
        modality: {
          es: "Paraninfo Alfonso Aguilar Ruilova",
          en: "Alfonso Aguilar Ruilova Auditorium",
        },
      },
      {
        time: "08:30-13:30",
        title: {
          es: "Jornada inaugural del track TI",
          en: "IT track opening program",
        },
        description: {
          es: "Acto protocolar, tres conferencias magistrales, mesa redonda tecnológica, conferencia de cierre y anuncios académicos.",
          en: "Opening protocol, three keynotes, technology roundtable, closing keynote, and academic announcements.",
        },
        modality: {
          es: "Paraninfo + Facebook Live",
          en: "Auditorium + Facebook Live",
        },
      },
      {
        time: "08:30-11:25",
        title: {
          es: "Agrociencias - Agroindustria",
          en: "Agrosciences - Agroindustry",
        },
        description: {
          es: "Ponencias paralelas sobre bioprocesos, alimentos, inocuidad, sostenibilidad e inteligencia artificial.",
          en: "Parallel presentations on bioprocesses, food, safety, sustainability, and artificial intelligence.",
        },
        modality: {
          es: "Cine ULEAM + Zoom",
          en: "ULEAM Cinema + Zoom",
        },
      },
      {
        time: "08:30-11:45",
        title: {
          es: "Agrociencias - Agronegocios y Agropecuaria",
          en: "Agrosciences - Agribusiness and Agricultural Production",
        },
        description: {
          es: "Ponencias paralelas sobre bioeconomía, producción, nutrición animal, resiliencia y generación de valor.",
          en: "Parallel presentations on bioeconomy, production, animal nutrition, resilience, and value creation.",
        },
        modality: {
          es: "Auditorio de Contabilidad / Agropecuaria + Zoom",
          en: "Accounting / Agricultural Auditorium + Zoom",
        },
      },
      {
        time: "10:00-12:00",
        title: {
          es: "Presentación de pósters científicos",
          en: "Scientific poster presentations",
        },
        description: {
          es: "Presentación de pósters aceptados durante la jornada académica.",
          en: "Accepted poster presentations during the academic program.",
        },
        modality: {
          es: "Jornada del track",
          en: "Track program",
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
      es: "Conferencias y ponencias de Bio/Ambiente, TI y Agrociencias, con presentación de pósters científicos.",
      en: "Bio/Environment, IT, and Agrosciences keynotes and presentations, with scientific poster presentations.",
    },
    detailPage: {
      href: "/program/day-2-tracks",
      label: {
        es: "Ver programa completo",
        en: "View full program",
      },
      ariaLabel: {
        es: "Abrir el programa completo del Día 2 en una nueva pestaña",
        en: "Open the full Day 2 program in a new tab",
      },
    },
    image: {
      src: "/keynote/day-2.jpg",
      alt: {
        es: "Conferencias y sesiones de Bio/Ambiente, Tecnologías de la Información y Agrociencias",
        en: "Bio/Environment, Information Technologies, and Agrosciences conference sessions",
      },
    },
    items: [
      {
        time: "08:00-14:00",
        title: {
          es: "Ciencias Biológicas y Ambientales - mañana",
          en: "Biological and Environmental Sciences - morning",
        },
        description: {
          es: "Registro, apertura del track, cuatro conferencias magistrales, receso y almuerzo.",
          en: "Registration, track opening, four keynotes, break, and lunch.",
        },
        modality: {
          es: "Paraninfo Alfonso Aguilar Ruilova",
          en: "Alfonso Aguilar Ruilova Auditorium",
        },
      },
      {
        time: "09:00-12:00",
        title: {
          es: "Presentación de pósters científicos",
          en: "Scientific poster presentations",
        },
        description: {
          es: "Presentación de pósters aceptados durante la jornada del track.",
          en: "Accepted poster presentations during the track program.",
        },
        modality: {
          es: "Jornada del track",
          en: "Track program",
        },
      },
      {
        time: "09:00-11:15",
        title: {
          es: "Tecnologías de la Información - mañana",
          en: "Information Technologies - morning",
        },
        description: {
          es: "Conferencia magistral y ponencias sobre IA, IoT, ciberseguridad, acuicultura de precisión y bases de datos.",
          en: "Keynote and presentations on AI, IoT, cybersecurity, precision aquaculture, and databases.",
        },
        modality: {
          es: "Virtual por Zoom",
          en: "Virtual via Zoom",
        },
      },
      {
        time: "14:00-16:45",
        title: {
          es: "Ciencias Biológicas y Ambientales - tarde",
          en: "Biological and Environmental Sciences - afternoon",
        },
        description: {
          es: "Ponencias científicas de 10 minutos y 5 minutos de preguntas.",
          en: "Ten-minute scientific presentations followed by five minutes of questions.",
        },
        modality: {
          es: "Auditorio de Comunicaciones + Zoom",
          en: "Communications Auditorium + Zoom",
        },
      },
      {
        time: "14:00-17:20",
        title: {
          es: "Agrociencias - tarde",
          en: "Agrosciences - afternoon",
        },
        description: {
          es: "Ponencias sobre mitigación climática, finanzas verdes, innovación alimentaria y competencia económica.",
          en: "Presentations on climate mitigation, green finance, food innovation, and economic competition.",
        },
        modality: {
          es: "Paraninfo Alfonso Aguilar Ruilova",
          en: "Alfonso Aguilar Ruilova Auditorium",
        },
      },
      {
        time: "15:00-17:00",
        title: {
          es: "Tecnologías de la Información - tarde",
          en: "Information Technologies - afternoon",
        },
        description: {
          es: "Conferencia magistral y ponencias sobre fraude financiero, inventarios, robótica, ciencia de datos y DevSecOps.",
          en: "Keynote and presentations on financial fraud, inventory systems, robotics, data science, and DevSecOps.",
        },
        modality: {
          es: "Virtual por Zoom",
          en: "Virtual via Zoom",
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
      es: "Casa Abierta FACIVITEC y presentación de pósters científicos en Plaza Centenario.",
      en: "FACIVITEC Open House and scientific poster presentations at Plaza Centenario.",
    },
    detailPage: {
      href: "/program/day-3-open-house",
      label: {
        es: "Ver programa completo",
        en: "View full program",
      },
      ariaLabel: {
        es: "Abrir el programa completo del Día 3 en una nueva pestaña",
        en: "Open the full Day 3 program in a new tab",
      },
    },
    image: {
      src: "/keynote/day-3.jpg",
      alt: {
        es: "Casa Abierta FACIVITEC y presentación de pósters científicos",
        en: "FACIVITEC Open House and scientific poster presentations",
      },
    },
    items: [
      {
        time: "09:00",
        title: {
          es: "Casa Abierta FACIVITEC",
          en: "FACIVITEC Open House",
        },
        description: {
          es: "Exposición académica con participación de los tracks de la conferencia.",
          en: "Academic exhibition with participation from the conference tracks.",
        },
        modality: {
          es: "Plaza Centenario",
          en: "Plaza Centenario",
        },
      },
      {
        time: "09:00",
        title: {
          es: "Presentación de pósters científicos",
          en: "Scientific poster presentations",
        },
        description: {
          es: "Presentación de pósters aceptados como parte de la jornada académica.",
          en: "Accepted poster presentations as part of the academic program.",
        },
        modality: {
          es: "Plaza Centenario",
          en: "Plaza Centenario",
        },
      },
    ],
  },
];
