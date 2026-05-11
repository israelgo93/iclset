import { defaultLocale, isLocale, type Locale } from "@/types/locale";

export function normalizeLocale(locale: string): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function localizePath(locale: Locale, href: string) {
  if (href.startsWith("#")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function switchLocalePath(locale: Locale, pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const [, ...rest] = segments;
  const suffix = rest.length > 0 ? `/${rest.join("/")}` : "";

  return `/${locale}${suffix}`;
}
