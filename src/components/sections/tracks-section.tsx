import { Cpu, Leaf, Sprout } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tracks } from "@/content/tracks";
import { localizePath } from "@/lib/i18n";
import type { TrackKey } from "@/types/conference";
import type { Locale } from "@/types/locale";

const trackStyles: Record<
  TrackKey,
  { icon: typeof Leaf; className: string; iconClassName: string }
> = {
  bio: {
    icon: Leaf,
    className: "bg-[oklch(94%_0.04_155)]",
    iconClassName: "text-[oklch(48%_0.14_155)]",
  },
  agro: {
    icon: Sprout,
    className: "bg-[oklch(95%_0.045_115)]",
    iconClassName: "text-[oklch(49%_0.13_115)]",
  },
  tech: {
    icon: Cpu,
    className: "bg-[oklch(94%_0.04_250)]",
    iconClassName: "text-[oklch(46%_0.16_250)]",
  },
};

interface TracksSectionProps {
  locale: Locale;
  detailed?: boolean;
}

export function TracksSection({
  locale,
  detailed = false,
}: TracksSectionProps) {
  return (
    <section className="section-band bg-white/55">
      <div className="section-container">
        <SectionHeading
          eyebrow={locale === "es" ? "Tracks científicos" : "Scientific tracks"}
          title={
            locale === "es"
              ? "Tres áreas, una agenda de investigación aplicada"
              : "Three areas, one applied research agenda"
          }
          description={
            locale === "es"
              ? "La conferencia articula ciencias de la vida, producción sostenible y tecnología emergente para responder a desafíos territoriales."
              : "The conference connects life sciences, sustainable production, and emerging technology to address territorial challenges."
          }
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {tracks.map((track) => {
            const Icon = trackStyles[track.key].icon;

            return (
              <Reveal key={track.key}>
                <article
                  className={`h-full rounded-2xl border p-6 shadow-sm ${trackStyles[track.key].className}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-white shadow-sm">
                      <Icon
                        className={`size-6 ${trackStyles[track.key].iconClassName}`}
                      />
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                      {track.shortName[locale]}
                    </Badge>
                  </div>
                  <h3 className="text-iclset-ink mt-6 text-2xl font-semibold tracking-tight">
                    {track.name[locale]}
                  </h3>
                  <p className="text-iclset-muted mt-3 text-sm leading-6">
                    {track.description[locale]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.topics.map((topic) => (
                      <span
                        key={topic[locale]}
                        className="text-iclset-ink rounded-full bg-white/80 px-3 py-1 text-xs font-medium"
                      >
                        {topic[locale]}
                      </span>
                    ))}
                  </div>
                  {detailed ? (
                    <div className="mt-5 rounded-xl bg-white/75 p-4">
                      <p className="text-iclset-muted text-xs font-semibold tracking-[0.14em] uppercase">
                        Chair
                      </p>
                      <p className="text-iclset-ink mt-1 text-sm font-medium">
                        {track.chair[locale]}
                      </p>
                    </div>
                  ) : null}
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 rounded-full bg-white/80"
                  >
                    <Link href={localizePath(locale, "/tracks")}>
                      {locale === "es" ? "Ver ejes" : "View themes"}
                    </Link>
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
