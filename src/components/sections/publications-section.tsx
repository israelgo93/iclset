import { ArrowRight, FileCheck2 } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { journals } from "@/content/journals";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface PublicationsSectionProps {
  locale: Locale;
  detailed?: boolean;
}

const processLabels = {
  es: [
    "Recepción",
    "Revisión doble ciego",
    "Decisión editorial",
    "Presentación",
    "Canalización a revista",
  ],
  en: [
    "Reception",
    "Double-blind review",
    "Editorial decision",
    "Presentation",
    "Journal pathway",
  ],
};

export function PublicationsSection({
  locale,
  detailed = false,
}: PublicationsSectionProps) {
  return (
    <section className="section-band text-iclset-ink bg-white/65">
      <div className="section-container">
        <SectionHeading
          eyebrow={locale === "es" ? "Proceso editorial" : "Editorial process"}
          title={
            locale === "es"
              ? "Publicación académica con revisión y ruta posterior"
              : "Academic publication with review and post-conference pathways"
          }
          description={
            locale === "es"
              ? "ICLSET 2026 contempla libro de actas y canalización de artículos aceptados hacia revistas aliadas, respetando los procesos editoriales de cada publicación."
              : "ICLSET 2026 includes proceedings and pathways for accepted papers toward partner journals, respecting each publication's editorial process."
          }
        />
        <div className="grid gap-4 lg:grid-cols-5">
          {processLabels[locale].map((label, index) => (
            <div
              key={label}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <span className="bg-iclset-cyan text-iclset-navy grid size-9 place-items-center rounded-full font-semibold">
                {index + 1}
              </span>
              <p className="mt-4 text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {(detailed ? journals : journals.slice(0, 5)).map((journal) => (
            <article
              key={journal.name}
              className="text-iclset-ink rounded-2xl border bg-white p-5 shadow-sm"
            >
              <FileCheck2 className="text-iclset-emerald size-6" />
              <h3 className="mt-4 font-semibold">{journal.name}</h3>
              <p className="text-iclset-muted mt-2 text-sm leading-6">
                {journal.area[locale]}
              </p>
              <p className="text-iclset-blue mt-3 text-xs font-medium tracking-[0.12em] uppercase">
                {journal.indexing[locale]}
              </p>
            </article>
          ))}
        </div>
        <Button
          asChild
          className="bg-iclset-blue hover:bg-iclset-navy mt-8 rounded-full text-white"
        >
          <Link href={localizePath(locale, "/publications")}>
            {locale === "es" ? "Ver proceso completo" : "View full process"}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
