"use client";

import {
	ArrowRight,
	CalendarDays,
	FileText,
	Globe2,
	MapPin,
	Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { HeroScienceMotion } from "@/components/sections/hero-science-motion";
import { PointerGlow } from "@/components/shared/pointer-glow";
import { Button } from "@/components/ui/button";
import { callsToAction, conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface HeroSectionProps {
	locale: Locale;
}

const easing = [0.22, 1, 0.36, 1] as const;

export function HeroSection({ locale }: HeroSectionProps) {
	const primaryCta = callsToAction[0];
	const secondaryCtas = callsToAction.slice(1);
	const shouldReduceMotion = useReducedMotion();

	const fadeUp = (delay: number) => ({
		initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
		animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
		transition: { duration: 0.6, ease: easing, delay },
	});

	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[oklch(98%_0.012_220)] to-[oklch(96%_0.025_215)] text-iclset-ink">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_8%_8%,oklch(74%_0.16_230_/_0.28),transparent_32rem),radial-gradient(circle_at_92%_4%,oklch(78%_0.22_142_/_0.22),transparent_34rem),radial-gradient(circle_at_78%_82%,oklch(80%_0.14_215_/_0.16),transparent_30rem)]"
			/>
			<div
				aria-hidden="true"
				className="tech-grid absolute inset-0 -z-10 opacity-50"
			/>
			<PointerGlow variant="light" />

			<div className="section-container grid min-h-[calc(100vh-4.5rem)] gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
				<div>
					<motion.div
						className="inline-flex items-center gap-3 rounded-full border border-iclset-blue/20 bg-white/85 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-iclset-blue uppercase shadow-[0_8px_24px_-12px_rgb(31_148_255_/_0.4)] backdrop-blur"
						{...fadeUp(0)}
					>
						<Sparkles className="size-3.5" />
						{conference.acronym}
						<span className="hidden h-3 w-px bg-iclset-blue/30 sm:inline-block" />
						<span className="hidden text-[0.65rem] tracking-[0.16em] text-iclset-muted sm:inline">
							{locale === "es" ? "Manta, Ecuador" : "Manta, Ecuador"}
						</span>
					</motion.div>

					<motion.h1
						className="mt-6 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
						{...fadeUp(0.08)}
					>
						<span className="text-iclset-ink">
							{conference.heroTitle[locale]}
						</span>
					</motion.h1>

					<motion.p
						className="mt-6 max-w-xl text-base leading-7 text-iclset-muted sm:text-lg sm:leading-8"
						{...fadeUp(0.16)}
					>
						{conference.heroDescription[locale]}
					</motion.p>

					<motion.div
						className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
						{...fadeUp(0.24)}
					>
						<Button asChild size="lg" variant="default">
							<Link href={localizePath(locale, primaryCta.href)}>
								{primaryCta.label[locale]}
								<ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
							</Link>
						</Button>
						{secondaryCtas.map((item) => (
							<Button key={item.href} asChild size="lg" variant="outline">
								<Link href={localizePath(locale, item.href)}>
									{item.label[locale]}
								</Link>
							</Button>
						))}
					</motion.div>

					<motion.dl
						className="mt-10 grid gap-3 sm:grid-cols-3"
						initial={shouldReduceMotion ? false : "hidden"}
						animate={shouldReduceMotion ? undefined : "visible"}
						variants={{
							visible: {
								transition: { staggerChildren: 0.1, delayChildren: 0.32 },
							},
						}}
					>
						{[
							{
								icon: CalendarDays,
								label: locale === "es" ? "Fechas" : "Dates",
								value: conference.dates.display[locale],
								accent: "text-iclset-blue",
								tone: "from-iclset-blue/12 to-iclset-cyan/8 ring-iclset-blue/20",
							},
							{
								icon: MapPin,
								label: locale === "es" ? "Sede" : "Venue",
								value: conference.location.mainHall,
								accent: "text-iclset-emerald",
								tone: "from-iclset-emerald/12 to-iclset-green/8 ring-iclset-emerald/25",
							},
							{
								icon: Globe2,
								label: locale === "es" ? "Modalidad" : "Mode",
								value: conference.modality[locale],
								accent: "text-iclset-green",
								tone: "from-iclset-green/12 to-iclset-lime/10 ring-iclset-green/25",
							},
						].map((item) => {
							const Icon = item.icon;
							return (
								<motion.div
									key={item.label}
									variants={{
										hidden: { opacity: 0, y: 14 },
										visible: { opacity: 1, y: 0 },
									}}
									transition={{ duration: 0.5, ease: easing }}
									className={`group rounded-2xl bg-gradient-to-br ${item.tone} p-4 ring-1 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgb(31_64_120_/_0.35)]`}
								>
									<dt className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] text-iclset-muted uppercase">
										<Icon className={`size-4 ${item.accent}`} />
										{item.label}
									</dt>
									<dd className="mt-2 text-sm leading-5 font-semibold text-iclset-ink">
										{item.value}
									</dd>
								</motion.div>
							);
						})}
					</motion.dl>
				</div>

				<motion.div
					className="relative"
					initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
					animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
					transition={{ duration: 0.65, ease: easing, delay: 0.12 }}
				>
					<HeroScienceMotion />

					<motion.div
						className="mt-6 overflow-hidden rounded-[1.75rem] border border-iclset-blue/15 bg-white/95 p-1 shadow-[0_30px_80px_-40px_rgb(31_64_120_/_0.3)] backdrop-blur"
						initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
						animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: easing, delay: 0.4 }}
					>
						<div className="rounded-[1.4rem] bg-gradient-to-br from-iclset-blue via-iclset-sky to-iclset-emerald p-5 text-white">
							<div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
								<div>
									<p className="text-xs font-semibold tracking-[0.2em] text-white/85 uppercase">
										{locale === "es" ? "Convocatoria" : "Call"}
									</p>
									<p className="mt-1 flex items-center gap-2 text-xl font-semibold">
										<Image
											src="/brand/iclset-icon-mark.svg"
											alt=""
											width={28}
											height={28}
											className="size-7 rounded-md bg-white/95 p-1"
											style={{ width: "auto", height: "auto" }}
										/>
										ICLSET 2026
									</p>
								</div>
								<FileText className="size-9 text-white/85" />
							</div>
							<div className="mt-4 grid gap-3 sm:grid-cols-2">
								{[
									locale === "es" ? "Full paper" : "Full paper",
									locale === "es" ? "Poster cientifico" : "Scientific poster",
									locale === "es"
										? "Revision doble ciego"
										: "Double-blind review",
									conference.editorialPlatform,
								].map((item) => (
									<div
										key={item}
										className="flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/15"
									>
										<span>{item}</span>
										<span className="size-2 rounded-full bg-iclset-lime shadow-[0_0_18px_oklch(86%_0.20_130)]" />
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
