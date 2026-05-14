import type { LocalizedText } from "@/types/locale";

export const cmtAcknowledgmentText =
  "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.";

export const cmtAcknowledgmentPath = "/en/cmt-acknowledgment.html";

export const cmtHelpLinks = {
  accountCreation:
    "https://cmt3.research.microsoft.com/docs/help/general/account-creation.html",
  authorSubmission:
    "https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html",
} as const;

export interface CmtRequirementBlock {
  key:
    | "author-guidelines"
    | "submission-guidelines"
    | "where-to-submit"
    | "how-to-submit";
  title: LocalizedText;
  description: LocalizedText;
  items: LocalizedText[];
}

export const cmtRequirementBlocks: CmtRequirementBlock[] = [
  {
    key: "author-guidelines",
    title: {
      es: "Lineamientos para autores",
      en: "AUTHOR GUIDELINES",
    },
    description: {
      es: "Expectativas preliminares para autores que presenten contribuciones a ICLSET 2026.",
      en: "Preliminary expectations for authors submitting contributions to ICLSET 2026.",
    },
    items: [
      {
        es: "Cada contribución debe estar asociada a uno de los tres tracks oficiales del congreso.",
        en: "Each contribution must be associated with one of the three official conference tracks.",
      },
      {
        es: "Los autores deben usar una cuenta activa de Microsoft CMT para enviar y dar seguimiento a su trabajo.",
        en: "Authors must use an active Microsoft CMT account to submit and track their work.",
      },
      {
        es: "Al menos un autor de cada trabajo aceptado deberá inscribirse y presentar la contribución en la modalidad asignada.",
        en: "At least one author of each accepted work must register and present the contribution in the assigned modality.",
      },
      {
        es: "Las contribuciones deben ser originales y respetar criterios de ética académica, citación y ausencia de plagio.",
        en: "Contributions must be original and follow standards for academic ethics, citation, and plagiarism prevention.",
      },
    ],
  },
  {
    key: "submission-guidelines",
    title: {
      es: "Lineamientos de envío",
      en: "SUBMISSION GUIDELINES",
    },
    description: {
      es: "Condiciones preliminares para preparar el archivo y completar la postulación en CMT.",
      en: "Preliminary conditions for preparing the file and completing the submission in CMT.",
    },
    items: [
      {
        es: "Full papers: 8 a 12 páginas en la plantilla oficial del congreso, cuando sea publicada.",
        en: "Full papers: 8 to 12 pages using the official conference template once published.",
      },
      {
        es: "Pósters científicos: contribución de 2 páginas y póster para la feria académica.",
        en: "Scientific posters: two-page contribution and poster for the academic fair.",
      },
      {
        es: "El archivo inicial debe estar anonimizado para revisión doble ciego, sin nombres, afiliaciones ni agradecimientos identificables.",
        en: "The initial file must be anonymized for double-blind review, with no names, affiliations, or identifying acknowledgments.",
      },
      {
        es: "Se aceptará un único envío por contribución en la plataforma CMT, dentro del plazo oficial publicado.",
        en: "One submission per contribution will be accepted in the CMT platform within the official published deadline.",
      },
    ],
  },
  {
    key: "where-to-submit",
    title: {
      es: "Dónde enviar",
      en: "WHERE TO SUBMIT",
    },
    description: {
      es: "Canal editorial preliminar definido para la recepción de trabajos.",
      en: "Preliminary editorial channel defined for receiving submissions.",
    },
    items: [
      {
        es: "El enlace de envío de Microsoft CMT estará disponible próximamente cuando CMT cree el sitio oficial de ICLSET 2026.",
        en: "The Microsoft CMT submission link will be available shortly after CMT creates the official ICLSET 2026 conference site.",
      },
      {
        es: "No se recibirán trabajos por correo electrónico ni mediante plataformas distintas a Microsoft CMT.",
        en: "Submissions will not be accepted by email or through platforms other than Microsoft CMT.",
      },
    ],
  },
  {
    key: "how-to-submit",
    title: {
      es: "Cómo enviar",
      en: "HOW TO SUBMIT",
    },
    description: {
      es: "Flujo previsto para autores una vez habilitado el sitio oficial de ICLSET 2026 en CMT.",
      en: "Expected author workflow once the official ICLSET 2026 site is enabled in CMT.",
    },
    items: [
      {
        es: "Crear o verificar una cuenta personal de Microsoft CMT antes de iniciar el envío.",
        en: "Create or verify a personal Microsoft CMT account before starting the submission.",
      },
      {
        es: "Preparar el PDF anonimizado y seleccionar el track correspondiente durante el envío.",
        en: "Prepare the anonymized PDF and select the corresponding track during submission.",
      },
      {
        es: "Completar los metadatos solicitados en CMT y confirmar que el archivo cargado corresponde a la versión de revisión.",
        en: "Complete the metadata requested by CMT and confirm that the uploaded file is the review version.",
      },
      {
        es: "Conservar el identificador de la contribución para seguimiento, revisión y notificaciones.",
        en: "Keep the contribution identifier for tracking, review, and notifications.",
      },
    ],
  },
];
