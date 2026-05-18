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
    es: "Tarifas documentadas para participar en ICLSET 2026",
    en: "Documented fees to participate in ICLSET 2026",
  },
  description: {
    es: "Los valores se publican como referencia institucional para asistentes, autores y personal académico. La fase actual no incluye pagos en línea.",
    en: "Fees are published as institutional reference for attendees, authors, and academic staff. The current phase does not include online payments.",
  },
  note: {
    es: "El flujo de inscripción institucional se informará por los canales oficiales del congreso.",
    en: "The institutional registration flow will be announced through the official conference channels.",
  },
  cta: {
    es: "Consultar contacto",
    en: "Contact the organizers",
  },
} as const;
