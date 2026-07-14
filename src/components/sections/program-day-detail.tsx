import {
  ArrowLeft,
  CalendarDays,
  ClipboardCheck,
  Coffee,
  Cpu,
  ExternalLink,
  Flag,
  Landmark,
  Leaf,
  MapPin,
  Mic2,
  Monitor,
  PanelsTopLeft,
  Presentation,
  UsersRound,
  Utensils,
  Wheat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { PageHero } from "@/components/shared/page-hero";
import { programDayDetails } from "@/content/program-days";
import { getProgramSpeakerProfile } from "@/content/program-speakers";
import type {
  ProgramAgendaItem,
  ProgramAgendaItemKind,
  ProgramDayDetail,
  ProgramParticipant,
  ProgramSession,
  ProgramSpeakerProfile,
  ProgramTrackKey,
} from "@/types/conference";
import type { Locale } from "@/types/locale";

interface ProgramDayDetailPageProps {
  day: ProgramDayDetail;
  locale: Locale;
}

const trackStyles: Record<
  ProgramTrackKey,
  {
    badge: string;
    icon: string;
    line: string;
    surface: string;
  }
> = {
  general: {
    badge: "border-iclset-blue/20 bg-iclset-blue-soft text-iclset-blue",
    icon: "bg-iclset-blue-soft text-iclset-blue",
    line: "bg-iclset-blue/25",
    surface: "border-iclset-blue/15 bg-iclset-blue-soft/35",
  },
  bio: {
    badge:
      "border-iclset-emerald/25 bg-iclset-emerald-soft text-[oklch(40%_0.13_158)]",
    icon: "bg-iclset-emerald-soft text-[oklch(40%_0.13_158)]",
    line: "bg-iclset-emerald/30",
    surface: "border-iclset-emerald/20 bg-iclset-emerald-soft/45",
  },
  agro: {
    badge:
      "border-iclset-green/25 bg-iclset-green-soft text-[oklch(38%_0.13_142)]",
    icon: "bg-iclset-green-soft text-[oklch(38%_0.13_142)]",
    line: "bg-iclset-green/30",
    surface: "border-iclset-green/20 bg-iclset-green-soft/45",
  },
  tech: {
    badge: "border-iclset-blue/20 bg-iclset-blue-soft text-iclset-blue",
    icon: "bg-iclset-blue-soft text-iclset-blue",
    line: "bg-iclset-blue/30",
    surface: "border-iclset-blue/15 bg-iclset-blue-soft/40",
  },
};

export function ProgramDayDetailPage({
  day,
  locale,
}: ProgramDayDetailPageProps) {
  const profiles = day.speakerProfileIds
    .map((id) => getProgramSpeakerProfile(id))
    .filter(isSpeakerProfile);

  return (
    <>
      <PageHero
        eyebrow={day.eyebrow[locale]}
        title={day.title[locale]}
        description={day.description[locale]}
      />

      <div className="relative isolate overflow-hidden bg-white">
        <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-25" />

        <section className="section-container py-8 sm:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link
              href={`/${locale}/program`}
              className="border-iclset-blue/15 text-iclset-blue focus-visible:outline-iclset-sky hover:bg-iclset-blue-soft inline-flex min-h-11 w-fit items-center gap-2 rounded-full border bg-white px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-3"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {locale === "es" ? "Volver al programa" : "Back to program"}
            </Link>

            <nav
              aria-label={
                locale === "es" ? "Programa por día" : "Program by day"
              }
              className="flex flex-wrap gap-2"
            >
              {programDayDetails.map((programDay) => {
                const isCurrent = programDay.slug === day.slug;

                return (
                  <Link
                    key={programDay.slug}
                    href={`/${locale}/program/${programDay.slug}`}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent
                        ? "bg-iclset-navy focus-visible:outline-iclset-sky inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-semibold text-white focus-visible:outline-3 focus-visible:outline-offset-3"
                        : "border-iclset-blue/15 text-iclset-ink focus-visible:outline-iclset-sky hover:bg-iclset-blue-soft inline-flex min-h-11 items-center rounded-full border bg-white px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-3"
                    }
                  >
                    {programDay.day[locale]}
                  </Link>
                );
              })}
            </nav>
          </div>

          <dl className="border-iclset-blue/12 mt-8 grid overflow-hidden rounded-lg border bg-white/90 shadow-[0_12px_36px_-30px_rgb(8_24_50_/_0.38)] sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
            {day.facts.map((fact) => (
              <div
                key={fact.label.en}
                className="border-b border-slate-200 px-5 py-4 last:border-b-0 sm:border-b-0"
              >
                <dt className="text-iclset-muted text-xs font-semibold uppercase">
                  {fact.label[locale]}
                </dt>
                <dd className="text-iclset-ink mt-2 text-sm leading-6 font-semibold">
                  {fact.value[locale]}
                </dd>
              </div>
            ))}
          </dl>

          <nav
            aria-label={
              locale === "es" ? "Bloques de la jornada" : "Program sessions"
            }
            className="mt-6 flex gap-2 overflow-x-auto pb-2"
          >
            {day.sessions.map((session) => {
              const styles = trackStyles[session.track];

              return (
                <a
                  key={session.id}
                  href={`#${session.id}`}
                  className={`focus-visible:outline-iclset-sky inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 ${styles.badge}`}
                >
                  <TrackIcon track={session.track} className="size-3.5" />
                  {session.title[locale]}
                </a>
              );
            })}
          </nav>
        </section>

        <div className="section-container">
          {day.sessions.map((session) => (
            <ProgramSessionSection
              key={session.id}
              session={session}
              locale={locale}
            />
          ))}
        </div>

        {profiles.length > 0 ? (
          <SpeakerProfiles profiles={profiles} locale={locale} />
        ) : null}
      </div>
    </>
  );
}

interface ProgramSessionSectionProps {
  session: ProgramSession;
  locale: Locale;
}

function ProgramSessionSection({
  session,
  locale,
}: ProgramSessionSectionProps) {
  const styles = trackStyles[session.track];

  return (
    <section
      id={session.id}
      aria-labelledby={`${session.id}-title`}
      className="scroll-mt-24 border-t border-slate-200 py-10 sm:py-12"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.68fr)_minmax(18rem,0.32fr)] lg:items-start">
        <div className="max-w-3xl">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${styles.badge}`}
          >
            <TrackIcon track={session.track} className="size-3.5" />
            {session.label[locale]}
          </span>
          <h2
            id={`${session.id}-title`}
            className="text-iclset-ink mt-4 text-3xl leading-tight font-semibold sm:text-4xl"
          >
            {session.title[locale]}
          </h2>
          <p className="text-iclset-muted mt-3 max-w-[70ch] text-base leading-7">
            {session.description[locale]}
          </p>
        </div>

        <dl className={`rounded-lg border p-4 ${styles.surface}`}>
          <SessionMetaRow
            icon={<MapPin className="size-4" aria-hidden="true" />}
            label={locale === "es" ? "Sede" : "Venue"}
            value={session.venue[locale]}
          />
          <SessionMetaRow
            icon={<Monitor className="size-4" aria-hidden="true" />}
            label={locale === "es" ? "Modalidad" : "Format"}
            value={session.format[locale]}
          />
          {session.moderators !== undefined ? (
            <SessionMetaRow
              icon={<UsersRound className="size-4" aria-hidden="true" />}
              label={locale === "es" ? "Coordinación" : "Coordination"}
              value={session.moderators[locale]}
            />
          ) : null}
          {session.zoomUrl !== undefined ? (
            <div className="mt-3 border-t border-current/10 pt-3">
              <a
                href={session.zoomUrl}
                target="_blank"
                rel="noreferrer"
                className="text-iclset-blue focus-visible:outline-iclset-sky hover:bg-iclset-blue-soft inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-3"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                {locale === "es" ? "Abrir sala Zoom" : "Open Zoom room"}
              </a>
            </div>
          ) : null}
        </dl>
      </div>

      <ol className="mt-8">
        {session.items.map((item, index) => (
          <ProgramAgendaRow
            key={`${item.time}-${item.title.en}`}
            item={item}
            locale={locale}
            track={session.track}
            isLast={index === session.items.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

interface SessionMetaRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function SessionMetaRow({ icon, label, value }: SessionMetaRowProps) {
  return (
    <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2 py-2 first:pt-0 last:pb-0">
      <span className="text-iclset-blue mt-0.5">{icon}</span>
      <div>
        <dt className="text-iclset-muted text-[0.68rem] font-semibold uppercase">
          {label}
        </dt>
        <dd className="text-iclset-ink mt-1 text-sm leading-5 font-medium">
          {value}
        </dd>
      </div>
    </div>
  );
}

interface ProgramAgendaRowProps {
  item: ProgramAgendaItem;
  locale: Locale;
  track: ProgramTrackKey;
  isLast: boolean;
}

function ProgramAgendaRow({
  item,
  locale,
  track,
  isLast,
}: ProgramAgendaRowProps) {
  const styles = trackStyles[track];

  return (
    <li
      className={`relative grid gap-4 border-t border-slate-200 py-5 sm:grid-cols-[7.75rem_2.75rem_minmax(0,1fr)] sm:gap-5 sm:py-6 ${isLast ? "border-b" : ""}`}
    >
      <p className="text-iclset-blue pt-1 font-mono text-sm font-semibold">
        {item.time}
      </p>

      <div className="relative hidden sm:flex sm:justify-center">
        {!isLast ? (
          <span
            aria-hidden="true"
            className={`absolute top-11 bottom-[-1.55rem] left-1/2 w-px -translate-x-1/2 ${styles.line}`}
          />
        ) : null}
        <span
          className={`relative z-10 flex size-10 items-center justify-center rounded-full ${styles.icon}`}
        >
          <AgendaItemIcon kind={item.kind} className="size-4.5" />
        </span>
      </div>

      <div className="min-w-0">
        <div className="flex gap-3 sm:block">
          <span
            className={`flex size-9 shrink-0 items-center justify-center rounded-full sm:hidden ${styles.icon}`}
          >
            <AgendaItemIcon kind={item.kind} className="size-4" />
          </span>
          <div className="min-w-0">
            <h3 className="text-iclset-ink text-lg leading-snug font-semibold sm:text-xl">
              {item.title[locale]}
            </h3>
            {item.description !== undefined ? (
              <p className="text-iclset-muted mt-2 max-w-[72ch] text-sm leading-6">
                {item.description[locale]}
              </p>
            ) : null}
          </div>
        </div>

        {item.participants !== undefined && item.participants.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-3">
            {item.participants.map((person) => (
              <ParticipantSummary
                key={`${person.name}-${person.role?.en ?? "speaker"}`}
                participant={person}
                locale={locale}
              />
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}

interface ParticipantSummaryProps {
  participant: ProgramParticipant;
  locale: Locale;
}

function ParticipantSummary({ participant, locale }: ParticipantSummaryProps) {
  const profile =
    participant.profileId !== undefined
      ? getProgramSpeakerProfile(participant.profileId)
      : undefined;
  const affiliation =
    participant.affiliation?.[locale] ?? profile?.affiliation?.[locale];

  return (
    <li className="flex max-w-full min-w-0 items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5 sm:max-w-[24rem]">
      {profile?.image !== undefined ? (
        <Image
          src={profile.image.src}
          alt={profile.image.alt[locale]}
          width={80}
          height={80}
          className="size-12 shrink-0 rounded-md object-cover"
        />
      ) : (
        <span className="bg-iclset-blue-soft text-iclset-blue flex size-12 shrink-0 items-center justify-center rounded-md">
          <UsersRound className="size-5" aria-hidden="true" />
        </span>
      )}
      <span className="min-w-0">
        <span className="text-iclset-ink block text-sm leading-snug font-semibold">
          {participant.name}
        </span>
        {participant.role !== undefined ? (
          <span className="text-iclset-muted mt-0.5 block text-xs leading-5">
            {participant.role[locale]}
          </span>
        ) : null}
        {affiliation !== undefined ? (
          <span className="text-iclset-muted mt-0.5 block text-xs leading-5">
            {affiliation}
          </span>
        ) : null}
      </span>
    </li>
  );
}

interface SpeakerProfilesProps {
  profiles: ProgramSpeakerProfile[];
  locale: Locale;
}

function SpeakerProfiles({ profiles, locale }: SpeakerProfilesProps) {
  return (
    <section
      id="speaker-profiles"
      aria-labelledby="speaker-profiles-title"
      className="border-t border-slate-200 bg-slate-50/75 py-12 sm:py-16"
    >
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-iclset-blue inline-flex items-center gap-2 text-sm font-semibold">
            <Mic2 className="size-4" aria-hidden="true" />
            {locale === "es" ? "Perfiles" : "Profiles"}
          </span>
          <h2
            id="speaker-profiles-title"
            className="text-iclset-ink mt-3 text-3xl leading-tight font-semibold sm:text-4xl"
          >
            {locale === "es" ? "Ponentes" : "Speakers"}
          </h2>
        </div>

        <div className="mt-8 grid gap-5">
          {profiles.map((profile) => (
            <article
              key={profile.id}
              className="border-iclset-blue/12 grid gap-5 rounded-lg border bg-white p-4 shadow-[0_16px_48px_-38px_rgb(8_24_50_/_0.35)] sm:grid-cols-[10rem_minmax(0,1fr)] sm:p-5"
            >
              {profile.image !== undefined ? (
                <Image
                  src={profile.image.src}
                  alt={profile.image.alt[locale]}
                  width={320}
                  height={400}
                  sizes="(max-width: 640px) 100vw, 160px"
                  className="aspect-[4/5] w-full rounded-lg object-cover sm:w-40"
                />
              ) : (
                <span className="bg-iclset-blue-soft text-iclset-blue flex aspect-[4/5] w-full items-center justify-center rounded-lg sm:w-40">
                  <UsersRound className="size-9" aria-hidden="true" />
                </span>
              )}

              <div className="min-w-0">
                <h3 className="text-iclset-ink text-xl leading-tight font-semibold sm:text-2xl">
                  {profile.name}
                </h3>
                <p className="text-iclset-blue mt-1 text-sm leading-6 font-semibold">
                  {profile.role[locale]}
                </p>
                {profile.affiliation !== undefined ? (
                  <p className="text-iclset-muted mt-1 text-sm leading-6">
                    {profile.affiliation[locale]}
                  </p>
                ) : null}

                {profile.biography !== undefined ? (
                  <div className="mt-5 grid gap-3">
                    <h4 className="text-iclset-ink text-sm font-semibold">
                      {locale === "es" ? "Biografía" : "Biography"}
                    </h4>
                    {profile.biography.map((paragraph) => (
                      <p
                        key={paragraph.en}
                        className="text-iclset-muted max-w-[75ch] text-sm leading-7"
                      >
                        {paragraph[locale]}
                      </p>
                    ))}
                  </div>
                ) : null}

                {profile.presentation !== undefined ? (
                  <div className="border-iclset-blue/12 mt-5 border-t pt-5">
                    <h4 className="text-iclset-ink text-base leading-snug font-semibold">
                      {profile.presentation.title[locale]}
                    </h4>
                    <p className="text-iclset-muted mt-2 max-w-[75ch] text-sm leading-7">
                      {profile.presentation.abstract[locale]}
                    </p>
                    {profile.presentation.keywords !== undefined ? (
                      <p className="text-iclset-ink mt-3 max-w-[75ch] text-sm leading-6">
                        <span className="font-semibold">
                          {locale === "es" ? "Palabras clave:" : "Keywords:"}
                        </span>{" "}
                        {profile.presentation.keywords[locale]}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function isSpeakerProfile(
  profile: ProgramSpeakerProfile | undefined,
): profile is ProgramSpeakerProfile {
  return profile !== undefined;
}

interface IconProps {
  className?: string;
}

interface AgendaItemIconProps extends IconProps {
  kind: ProgramAgendaItemKind;
}

function AgendaItemIcon({ kind, className }: AgendaItemIconProps) {
  switch (kind) {
    case "registration":
      return <ClipboardCheck className={className} aria-hidden="true" />;
    case "ceremony":
      return <Landmark className={className} aria-hidden="true" />;
    case "keynote":
      return <Mic2 className={className} aria-hidden="true" />;
    case "presentation":
      return <Presentation className={className} aria-hidden="true" />;
    case "poster":
      return <PanelsTopLeft className={className} aria-hidden="true" />;
    case "break":
      return <Coffee className={className} aria-hidden="true" />;
    case "meal":
      return <Utensils className={className} aria-hidden="true" />;
    case "closing":
      return <Flag className={className} aria-hidden="true" />;
    default: {
      const exhaustiveKind: never = kind;
      return exhaustiveKind;
    }
  }
}

interface TrackIconProps extends IconProps {
  track: ProgramTrackKey;
}

function TrackIcon({ track, className }: TrackIconProps) {
  switch (track) {
    case "general":
      return <CalendarDays className={className} aria-hidden="true" />;
    case "bio":
      return <Leaf className={className} aria-hidden="true" />;
    case "agro":
      return <Wheat className={className} aria-hidden="true" />;
    case "tech":
      return <Cpu className={className} aria-hidden="true" />;
    default: {
      const exhaustiveTrack: never = track;
      return exhaustiveTrack;
    }
  }
}
