import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { navigation } from "@/content/navigation";
import { locales } from "@/types/locale";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...navigation.map((item) => item.href)];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${site.baseUrl}/${locale}${route}`,
      lastModified: new Date("2026-05-11"),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
