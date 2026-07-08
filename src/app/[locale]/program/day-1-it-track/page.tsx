import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Mic2,
  UsersRound,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  dayOneItTrackContent,
  dayOneItTrackSpeakers,
  type DayOneItTrackSpeaker,
} from "@/content/day-1-it-track";
import { schedule } from "@/content/schedule";
import { PageHero } from "@/components/shared/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import type { ScheduleItem, ScheduleItemDetails } from "@/types/conference";
import type { Locale } from "@/types/locale";
import { isLocale } from "@/types/locale";

const dayOneSchedule = schedule[0];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    pathname: "/program/day-1-it-track",
    title: dayOneItTrackContent.title[locale],
    description: dayOneItTrackContent.description[locale],
  });
}

export default async function DayOneItTrackPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={dayOneItTrackContent.eyebrow[locale]}
        title={dayOneItTrackContent.title[locale]}
        description={dayOneItTrackContent.description[locale]}
      />

      <main className="relative isolate overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_6%,oklch(80%_0.14_215_/_0.18),transparent_26rem),radial-gradient(circle_at_88%_18%,oklch(78%_0.22_142_/_0.16),transparent_24rem)]" />
        <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-30" />

        <section className="section-container py-10 sm:py-12">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <Link
              href={`/${locale}/program`}
              className="border-iclset-blue/15 text-iclset-blue focus-visible:outline-iclset-sky inline-flex min-h-10 w-fit items-center gap-2 rounded-full border bg-white/84 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3"
            >
              <ArrowLeft className="size-4" />
              {dayOneItTrackContent.backToProgram[locale]}
            </Link>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[44rem]">
              {dayOneItTrackContent.facts.map((fact) => (
                <div
                  key={fact.label.en}
                  className="border-iclset-blue/10 rounded-[1.25rem] border bg-white/86 p-4 shadow-[0_18px_50px_-36px_rgb(8_24_50_/_0.32)]"
                >
                  <p className="text-iclset-muted text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                    {fact.label[locale]}
                  </p>
                  <p className="text-iclset-ink mt-2 text-sm leading-snug font-semibold">
                    {fact.value[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.28fr)] xl:items-start">
            <section aria-labelledby="day-one-timeline">
              <div className="mb-5 max-w-3xl">
                <span className="text-iclset-blue inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
                  <CalendarDays className="size-4" />
                  {dayOneSchedule.date[locale]}
                </span>
                <h2
                  id="day-one-timeline"
                  className="text-iclset-ink mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
                >
                  {dayOneItTrackContent.timelineTitle[locale]}
                </h2>
                <p className="text-iclset-muted mt-3 text-base leading-7">
                  {dayOneItTrackContent.timelineDescription[locale]}
                </p>
              </div>

              <ol className="before:from-iclset-blue/45 before:via-iclset-emerald/35 before:to-iclset-green/20 relative grid gap-5 before:absolute before:top-5 before:bottom-5 before:left-[1.06rem] before:w-px before:bg-gradient-to-b">
                {dayOneSchedule.items.map((item, index) => (
                  <TimelineItem
                    key={`${item.time}-${item.title.en}`}
                    item={item}
                    index={index}
                    locale={locale}
                  />
                ))}
              </ol>
            </section>

            <aside
              className="xl:sticky xl:top-24"
              aria-labelledby="day-one-speakers"
            >
              <div className="border-iclset-blue/12 rounded-[1.75rem] border bg-white/90 p-4 shadow-[0_24px_70px_-46px_rgb(8_24_50_/_0.36)] ring-1 ring-white/70 backdrop-blur-xl sm:p-5">
                <div className="mb-4">
                  <span className="text-iclset-blue inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase">
                    <Mic2 className="size-4" />
                    {dayOneItTrackContent.trackLabel[locale]}
                  </span>
                  <h2
                    id="day-one-speakers"
                    className="text-iclset-ink mt-2 text-2xl leading-tight font-semibold"
                  >
                    {dayOneItTrackContent.speakersTitle[locale]}
                  </h2>
                  <p className="text-iclset-muted mt-2 text-sm leading-6">
                    {dayOneItTrackContent.speakersDescription[locale]}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {dayOneItTrackSpeakers.map((speaker) => (
                    <SpeakerSummaryCard
                      key={speaker.name}
                      speaker={speaker}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

interface TimelineItemProps {
  item: ScheduleItem;
  index: number;
  locale: Locale;
}

function TimelineItem({ item, index, locale }: TimelineItemProps) {
  return (
    <li className="relative grid gap-3 pl-10">
      <span className="border-iclset-blue/20 bg-iclset-blue absolute top-4 left-0 z-10 flex size-9 items-center justify-center rounded-full border text-xs font-bold text-white shadow-[0_14px_32px_-20px_rgb(31_148_255_/_0.85)]">
        {index + 1}
      </span>

      <article className="border-iclset-blue/10 rounded-[1.5rem] border bg-white/90 p-4 shadow-[0_18px_58px_-42px_rgb(8_24_50_/_0.36)] ring-1 ring-white/80 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-iclset-blue inline-flex items-center gap-2 font-mono text-sm font-semibold">
              <Clock3 className="size-4" />
              {item.time}
            </p>
            <h3 className="text-iclset-ink mt-2 text-xl leading-snug font-semibold">
              {item.title[locale]}
            </h3>
          </div>
          <p className="text-iclset-muted flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold">
            <MapPin className="size-3.5" />
            {item.modality[locale]}
          </p>
        </div>

        <p className="text-iclset-muted mt-4 max-w-3xl text-sm leading-6">
          {item.description[locale]}
        </p>

        {item.details ? (
          <TimelineDetails details={item.details} locale={locale} />
        ) : null}
      </article>
    </li>
  );
}

interface TimelineDetailsProps {
  details: ScheduleItemDetails;
  locale: Locale;
}

function TimelineDetails({ details, locale }: TimelineDetailsProps) {
  return (
    <div className="mt-5 grid gap-4 border-t border-slate-200/80 pt-5">
      <p className="text-iclset-ink text-sm font-semibold">
        {details.heading[locale]}
      </p>

      {details.people !== undefined && details.people.length > 0 ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {details.people.map((person) => (
            <PersonCard key={person.name} person={person} locale={locale} />
          ))}
        </ul>
      ) : null}

      {details.bullets !== undefined && details.bullets.length > 0 ? (
        <ol className="grid gap-2">
          {details.bullets.map((bullet, bulletIndex) => (
            <li
              key={`${bullet.en}-${bulletIndex}`}
              className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 rounded-2xl bg-slate-50/90 p-3"
            >
              <span className="bg-iclset-blue/10 text-iclset-blue flex size-8 items-center justify-center rounded-full text-xs font-bold">
                {bulletIndex + 1}
              </span>
              <span className="text-iclset-muted text-sm leading-6">
                {bullet[locale]}
              </span>
            </li>
          ))}
        </ol>
      ) : null}

      {details.paragraphs !== undefined && details.paragraphs.length > 0 ? (
        <div className="grid gap-3">
          {details.paragraphs.map((paragraph) => (
            <p
              key={paragraph.en}
              className="text-iclset-muted text-sm leading-7"
            >
              {paragraph[locale]}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

interface PersonCardProps {
  person: NonNullable<ScheduleItemDetails["people"]>[number];
  locale: Locale;
}

function PersonCard({ person, locale }: PersonCardProps) {
  const speaker = findSpeakerForPerson(person.name);

  return (
    <li className="border-iclset-blue/10 rounded-2xl border bg-white p-3 shadow-[0_12px_40px_-34px_rgb(8_24_50_/_0.32)]">
      <div className="flex gap-3">
        {speaker ? (
          <Image
            src={speaker.image.src}
            alt={speaker.image.alt[locale]}
            width={96}
            height={96}
            className="size-16 shrink-0 rounded-2xl object-cover"
          />
        ) : (
          <span className="bg-iclset-blue/10 text-iclset-blue flex size-16 shrink-0 items-center justify-center rounded-2xl">
            <UsersRound className="size-6" />
          </span>
        )}
        <div className="min-w-0">
          <p className="text-iclset-ink text-sm leading-snug font-semibold">
            {person.name}
          </p>
          {person.role ? (
            <p className="text-iclset-muted mt-1 text-xs leading-5">
              {person.role[locale]}
            </p>
          ) : null}
        </div>
      </div>
    </li>
  );
}

interface SpeakerSummaryCardProps {
  speaker: DayOneItTrackSpeaker;
  locale: Locale;
}

function SpeakerSummaryCard({ speaker, locale }: SpeakerSummaryCardProps) {
  const role = getSpeakerRole(speaker, locale);

  return (
    <article className="border-iclset-blue/10 rounded-[1.25rem] border bg-white p-3 shadow-[0_16px_46px_-36px_rgb(8_24_50_/_0.34)]">
      <div className="flex items-center gap-3">
        <Image
          src={speaker.image.src}
          alt={speaker.image.alt[locale]}
          width={112}
          height={112}
          className="size-20 shrink-0 rounded-[1rem] object-cover"
        />
        <div className="min-w-0">
          <h3 className="text-iclset-ink text-sm leading-snug font-semibold">
            {speaker.name}
          </h3>
          {role !== null ? (
            <p className="text-iclset-muted mt-1 text-xs leading-5">{role}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function findSpeakerForPerson(name: string): DayOneItTrackSpeaker | undefined {
  return dayOneItTrackSpeakers.find((speaker) =>
    speaker.aliases.includes(name),
  );
}

function getSpeakerRole(
  speaker: DayOneItTrackSpeaker,
  locale: Locale,
): string | null {
  for (const item of dayOneSchedule.items) {
    const person = item.details?.people?.find((entry) =>
      speaker.aliases.includes(entry.name),
    );

    if (person?.role) {
      return person.role[locale];
    }
  }

  return null;
}
