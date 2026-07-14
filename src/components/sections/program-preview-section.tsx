"use client";

import {
  ArrowUpRight,
  CalendarClock,
  CalendarPlus,
  ChevronDown,
  Download,
  MapPin,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { conference } from "@/content/conference";
import { schedule } from "@/content/schedule";
import type { Locale } from "@/types/locale";

interface ProgramPreviewSectionProps {
  locale: Locale;
  detailed?: boolean;
}

const dayAccentStyles = [
  {
    text: "text-iclset-emerald",
    border: "border-l-iclset-emerald",
    edge: "border-iclset-emerald/25",
    ring: "ring-iclset-emerald/20",
    glow: "shadow-[0_22px_70px_-46px_rgb(16_185_129_/_0.45)]",
  },
  {
    text: "text-iclset-blue",
    border: "border-l-iclset-blue",
    edge: "border-iclset-blue/25",
    ring: "ring-iclset-blue/20",
    glow: "shadow-[0_22px_70px_-46px_rgb(31_148_255_/_0.45)]",
  },
  {
    text: "text-iclset-green",
    border: "border-l-iclset-green",
    edge: "border-iclset-green/25",
    ring: "ring-iclset-green/20",
    glow: "shadow-[0_22px_70px_-46px_rgb(78_205_87_/_0.42)]",
  },
] as const;

const easing = [0.22, 1, 0.36, 1] as const;
const eventStartDate = "20260715T080000";
const eventEndDate = "20260717T173000";
const eventTimeZone = "America/Guayaquil";

function getDayAccent(index: number) {
  return dayAccentStyles[index] ?? dayAccentStyles[0];
}

function createCalendarLinks(locale: Locale) {
  const title =
    locale === "es"
      ? "ICLSET 2026 - Conferencia internacional"
      : "ICLSET 2026 - International conference";
  const details =
    locale === "es"
      ? "Recordatorio de ICLSET 2026: programa académico con plenarias, sesiones por track y presentación de pósters durante los tres días."
      : "Reminder for ICLSET 2026: academic program with plenaries, track sessions, and poster presentations across all three days.";
  const reminder =
    locale === "es"
      ? "ICLSET 2026 inicia mañana. Revisa el programa académico y los accesos institucionales."
      : "ICLSET 2026 starts tomorrow. Review the academic program and institutional access details.";
  const location = `${conference.location.venue}, ${conference.location.city}, ${conference.location.province}, ${conference.location.country}`;
  const googleParams = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${eventStartDate}/${eventEndDate}`,
    ctz: eventTimeZone,
    details,
    location,
  });
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ICLSET 2026//Academic Program//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:iclset-2026-academic-program@iclset.com",
    `DTSTAMP:${eventStartDate}Z`,
    `DTSTART;TZID=${eventTimeZone}:${eventStartDate}`,
    `DTEND;TZID=${eventTimeZone}:${eventEndDate}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${details}`,
    `LOCATION:${location}`,
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:${reminder}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return {
    google: `https://calendar.google.com/calendar/render?${googleParams.toString()}`,
    ics: `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`,
  };
}

export function ProgramPreviewSection({
  locale,
  detailed = false,
}: ProgramPreviewSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [agendasOpen, setAgendasOpen] = useState(true);
  const calendarLinks = createCalendarLinks(locale);
  const sectionIntro =
    locale === "es"
      ? "Agenda resumida por jornada, con acceso al cronograma completo de cada día y presentación de pósters en las tres fechas."
      : "A concise daily agenda with access to each day's full schedule and poster presentations on all three dates.";
  const sectionClassName = detailed
    ? "relative isolate w-full overflow-hidden py-14 sm:py-16 lg:py-18"
    : "relative isolate w-full overflow-hidden py-14 sm:py-16 lg:min-h-svh lg:py-16";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateAgendaState = () => {
      setAgendasOpen(!mediaQuery.matches);
    };

    updateAgendaState();
    mediaQuery.addEventListener("change", updateAgendaState);

    return () => {
      mediaQuery.removeEventListener("change", updateAgendaState);
    };
  }, []);

  return (
    <section className={sectionClassName}>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(135deg,oklch(97%_0.025_220),oklch(93%_0.04_165))]" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-42" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_18%_12%,oklch(80%_0.14_215_/_0.28),transparent_26rem),radial-gradient(circle_at_86%_18%,oklch(78%_0.22_142_/_0.2),transparent_24rem)]" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.35fr)] lg:items-end">
          <div className="max-w-4xl">
            <span className="border-iclset-blue/15 text-iclset-blue inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase shadow-[0_8px_24px_-14px_rgb(31_148_255_/_0.45)] backdrop-blur">
              <span className="bg-iclset-blue size-1.5 rounded-full" />
              {locale === "es" ? "Programa académico" : "Academic program"}
            </span>
            <h2 className="text-iclset-ink mt-4 max-w-3xl text-3xl leading-[1.03] font-semibold tracking-tight sm:text-4xl lg:text-[2.45rem]">
              {locale === "es"
                ? "Tres días de ciencia, diálogo y transferencia"
                : "Three days of science, dialogue, and transfer"}
            </h2>
            <p className="text-iclset-muted mt-3 max-w-3xl text-base leading-7 lg:text-[1.02rem]">
              {sectionIntro}
            </p>
          </div>

          <div className="border-iclset-blue/15 rounded-[1.75rem] border bg-white/84 p-4 shadow-[0_24px_80px_-46px_rgb(8_24_50_/_0.28)] ring-1 ring-white/60 backdrop-blur-xl">
            <p className="text-iclset-muted text-xs font-semibold tracking-[0.16em] uppercase">
              {locale === "es" ? "Recordatorio" : "Reminder"}
            </p>
            <p className="text-iclset-ink mt-2 text-lg leading-tight font-semibold">
              {locale === "es" ? "Agenda ICLSET 2026" : "ICLSET 2026 agenda"}
            </p>
            <p className="text-iclset-muted mt-2 text-sm leading-6">
              {locale === "es"
                ? "Agrega el evento a tu calendario con un recordatorio un día antes."
                : "Add the event to your calendar with a one-day reminder."}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={calendarLinks.google}
                target="_blank"
                rel="noreferrer"
                className="from-iclset-blue to-iclset-green focus-visible:outline-iclset-sky inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_44px_-22px_rgb(31_148_255_/_0.8)] transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3"
              >
                <CalendarPlus className="size-4" />
                {locale === "es" ? "Agregar a calendario" : "Add to calendar"}
              </a>
              <a
                href={calendarLinks.ics}
                download="iclset-2026.ics"
                className="border-iclset-blue/15 text-iclset-ink focus-visible:outline-iclset-sky inline-flex min-h-11 items-center justify-center gap-2 rounded-full border bg-white/72 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3"
              >
                <Download className="text-iclset-blue size-4" />
                {locale === "es" ? "Otros calendarios" : "Other calendars"}
              </a>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-3 xl:gap-5">
          {schedule.map((day, index) => (
            <ProgramDayCard
              key={day.day.en}
              day={day}
              index={index}
              locale={locale}
              shouldReduceMotion={shouldReduceMotion}
              initiallyOpen={agendasOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProgramDayCardProps {
  day: (typeof schedule)[number];
  index: number;
  locale: Locale;
  shouldReduceMotion: boolean | null;
  initiallyOpen: boolean;
}

function ProgramDayCard({
  day,
  index,
  locale,
  shouldReduceMotion,
  initiallyOpen,
}: ProgramDayCardProps) {
  const accent = getDayAccent(index);
  const detailHref =
    day.detailPage !== undefined ? `/${locale}${day.detailPage.href}` : null;
  const imageCard = (
    <div
      className={`bg-iclset-navy relative overflow-hidden rounded-[1.25rem] border shadow-[0_22px_54px_-32px_rgb(6_20_38_/_0.48)] ${accent.edge}`}
    >
      <Image
        src={day.image.src}
        alt={day.image.alt[locale]}
        width={1024}
        height={768}
        sizes="(max-width: 1024px) 100vw, 33vw"
        loading={index === 0 ? "eager" : "lazy"}
        className="ease-iclset aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02] lg:aspect-[2.6/1]"
      />
      <div className="from-iclset-navy/78 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-3.5">
        <p className="text-sm font-semibold text-white">{day.day[locale]}</p>
        <p className="text-xs font-medium text-white/78">{day.date[locale]}</p>
      </div>
    </div>
  );

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        ease: easing,
        delay: 0.05 * index,
      }}
      className={`text-iclset-ink min-w-0 overflow-hidden rounded-[1.75rem] border bg-white/86 ring-1 backdrop-blur-xl ${accent.edge} ${accent.ring} ${accent.glow}`}
    >
      <div className="p-3">
        {detailHref !== null && day.detailPage !== undefined ? (
          <Link
            href={detailHref}
            target="_blank"
            rel="noreferrer"
            aria-label={day.detailPage.ariaLabel[locale]}
            className="focus-visible:outline-iclset-sky block rounded-[1.25rem] focus-visible:outline-3 focus-visible:outline-offset-3"
          >
            {imageCard}
          </Link>
        ) : (
          imageCard
        )}
      </div>

      <div className="p-4 pt-1 sm:p-5 sm:pt-2">
        <div className="border-iclset-blue/10 border-b pb-3 lg:min-h-[5.25rem]">
          <h3 className="text-iclset-ink text-lg leading-tight font-semibold tracking-tight lg:text-[1.15rem] xl:text-[1.22rem]">
            {day.summary[locale]}
          </h3>
          {detailHref !== null && day.detailPage !== undefined ? (
            <Link
              href={detailHref}
              target="_blank"
              rel="noreferrer"
              aria-label={day.detailPage.ariaLabel[locale]}
              className="border-iclset-blue/15 text-iclset-blue focus-visible:outline-iclset-sky mt-3 inline-flex min-h-10 items-center gap-2 rounded-full border bg-white/78 px-3.5 py-2 text-xs font-semibold transition-colors hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3"
            >
              <span>{day.detailPage.label[locale]}</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
        </div>

        <details
          open={initiallyOpen}
          className="group mt-3 [&>summary::-webkit-details-marker]:hidden"
        >
          <summary className="border-iclset-blue/10 text-iclset-ink focus-visible:outline-iclset-sky flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl border bg-white/76 px-3 py-2.5 text-sm font-semibold shadow-[0_12px_40px_-32px_rgb(8_24_50_/_0.4)] transition-colors hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3">
            <span className="flex items-center gap-2">
              <CalendarClock className={`size-4 ${accent.text}`} />
              {locale === "es" ? "Agenda del día" : "Day agenda"}
            </span>
            <span className="text-iclset-muted flex items-center gap-2 text-xs font-medium">
              {day.items.length} {locale === "es" ? "bloques" : "blocks"}
              <ChevronDown className="ease-iclset size-4 transition-transform duration-200 group-open:rotate-180" />
            </span>
          </summary>

          <ol className="mt-2.5 grid gap-2">
            {day.items.map((item) => (
              <li
                key={`${item.time}-${item.title.en}`}
                className="border-iclset-blue/10 min-w-0 rounded-[1.05rem] border bg-white/74 p-2.5 shadow-[0_14px_44px_-34px_rgb(8_24_50_/_0.35)] transition-colors hover:bg-white"
              >
                <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                  <p
                    className={`font-mono text-[0.8rem] leading-none font-semibold ${accent.text}`}
                  >
                    {item.time}
                  </p>
                  <h4 className="text-iclset-ink min-w-0 flex-1 text-sm leading-snug font-semibold">
                    {item.title[locale]}
                  </h4>
                </div>
                <div
                  className={`mt-1.5 min-w-0 border-l-2 pl-2.5 ${accent.border}`}
                >
                  <p className="text-iclset-muted text-[0.78rem] leading-5">
                    {item.description[locale]}
                  </p>
                  <p className="text-iclset-muted mt-1 flex min-w-0 items-start gap-1.5 text-[0.7rem] leading-tight font-medium">
                    <MapPin className="mt-0.5 size-3 shrink-0" />
                    <span>{item.modality[locale]}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </motion.article>
  );
}
