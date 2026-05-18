"use client";

import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  ExternalLink,
  FileText,
  Info,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
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
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface CfpSectionProps {
  locale: Locale;
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

  const items = [
    {
      icon: FileText,
      title: "Full paper",
      text:
        locale === "es"
          ? "Artículo completo de 8 a 12 páginas en la plantilla del congreso."
          : "Full paper, 8 to 12 pages, using the conference template.",
      accent: "from-iclset-blue to-iclset-sky",
      color: "text-iclset-blue",
    },
    {
      icon: BookOpenCheck,
      title: locale === "es" ? "Póster científico" : "Scientific poster",
      text:
        locale === "es"
          ? "Contribución de 2 páginas y póster para la feria académica."
          : "Two-page contribution and poster for the academic fair.",
      accent: "from-iclset-emerald to-iclset-green",
      color: "text-iclset-emerald",
    },
    {
      icon: ShieldCheck,
      title: locale === "es" ? "Revisión doble ciego" : "Double-blind review",
      text:
        locale === "es"
          ? "Dos revisores por artículo; tercer revisor o decisión del Track Chair si hay discrepancia."
          : "Two reviewers per paper; third reviewer or Track Chair decision when reviews conflict.",
      accent: "from-iclset-cyan to-iclset-sky",
      color: "text-iclset-sky",
    },
    {
      icon: ExternalLink,
      title: conference.editorialPlatform,
      text:
        locale === "es"
          ? "Recepción, asignación de revisores, rúbricas y notificaciones."
          : "Reception, reviewer assignment, rubrics, and notifications.",
      accent: "from-iclset-green to-iclset-lime",
      color: "text-iclset-green",
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
            <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
              <article className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_50px_-34px_rgb(15_23_42_/_0.28)] backdrop-blur sm:p-6">
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

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {items.map((item, index) => {
                    const Icon = item.icon;
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
                        className="group border-iclset-blue/10 to-iclset-cyan-soft/30 rounded-[1.15rem] border bg-gradient-to-br from-white p-4 shadow-[0_12px_32px_-28px_rgb(15_23_42_/_0.25)]"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md`}
                          >
                            <Icon className="size-4.5" />
                          </span>
                          <div>
                            <h4 className="text-iclset-ink text-sm font-semibold">
                              {item.title}
                            </h4>
                            <p className="text-iclset-muted mt-1.5 text-sm leading-6">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="border-iclset-blue/15 bg-iclset-blue/8 mt-5 rounded-[1.35rem] border p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="text-iclset-blue size-4" />
                    <p className="text-iclset-blue text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                      {locale === "es" ? "Recepción en CMT" : "CMT submission"}
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
                      <Link href={conference.cmtUrl}>
                        {locale === "es"
                          ? "Compatibilidad Microsoft CMT"
                          : "Microsoft CMT compatibility"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>

              <aside
                id="registration-fees"
                className="border-iclset-emerald/15 bg-iclset-green-soft/35 scroll-mt-24 rounded-[1.5rem] border p-5 shadow-[0_18px_50px_-36px_rgb(15_23_42_/_0.24)] sm:p-6"
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

                <div className="mt-5 grid gap-3">
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

                <div className="border-iclset-emerald/15 mt-5 grid gap-4 rounded-[1.15rem] border bg-white/80 p-4 sm:flex sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    <span className="bg-iclset-blue/10 text-iclset-blue grid size-10 shrink-0 place-items-center rounded-xl">
                      <Info className="size-5" />
                    </span>
                    <p className="text-iclset-muted text-sm leading-6">
                      {registrationFeesContent.note[locale]}
                    </p>
                  </div>
                  <Button type="button" variant="outline" className="shrink-0">
                    {registrationFeesContent.cta[locale]}
                    <ArrowRight className="size-4" />
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
