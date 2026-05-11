import type { Track } from "@/types/conference";

export const tracks: Track[] = [
  {
    key: "bio",
    name: {
      es: "Ciencias Biológicas y Ambientales",
      en: "Biological and Environmental Sciences",
    },
    shortName: {
      es: "Bio/Ambiente",
      en: "Bio/Environment",
    },
    description: {
      es: "Investigación en biodiversidad, biotecnología, ambiente, conservación, salud ecosistémica y resiliencia territorial.",
      en: "Research on biodiversity, biotechnology, environment, conservation, ecosystem health, and territorial resilience.",
    },
    careers: [
      {
        es: "Biología",
        en: "Biology",
      },
      {
        es: "Gestión ambiental",
        en: "Environmental management",
      },
    ],
    topics: [
      {
        es: "Biodiversidad y conservación",
        en: "Biodiversity and conservation",
      },
      {
        es: "Biotecnología aplicada",
        en: "Applied biotechnology",
      },
      {
        es: "Cambio climático y ecosistemas",
        en: "Climate change and ecosystems",
      },
    ],
    chair: {
      es: "Por confirmar",
      en: "To be confirmed",
    },
  },
  {
    key: "agro",
    name: {
      es: "Agrociencias",
      en: "Agrosciences",
    },
    shortName: {
      es: "Agrociencias",
      en: "Agrosciences",
    },
    description: {
      es: "Producción sostenible, agroindustria, inocuidad, economía circular, innovación rural y cadenas de valor agroalimentarias.",
      en: "Sustainable production, agroindustry, food safety, circular economy, rural innovation, and agri-food value chains.",
    },
    careers: [
      {
        es: "Ingeniería agropecuaria",
        en: "Agricultural engineering",
      },
      {
        es: "Agroindustria",
        en: "Agroindustry",
      },
    ],
    topics: [
      {
        es: "Sistemas productivos sostenibles",
        en: "Sustainable production systems",
      },
      {
        es: "Agroindustria e inocuidad",
        en: "Agroindustry and food safety",
      },
      {
        es: "Innovación para territorios rurales",
        en: "Innovation for rural territories",
      },
    ],
    chair: {
      es: "Por confirmar",
      en: "To be confirmed",
    },
  },
  {
    key: "tech",
    name: {
      es: "Tecnologías de la Información",
      en: "Information Technologies",
    },
    shortName: {
      es: "TI emergente",
      en: "Emerging IT",
    },
    description: {
      es: "Inteligencia artificial, software, datos, ciberseguridad, IoT, transformación digital y sistemas inteligentes.",
      en: "Artificial intelligence, software, data, cybersecurity, IoT, digital transformation, and intelligent systems.",
    },
    careers: [
      {
        es: "Tecnologías de la información",
        en: "Information technologies",
      },
      {
        es: "Software y sistemas",
        en: "Software and systems",
      },
    ],
    topics: [
      {
        es: "IA y ciencia de datos",
        en: "AI and data science",
      },
      {
        es: "Software, IoT y sistemas inteligentes",
        en: "Software, IoT, and intelligent systems",
      },
      {
        es: "Ciberseguridad y transformación digital",
        en: "Cybersecurity and digital transformation",
      },
    ],
    chair: {
      es: "Por confirmar",
      en: "To be confirmed",
    },
  },
];
