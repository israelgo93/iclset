import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { VenueSection } from "@/components/sections/venue-section";
import { PageHero } from "@/components/shared/page-hero";
import { conference } from "@/content/conference";
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
    pathname: "/venue",
    title: locale === "es" ? "Sede y modalidad" : "Venue and modality",
    description:
      locale === "es"
        ? "Información sobre Manta, ULEAM, Paraninfo Alfonso Aguilar Ruilova y modalidad híbrida de ICLSET 2026."
        : "Information about Manta, ULEAM, Paraninfo Alfonso Aguilar Ruilova, and ICLSET 2026 hybrid modality.",
  });
}

export default async function VenuePage({
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
        eyebrow={locale === "es" ? "Sede" : "Venue"}
        title={`${conference.location.city}, ${conference.location.province}, ${conference.location.country}`}
        description={
          locale === "es"
            ? "La sede institucional prevista es ULEAM, con evento presencial y virtual sincrónico."
            : "The planned institutional venue is ULEAM, with in-person and synchronous virtual participation."
        }
      />
      <VenueSection locale={locale} />
    </>
  );
}
