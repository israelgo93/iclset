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
      className="inline-flex items-center rounded-full border border-iclset-blue/15 bg-white/85 p-1 text-xs font-semibold shadow-sm backdrop-blur"
      aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={switchLocalePath(item, pathname)}
          className={cn(
            "rounded-full px-3 py-1.5 transition-all duration-300",
            item === locale
              ? "bg-gradient-to-r from-iclset-blue to-iclset-sky text-white shadow-[0_8px_18px_-10px_rgb(31_148_255_/_0.6)]"
              : "text-iclset-muted hover:bg-iclset-blue-soft hover:text-iclset-ink",
          )}
          aria-current={item === locale ? "page" : undefined}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
