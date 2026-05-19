"use client";

import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Download,
  ExternalLink,
  FileText,
  Info,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { importantDates } from "@/content/important-dates";
import {
  registrationFees,
  registrationFeesContent,
} from "@/content/registration-fees";
import { conferenceTemplates } from "@/content/templates";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface CfpSectionProps {
  locale: Locale;
}

interface CfpItem {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: string;
  href?: string;
  ariaLabel?: string;
  cta?: string;
}

const easing = [0.22, 1, 0.36, 1] as const;

const formatDate = (date: string | undefined, locale: Locale) => {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat(locale === "es" ? "es-EC" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00-05:00`));
};

export function CfpSection({ locale }: CfpSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const submissionDate = importantDates.find(
    (item) => item.key === "submission",
  );
  const submissionStart = formatDate(submissionDate?.startsAt, locale);
  const submissionEnd = formatDate(submissionDate?.endsAt, locale);

  const items: CfpItem[] = [
    {
      icon: FileText,
      title: "Full paper",
      text:
        locale === "es"
          ? "Artículo completo de 8 a 12 páginas en la plantilla del congreso."
          : "Full paper, 8 to 12 pages, using the conference template.",
      accent: "from-iclset-blue to-iclset-sky",
    },
    {
      icon: BookOpenCheck,
      title: locale === "es" ? "Póster científico" : "Scientific poster",
      text:
        locale === "es"
          ? "Contribución de 2 páginas y póster para la feria académica."
          : "Two-page contribution and poster for the academic fair.",
      accent: "from-iclset-emerald to-iclset-green",
    },
    {
      icon: ShieldCheck,
      title: locale === "es" ? "Revisión doble ciego" : "Double-blind review",
      text:
        locale === "es"
          ? "Dos revisores por artículo; tercer revisor o decisión del Track Chair si hay discrepancia."
          : "Two reviewers per paper; third reviewer or Track Chair decision when reviews conflict.",
      accent: "from-iclset-cyan to-iclset-sky",
    },
    {
      icon: ExternalLink,
      title: conference.editorialPlatform,
      text:
        locale === "es"
          ? "Recepción, asignación de revisores, rúbricas y notificaciones."
          : "Reception, reviewer assignment, rubrics, and notifications.",
      accent: "from-iclset-green to-iclset-lime",
      href: conference.cmtUrl,
      ariaLabel:
        locale === "es"
          ? "Enviar trabajo mediante Microsoft CMT"
          : "Submit work through Microsoft CMT",
      cta: locale === "es" ? "Enviar Microsoft CMT" : "Submit via CMT",
    },
  ];

  return (
    <section id="templates" className="section-band relative bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow={
            locale === "es"
              ? "Call for Papers + inscripción"
              : "Call for Papers + registration"
          }
          title={
            locale === "es"
              ? "Convocatoria académica y valores de participación"
              : "Academic call and participation fees"
          }
          description={
            locale === "es"
              ? "Información clave para autores y asistentes: envío editorial mediante Microsoft CMT y tarifas oficiales de inscripción para ICLSET 2026."
              : "Key information for authors and attendees: editorial submission through Microsoft CMT and official registration fees for ICLSET 2026."
          }
          align="center"
        />
        <motion.div
          className="brand-gradient-border overflow-hidden rounded-[2rem] bg-white p-1 shadow-[0_30px_80px_-42px_rgb(31_64_120_/_0.34)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <div className="via-iclset-cyan-soft/35 to-iclset-green-soft/25 rounded-[1.85rem] bg-gradient-to-br from-white p-4 sm:p-6 lg:p-7">
            <div className="grid items-stretch gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:grid-rows-[auto_1fr_auto]">
              <article className="grid h-full grid-rows-[auto_1fr_auto] rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_50px_-34px_rgb(15_23_42_/_0.28)] backdrop-blur sm:p-6 xl:row-span-3 xl:grid-rows-subgrid">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-iclset-blue text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      Call for Papers
                    </p>
                    <h3 className="text-iclset-ink mt-2 text-2xl leading-tight font-semibold tracking-tight">
                      {locale === "es"
                        ? "Envío académico por CMT"
                        : "Academic submission through CMT"}
                    </h3>
                  </div>
                  <span className="from-iclset-blue to-iclset-emerald grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-md">
                    <FileText className="size-5" />
                  </span>
                </div>

                <div className="mt-5 grid content-start gap-3 sm:grid-cols-2">
                  {items.map((item, index) => {
                    const Icon = item.icon;
                    const cardClassName =
                      "group border-iclset-blue/10 to-iclset-cyan-soft/30 rounded-[1.15rem] border bg-gradient-to-br from-white p-4 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.25)] outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-iclset-blue/35";
                    const cardContent = (
                      <div className="flex items-start gap-3">
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md`}
                        >
                          <Icon className="size-4.5" />
                        </span>
                        <div>
                          <h4 className="text-iclset-ink flex items-center gap-1.5 text-sm font-semibold">
                            {item.title}
                            {item.href ? (
                              <ExternalLink
                                className="text-iclset-emerald size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden="true"
                              />
                            ) : null}
                          </h4>
                          <p className="text-iclset-muted mt-1.5 text-sm leading-6">
                            {item.text}
                          </p>
                          {item.cta ? (
                            <span className="text-iclset-emerald mt-3 inline-flex items-center gap-1.5 rounded-full bg-iclset-emerald/10 px-3 py-1.5 text-xs font-semibold transition-colors duration-300 group-hover:bg-iclset-emerald group-hover:text-white">
                              {item.cta}
                              <ExternalLink className="size-3.5" />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <motion.a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={item.ariaLabel}
                          initial={
                            shouldReduceMotion ? false : { opacity: 0, y: 16 }
                          }
                          whileInView={
                            shouldReduceMotion
                              ? undefined
                              : { opacity: 1, y: 0 }
                          }
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 0.5,
                            ease: easing,
                            delay: 0.05 * index,
                          }}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  y: -3,
                                  transition: {
                                    duration: 0.25,
                                    ease: easing,
                                  },
                                }
                          }
                          className={cardClassName}
                        >
                          {cardContent}
                        </motion.a>
                      );
                    }

                    return (
                      <motion.div
                        key={item.title}
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, y: 16 }
                        }
                        whileInView={
                          shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                        }
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 0.5,
                          ease: easing,
                          delay: 0.05 * index,
                        }}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                y: -3,
                                transition: { duration: 0.25, ease: easing },
                              }
                        }
                        className={cardClassName}
                      >
                        {cardContent}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="border-iclset-emerald/15 bg-iclset-emerald/5 mt-5 rounded-[1.35rem] border p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    <Download className="text-iclset-emerald size-4" />
                    <p className="text-iclset-emerald text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      {locale === "es"
                        ? "Plantillas en Word"
                        : "Word templates"}
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {conferenceTemplates.map((template) => (
                      <a
                        key={template.key}
                        href={template.href}
                        download={template.fileName}
                        className="group/template rounded-[1rem] border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.28)] outline-none transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-30px_rgb(15_23_42_/_0.32)] focus-visible:ring-3 focus-visible:ring-iclset-emerald/35"
                      >
                        <div className="flex items-start gap-3">
                          <span className="from-iclset-emerald to-iclset-green grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md">
                            <FileText className="size-4.5" />
                          </span>
                          <div>
                            <h4 className="text-iclset-ink flex items-center gap-1.5 text-sm font-semibold">
                              {template.title[locale]}
                              <Download
                                className="text-iclset-emerald size-3.5 transition-transform duration-300 group-hover/template:translate-y-0.5"
                                aria-hidden="true"
                              />
                            </h4>
                            <p className="text-iclset-muted mt-1.5 text-sm leading-6">
                              {template.description[locale]}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-iclset-blue/15 bg-iclset-blue/8 mt-5 rounded-[1.35rem] border p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="text-iclset-blue size-4" />
                    <p className="text-iclset-blue text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      {locale === "es"
                        ? "Recepción de envío CMT"
                        : "CMT submission reception"}
                    </p>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      <p className="text-iclset-muted text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                        {locale === "es" ? "Inicio" : "Opens"}
                      </p>
                      <p className="text-iclset-ink mt-1 text-lg font-semibold">
                        {submissionStart ?? submissionDate?.date[locale]}
                      </p>
                    </div>
                    <span className="text-iclset-blue hidden text-xl font-semibold sm:block">
                      →
                    </span>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      <p className="text-iclset-muted text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                        {locale === "es" ? "Cierre" : "Closes"}
                      </p>
                      <p className="text-iclset-ink mt-1 text-lg font-semibold">
                        {submissionEnd ?? submissionDate?.date[locale]}
                      </p>
                    </div>
                  </div>
                  <p className="text-iclset-muted mt-3 text-sm leading-6">
                    {submissionDate?.description[locale]}
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="default" variant="default">
                      <Link href={localizePath(locale, "/call-for-papers")}>
                        {locale === "es"
                          ? "Ver lineamientos"
                          : "View guidelines"}
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild size="default" variant="outline">
                      <a
                        href={conference.cmtUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {locale === "es"
                          ? "Enviar Microsoft CMT"
                          : "Submit via Microsoft CMT"}
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>

              <aside
                id="registration-fees"
                className="border-iclset-emerald/15 bg-iclset-green-soft/35 grid h-full scroll-mt-24 grid-rows-[auto_1fr_auto] rounded-[1.5rem] border p-5 shadow-[0_18px_50px_-36px_rgb(15_23_42_/_0.24)] sm:p-6 xl:row-span-3 xl:grid-rows-subgrid"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-iclset-emerald text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      {registrationFeesContent.eyebrow[locale]}
                    </p>
                    <h3 className="text-iclset-ink mt-2 text-2xl leading-tight font-semibold tracking-tight">
                      {registrationFeesContent.title[locale]}
                    </h3>
                    <p className="text-iclset-muted mt-2 text-sm leading-6">
                      {registrationFeesContent.description[locale]}
                    </p>
                  </div>
                  <span className="from-iclset-emerald to-iclset-green grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-md">
                    <ReceiptText className="size-5" />
                  </span>
                </div>

                <div className="mt-5 grid content-start gap-3">
                  {registrationFees.map((fee, index) => (
                    <article
                      key={fee.key}
                      className="group rounded-[1.15rem] border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-30px_rgb(15_23_42_/_0.32)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-iclset-muted text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                            {fee.audience[locale]}
                          </p>
                          <p className="text-iclset-muted mt-2 text-sm leading-6">
                            {fee.description[locale]}
                          </p>
                        </div>
                        <p
                          className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-semibold ${
                            index % 2 === 0
                              ? "bg-iclset-blue/10 text-iclset-blue"
                              : "bg-iclset-emerald/10 text-iclset-emerald"
                          }`}
                        >
                          {fee.amount}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="from-iclset-blue via-iclset-sky to-iclset-emerald mt-5 grid gap-4 overflow-hidden rounded-[1.25rem] bg-gradient-to-r p-4 text-white shadow-[0_18px_46px_-24px_rgb(31_148_255_/_0.75)] sm:flex sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/18 text-white shadow-sm ring-1 ring-white/25">
                      <Info className="size-5" />
                    </span>
                    <div>
                      <p className="text-base leading-6 font-semibold">
                        {registrationFeesContent.note[locale]}
                      </p>
                      <p className="mt-1 max-w-sm text-sm leading-6 text-white/82">
                        {registrationFeesContent.ctaDescription[locale]}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="text-iclset-ink min-w-44 shrink-0 border-white/70 bg-white shadow-[0_16px_34px_-20px_rgb(15_23_42_/_0.7)] hover:border-white hover:bg-white"
                  >
                    <a href={registrationFeesContent.ctaUrl}>
                      {registrationFeesContent.cta[locale]}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
