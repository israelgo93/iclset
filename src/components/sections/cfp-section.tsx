"use client";

import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
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
import { technologyPublication } from "@/content/technology-publication";
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
  highlight?: boolean;
  scrollTarget?: string;
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
  const previousSubmissionEnd = formatDate(
    submissionDate?.previousEndsAt,
    locale,
  );

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
      title: technologyPublication.eyebrow[locale],
      text: technologyPublication.requirements
        .map((requirement) => requirement[locale])
        .join(" "),
      accent: "from-iclset-blue to-iclset-emerald",
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
      icon: FileText,
      title:
        locale === "es"
          ? "Participación de ponencias virtuales"
          : "Virtual presentation participation",
      text:
        locale === "es"
          ? "Envía un resumen de tu ponencia en el formato plantilla resumen, detallado en la siguiente tarjeta."
          : "Submit an abstract of your presentation using the abstract template format detailed in the next card.",
      accent: "from-iclset-green to-iclset-lime",
      cta: locale === "es" ? "Ver plantilla resumen" : "View abstract template",
      highlight: true,
      scrollTarget: "#abstract-template",
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
          className="brand-gradient-border overflow-hidden rounded-[1.75rem] bg-white p-1 shadow-[0_30px_80px_-42px_rgb(31_64_120_/_0.34)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: easing }}
        >
          <div className="via-iclset-cyan-soft/35 to-iclset-green-soft/25 rounded-[1.55rem] bg-gradient-to-br from-white p-3 sm:p-4 lg:p-5">
            <div className="grid items-stretch gap-4 xl:grid-cols-[minmax(0,1.28fr)_minmax(22rem,0.72fr)]">
              <article className="h-full rounded-[1.35rem] border border-white/80 bg-white/92 p-4 shadow-[0_18px_50px_-34px_rgb(15_23_42_/_0.28)] backdrop-blur sm:p-5">
                <div className="from-iclset-blue-soft/80 to-iclset-cyan-soft/35 border-iclset-blue/10 flex flex-col gap-3 rounded-[1.2rem] border bg-gradient-to-r p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-iclset-blue text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      Call for Papers
                    </p>
                    <h3 className="text-iclset-ink mt-1.5 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
                      {locale === "es"
                        ? "Envío académico por CMT"
                        : "Academic submission through CMT"}
                    </h3>
                    <p className="text-iclset-muted mt-2 max-w-2xl text-sm leading-5">
                      {locale === "es"
                        ? "Lineamientos, plantillas y ventana oficial de recepción en un solo flujo para autores."
                        : "Guidelines, templates, and the official submission window in one author workflow."}
                    </p>
                  </div>
                  <span className="from-iclset-blue to-iclset-emerald grid size-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_18px_36px_-18px_rgb(31_148_255_/_0.75)]">
                    <FileText className="size-6" />
                  </span>
                </div>

                <div className="mt-4 grid content-start gap-3 md:grid-cols-2">
                  {items.map((item, index) => {
                    const Icon = item.icon;
                    const cardClassName = `group relative overflow-hidden border-iclset-blue/10 to-iclset-cyan-soft/25 rounded-[1rem] border bg-gradient-to-br from-white p-3.5 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.25)] outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-iclset-blue/35 ${
                      item.href
                        ? "border-iclset-emerald/25 from-iclset-emerald/8 to-iclset-green-soft/45"
                        : "xl:col-span-1"
                    } ${
                      item.highlight
                        ? "iclset-card-glow border-iclset-emerald/45 from-iclset-emerald/10 to-iclset-green-soft/40"
                        : ""
                    }`;
                    const cardContent = (
                      <div className="relative z-10 grid gap-2.5">
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid size-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md`}
                          >
                            <Icon className="size-4" />
                          </span>
                          <h4 className="text-iclset-ink flex min-w-0 items-center gap-1.5 text-sm font-semibold">
                            <span
                              className={
                                item.highlight
                                  ? "min-w-0 leading-5"
                                  : "truncate"
                              }
                            >
                              {item.title}
                            </span>
                            {item.href ? (
                              <ExternalLink
                                className="text-iclset-emerald size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden="true"
                              />
                            ) : null}
                          </h4>
                        </div>
                        <p className="text-iclset-muted text-justify text-[0.82rem] leading-5 hyphens-auto">
                          {item.text}
                        </p>
                        {item.cta ? (
                          item.scrollTarget ? (
                            <a
                              href={item.scrollTarget}
                              className="from-iclset-emerald to-iclset-green mt-0.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-2 text-xs font-semibold text-white shadow-[0_12px_26px_-16px_rgb(78_205_87_/_0.85)] transition-transform duration-300 group-hover:translate-y-0.5 focus-visible:ring-3 focus-visible:ring-iclset-emerald/35 focus-visible:outline-none"
                            >
                              {item.cta}
                              <ArrowDown className="size-3.5 animate-bounce" />
                            </a>
                          ) : (
                            <span className="from-iclset-emerald to-iclset-green mt-0.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-2 text-xs font-semibold text-white shadow-[0_12px_26px_-16px_rgb(78_205_87_/_0.85)] transition-transform duration-300 group-hover:translate-x-0.5">
                              {item.cta}
                              <ExternalLink className="size-3.5" />
                            </span>
                          )
                        ) : null}
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
                                  transition: { duration: 0.25, ease: easing },
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
                        data-testid={
                          item.highlight ? "virtual-presentations-card" : undefined
                        }
                      >
                        {cardContent}
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      ease: easing,
                      delay: 0.05 * items.length,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -3,
                            transition: { duration: 0.25, ease: easing },
                          }
                    }
                    className="border-iclset-blue/20 from-iclset-blue/10 to-iclset-sky/10 rounded-[1rem] border bg-gradient-to-br p-3.5 shadow-[0_12px_32px_-28px_rgb(31_148_255_/_0.45)] transition-shadow outline-none"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-iclset-blue text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                        {locale === "es"
                          ? "Recepción de envío CMT"
                          : "CMT submission reception"}
                      </p>
                      <span className="bg-iclset-blue/10 text-iclset-blue rounded-full px-3 py-1 text-xs font-semibold">
                        Microsoft CMT
                      </span>
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl bg-white/90 p-3 shadow-sm">
                        <p className="text-iclset-muted text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                          {locale === "es" ? "Inicio" : "Opens"}
                        </p>
                        <p className="text-iclset-ink mt-1 text-base font-semibold">
                          {submissionStart ?? submissionDate?.date[locale]}
                        </p>
                      </div>
                      <div className="rounded-xl bg-white/90 p-3 shadow-sm">
                        <p className="text-iclset-muted text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                          {locale === "es" ? "Cierre" : "Closes"}
                        </p>
                        <p className="text-iclset-ink mt-1 text-base font-semibold">
                          {previousSubmissionEnd ? (
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <span className="text-iclset-muted line-through decoration-2">
                                {previousSubmissionEnd}
                              </span>
                              <span>
                                {submissionEnd ?? submissionDate?.date[locale]}
                              </span>
                            </span>
                          ) : (
                            (submissionEnd ?? submissionDate?.date[locale])
                          )}
                        </p>
                      </div>
                    </div>
                    <p className="text-iclset-muted mt-2.5 text-justify text-[0.82rem] leading-5 hyphens-auto">
                      {submissionDate?.description[locale]}
                    </p>
                  </motion.div>
                </div>

                <div className="mt-4">
                  <div className="border-iclset-emerald/20 from-iclset-emerald/8 to-iclset-green-soft/45 rounded-[1.2rem] border bg-gradient-to-br p-4 shadow-[0_18px_44px_-34px_rgb(78_205_87_/_0.45)]">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-iclset-emerald text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                        {locale === "es" ? "Plantillas" : "Templates"}
                      </p>
                      <Download className="text-iclset-emerald size-4" />
                    </div>
                    <div className="mt-3 grid gap-2 md:grid-cols-3">
                      {conferenceTemplates.map((template) => (
                        <a
                          key={template.key}
                          id={
                            template.key === "abstract"
                              ? "abstract-template"
                              : undefined
                          }
                          href={template.href}
                          download={template.fileName}
                          className="group/template focus-visible:ring-iclset-emerald/35 rounded-xl border border-white/80 bg-white/90 p-3 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.28)] transition duration-300 outline-none hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-30px_rgb(15_23_42_/_0.32)] focus-visible:ring-3"
                        >
                          <h4 className="text-iclset-ink flex items-center gap-1.5 text-sm font-semibold">
                            {template.title[locale]}
                            <Download
                              className="text-iclset-emerald size-3.5 transition-transform duration-300 group-hover/template:translate-y-0.5"
                              aria-hidden="true"
                            />
                          </h4>
                          <p className="text-iclset-muted mt-1.5 text-[0.8rem] leading-5">
                            {template.description[locale]}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-iclset-blue/12 from-iclset-navy to-iclset-blue mt-4 rounded-[1.2rem] border bg-gradient-to-r p-3.5 text-white shadow-[0_20px_48px_-28px_rgb(15_23_42_/_0.75)] md:flex md:items-center md:justify-between md:gap-4">
                  <div className="mb-4 max-w-xl md:mb-0 md:max-w-xs lg:max-w-sm">
                    <p className="text-sm font-semibold">
                      {locale === "es"
                        ? "Acciones principales para autores"
                        : "Primary author actions"}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/72 sm:max-w-prose md:max-w-none">
                      {locale === "es"
                        ? "Consulta los lineamientos o inicia el envío oficial en Microsoft CMT."
                        : "Review the guidelines or start the official submission in Microsoft CMT."}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 md:flex md:shrink-0">
                    <Button asChild size="lg" variant="default">
                      <Link href={localizePath(locale, "/call-for-papers")}>
                        {locale === "es"
                          ? "Ver lineamientos"
                          : "View guidelines"}
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="text-iclset-ink border-white/65 bg-white hover:bg-white"
                    >
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
                className="border-iclset-emerald/15 bg-iclset-green-soft/35 flex h-full scroll-mt-24 flex-col rounded-[1.35rem] border p-4 shadow-[0_18px_50px_-36px_rgb(15_23_42_/_0.24)] sm:p-5"
              >
                <div className="from-iclset-emerald/10 to-iclset-green-soft/55 border-iclset-emerald/15 flex flex-col gap-3 rounded-[1.15rem] border bg-gradient-to-r p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-iclset-emerald text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      {registrationFeesContent.eyebrow[locale]}
                    </p>
                    <h3 className="text-iclset-ink mt-1.5 text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
                      {registrationFeesContent.title[locale]}
                    </h3>
                    <p className="text-iclset-muted mt-2 text-[0.76rem] leading-5">
                      {registrationFeesContent.description[locale]}
                    </p>
                  </div>
                  <span className="from-iclset-emerald to-iclset-green grid size-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-[0_18px_36px_-18px_rgb(78_205_87_/_0.78)]">
                    <ReceiptText className="size-6" />
                  </span>
                </div>

                <div className="mt-4 grid content-start gap-2.5">
                  {registrationFees.map((fee, index) => (
                    <article
                      key={fee.key}
                      data-testid={
                        fee.key === "facsvitec-faculty"
                          ? "facivitec-fee-card"
                          : undefined
                      }
                      className={`group relative overflow-hidden rounded-[1rem] border bg-white/92 p-3 transition duration-300 hover:-translate-y-0.5 ${
                        fee.key === "facsvitec-faculty"
                          ? "iclset-card-glow border-iclset-emerald/45"
                          : "border-white/80 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.28)] hover:shadow-[0_18px_44px_-30px_rgb(15_23_42_/_0.32)]"
                      }`}
                    >
                      <div
                        className={`relative z-10 flex gap-4 ${
                          fee.options
                            ? "flex-col min-[430px]:flex-row min-[430px]:items-start min-[430px]:justify-between"
                            : "items-start justify-between"
                        }`}
                      >
                        <div>
                          <p className="text-iclset-muted text-[0.65rem] font-semibold tracking-[0.15em] uppercase">
                            {fee.audience[locale]}
                          </p>
                          <p
                            className={`text-iclset-muted mt-1.5 leading-5 ${
                              fee.key === "facsvitec-faculty"
                                ? "text-[0.76rem]"
                                : "text-[0.82rem]"
                            }`}
                          >
                            {fee.description[locale]}
                          </p>
                        </div>
                        {fee.options ? (
                          <div className="grid w-full shrink-0 gap-1.5 min-[430px]:w-auto">
                            {fee.options.map((option) => (
                              <div
                                key={option.label.en}
                                className="flex items-center justify-between gap-2 rounded-xl bg-iclset-emerald/10 px-2.5 py-1.5 text-iclset-emerald"
                              >
                                <span className="text-[0.62rem] leading-none font-semibold whitespace-nowrap">
                                  {option.label[locale]}
                                </span>
                                <span className="text-xs leading-none font-semibold whitespace-nowrap">
                                  {option.amount}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p
                            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                              index % 2 === 0
                                ? "bg-iclset-blue/10 text-iclset-blue"
                                : "bg-iclset-emerald/10 text-iclset-emerald"
                            }`}
                          >
                            {fee.amount}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="from-iclset-blue via-iclset-sky to-iclset-emerald mt-auto grid gap-4 overflow-hidden rounded-[1.2rem] bg-gradient-to-r p-5 text-white shadow-[0_22px_54px_-22px_rgb(31_148_255_/_0.82)]">
                  <div className="flex gap-3">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/18 text-white shadow-sm ring-1 ring-white/25">
                      <Info className="size-5" />
                    </span>
                    <div>
                      <p className="text-xl leading-6 font-semibold">
                        {registrationFeesContent.note[locale]}
                      </p>
                      <p className="mt-1 text-sm leading-5 text-white/82">
                        {registrationFeesContent.ctaDescription[locale]}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-iclset-ink w-full border-white/70 bg-white shadow-[0_16px_34px_-20px_rgb(15_23_42_/_0.7)] hover:border-white hover:bg-white"
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
