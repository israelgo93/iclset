import {
  BookOpenCheck,
  ExternalLink,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { conference } from "@/content/conference";
import { importantDates } from "@/content/important-dates";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface CfpSectionProps {
  locale: Locale;
}

export function CfpSection({ locale }: CfpSectionProps) {
  const submissionDate = importantDates.find(
    (item) => item.key === "submission",
  );

  return (
    <section id="templates" className="section-band bg-iclset-sand/55">
      <div className="section-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <SectionHeading
          eyebrow="Call for Papers"
          title={
            locale === "es"
              ? "Convocatoria académica con trazabilidad editorial"
              : "Academic call with editorial traceability"
          }
          description={
            locale === "es"
              ? "La primera versión del sitio deja visibles los requisitos centrales y mantiene configurables los enlaces a CMT y plantillas."
              : "The first site version makes the core requirements visible and keeps CMT and template links configurable."
          }
        />
        <Card className="shadow-soft rounded-2xl border bg-white">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: FileText,
                  title: locale === "es" ? "Full paper" : "Full paper",
                  text:
                    locale === "es"
                      ? "Artículo completo con formato y anonimización."
                      : "Full article with formatting and anonymization.",
                },
                {
                  icon: BookOpenCheck,
                  title:
                    locale === "es" ? "Póster científico" : "Scientific poster",
                  text:
                    locale === "es"
                      ? "Contribución breve para feria académica."
                      : "Short contribution for the academic poster fair.",
                },
                {
                  icon: ShieldCheck,
                  title:
                    locale === "es"
                      ? "Revisión doble ciego"
                      : "Double-blind review",
                  text:
                    locale === "es"
                      ? "Evaluación por pares con identidad protegida."
                      : "Peer review with protected identity.",
                },
                {
                  icon: ExternalLink,
                  title: conference.editorialPlatform,
                  text:
                    locale === "es"
                      ? "Enlace de envío por confirmar."
                      : "Submission link to be confirmed.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-muted/35 rounded-2xl border p-5"
                  >
                    <Icon className="text-iclset-blue size-6" />
                    <h3 className="text-iclset-ink mt-4 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-iclset-muted mt-2 text-sm leading-6">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="border-iclset-blue/20 bg-iclset-blue/8 mt-6 rounded-2xl border p-5">
              <p className="text-iclset-blue text-xs font-semibold tracking-[0.14em] uppercase">
                {locale === "es" ? "Fecha de envío" : "Submission date"}
              </p>
              <p className="text-iclset-ink mt-1 text-xl font-semibold">
                {submissionDate?.date[locale] ?? "Por confirmar"}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-iclset-blue rounded-full text-white"
              >
                <Link href={localizePath(locale, "/call-for-papers")}>
                  {locale === "es" ? "Ver lineamientos" : "View guidelines"}
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#templates">
                  {locale === "es"
                    ? "Plantillas por confirmar"
                    : "Templates to be confirmed"}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
