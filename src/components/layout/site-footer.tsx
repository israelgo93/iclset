import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { conference } from "@/content/conference";
import { cmtAcknowledgmentPath } from "@/content/cmt";
import { navigation } from "@/content/navigation";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-[oklch(15%_0.06_250)] via-[oklch(13%_0.05_252)] to-[oklch(10%_0.04_252)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_18%,oklch(74%_0.16_230_/_0.2),transparent_28rem),radial-gradient(circle_at_88%_82%,oklch(78%_0.22_142_/_0.18),transparent_28rem)]"
      />
      <div
        aria-hidden="true"
        className="tech-grid-dark absolute inset-0 -z-10 opacity-60"
      />
      <div className="section-container grid gap-12 py-16 lg:grid-cols-[1.4fr_0.9fr_0.9fr]">
        <div>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-3"
            aria-label={conference.acronym}
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
              <Image
                src="/brand/iclset-logo.png"
                alt={`${conference.acronym} logo`}
                width={56}
                height={56}
                className="h-10 w-auto"
              />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-tight">
                {conference.acronym}
              </span>
              <span className="text-iclset-cyan text-xs font-medium tracking-[0.18em] uppercase">
                International Conference
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/68">
            {conference.name[locale]} <span className="text-white/40">·</span>{" "}
            {conference.location.venue} <span className="text-white/40">·</span>{" "}
            {conference.location.faculty}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/68">
            <span className="inline-flex items-center gap-2">
              <MapPin className="text-iclset-cyan size-4" />
              {conference.location.city}, {conference.location.province},{" "}
              {conference.location.country}
            </span>
            <span className="text-white/35">·</span>
            <span className="text-white/68">
              {conference.dates.display[locale]}
            </span>
          </div>
        </div>
        <div>
          <p className="text-iclset-cyan text-xs font-semibold tracking-[0.18em] uppercase">
            {locale === "es" ? "Navegacion" : "Navigation"}
          </p>
          <div className="mt-5 grid gap-2">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={localizePath(locale, item.href)}
                className="group hover:text-iclset-lime inline-flex items-center gap-1 text-sm text-white/70 transition-colors"
              >
                <span className="bg-iclset-cyan/60 group-hover:bg-iclset-lime size-1.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_12px_oklch(86%_0.20_130)]" />
                {item.label[locale]}
              </Link>
            ))}
            <Link
              href={cmtAcknowledgmentPath}
              className="group hover:text-iclset-lime inline-flex items-center gap-1 text-sm text-white/70 transition-colors"
            >
              <span className="bg-iclset-cyan/60 group-hover:bg-iclset-lime size-1.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_12px_oklch(86%_0.20_130)]" />
              CMT acknowledgment
            </Link>
          </div>
        </div>
        <div>
          <p className="text-iclset-cyan text-xs font-semibold tracking-[0.18em] uppercase">
            {locale === "es" ? "Contacto" : "Contact"}
          </p>
          <a
            href={`mailto:${conference.contactEmail}`}
            className="hover:text-iclset-lime mt-5 inline-flex items-center gap-2 text-sm text-white/80 transition-colors"
          >
            <Mail className="size-4" />
            {conference.contactEmail}
          </a>
          <p className="mt-8 text-xs leading-5 text-white/40">
            © 2026 {conference.acronym}. Universidad Laica Eloy Alfaro de
            Manabi.
          </p>
        </div>
      </div>
    </footer>
  );
}
