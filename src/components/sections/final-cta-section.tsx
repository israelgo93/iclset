import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface FinalCtaSectionProps {
  locale: Locale;
}

export function FinalCtaSection({ locale }: FinalCtaSectionProps) {
  return (
    <section className="section-band bg-iclset-sand/60">
      <div className="section-container shadow-soft rounded-[2rem] border bg-white p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-iclset-blue text-sm font-semibold tracking-[0.18em] uppercase">
              {conference.acronym}
            </p>
            <h2 className="text-iclset-ink mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {locale === "es"
                ? "La primera landing está lista para crecer hacia plataforma."
                : "The first landing page is ready to grow into a platform."}
            </h2>
            <p className="text-iclset-muted mt-4 max-w-2xl text-base leading-7">
              {locale === "es"
                ? "La arquitectura queda preparada para Supabase, inscripciones, certificados y administración en una segunda fase."
                : "The architecture is prepared for Supabase, registrations, certificates, and administration in a second phase."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              asChild
              className="bg-iclset-blue h-12 rounded-full text-white"
            >
              <Link href={localizePath(locale, "/call-for-papers")}>
                Call for Papers
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full">
              <Link href={localizePath(locale, "/contact")}>
                {locale === "es"
                  ? "Contacto institucional"
                  : "Institutional contact"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
