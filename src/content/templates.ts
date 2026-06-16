import type { LocalizedText } from "@/types/locale";

export interface ConferenceTemplate {
  key: "full-paper" | "abstract" | "poster";
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  fileName: string;
}

export const conferenceTemplates = [
  {
    key: "full-paper",
    title: {
      es: "Plantilla artículos",
      en: "Full paper template",
    },
    description: {
      es: "8 a 12 páginas · Word.",
      en: "8 to 12 pages · Word.",
    },
    href: "/templates/formato-articulos-iclset-2026.docx",
    fileName: "formato-articulos-iclset-2026.docx",
  },
  {
    key: "abstract",
    title: {
      es: "Plantilla resúmenes",
      en: "Abstract template",
    },
    description: {
      es: "Resumen y póster · Word.",
      en: "Abstract and poster · Word.",
    },
    href: "/templates/plantilla-resumenes-abstract-iclset-2026.docx",
    fileName: "plantilla-resumenes-abstract-iclset-2026.docx",
  },
  {
    key: "poster",
    title: {
      es: "Plantilla póster",
      en: "Poster template",
    },
    description: {
      es: "Póster científico · PowerPoint.",
      en: "Scientific poster · PowerPoint.",
    },
    href: "/templates/iclset-2026-plantilla-poster.pptx",
    fileName: "iclset-2026-plantilla-poster.pptx",
  },
] satisfies readonly ConferenceTemplate[];
