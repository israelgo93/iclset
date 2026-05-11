import { CheckCircle2, Clock3 } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { importantDates } from "@/content/important-dates";
import type { Locale } from "@/types/locale";

interface TimelineSectionProps {
  locale: Locale;
}

export function TimelineSection({ locale }: TimelineSectionProps) {
  return (
    <section className="section-band bg-white/65">
      <div className="section-container">
        <SectionHeading
          eyebrow={locale === "es" ? "Fechas clave" : "Key dates"}
          title={
            locale === "es"
              ? "Calendario público de la convocatoria"
              : "Public timeline for the call"
          }
          description={
            locale === "es"
              ? "Las fechas no aprobadas permanecen marcadas como pendientes para evitar publicar información no confirmada."
              : "Unapproved dates remain marked as pending to avoid publishing unconfirmed information."
          }
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {importantDates.map((item) => {
            const Icon = item.status === "confirmed" ? CheckCircle2 : Clock3;

            return (
              <article
                key={item.key}
                className="rounded-2xl border bg-white p-5"
              >
                <Icon
                  className={
                    item.status === "confirmed"
                      ? "text-iclset-emerald size-6"
                      : "text-iclset-blue size-6"
                  }
                />
                <p className="text-iclset-blue mt-4 text-sm font-semibold">
                  {item.date[locale]}
                </p>
                <h3 className="text-iclset-ink mt-2 text-lg font-semibold">
                  {item.title[locale]}
                </h3>
                <p className="text-iclset-muted mt-2 text-sm leading-6">
                  {item.description[locale]}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
