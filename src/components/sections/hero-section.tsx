import {
  ArrowRight,
  CalendarDays,
  FileText,
  Globe2,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { callsToAction, conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const primaryCta = callsToAction[0];
  const secondaryCtas = callsToAction.slice(1);

  return (
    <section className="text-iclset-ink relative isolate overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,oklch(77%_0.14_210_/_0.24),transparent_26rem),radial-gradient(circle_at_82%_22%,oklch(70%_0.16_155_/_0.18),transparent_24rem),linear-gradient(135deg,oklch(99%_0.008_230),oklch(94%_0.03_210))]" />
      <div className="from-background absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t to-transparent" />
      <div className="section-container grid min-h-[calc(100vh-4.5rem)] gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
        <div>
          <Badge className="border-iclset-cyan/30 text-iclset-blue mb-6 rounded-full bg-white/80 shadow-sm">
            {conference.edition[locale]} · {conference.location.city},{" "}
            {conference.location.country} · Julio 2026
          </Badge>
          <p className="text-iclset-cyan text-sm font-semibold tracking-[0.22em] uppercase">
            {conference.name[locale]}
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {conference.heroTitle[locale]}
          </h1>
          <p className="text-iclset-muted mt-6 max-w-2xl text-lg leading-8">
            {conference.heroDescription[locale]}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-iclset-blue hover:bg-iclset-navy h-12 rounded-full px-6 text-white"
            >
              <Link href={localizePath(locale, primaryCta.href)}>
                {primaryCta.label[locale]}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondaryCtas.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="outline"
                size="lg"
                className="border-iclset-blue/25 text-iclset-ink hover:bg-iclset-blue h-12 rounded-full bg-white/85 px-5 hover:text-white"
              >
                <Link href={localizePath(locale, item.href)}>
                  {item.label[locale]}
                </Link>
              </Button>
            ))}
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white/85 p-4 shadow-sm">
              <dt className="text-iclset-muted flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
                <CalendarDays className="size-4" />
                {locale === "es" ? "Fechas" : "Dates"}
              </dt>
              <dd className="text-iclset-ink mt-2 text-sm font-medium">
                {conference.dates.display[locale]}
              </dd>
            </div>
            <div className="rounded-2xl border bg-white/85 p-4 shadow-sm">
              <dt className="text-iclset-muted flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
                <MapPin className="size-4" />
                {locale === "es" ? "Sede" : "Venue"}
              </dt>
              <dd className="text-iclset-ink mt-2 text-sm font-medium">
                {conference.location.mainHall}
              </dd>
            </div>
            <div className="rounded-2xl border bg-white/85 p-4 shadow-sm">
              <dt className="text-iclset-muted flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
                <Globe2 className="size-4" />
                {locale === "es" ? "Modalidad" : "Mode"}
              </dt>
              <dd className="text-iclset-ink mt-2 text-sm font-medium">
                {conference.modality[locale]}
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="shadow-soft rounded-[2rem] border bg-white/65 p-5 backdrop-blur">
            <div className="text-iclset-ink rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center justify-between gap-4 border-b pb-5">
                <div>
                  <p className="text-iclset-blue text-xs font-semibold tracking-[0.18em] uppercase">
                    {locale === "es" ? "Convocatoria" : "Call"}
                  </p>
                  <p className="mt-1 text-2xl font-semibold">ICLSET 2026</p>
                </div>
                <FileText className="text-iclset-emerald size-10" />
              </div>
              <div className="mt-5 grid gap-4">
                {[
                  locale === "es" ? "Full paper" : "Full paper",
                  locale === "es" ? "Póster científico" : "Scientific poster",
                  locale === "es"
                    ? "Revisión doble ciego"
                    : "Double-blind review",
                  conference.editorialPlatform,
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-muted/45 flex items-center justify-between rounded-2xl border p-4"
                  >
                    <span className="font-medium">{item}</span>
                    <span className="bg-iclset-emerald size-2 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
