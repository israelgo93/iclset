import type { LocalizedText } from "@/types/locale";

export interface ConferenceTemplate {
  key: "full-paper" | "abstract";
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  fileName: string;
}

export const conferenceTemplates = [
  {
    key: "full-paper",
    title: {
      es: "Plantilla para artículos",
      en: "Full paper template",
    },
    description: {
      es: "Formato Word para preparar artículos completos de 8 a 12 páginas.",
      en: "Word format for preparing full papers from 8 to 12 pages.",
    },
    href: "/templates/formato-articulos-iclset-2026.docx",
    fileName: "formato-articulos-iclset-2026.docx",
  },
  {
    key: "abstract",
    title: {
      es: "Plantilla para resúmenes",
      en: "Abstract template",
    },
    description: {
      es: "Formato Word para resúmenes y contribuciones de póster científico.",
      en: "Word format for abstracts and scientific poster contributions.",
    },
    href: "/templates/plantilla-resumenes-abstract-iclset-2026.docx",
    fileName: "plantilla-resumenes-abstract-iclset-2026.docx",
  },
] satisfies readonly ConferenceTemplate[];
