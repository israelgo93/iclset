export const conference = {
  acronym: "ICLSET 2026",
  name: {
    es: "International Conference on Life Sciences and Emerging Technologies",
    en: "International Conference on Life Sciences and Emerging Technologies",
  },
  tagline: {
    es: "Biociencia, Agrociencia y Tecnología: investigación que transforma territorios",
    en: "Life Sciences, Agroscience, and Technology: research transforming territories",
  },
  heroTitle: {
    es: "Biociencia, agrociencia y tecnología para transformar territorios.",
    en: "Life sciences, agroscience, and emerging technologies shaping resilient territories.",
  },
  heroDescription: {
    es: "Una conferencia internacional híbrida con revisión por pares doble ciego, libro de actas y canalización de artículos aceptados hacia revistas académicas aliadas.",
    en: "A hybrid international conference with double-blind peer review, proceedings, and post-conference journal pathways through allied academic journals.",
  },
  dates: {
    start: "2026-07-15",
    end: "2026-07-17",
    display: {
      es: "15, 16 y 17 de julio de 2026",
      en: "July 15, 16, and 17, 2026",
    },
  },
  location: {
    city: "Manta",
    province: "Manabí",
    country: "Ecuador",
    venue: "Universidad Laica Eloy Alfaro de Manabí",
    faculty: "Facultad de Ciencias de la Vida y Tecnologías",
    mainHall: "Paraninfo Alfonso Aguilar Ruilova",
  },
  modality: {
    es: "Híbrida: presencial + virtual sincrónica",
    en: "Hybrid: in-person + synchronous virtual",
  },
  edition: {
    es: "Conferencia internacional híbrida",
    en: "Hybrid international conference",
  },
  timezone: "America/Guayaquil",
  contactEmail: "israel.gomez@uleam.edu.ec",
  editorialPlatform: "Microsoft CMT",
  cmtUrl: "https://cmt3.research.microsoft.com/About",
  templateUrl: null,
  repoUrl: "https://github.com/israelgo93/iclset.git",
} as const;

export const callsToAction = [
  {
    href: "/call-for-papers",
    label: {
      es: "Ver Call for Papers",
      en: "View Call for Papers",
    },
  },
  {
    href: "#templates",
    label: {
      es: "Descargar plantillas",
      en: "Download templates",
    },
  },
  {
    href: "/program",
    label: {
      es: "Consultar programa",
      en: "Explore the program",
    },
  },
  {
    href: "/publications",
    label: {
      es: "Conocer revistas aliadas",
      en: "View partner journals",
    },
  },
] as const;

export const stats = [
  {
    value: "3",
    label: {
      es: "tracks científicos",
      en: "scientific tracks",
    },
  },
  {
    value: "2.662",
    label: {
      es: "asistentes esperados",
      en: "expected attendees",
    },
  },
  {
    value: "50+",
    label: {
      es: "papers esperados",
      en: "expected papers",
    },
  },
  {
    value: "5",
    label: {
      es: "revistas aliadas",
      en: "partner journals",
    },
  },
] as const;
