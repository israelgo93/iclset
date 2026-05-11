import Link from "next/link";

import { conference } from "@/content/conference";
import { navigation } from "@/content/navigation";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="text-iclset-ink border-t bg-white">
      <div className="section-container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold">{conference.acronym}</p>
          <p className="text-iclset-muted mt-3 max-w-xl text-sm leading-6">
            {conference.name[locale]} · {conference.location.venue} ·{" "}
            {conference.location.faculty}
          </p>
          <p className="text-iclset-muted mt-5 text-sm">
            {conference.dates.display[locale]} · {conference.location.city},{" "}
            {conference.location.province}, {conference.location.country}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">
            {locale === "es" ? "Navegación" : "Navigation"}
          </p>
          <div className="mt-4 grid gap-2">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={localizePath(locale, item.href)}
                className="text-iclset-muted hover:text-iclset-blue text-sm"
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">
            {locale === "es" ? "Contacto" : "Contact"}
          </p>
          <a
            href={`mailto:${conference.contactEmail}`}
            className="text-iclset-muted hover:text-iclset-blue mt-4 block text-sm"
          >
            {conference.contactEmail}
          </a>
          <p className="text-iclset-muted mt-6 text-xs leading-5">
            © 2026 {conference.acronym}.{" "}
            {locale === "es"
              ? "Primera versión informativa preparada para fase 2."
              : "First informational version prepared for phase 2."}
          </p>
        </div>
      </div>
    </footer>
  );
}
