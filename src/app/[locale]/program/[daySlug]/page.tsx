import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProgramDayDetailPage } from "@/components/sections/program-day-detail";
import {
  getProgramDayDetail,
  isProgramDaySlug,
  programDayDetails,
} from "@/content/program-days";
import { buildPageMetadata } from "@/lib/metadata";
import { isLocale } from "@/types/locale";

export function generateStaticParams() {
  return programDayDetails.map((day) => ({ daySlug: day.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; daySlug: string }>;
}): Promise<Metadata> {
  const { locale, daySlug } = await params;

  if (!isLocale(locale) || !isProgramDaySlug(daySlug)) {
    return {};
  }

  const day = getProgramDayDetail(daySlug);

  if (day === undefined) {
    return {};
  }

  return buildPageMetadata({
    locale,
    pathname: `/program/${day.slug}`,
    title: day.title[locale],
    description: day.description[locale],
  });
}

export default async function ProgramDayPage({
  params,
}: {
  params: Promise<{ locale: string; daySlug: string }>;
}) {
  const { locale, daySlug } = await params;

  if (!isLocale(locale) || !isProgramDaySlug(daySlug)) {
    notFound();
  }

  const day = getProgramDayDetail(daySlug);

  if (day === undefined) {
    notFound();
  }

  return <ProgramDayDetailPage day={day} locale={locale} />;
}
