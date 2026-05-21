import type { LocalizedText } from "@/types/locale";

interface SpringerPublicationContent {
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

export const springerPublication = {
  eyebrow: {
    es: "Ruta Springer",
    en: "Springer pathway",
  },
  title: {
    es: "Track tecnológico con publicación Springer en LNNS",
    en: "Technological track with Springer publication in LNNS",
  },
  summary: {
    es: "El track tecnológico de ICLSET 2026 incluye la publicación de artículos aceptados por la reconocida editorial Springer, garantizando altos estándares de calidad académica.",
    en: "The technological track of ICLSET 2026 includes the publication of accepted papers by the renowned publisher Springer, ensuring high academic quality standards.",
  },
  details: [
    {
      es: "Las contribuciones formarán parte del libro Innovation and Research – Smart Technologies and Systems, publicado en la prestigiosa serie Lecture Notes in Networks and Systems, indexada en Scopus.",
      en: "The contributions will be part of the book Innovation and Research – Smart Technologies and Systems, published in the prestigious Lecture Notes in Networks and Systems series, which is indexed in Scopus.",
    },
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
      es: "Los envíos para este track deben prepararse en formato Springer.",
      en: "Submissions for this track must be prepared in the Springer format.",
    },
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
} as const satisfies SpringerPublicationContent;
