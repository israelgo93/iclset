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
        locale === "es" ? "Redes institucionales" : "Institutional channels",
      text: locale === "es" ? "Por confirmar" : "To be confirmed",
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
            ? "Esta primera versión usa canales estáticos mientras se define la fase de formularios y newsletter."
            : "This first version uses static channels while the forms and newsletter phase is defined."
        }
      />
      <section className="section-band bg-white/65">
        <div className="section-container grid gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Card key={card.title} className="rounded-2xl bg-white">
                <CardContent className="p-6">
                  <Icon className="text-iclset-blue size-6" />
                  <h2 className="text-iclset-ink mt-4 text-xl font-semibold">
                    {card.title}
                  </h2>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-iclset-blue mt-3 block text-sm font-medium hover:underline"
                    >
                      {card.text}
                    </a>
                  ) : (
                    <p className="text-iclset-muted mt-3 text-sm leading-6">
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
