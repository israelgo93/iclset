"use client";

import { MapPin, MonitorUp, Waves } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface VenueSectionProps {
  locale: Locale;
}

const easing = [0.22, 1, 0.36, 1] as const;
const venueVideoId = "rwI1DL37Pyo";
const venueVideoSrc = `https://www.youtube-nocookie.com/embed/${venueVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${venueVideoId}&start=7&end=32&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3`;

const cardStyles = [
  {
    accent: "text-iclset-cyan",
    ring: "ring-iclset-cyan/30",
  },
  {
    accent: "text-iclset-green",
    ring: "ring-iclset-green/30",
  },
  {
    accent: "text-iclset-sky",
    ring: "ring-iclset-sky/30",
  },
] as const;

export function VenueSection({ locale }: VenueSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateVideoVisibility = () => {
      setShowVideo(mediaQuery.matches);
    };

    updateVideoVisibility();
    mediaQuery.addEventListener("change", updateVideoVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateVideoVisibility);
    };
  }, []);

  const items = [
    {
      icon: MapPin,
      title: conference.location.venue,
      text: `${conference.location.mainHall} · ${conference.location.city}, ${conference.location.province}`,
    },
    {
      icon: MonitorUp,
      title: locale === "es" ? "Virtual sincrónica" : "Synchronous virtual",
      text:
        locale === "es"
          ? "Salas Zoom institucionales: una sala plenaria y tres salas paralelas, una por track."
          : "Institutional Zoom rooms: one plenary room and three parallel rooms, one per track.",
    },
    {
      icon: Waves,
      title: locale === "es" ? "Territorio costero" : "Coastal territory",
      text:
        locale === "es"
          ? "Manta aporta contexto territorial, biodiversidad, puerto, agroindustria y transferencia."
          : "Manta contributes territorial context, biodiversity, port activity, agroindustry, and transfer.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="md:bg-iclset-navy absolute inset-0 -z-30 bg-[linear-gradient(135deg,oklch(96%_0.03_220),oklch(91%_0.045_165))]" />
      {showVideo && !shouldReduceMotion ? (
        <div className="pointer-events-none absolute inset-0 -z-20 hidden overflow-hidden md:block">
          <iframe
            title={
              locale === "es"
                ? "Video de fondo de Manta"
                : "Manta background video"
            }
            src={venueVideoSrc}
            allow="autoplay; encrypted-media; picture-in-picture"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute top-1/2 left-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-110 border-0 opacity-55 blur-[1px]"
          />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-[radial-gradient(circle_at_18%_34%,oklch(80%_0.14_215_/_0.24),transparent_31rem),radial-gradient(circle_at_82%_28%,oklch(78%_0.22_142_/_0.22),transparent_30rem),linear-gradient(90deg,oklch(10%_0.045_250_/_0.64),oklch(13%_0.05_235_/_0.45)_45%,oklch(97%_0.015_220_/_0.62))] backdrop-blur-[1px] md:block" />
      <div className="tech-grid-dark pointer-events-none absolute inset-0 -z-10 hidden opacity-45 md:block" />
      <div className="tech-grid pointer-events-none absolute inset-0 -z-10 opacity-45 md:hidden" />

      <div className="section-container grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center xl:grid-cols-[0.66fr_1.34fr]">
        <div className="order-2 grid gap-3 lg:order-1">
          {items.map((item, index) => {
            const Icon = item.icon;
            const style = cardStyles[index];

            return (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  ease: easing,
                  delay: 0.07 * index,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6, transition: { duration: 0.25, ease: easing } }
                }
                className={`text-iclset-ink rounded-[1.1rem] border border-white/22 bg-white/84 p-4 shadow-[0_20px_64px_-42px_rgb(8_24_50_/_0.55)] ring-1 ${style.ring} md:bg-iclset-navy/36 md:hover:bg-iclset-navy/44 backdrop-blur-md transition-colors hover:bg-white/92 md:text-white xl:p-4`}
              >
                <span
                  className={`inline-grid size-9 place-items-center rounded-xl bg-white/70 backdrop-blur md:bg-white/16 ${style.accent}`}
                >
                  <Icon className="size-[1.125rem]" />
                </span>
                <h3 className="mt-3 text-base leading-snug font-semibold">
                  {item.title}
                </h3>
                <p className="text-iclset-muted mt-1.5 text-[0.82rem] leading-5 md:text-white/82">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easing }}
          className="border-iclset-blue/15 md:bg-iclset-navy/26 order-1 rounded-[1.75rem] border bg-white/86 p-6 shadow-[0_28px_90px_-46px_rgb(8_24_50_/_0.5)] backdrop-blur-xl md:border-white/22 md:p-8 md:text-white lg:order-2 xl:p-10"
        >
          <span className="border-iclset-blue/15 text-iclset-blue md:text-iclset-cyan inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase shadow-[0_8px_24px_-14px_rgb(31_148_255_/_0.45)] backdrop-blur md:border-white/18 md:bg-white/12">
            <span className="bg-iclset-blue md:bg-iclset-cyan size-1.5 rounded-full" />
            {locale === "es" ? "Sede híbrida" : "Hybrid venue"}
          </span>
          <h2 className="text-iclset-ink mt-5 max-w-3xl text-4xl leading-[1.02] font-semibold tracking-tight md:text-white lg:text-5xl">
            {locale === "es"
              ? "Manta conecta ciencia, agro y tecnología"
              : "Manta connects science, agriculture, and technology"}
          </h2>
          <p className="text-iclset-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg md:text-white/78">
            {locale === "es"
              ? "La conferencia se desarrollará en la Universidad Laica Eloy Alfaro de Manabí con participación presencial y virtual sincrónica."
              : "The conference will take place at Universidad Laica Eloy Alfaro de Manabí with in-person and synchronous virtual participation."}
          </p>
          <Button asChild size="default" variant="default" className="mt-7">
            <Link href={localizePath(locale, "/venue")}>
              {locale === "es" ? "Ver sede" : "View venue"}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
