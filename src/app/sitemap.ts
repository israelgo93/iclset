import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { cmtAcknowledgmentPath } from "@/content/cmt";
import { navigation } from "@/content/navigation";
import { programDayDetails } from "@/content/program-days";
import { locales } from "@/types/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...navigation.map((item) => item.href)];
  const extraLocalizedRoutes = programDayDetails.map(
    (day) => `/program/${day.slug}`,
  );
  const localizedRoutes = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${site.baseUrl}/${locale}${route}`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
  const localizedDetailRoutes = locales.flatMap((locale) =>
    extraLocalizedRoutes.map((route) => ({
      url: `${site.baseUrl}/${locale}${route}`,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  );

  return [
    ...localizedRoutes,
    ...localizedDetailRoutes,
    {
      url: `${site.baseUrl}${cmtAcknowledgmentPath}`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
