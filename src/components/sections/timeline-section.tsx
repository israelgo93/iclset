"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { SectionHeading } from "@/components/shared/section-heading";
import { importantDates } from "@/content/important-dates";
import type { Locale } from "@/types/locale";

interface TimelineSectionProps {
	locale: Locale;
}

const accents = [
	{ bg: "bg-gradient-to-br from-iclset-blue to-iclset-sky", text: "text-iclset-blue" },
	{
		bg: "bg-gradient-to-br from-iclset-emerald to-iclset-green",
		text: "text-iclset-emerald",
	},
	{
		bg: "bg-gradient-to-br from-iclset-cyan to-iclset-sky",
		text: "text-iclset-sky",
	},
	{
		bg: "bg-gradient-to-br from-iclset-green to-iclset-lime",
		text: "text-iclset-green",
	},
] as const;

const easing = [0.22, 1, 0.36, 1] as const;

export function TimelineSection({ locale }: TimelineSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="section-band relative">
			<div className="section-container">
				<SectionHeading
					eyebrow={locale === "es" ? "Fechas clave" : "Key dates"}
					title={
						locale === "es"
							? "Calendario oficial de convocatoria, revision y evento"
							: "Official timeline for call, review, and conference"
					}
					description={
						locale === "es"
							? "El cronograma esta alineado con la recepcion en Microsoft CMT, la revision doble ciego y la ejecucion de ICLSET 2026."
							: "The timeline is aligned with Microsoft CMT reception, double-blind review, and ICLSET 2026 delivery."
					}
				/>
				<motion.div
					className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4"
					initial={shouldReduceMotion ? false : "hidden"}
					whileInView={shouldReduceMotion ? undefined : "visible"}
					viewport={{ once: true, margin: "-80px" }}
					variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
				>
					{importantDates.map((item, index) => {
						const accent = accents[index % accents.length];
						return (
							<motion.article
								key={item.key}
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
								className="group rounded-[1.5rem] border border-iclset-blue/10 bg-white p-6 ring-1 ring-iclset-blue/5 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.16)] transition-all duration-500 hover:shadow-[0_28px_70px_-30px_rgb(31_64_120_/_0.25)] hover:ring-iclset-blue/20"
							>
								<span
									className={`inline-grid size-11 place-items-center rounded-2xl ${accent.bg} text-white shadow-md shadow-iclset-navy/15`}
								>
									<CheckCircle2 className="size-5" />
								</span>
								<p
									className={`mt-5 text-sm font-semibold tracking-wide ${accent.text}`}
								>
									{item.date[locale]}
								</p>
								<h3 className="mt-2 text-lg font-semibold text-iclset-ink">
									{item.title[locale]}
								</h3>
								<p className="mt-2 text-sm leading-6 text-iclset-muted">
									{item.description[locale]}
								</p>
							</motion.article>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
