import { UsersRound } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { committees } from "@/content/committees";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface CommitteesPreviewProps {
  locale: Locale;
  detailed?: boolean;
}

export function CommitteesPreview({
  locale,
  detailed = false,
}: CommitteesPreviewProps) {
  return (
    <section className="section-band bg-white/55">
      <div className="section-container">
        <SectionHeading
          eyebrow={locale === "es" ? "Organización" : "Organization"}
          title={
            locale === "es"
              ? "Comités para una conferencia internacional"
              : "Committees for an international conference"
          }
          description={
            locale === "es"
              ? "La nómina oficial se publicará cuando sea aprobada por la organización institucional."
              : "The official roster will be published once approved by the institutional organization."
          }
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {(detailed ? committees : committees.slice(0, 4)).map((group) => (
            <article
              key={group.title.en}
              className="rounded-2xl border bg-white p-5"
            >
              <UsersRound className="text-iclset-blue size-6" />
              <h3 className="text-iclset-ink mt-4 font-semibold">
                {group.title[locale]}
              </h3>
              <p className="text-iclset-muted mt-2 text-sm leading-6">
                {group.description[locale]}
              </p>
              <p className="text-iclset-ink mt-4 text-sm font-medium">
                {group.members[0][locale]}
              </p>
            </article>
          ))}
        </div>
        {!detailed ? (
          <Button
            asChild
            variant="outline"
            className="mt-8 rounded-full bg-white"
          >
            <Link href={localizePath(locale, "/committees")}>
              {locale === "es" ? "Ver comités" : "View committees"}
            </Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
