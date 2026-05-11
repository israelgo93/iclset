import { MapPin, MonitorUp, Waves } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface VenueSectionProps {
  locale: Locale;
}

export function VenueSection({ locale }: VenueSectionProps) {
  return (
    <section className="section-band bg-white/65">
      <div className="section-container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={locale === "es" ? "Sede híbrida" : "Hybrid venue"}
            title={
              locale === "es"
                ? "Manta conecta ciencia, agro y tecnología"
                : "Manta connects science, agriculture, and technology"
            }
            description={
              locale === "es"
                ? "La conferencia se desarrollará en la Universidad Laica Eloy Alfaro de Manabí con participación presencial y virtual sincrónica."
                : "The conference will take place at Universidad Laica Eloy Alfaro de Manabí with in-person and synchronous virtual participation."
            }
          />
          <Button asChild variant="outline" className="rounded-full bg-white">
            <Link href={localizePath(locale, "/venue")}>
              {locale === "es" ? "Ver sede" : "View venue"}
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {[
            {
              icon: MapPin,
              title: conference.location.venue,
              text: `${conference.location.mainHall} · ${conference.location.city}, ${conference.location.province}`,
            },
            {
              icon: MonitorUp,
              title:
                locale === "es" ? "Virtual sincrónica" : "Synchronous virtual",
              text:
                locale === "es"
                  ? "Zoom institucional y soporte de conectividad por confirmar."
                  : "Institutional Zoom and connectivity support to be confirmed.",
            },
            {
              icon: Waves,
              title:
                locale === "es" ? "Territorio costero" : "Coastal territory",
              text:
                locale === "es"
                  ? "Manta aporta contexto territorial, biodiversidad, puerto, agroindustria y transferencia."
                  : "Manta contributes territorial context, biodiversity, port activity, agroindustry, and transfer.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <Icon className="text-iclset-blue size-6" />
                <h3 className="text-iclset-ink mt-4 font-semibold">
                  {item.title}
                </h3>
                <p className="text-iclset-muted mt-2 text-sm leading-6">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
