import type { Metadata } from "next";
import { Mail, MapPin, Network } from "lucide-react";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/shared/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { conference } from "@/content/conference";
import { buildPageMetadata } from "@/lib/metadata";
import { isLocale } from "@/types/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildPageMetadata({
    locale,
    pathname: "/contact",
    title: locale === "es" ? "Contacto" : "Contact",
    description:
      locale === "es"
        ? "Canales institucionales de contacto para ICLSET 2026."
        : "Institutional contact channels for ICLSET 2026.",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const cards = [
    {
      icon: Mail,
      title: locale === "es" ? "Correo de contacto" : "Contact email",
      text: conference.contactEmail,
      href: `mailto:${conference.contactEmail}`,
    },
    {
      icon: MapPin,
      title: locale === "es" ? "Ubicación" : "Location",
      text: `${conference.location.venue}, ${conference.location.city}, ${conference.location.province}`,
      href: null,
    },
    {
      icon: Network,
      title:
        locale === "es" ? "Canales institucionales" : "Institutional channels",
      text:
        locale === "es"
          ? "Difusión por sitio web, página institucional ULEAM, redes de la Facultad, boletines académicos y revistas aliadas."
          : "Outreach through the website, ULEAM institutional page, Faculty channels, academic bulletins, and partner journals.",
      href: null,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={locale === "es" ? "Contacto" : "Contact"}
        title={
          locale === "es"
            ? "Canales institucionales para ICLSET 2026"
            : "Institutional channels for ICLSET 2026"
        }
        description={
          locale === "es"
            ? "La comunicación del evento se gestiona desde la Facultad de Ciencias de la Vida y Tecnologías y los canales institucionales ULEAM."
            : "Event communications are managed through the Faculty of Life Sciences and Technologies and ULEAM institutional channels."
        }
      />
      <section className="section-band relative">
        <div className="section-container grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const tone = [
              {
                gradient: "from-iclset-blue to-iclset-sky",
                text: "text-white",
                shadow: "shadow-[0_24px_70px_-30px_rgb(31_148_255_/_0.5)]",
              },
              {
                gradient: "from-iclset-emerald to-iclset-green",
                text: "text-iclset-navy",
                shadow: "shadow-[0_24px_70px_-30px_rgb(78_205_87_/_0.5)]",
              },
              {
                gradient: "from-iclset-cyan to-iclset-sky",
                text: "text-iclset-navy",
                shadow: "shadow-[0_24px_70px_-30px_rgb(61_211_240_/_0.5)]",
              },
            ][index];

            return (
              <Card
                key={card.title}
                className={`solid-card overflow-hidden rounded-[1.75rem] border-0 bg-gradient-to-br ${tone.gradient} ${tone.shadow} ring-1 ring-white/30 transition-transform duration-300 hover:-translate-y-1`}
              >
                <CardContent className={`p-7 ${tone.text}`}>
                  <span className="inline-grid size-11 place-items-center rounded-2xl bg-white/22 backdrop-blur">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold">{card.title}</h2>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-3 block text-sm font-medium underline-offset-4 hover:underline"
                    >
                      {card.text}
                    </a>
                  ) : (
                    <p className="mt-3 text-sm leading-6 opacity-90">
                      {card.text}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
