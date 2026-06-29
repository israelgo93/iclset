import type { RegistrationFee } from "@/types/conference";

export const registrationFees: RegistrationFee[] = [
  {
    key: "students",
    audience: {
      es: "Estudiantes",
      en: "Students",
    },
    amount: "USD 15",
    description: {
      es: "Participación de estudiantes de grado y posgrado en modalidad híbrida.",
      en: "Participation for undergraduate and graduate students in hybrid mode.",
    },
  },
  {
    key: "facsvitec-faculty",
    audience: {
      es: "Docentes FACIVITEC",
      en: "FACIVITEC faculty",
    },
    amount: "USD 15",
    description: {
      es: "Docentes FACIVITEC con tarifa diferenciada.",
      en: "FACIVITEC faculty with a differentiated fee.",
    },
    options: [
      {
        label: {
          es: "Con ponencia",
          en: "With presentation",
        },
        amount: "USD 15",
      },
      {
        label: {
          es: "Sin ponencia",
          en: "Without presentation",
        },
        amount: "USD 18",
      },
    ],
  },
  {
    key: "uleam-staff",
    audience: {
      es: "Personal ULEAM",
      en: "ULEAM staff",
    },
    amount: "USD 25",
    description: {
      es: "Docentes, investigadores y personal institucional de ULEAM.",
      en: "Faculty, researchers, and institutional staff from ULEAM.",
    },
  },
  {
    key: "external-participants",
    audience: {
      es: "Participantes externos",
      en: "External participants",
    },
    amount: "USD 35",
    description: {
      es: "Profesionales, investigadores y asistentes de instituciones externas.",
      en: "Professionals, researchers, and attendees from external institutions.",
    },
  },
  {
    key: "authors",
    audience: {
      es: "Autores de papers o pósters",
      en: "Paper or poster authors",
    },
    amount: "USD 25",
    description: {
      es: "Autores con contribuciones aceptadas para presentación en el congreso.",
      en: "Authors with accepted contributions for presentation at the conference.",
    },
  },
];

export const registrationFeesContent = {
  eyebrow: {
    es: "Valores de inscripción",
    en: "Registration fees",
  },
  title: {
    es: "Tarifas para participar en ICLSET 2026",
    en: "Fees to participate in ICLSET 2026",
  },
  description: {
    es: "Tarifas oficiales por tipo de participante.",
    en: "Official fees by participant type.",
  },
  note: {
    es: "Inscríbete ahora",
    en: "Register now",
  },
  ctaDescription: {
    es: "Completa tu registro en la plataforma oficial de inscripciones de ICLSET 2026.",
    en: "Complete your registration through the official ICLSET 2026 registration platform.",
  },
  cta: {
    es: "Ir a inscripciones",
    en: "Go to registration",
  },
  ctaUrl: "https://congreso.iclset.com",
} as const;
