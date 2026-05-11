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
}

export interface ScheduleItem {
  time: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ScheduleDay {
  day: LocalizedText;
  date: LocalizedText;
  summary: LocalizedText;
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

export interface NavigationItem {
  href: string;
  label: LocalizedText;
}
