export const site = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iclset.example",
  title: {
    es: "ICLSET 2026 | Conferencia internacional en biociencia, agrociencia y tecnología",
    en: "ICLSET 2026 | International conference on bioscience, agroscience, and technology",
  },
  description: {
    es: "Landing oficial de ICLSET 2026, conferencia internacional híbrida de la Universidad Laica Eloy Alfaro de Manabí sobre biociencia, agrociencia y tecnologías emergentes.",
    en: "Official landing page for ICLSET 2026, a hybrid international conference by Universidad Laica Eloy Alfaro de Manabí on bioscience, agroscience, and emerging technologies.",
  },
  keywords: [
    "ICLSET 2026",
    "Life Sciences",
    "Emerging Technologies",
    "Agroscience",
    "Manta",
    "Ecuador",
    "ULEAM",
  ],
} as const;
