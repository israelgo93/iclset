import type { Metadata } from "next";

import { conference } from "@/content/conference";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { eventEndDateTime, eventStartDateTime } from "@/lib/constants";
import { defaultLocale, locales, type Locale } from "@/types/locale";

export function buildAlternates(locale: Locale, pathname = "") {
  const languages = Object.fromEntries(
    locales.map((item) => [item, `/${item}${pathname}`]),
  ) as Record<Locale, string>;

  return {
    canonical: `/${locale}${pathname}`,
    languages: {
      ...languages,
      "x-default": `/${defaultLocale}${pathname}`,
    },
  };
}

export function buildPageMetadata({
  locale,
  pathname = "",
  title,
  description,
}: {
  locale: Locale;
  pathname?: string;
  title?: string;
  description?: string;
}): Metadata {
  const pageTitle = title ?? site.title[locale];
  const pageDescription = description ?? site.description[locale];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...site.keywords],
    alternates: buildAlternates(locale, pathname),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      locale: locale === "es" ? "es_EC" : "en_US",
      siteName: conference.acronym,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export function buildEventJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${conference.acronym} - ${conference.name[locale]}`,
    description: conference.heroDescription[locale],
    startDate: eventStartDateTime,
    endDate: eventEndDateTime,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: conference.location.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: conference.location.city,
        addressRegion: conference.location.province,
        addressCountry: "EC",
      },
    },
    organizer: {
      "@type": "Organization",
      name: conference.location.venue,
    },
  } as const;
}

export function buildFaqJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "es" ? "es-EC" : "en-US",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer[locale],
      },
    })),
  } as const;
}
