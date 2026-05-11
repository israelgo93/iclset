import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TracksSection } from "@/components/sections/tracks-section";
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
    pathname: "/tracks",
    title: locale === "es" ? "Tracks científicos" : "Scientific tracks",
    description:
      locale === "es"
        ? "Detalle de los tracks de Ciencias Biológicas y Ambientales, Agrociencias y Tecnologías de la Información."
        : "Details for Biological and Environmental Sciences, Agrosciences, and Information Technologies tracks.",
  });
}

export default async function TracksPage({
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
        eyebrow={locale === "es" ? "Tracks" : "Tracks"}
        title={
          locale === "es"
            ? "Ejes temáticos y áreas de contribución"
            : "Themes and contribution areas"
        }
        description={
          locale === "es"
            ? "Cada track organiza comunidades, líneas de investigación y futuras rutas editoriales."
            : "Each track organizes communities, research lines, and future editorial pathways."
        }
      />
      <TracksSection locale={locale} detailed />
    </>
  );
}
