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
        ? "Programa de ICLSET 2026 por día, con keynotes, paneles, sesiones paralelas, pósters y clausura."
        : "ICLSET 2026 program by day, including keynotes, panels, parallel sessions, posters, and closing ceremony.",
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
            ? "Tres jornadas híbridas con plenarias presenciales, sesiones virtuales por track, feria de pósters, mesa de editores y clausura."
            : "Three hybrid days with in-person plenaries, virtual track sessions, poster fair, editors' roundtable, and closing ceremony."
        }
      />
      <ProgramPreviewSection locale={locale} detailed />
    </>
  );
}
