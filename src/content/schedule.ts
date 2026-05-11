import type { ScheduleDay } from "@/types/conference";

export const schedule: ScheduleDay[] = [
  {
    day: {
      es: "Día 1",
      en: "Day 1",
    },
    date: {
      es: "15 de julio de 2026",
      en: "July 15, 2026",
    },
    summary: {
      es: "Inauguración, conferencias magistrales, panel de TI y sesiones paralelas.",
      en: "Opening ceremony, keynotes, IT panel, and parallel sessions.",
    },
    items: [
      {
        time: "08:30",
        title: {
          es: "Registro e inauguración",
          en: "Registration and opening",
        },
        description: {
          es: "Acreditación de participantes y apertura institucional.",
          en: "Participant check-in and institutional opening.",
        },
      },
      {
        time: "10:30",
        title: {
          es: "Keynotes y panel TI",
          en: "Keynotes and IT panel",
        },
        description: {
          es: "Sesiones centrales sobre tecnologías emergentes aplicadas al territorio.",
          en: "Main sessions on emerging technologies applied to territories.",
        },
      },
      {
        time: "14:30",
        title: {
          es: "Sesiones paralelas",
          en: "Parallel sessions",
        },
        description: {
          es: "Presentaciones por tracks científicos.",
          en: "Presentations by scientific track.",
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
      es: "16 de julio de 2026",
      en: "July 16, 2026",
    },
    summary: {
      es: "Keynotes, panel Bio-Ambiente, panel Ciencia Abierta y sesiones paralelas.",
      en: "Keynotes, Bio-Environment panel, Open Science panel, and parallel sessions.",
    },
    items: [
      {
        time: "09:00",
        title: {
          es: "Conferencias magistrales",
          en: "Keynote talks",
        },
        description: {
          es: "Investigación aplicada en biociencia, ambiente y agrociencias.",
          en: "Applied research in bioscience, environment, and agrosciences.",
        },
      },
      {
        time: "11:30",
        title: {
          es: "Paneles académicos",
          en: "Academic panels",
        },
        description: {
          es: "Bio-Ambiente y Ciencia Abierta como ejes de transferencia.",
          en: "Bio-Environment and Open Science as knowledge transfer themes.",
        },
      },
      {
        time: "15:00",
        title: {
          es: "Sesiones paralelas",
          en: "Parallel sessions",
        },
        description: {
          es: "Presentaciones de autores y discusión por áreas.",
          en: "Author presentations and area-based discussion.",
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
      es: "17 de julio de 2026",
      en: "July 17, 2026",
    },
    summary: {
      es: "Feria de pósters científicos, sesiones finales y clausura.",
      en: "Scientific poster fair, final sessions, and closing ceremony.",
    },
    items: [
      {
        time: "09:00",
        title: {
          es: "Feria de pósters",
          en: "Poster fair",
        },
        description: {
          es: "Exposición de pósters científicos presenciales y virtuales.",
          en: "In-person and virtual scientific poster presentations.",
        },
      },
      {
        time: "11:30",
        title: {
          es: "Sesiones finales",
          en: "Final sessions",
        },
        description: {
          es: "Cierre de presentaciones por track y conclusiones.",
          en: "Track presentation wrap-up and conclusions.",
        },
      },
      {
        time: "15:30",
        title: {
          es: "Clausura",
          en: "Closing ceremony",
        },
        description: {
          es: "Balance institucional y próximos pasos editoriales.",
          en: "Institutional summary and editorial next steps.",
        },
      },
    ],
  },
];
