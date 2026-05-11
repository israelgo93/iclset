import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CfpSection } from "@/components/sections/cfp-section";
import { CommitteesPreview } from "@/components/sections/committees-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProgramPreviewSection } from "@/components/sections/program-preview-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { TracksSection } from "@/components/sections/tracks-section";
import { VenueSection } from "@/components/sections/venue-section";
import { buildEventJsonLd, buildPageMetadata } from "@/lib/metadata";
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

  return buildPageMetadata({ locale });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const eventJsonLd = buildEventJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <HeroSection locale={locale} />
      <StatsSection locale={locale} />
      <TracksSection locale={locale} />
      <CfpSection locale={locale} />
      <TimelineSection locale={locale} />
      <ProgramPreviewSection locale={locale} />
      <PublicationsSection locale={locale} />
      <VenueSection locale={locale} />
      <CommitteesPreview locale={locale} />
      <FaqSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </>
  );
}
