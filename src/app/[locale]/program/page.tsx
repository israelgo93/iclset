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
    title: locale === "es" ? "Programa preliminar" : "Preliminary program",
    description:
      locale === "es"
        ? "Programa preliminar de ICLSET 2026 por día, con keynotes, paneles, sesiones paralelas, pósters y clausura."
        : "ICLSET 2026 preliminary program by day, including keynotes, panels, parallel sessions, posters, and closing ceremony.",
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
            ? "Agenda preliminar por día"
            : "Preliminary agenda by day"
        }
        description={
          locale === "es"
            ? "Una estructura inicial para orientar a autores, asistentes y aliados mientras se confirma el programa definitivo."
            : "An initial structure to guide authors, attendees, and partners while the final program is confirmed."
        }
      />
      <ProgramPreviewSection locale={locale} detailed />
    </>
  );
}
