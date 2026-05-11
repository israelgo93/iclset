"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { switchLocalePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/types/locale";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-full border bg-white/80 p-1 text-xs font-semibold shadow-sm"
      aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={switchLocalePath(item, pathname)}
          className={cn(
            "rounded-full px-3 py-1.5 transition-colors",
            item === locale
              ? "bg-iclset-navy text-white"
              : "text-iclset-muted hover:bg-muted hover:text-iclset-ink",
          )}
          aria-current={item === locale ? "page" : undefined}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
