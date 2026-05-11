import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommitteesPreview } from "@/components/sections/committees-preview";
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
    pathname: "/committees",
    title: locale === "es" ? "Comités" : "Committees",
    description:
      locale === "es"
        ? "Chairs, comité honorífico, comité organizador y comité científico de ICLSET 2026."
        : "Chairs, honorary committee, organizing committee, and scientific committee for ICLSET 2026.",
  });
}

export default async function CommitteesPage({
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
        eyebrow={locale === "es" ? "Comités" : "Committees"}
        title={
          locale === "es"
            ? "Estructura organizativa y científica"
            : "Organizing and scientific structure"
        }
        description={
          locale === "es"
            ? "La nómina oficial se mantiene centralizada y marcada como pendiente hasta su aprobación."
            : "The official roster remains centralized and marked as pending until approved."
        }
      />
      <CommitteesPreview locale={locale} detailed />
    </>
  );
}
