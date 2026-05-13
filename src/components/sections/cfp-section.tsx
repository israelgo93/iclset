"use client";

import {
	ArrowRight,
	BookOpenCheck,
	ExternalLink,
	FileText,
	ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { importantDates } from "@/content/important-dates";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface CfpSectionProps {
	locale: Locale;
}

const easing = [0.22, 1, 0.36, 1] as const;

export function CfpSection({ locale }: CfpSectionProps) {
	const shouldReduceMotion = useReducedMotion();
	const submissionDate = importantDates.find(
		(item) => item.key === "submission",
	);

	const items = [
		{
			icon: FileText,
			title: "Full paper",
			text:
				locale === "es"
					? "Articulo completo de 8 a 12 paginas en plantilla del congreso."
					: "Full paper, 8 to 12 pages, using the conference template.",
			accent: "from-iclset-blue to-iclset-sky",
			color: "text-iclset-blue",
		},
		{
			icon: BookOpenCheck,
			title: locale === "es" ? "Poster cientifico" : "Scientific poster",
			text:
				locale === "es"
					? "Contribucion de 2 paginas y poster para feria academica."
					: "Two-page contribution and poster for the academic fair.",
			accent: "from-iclset-emerald to-iclset-green",
			color: "text-iclset-emerald",
		},
		{
			icon: ShieldCheck,
			title:
				locale === "es" ? "Revision doble ciego" : "Double-blind review",
			text:
				locale === "es"
					? "Dos revisores por articulo; tercer revisor o decision del Track Chair si hay discrepancia."
					: "Two reviewers per paper; third reviewer or Track Chair decision when reviews conflict.",
			accent: "from-iclset-cyan to-iclset-sky",
			color: "text-iclset-sky",
		},
		{
			icon: ExternalLink,
			title: conference.editorialPlatform,
			text:
				locale === "es"
					? "Recepcion, asignacion de revisores, rubricas y notificaciones."
					: "Reception, reviewer assignment, rubrics, and notifications.",
			accent: "from-iclset-green to-iclset-lime",
			color: "text-iclset-green",
		},
	];

	return (
		<section id="templates" className="section-band relative">
			<div className="section-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<SectionHeading
					eyebrow="Call for Papers"
					title={
						locale === "es"
							? "Convocatoria academica con trazabilidad editorial"
							: "Academic call with editorial traceability"
					}
					description={
						locale === "es"
							? "Los autores envian full papers de 8 a 12 paginas y posters cientificos anonimizados mediante el flujo editorial de Microsoft CMT."
							: "Authors submit anonymized 8-12 page full papers and scientific posters through the Microsoft CMT editorial workflow."
					}
				/>
				<motion.div
					className="brand-gradient-border overflow-hidden rounded-[2rem] bg-white p-1 shadow-[0_30px_80px_-40px_rgb(31_64_120_/_0.3)]"
					initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
					whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6, ease: easing }}
				>
					<div className="rounded-[1.85rem] bg-gradient-to-br from-white via-iclset-cyan-soft/40 to-iclset-emerald-soft/30 p-6 sm:p-8">
						<div className="grid gap-4 sm:grid-cols-2">
							{items.map((item, index) => {
								const Icon = item.icon;
								return (
									<motion.div
										key={item.title}
										initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
										whileInView={
											shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
										}
										viewport={{ once: true, margin: "-40px" }}
										transition={{
											duration: 0.5,
											ease: easing,
											delay: 0.06 * index,
										}}
										whileHover={
											shouldReduceMotion
												? undefined
												: { y: -4, transition: { duration: 0.25, ease: easing } }
										}
										className="group rounded-2xl border border-white/70 bg-white/85 p-5 shadow-[0_18px_40px_-28px_rgb(15_23_42_/_0.2)] backdrop-blur"
									>
										<span
											className={`inline-grid size-10 place-items-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow-md`}
										>
											<Icon className="size-5" />
										</span>
										<h3 className="mt-4 text-base font-semibold text-iclset-ink">
											{item.title}
										</h3>
										<p className="mt-2 text-sm leading-6 text-iclset-muted">
											{item.text}
										</p>
									</motion.div>
								);
							})}
						</div>
						<div className="mt-6 grid gap-4 rounded-2xl border border-iclset-blue/15 bg-iclset-blue/8 p-5 sm:flex sm:items-center sm:justify-between">
							<div>
								<p className="text-[0.7rem] font-semibold tracking-[0.18em] text-iclset-blue uppercase">
									{locale === "es" ? "Recepcion en CMT" : "CMT submission"}
								</p>
								<p className="mt-1 text-xl font-semibold text-iclset-ink">
									{submissionDate?.date[locale]}
								</p>
							</div>
							<div className="flex flex-col gap-3 sm:flex-row">
								<Button asChild size="default" variant="default">
									<Link href={localizePath(locale, "/call-for-papers")}>
										{locale === "es" ? "Ver lineamientos" : "View guidelines"}
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
					</div>
				</motion.div>
			</div>
		</section>
	);
}
