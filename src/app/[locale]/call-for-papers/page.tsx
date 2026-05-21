import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CmtComplianceSection } from "@/components/sections/cmt-compliance-section";
import { CfpSection } from "@/components/sections/cfp-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { TimelineSection } from "@/components/sections/timeline-section";
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
    pathname: "/call-for-papers",
    title: locale === "es" ? "Call for Papers" : "Call for Papers",
    description:
      locale === "es"
        ? "Lineamientos para full papers, pósters científicos, ruta Springer del track tecnológico, revisión doble ciego, plantillas y envío mediante Microsoft CMT."
        : "Guidelines for full papers, scientific posters, the technological track Springer pathway, double-blind review, templates, and submission through Microsoft CMT.",
  });
}

export default async function CallForPapersPage({
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
        eyebrow="Call for Papers"
        title={
          locale === "es"
            ? "Lineamientos para autores y envío de contribuciones"
            : "Author guidelines and contribution submission"
        }
        description={
          locale === "es"
            ? "Información pública para full papers, pósters científicos, ruta Springer, revisión doble ciego, anonimización, plantillas y plataforma editorial."
            : "Public information for full papers, scientific posters, Springer pathway, double-blind review, anonymization, templates, and editorial platform."
        }
      />
      <CfpSection locale={locale} />
      <CmtComplianceSection locale={locale} />
      <TimelineSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </>
  );
}
