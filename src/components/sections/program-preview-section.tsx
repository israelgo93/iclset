"use client";

import { CalendarClock, ChevronDown, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { schedule } from "@/content/schedule";
import type { Locale } from "@/types/locale";

interface ProgramPreviewSectionProps {
  locale: Locale;
  detailed?: boolean;
}

const dayAccentStyles = [
  {
    panel: "from-iclset-emerald/18 via-white to-iclset-green/10",
    media: "from-iclset-emerald to-iclset-green",
    text: "text-iclset-emerald",
    ring: "ring-iclset-emerald/20",
    border: "border-l-iclset-emerald",
  },
  {
    panel: "from-iclset-blue/16 via-white to-iclset-sky/10",
    media: "from-iclset-blue to-iclset-sky",
    text: "text-iclset-blue",
    ring: "ring-iclset-blue/20",
    border: "border-l-iclset-blue",
  },
  {
    panel: "from-iclset-green/16 via-white to-iclset-lime/14",
    media: "from-iclset-green to-iclset-lime",
    text: "text-iclset-green",
    ring: "ring-iclset-green/20",
    border: "border-l-iclset-green",
  },
] as const;

const easing = [0.22, 1, 0.36, 1] as const;

function getDayAccent(index: number) {
  return dayAccentStyles[index] ?? dayAccentStyles[0];
}

export function ProgramPreviewSection({
  locale,
  detailed = false,
}: ProgramPreviewSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionIntro =
    locale === "es"
      ? "Agenda completa visible por jornada, con plenarias, paneles, sesiones por track y feria académica."
      : "Complete agenda visible by day, including plenaries, panels, track sessions, and the academic fair.";
  const sectionScope =
    locale === "es"
      ? "15, 16 y 17 de julio de 2026 - modalidad híbrida"
      : "July 15, 16, and 17, 2026 - hybrid format";
  const sectionClassName = detailed
    ? "relative isolate w-full overflow-hidden py-14 sm:py-16 lg:py-18"
    : "relative isolate w-full overflow-hidden py-14 sm:py-16 lg:min-h-svh lg:py-16";

  return (
    <section className={sectionClassName}>
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-45" />
      <div className="from-iclset-cyan-soft/80 pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b to-transparent" />
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
          <div className="brand-gradient-border rounded-[1.35rem] bg-white/78 p-3.5 shadow-[0_18px_60px_-34px_rgb(15_23_42_/_0.25)] backdrop-blur">
            <p className="text-iclset-muted text-xs font-semibold tracking-[0.16em] uppercase">
              {locale === "es" ? "Los días son:" : "The days are:"}
            </p>
            <p className="text-iclset-ink mt-2 text-lg leading-tight font-semibold">
              {sectionScope}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {schedule.map((day) => (
                <div
                  key={day.day.en}
                  className="border-iclset-blue/10 bg-iclset-surface rounded-2xl border px-2 py-2"
                >
                  <p className="text-iclset-ink text-sm font-semibold">
                    {day.day[locale]}
                  </p>
                  <p className="text-iclset-muted mt-1 text-[0.68rem] leading-tight">
                    {day.date[locale]}
                  </p>
                  <p className="text-iclset-muted mt-1 text-[0.68rem] leading-tight">
                    {day.items.length} {locale === "es" ? "bloques" : "blocks"}
                  </p>
                </div>
              ))}
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
}

function ProgramDayCard({
  day,
  index,
  locale,
  shouldReduceMotion,
}: ProgramDayCardProps) {
  const accent = getDayAccent(index);

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
      className={`group/day border-iclset-blue/10 min-w-0 overflow-hidden rounded-[1.45rem] border bg-gradient-to-br ${accent.panel} shadow-[0_24px_74px_-46px_rgb(15_23_42_/_0.28)] ring-1 ${accent.ring}`}
    >
      <div className={`bg-gradient-to-br ${accent.media} p-2.5`}>
        <div className="bg-iclset-navy relative overflow-hidden rounded-[1.1rem] border border-white/35 shadow-[0_22px_54px_-28px_rgb(6_20_38_/_0.55)]">
          <Image
            src={day.image.src}
            alt={day.image.alt[locale]}
            width={1024}
            height={768}
            sizes="(max-width: 1024px) 100vw, 33vw"
            loading={index === 0 ? "eager" : "lazy"}
            className="ease-iclset aspect-[16/9] h-full w-full object-cover object-center transition-transform duration-500 group-hover/day:scale-[1.025] lg:aspect-[2.6/1]"
          />
          <div className="from-iclset-navy/70 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-3.5">
            <p className="text-sm font-semibold text-white">
              {day.day[locale]}
            </p>
            <p className="text-xs font-medium text-white/78">
              {day.date[locale]}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3.5 sm:p-4">
        <div className="border-iclset-blue/10 border-b pb-3 lg:min-h-[6rem]">
          <p
            className={`text-xs font-semibold tracking-[0.13em] uppercase ${accent.text}`}
          >
            {day.day[locale]} - {day.date[locale]}
          </p>
          <h3 className="text-iclset-ink mt-2 text-lg leading-tight font-semibold tracking-tight lg:text-[1.15rem] xl:text-[1.22rem]">
            {day.summary[locale]}
          </h3>
        </div>

        <details
          open
          className="group mt-3 [&>summary::-webkit-details-marker]:hidden"
        >
          <summary className="border-iclset-blue/10 text-iclset-ink focus-visible:outline-iclset-sky flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl border bg-white/78 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3">
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
                className="border-iclset-blue/10 min-w-0 rounded-[1.05rem] border bg-white/72 p-2.5 transition-colors hover:bg-white"
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
