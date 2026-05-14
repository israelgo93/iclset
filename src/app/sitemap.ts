import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { cmtAcknowledgmentPath } from "@/content/cmt";
import { navigation } from "@/content/navigation";
import { locales } from "@/types/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...navigation.map((item) => item.href)];
  const localizedRoutes = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${site.baseUrl}/${locale}${route}`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  return [
    ...localizedRoutes,
    {
      url: `${site.baseUrl}${cmtAcknowledgmentPath}`,
      lastModified: new Date("2026-05-14"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
