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

export type ProgramDaySlug =
  | "day-1-it-track"
  | "day-2-tracks"
  | "day-3-open-house";

export type ProgramTrackKey = TrackKey | "general";

export type ProgramAgendaItemKind =
  | "registration"
  | "ceremony"
  | "keynote"
  | "presentation"
  | "poster"
  | "break"
  | "meal"
  | "closing";

export interface ProgramParticipant {
  name: string;
  profileId?: string;
  role?: LocalizedText;
  affiliation?: LocalizedText;
}

export interface ProgramAgendaItem {
  time: string;
  kind: ProgramAgendaItemKind;
  title: LocalizedText;
  description?: LocalizedText;
  participants?: ProgramParticipant[];
}

export interface ProgramSession {
  id: string;
  track: ProgramTrackKey;
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  venue: LocalizedText;
  format: LocalizedText;
  moderators?: LocalizedText;
  zoomUrl?: string;
  items: ProgramAgendaItem[];
}

export interface ProgramSpeakerProfile {
  id: string;
  name: string;
  role: LocalizedText;
  affiliation?: LocalizedText;
  image?: {
    src: string;
    alt: LocalizedText;
  };
  biography?: LocalizedText[];
  presentation?: {
    title: LocalizedText;
    abstract: LocalizedText;
    keywords?: LocalizedText;
  };
}

export interface ProgramDayDetail {
  slug: ProgramDaySlug;
  day: LocalizedText;
  date: LocalizedText;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  facts: {
    label: LocalizedText;
    value: LocalizedText;
  }[];
  sessions: ProgramSession[];
  speakerProfileIds: string[];
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
