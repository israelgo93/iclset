import type { ImportantDate } from "@/types/conference";

export const importantDates: ImportantDate[] = [
  {
    key: "cfp",
    date: {
      es: "Por confirmar",
      en: "To be confirmed",
    },
    title: {
      es: "Apertura de convocatoria",
      en: "Call opening",
    },
    description: {
      es: "Publicación del Call for Papers, plantillas y lineamientos de anonimización.",
      en: "Publication of the Call for Papers, templates, and anonymization guidelines.",
    },
    status: "pending",
  },
  {
    key: "submission",
    date: {
      es: "Por confirmar",
      en: "To be confirmed",
    },
    title: {
      es: "Cierre de envío de trabajos",
      en: "Submission deadline",
    },
    description: {
      es: "Recepción de full papers y pósters científicos mediante Microsoft CMT.",
      en: "Full paper and scientific poster submission through Microsoft CMT.",
    },
    status: "pending",
  },
  {
    key: "notification",
    date: {
      es: "Por confirmar",
      en: "To be confirmed",
    },
    title: {
      es: "Notificación a autores",
      en: "Author notification",
    },
    description: {
      es: "Comunicación de resultados de la revisión por pares doble ciego.",
      en: "Communication of double-blind peer-review results.",
    },
    status: "pending",
  },
  {
    key: "event",
    date: {
      es: "15-17 de julio de 2026",
      en: "July 15-17, 2026",
    },
    title: {
      es: "ICLSET 2026",
      en: "ICLSET 2026",
    },
    description: {
      es: "Conferencia híbrida en Manta, Manabí, Ecuador.",
      en: "Hybrid conference in Manta, Manabí, Ecuador.",
    },
    status: "confirmed",
  },
];
