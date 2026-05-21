"use client";

import { ArrowRight, ExternalLink, FileCheck2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { journals } from "@/content/journals";
import { publicationLogos } from "@/content/publication-logos";
import { springerPublication } from "@/content/springer";
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

const easing = [0.22, 1, 0.36, 1] as const;

export function PublicationsSection({
  locale,
  detailed = false,
}: PublicationsSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-band relative">
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
              ? "ICLSET 2026 contempla libro de actas, ruta Springer para el track tecnológico y canalización de artículos aceptados hacia revistas aliadas."
              : "ICLSET 2026 includes proceedings, a Springer pathway for the technological track, and pathways for accepted papers toward partner journals."
          }
        />
        <motion.div
          className="mb-10 grid gap-3 sm:grid-cols-3"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          aria-label={
            locale === "es"
              ? "Logos editoriales e indexaciones"
              : "Editorial and indexing logos"
          }
        >
          {publicationLogos.map((logo) => (
            <motion.div
              key={logo.key}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: easing }}
              className="border-iclset-blue/10 flex min-h-28 items-center justify-center rounded-2xl border bg-white p-5 shadow-[0_18px_50px_-34px_rgb(15_23_42_/_0.18)]"
            >
              <Image
                src={logo.src}
                alt={logo.alt[locale]}
                width={logo.width}
                height={logo.height}
                sizes={`${logo.displayWidth}px`}
                className="object-contain"
                style={{
                  width: `${logo.displayWidth}px`,
                  height: `${logo.displayHeight}px`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.article
          className="border-iclset-blue/10 from-iclset-blue-soft/70 to-iclset-green-soft/60 mb-10 overflow-hidden rounded-[2rem] border bg-gradient-to-br via-white p-5 shadow-[0_26px_80px_-46px_rgb(31_64_120_/_0.42)] sm:p-6 lg:p-7"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: easing }}
        >
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <p className="text-iclset-blue text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                {springerPublication.eyebrow[locale]}
              </p>
              <h3 className="text-iclset-ink mt-2 text-2xl leading-tight font-semibold tracking-tight">
                {springerPublication.title[locale]}
              </h3>
              <p className="text-iclset-muted mt-3 text-sm leading-6 sm:text-base">
                {springerPublication.summary[locale]}
              </p>
              <div className="mt-5 grid gap-3">
                {springerPublication.details.map((detail) => (
                  <p
                    key={detail.en}
                    className="border-iclset-blue/10 text-iclset-muted rounded-2xl border bg-white/78 p-4 text-sm leading-6 shadow-sm"
                  >
                    {detail[locale]}
                  </p>
                ))}
              </div>
            </div>
            <aside className="border-iclset-emerald/20 rounded-[1.5rem] border bg-white/82 p-5 shadow-[0_18px_50px_-36px_rgb(15_23_42_/_0.28)]">
              <p className="text-iclset-emerald text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                {locale === "es"
                  ? "Requisitos del track"
                  : "Track requirements"}
              </p>
              <ul className="mt-4 grid gap-3">
                {springerPublication.requirements.map((requirement) => (
                  <li
                    key={requirement.en}
                    className="text-iclset-muted flex gap-3 text-sm leading-6"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-iclset-emerald mt-2 size-2 shrink-0 rounded-full"
                    />
                    <span>{requirement[locale]}</span>
                  </li>
                ))}
              </ul>
              <div className="from-iclset-blue to-iclset-emerald mt-5 rounded-[1.25rem] bg-gradient-to-r p-4 text-white shadow-[0_16px_46px_-28px_rgb(31_148_255_/_0.78)]">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
                  {springerPublication.fee.label[locale]}
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {springerPublication.fee.amount}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/84">
                  {springerPublication.fee.description[locale]}
                </p>
              </div>
            </aside>
          </div>
        </motion.article>
        <motion.div
          className="grid gap-4 lg:grid-cols-5"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {processLabels[locale].map((label, index) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: easing }}
              className="border-iclset-blue/10 relative overflow-hidden rounded-2xl border bg-white p-5 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.18)]"
            >
              <span
                aria-hidden="true"
                className="from-iclset-blue/15 to-iclset-green/15 absolute -top-6 -right-6 -z-10 size-16 rounded-full bg-gradient-to-br blur-2xl"
              />
              <span className="from-iclset-blue to-iclset-sky shadow-iclset-blue/30 inline-grid size-10 place-items-center rounded-full bg-gradient-to-br font-mono text-sm font-semibold text-white shadow-md">
                {index + 1}
              </span>
              <p className="text-iclset-ink mt-4 text-sm font-semibold">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {(detailed ? journals : journals.slice(0, 5)).map((journal) => (
            <motion.article
              key={journal.name}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: easing }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.25, ease: easing } }
              }
              className="group border-iclset-blue/10 hover:border-iclset-emerald/30 rounded-2xl border bg-white p-5 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.18)] transition-all duration-500 hover:shadow-[0_28px_70px_-30px_rgb(78_205_87_/_0.35)]"
            >
              <span className="bg-iclset-emerald-soft text-iclset-emerald inline-grid size-10 place-items-center rounded-xl">
                <FileCheck2 className="size-5" />
              </span>
              <h3 className="text-iclset-ink mt-4 font-semibold">
                {journal.name}
              </h3>
              <p className="text-iclset-muted mt-2 text-sm leading-6">
                {journal.area[locale]}
              </p>
              <p className="text-iclset-blue mt-3 text-xs font-semibold tracking-[0.12em] uppercase">
                {journal.indexing[locale]}
              </p>
              {journal.url ? (
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-iclset-ink hover:text-iclset-blue mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                >
                  {locale === "es" ? "Ver revista" : "View journal"}
                  <ExternalLink className="size-3.5" />
                </a>
              ) : null}
            </motion.article>
          ))}
        </motion.div>
        <div className="mt-10">
          <Button asChild size="default" variant="default">
            <Link href={localizePath(locale, "/publications")}>
              {locale === "es" ? "Ver proceso completo" : "View full process"}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
