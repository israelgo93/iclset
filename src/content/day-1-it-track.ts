import type { LocalizedText } from "@/types/locale";

export interface DayOneItTrackSpeaker {
  name: string;
  aliases: string[];
  image: {
    src: string;
    alt: LocalizedText;
  };
}

export const dayOneItTrackContent = {
  eyebrow: {
    es: "Día 1 · Track TI",
    en: "Day 1 · IT Track",
  },
  title: {
    es: "Jornada inaugural del track de Tecnologías de la Información",
    en: "Opening day for the Information Technologies track",
  },
  description: {
    es: "Agenda detallada de la jornada inaugural con acto protocolar, conferencias magistrales, mesa redonda tecnológica y cierre académico.",
    en: "Detailed opening-day agenda with institutional protocol, keynotes, technology roundtable, and academic closing.",
  },
  timelineTitle: {
    es: "Cronograma de la jornada",
    en: "Day schedule",
  },
  timelineDescription: {
    es: "Bloques organizados por horario, modalidad y detalle académico.",
    en: "Blocks organized by time, format, and academic detail.",
  },
  speakersTitle: {
    es: "Ponentes de la jornada",
    en: "Day speakers",
  },
  speakersDescription: {
    es: "Expositores principales de la agenda inaugural.",
    en: "Main speakers in the opening-day agenda.",
  },
  trackLabel: {
    es: "Track TI",
    en: "IT Track",
  },
  backToProgram: {
    es: "Volver al programa",
    en: "Back to program",
  },
  facts: [
    {
      label: {
        es: "Fecha",
        en: "Date",
      },
      value: {
        es: "Miércoles 15 de julio de 2026",
        en: "Wednesday, July 15, 2026",
      },
    },
    {
      label: {
        es: "Sede",
        en: "Venue",
      },
      value: {
        es: "Paraninfo Alfonso Aguilar Ruilova",
        en: "Alfonso Aguilar Ruilova Auditorium",
      },
    },
    {
      label: {
        es: "Modalidad",
        en: "Format",
      },
      value: {
        es: "Híbrida",
        en: "Hybrid",
      },
    },
  ],
} as const;

export const dayOneItTrackSpeakers: DayOneItTrackSpeaker[] = [
  {
    name: "Mg. Ing. Diego Toala Palma",
    aliases: ["Mg. Ing. Diego Toala Palma", "Ing. Diego Toala Palma, Mg."],
    image: {
      src: "/speakers/day-1-ti/diego-toala-palma.jpeg",
      alt: {
        es: "Retrato de Diego Toala Palma",
        en: "Portrait of Diego Toala Palma",
      },
    },
  },
  {
    name: "PhD. Marcos Vinicio Sotomayor",
    aliases: ["PhD. Marcos Vinicio Sotomayor"],
    image: {
      src: "/speakers/day-1-ti/marcos-vinicio-sotomayor.jpg",
      alt: {
        es: "Retrato de Marcos Vinicio Sotomayor",
        en: "Portrait of Marcos Vinicio Sotomayor",
      },
    },
  },
  {
    name: "Lauro García",
    aliases: ["Lauro García"],
    image: {
      src: "/speakers/day-1-ti/lauro-garcia.jpeg",
      alt: {
        es: "Retrato de Lauro García",
        en: "Portrait of Lauro García",
      },
    },
  },
  {
    name: "Mgs. Rita Cedeño",
    aliases: ["Mgs. Rita Cedeño"],
    image: {
      src: "/speakers/day-1-ti/rita-cedeno.jpeg",
      alt: {
        es: "Retrato de Rita Cedeño",
        en: "Portrait of Rita Cedeño",
      },
    },
  },
];
