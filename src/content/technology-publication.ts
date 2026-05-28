import type { LocalizedText } from "@/types/locale";

interface TechnologyPublicationContent {
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
  requirements: LocalizedText[];
  fee: {
    label: LocalizedText;
    amount: string;
    description: LocalizedText;
  };
}

export const technologyPublication = {
  eyebrow: {
    es: "Track tecnológico",
    en: "Technology track",
  },
  title: {
    es: "Track tecnológico",
    en: "Technology track",
  },
  summary: {
    es: "El track tecnológico de ICLSET 2026 mantiene revisión por pares doble ciego y canalización editorial hacia publicaciones académicas indexadas en Scopus.",
    en: "The ICLSET 2026 technology track maintains double-blind peer review and editorial pathways toward Scopus-indexed academic publications.",
  },
  details: [
    {
      es: "El volumen contará con su correspondiente ISBN e ISSN, y cada artículo publicado tendrá un DOI individual para su adecuada identificación y citación.",
      en: "The volume will have its corresponding ISBN and ISSN, and each published article will be assigned an individual DOI for proper identification and citation.",
    },
    {
      es: "Además, todos los envíos se someterán a un riguroso proceso de revisión por pares doble ciego, asegurando la calidad, originalidad y relevancia científica de la investigación presentada.",
      en: "Additionally, all submissions will undergo a rigorous double-blind peer review process, ensuring the quality, originality, and scientific relevance of the presented research.",
    },
  ],
  requirements: [
    {
      es: "El archivo debe enviarse en PDF.",
      en: "The file must be submitted in PDF.",
    },
    {
      es: "El manuscrito debe estar escrito en inglés.",
      en: "The manuscript must be written in English.",
    },
  ],
  fee: {
    label: {
      es: "Tarifa de publicación",
      en: "Publication fee",
    },
    amount: "USD 400",
    description: {
      es: "Tarifa de publicación para revistas o proceedings indexados en Scopus.",
      en: "Publication fee for Scopus-indexed journals or proceedings.",
    },
  },
} as const satisfies TechnologyPublicationContent;
