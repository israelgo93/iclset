import type { LocalizedText } from "./locale";

export type TrackKey = "bio" | "agro" | "tech";

export type LinkStatus = "available" | "pending";

export interface ConferenceDate {
  iso: string;
  label: LocalizedText;
  status: "confirmed" | "pending";
}

export interface Track {
  key: TrackKey;
  name: LocalizedText;
  shortName: LocalizedText;
  description: LocalizedText;
  careers: LocalizedText[];
  topics: LocalizedText[];
  chair: LocalizedText;
}

export interface ImportantDate {
  key: string;
  date: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  status: "confirmed" | "pending";
  /** Inicio del hito en formato ISO (YYYY-MM-DD). Usado para calcular estados pasado/activo/futuro. */
  startsAt?: string;
  /** Fin del hito en formato ISO (YYYY-MM-DD). Inclusive. */
  endsAt?: string;
  /** Fecha de cierre anterior, visible cuando se requiere mostrar una reprogramacion. */
  previousEndsAt?: string;
}

export interface ScheduleItemDetails {
  heading: LocalizedText;
  people?: {
    name: string;
    role?: LocalizedText;
  }[];
  bullets?: LocalizedText[];
  paragraphs?: LocalizedText[];
}

export interface ScheduleItem {
  time: string;
  title: LocalizedText;
  description: LocalizedText;
  modality: LocalizedText;
  details?: ScheduleItemDetails;
}

export interface ScheduleDay {
  day: LocalizedText;
  date: LocalizedText;
  summary: LocalizedText;
  detailPage?: {
    href: string;
    label: LocalizedText;
    ariaLabel: LocalizedText;
  };
  image: {
    src: string;
    alt: LocalizedText;
  };
  items: ScheduleItem[];
}

export interface Journal {
  name: string;
  institution: LocalizedText;
  area: LocalizedText;
  indexing: LocalizedText;
  url: string | null;
  status: LinkStatus;
}

export interface CommitteeGroup {
  title: LocalizedText;
  description: LocalizedText;
  members: LocalizedText[];
}

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface RegistrationFee {
  key: string;
  audience: LocalizedText;
  amount: string;
  description: LocalizedText;
  options?: {
    label: LocalizedText;
    amount: string;
  }[];
}

export interface NavigationItem {
  href: string;
  label: LocalizedText;
}
