import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PublicationsSection } from "@/components/sections/publications-section";
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
    pathname: "/publications",
    title: locale === "es" ? "Publicaciones" : "Publications",
    description:
      locale === "es"
        ? "Proceso editorial de ICLSET 2026, revisión doble ciego, ruta Springer en Scopus, libro de actas y revistas académicas aliadas."
        : "ICLSET 2026 editorial process, double-blind review, Springer Scopus pathway, proceedings, and partner academic journals.",
  });
}

export default async function PublicationsPage({
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
        eyebrow={locale === "es" ? "Publicaciones" : "Publications"}
        title={
          locale === "es"
            ? "Proceso editorial y revistas aliadas"
            : "Editorial process and partner journals"
        }
        description={
          locale === "es"
            ? "Información sobre revisión por pares, ruta Springer, actas y canalización post-conferencia."
            : "Information about peer review, Springer pathway, proceedings, and post-conference pathways."
        }
      />
      <PublicationsSection locale={locale} detailed />
    </>
  );
}
