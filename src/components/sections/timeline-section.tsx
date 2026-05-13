"use client";

import { CheckCircle2, CircleDashed, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

import { SectionHeading } from "@/components/shared/section-heading";
import { importantDates } from "@/content/important-dates";
import type { ImportantDate } from "@/types/conference";
import type { Locale } from "@/types/locale";

const emptySubscribe = () => () => {};
const getClientFlag = () => true;
const getServerFlag = () => false;

function useIsClient(): boolean {
	return useSyncExternalStore(emptySubscribe, getClientFlag, getServerFlag);
}

interface TimelineSectionProps {
	locale: Locale;
}

type DateState = "past" | "active" | "upcoming";

const easing = [0.22, 1, 0.36, 1] as const;

function computeState(item: ImportantDate, now: Date): DateState {
	if (!item.startsAt || !item.endsAt) return "upcoming";
	const start = new Date(`${item.startsAt}T00:00:00`);
	const end = new Date(`${item.endsAt}T23:59:59`);
	if (now < start) return "upcoming";
	if (now > end) return "past";
	return "active";
}

const stateBadges: Record<
	DateState,
	{ es: string; en: string }
> = {
	past: { es: "Completado", en: "Completed" },
	active: { es: "En curso", en: "In progress" },
	upcoming: { es: "Próximo", en: "Upcoming" },
};

const stateStyles: Record<
	DateState,
	{
		card: string;
		icon: typeof CheckCircle2;
		iconBg: string;
		iconText: string;
		badge: string;
		dateText: string;
		titleText: string;
		descriptionText: string;
		opacity: string;
	}
> = {
	past: {
		card: "border-iclset-blue/10 bg-white/85",
		icon: CheckCircle2,
		iconBg: "bg-iclset-surface ring-1 ring-iclset-blue/15",
		iconText: "text-iclset-muted",
		badge: "bg-iclset-surface text-iclset-muted ring-1 ring-iclset-blue/10",
		dateText: "text-iclset-muted",
		titleText: "text-iclset-ink/80",
		descriptionText: "text-iclset-muted/85",
		opacity: "opacity-75",
	},
	active: {
		card: "border-iclset-emerald/35 bg-white ring-2 ring-iclset-emerald/30",
		icon: Loader2,
		iconBg: "bg-gradient-to-br from-iclset-emerald to-iclset-green",
		iconText: "text-white",
		badge:
			"bg-iclset-emerald-soft text-iclset-emerald ring-1 ring-iclset-emerald/30",
		dateText: "text-iclset-emerald",
		titleText: "text-iclset-ink",
		descriptionText: "text-iclset-muted",
		opacity: "opacity-100",
	},
	upcoming: {
		card: "border-iclset-blue/10 bg-white",
		icon: CircleDashed,
		iconBg: "bg-gradient-to-br from-iclset-blue to-iclset-sky",
		iconText: "text-white",
		badge: "bg-iclset-blue-soft text-iclset-blue ring-1 ring-iclset-blue/20",
		dateText: "text-iclset-blue",
		titleText: "text-iclset-ink",
		descriptionText: "text-iclset-muted",
		opacity: "opacity-100",
	},
};

export function TimelineSection({ locale }: TimelineSectionProps) {
	const shouldReduceMotion = useReducedMotion();
	const isClient = useIsClient();
	const now = isClient ? new Date() : null;

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
					{importantDates.map((item) => {
						const state: DateState = now
							? computeState(item, now)
							: "upcoming";
						const style = stateStyles[state];
						const Icon = style.icon;

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
								className={`group relative rounded-[1.5rem] border p-6 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.16)] transition-all duration-500 hover:shadow-[0_28px_70px_-30px_rgb(31_64_120_/_0.25)] ${style.card} ${style.opacity}`}
								aria-current={state === "active" ? "step" : undefined}
							>
								<div className="flex items-start justify-between gap-3">
									<span
										className={`inline-grid size-11 place-items-center rounded-2xl shadow-md shadow-iclset-navy/15 ${style.iconBg} ${style.iconText}`}
									>
										<Icon
											className={`size-5 ${state === "active" && !shouldReduceMotion ? "animate-spin [animation-duration:2.4s]" : ""}`}
											aria-hidden="true"
										/>
									</span>
									<span
										className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${style.badge}`}
									>
										{stateBadges[state][locale]}
									</span>
								</div>
								<p
									className={`mt-5 text-sm font-semibold tracking-wide ${style.dateText}`}
								>
									{item.date[locale]}
								</p>
								<h3
									className={`mt-2 text-lg font-semibold ${style.titleText}`}
								>
									{item.title[locale]}
								</h3>
								<p className={`mt-2 text-sm leading-6 ${style.descriptionText}`}>
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
