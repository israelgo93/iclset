import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { navigation } from "@/content/navigation";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/82 backdrop-blur-xl">
      <div className="section-container flex h-18 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="flex min-w-0 items-center gap-3"
          aria-label={conference.acronym}
        >
          <span className="bg-iclset-navy grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold text-white shadow-sm">
            IC
          </span>
          <span className="min-w-0">
            <span className="text-iclset-ink block text-sm leading-5 font-semibold">
              {conference.acronym}
            </span>
            <span className="text-iclset-muted hidden max-w-64 truncate text-xs sm:block">
              {conference.location.faculty}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localizePath(locale, item.href)}
              className="text-iclset-muted hover:bg-muted hover:text-iclset-ink rounded-full px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button
            asChild
            className="bg-iclset-blue hover:bg-iclset-navy rounded-full px-4 text-white"
          >
            <Link href={localizePath(locale, "/call-for-papers")}>
              Call for Papers
            </Link>
          </Button>
        </div>
        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
