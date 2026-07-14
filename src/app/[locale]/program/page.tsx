import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProgramPreviewSection } from "@/components/sections/program-preview-section";
import { PageHero } from "@/components/shared/page-hero";
import { buildPageMetadata } from "@/lib/metadata";
import { isLocale } from "@/types/locale";

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
    pathname: "/program",
    title: locale === "es" ? "Programa académico" : "Academic program",
    description:
      locale === "es"
        ? "Programa de ICLSET 2026 por día, con conferencias magistrales, sesiones por track y presentaciones de pósters en las tres jornadas."
        : "ICLSET 2026 program by day, including keynotes, track sessions, and poster presentations across all three days.",
  });
}

export default async function ProgramPage({
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
        eyebrow={locale === "es" ? "Programa" : "Program"}
        title={
          locale === "es"
            ? "Agenda académica por día"
            : "Academic agenda by day"
        }
        description={
          locale === "es"
            ? "Tres jornadas con plenarias, sesiones presenciales y virtuales por track, y presentación de pósters científicos cada día."
            : "Three days of plenaries, in-person and virtual track sessions, and scientific poster presentations every day."
        }
      />
      <ProgramPreviewSection locale={locale} detailed />
    </>
  );
}
