"use client";

import {
	ArrowRight,
	CalendarDays,
	Globe2,
	MapPin,
	Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
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
	const secondaryCta = callsToAction[1];
	const shouldReduceMotion = useReducedMotion();

	const fadeUp = (delay: number) => ({
		initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
		animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
		transition: { duration: 0.6, ease: easing, delay },
	});

	const meta = [
		{
			icon: CalendarDays,
			label: locale === "es" ? "Fechas" : "Dates",
			value: conference.dates.display[locale],
			accent: "text-iclset-blue",
		},
		{
			icon: MapPin,
			label: locale === "es" ? "Sede" : "Venue",
			value: `${conference.location.city}, ${conference.location.country}`,
			accent: "text-iclset-emerald",
		},
		{
			icon: Globe2,
			label: locale === "es" ? "Modalidad" : "Mode",
			value:
				locale === "es"
					? "Híbrida: presencial + virtual"
					: "Hybrid: in-person + virtual",
			accent: "text-iclset-green",
		},
	];

	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[oklch(98%_0.012_220)] to-[oklch(96%_0.025_215)] text-iclset-ink">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_8%_8%,oklch(74%_0.16_230_/_0.24),transparent_30rem),radial-gradient(circle_at_92%_4%,oklch(78%_0.22_142_/_0.2),transparent_32rem),radial-gradient(circle_at_78%_82%,oklch(80%_0.14_215_/_0.14),transparent_28rem)]"
			/>
			<div
				aria-hidden="true"
				className="tech-grid absolute inset-0 -z-10 opacity-45"
			/>
			<PointerGlow variant="light" />

			<div className="section-container grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:py-20">
				<div className="max-w-2xl">
					<motion.div
						className="inline-flex items-center gap-2 rounded-full border border-iclset-blue/20 bg-white/85 px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-iclset-blue uppercase shadow-[0_8px_24px_-12px_rgb(31_148_255_/_0.4)] backdrop-blur"
						{...fadeUp(0)}
					>
						<Sparkles className="size-3.5" />
						{conference.acronym}
						<span className="hidden h-3 w-px bg-iclset-blue/30 sm:inline-block" />
						<span className="hidden text-iclset-muted sm:inline">
							Manta · Ecuador
						</span>
					</motion.div>

					<motion.h1
						className="mt-5 text-4xl leading-[1] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
						{...fadeUp(0.08)}
					>
						<span className="block bg-gradient-to-r from-iclset-blue via-iclset-sky to-iclset-emerald bg-clip-text text-transparent">
							ICLSET 2026
						</span>
						<span className="mt-2 block text-[1.5rem] leading-[1.15] font-semibold tracking-tight text-iclset-ink sm:text-2xl lg:text-[1.85rem]">
							{conference.heroTitle[locale]}
						</span>
					</motion.h1>

					<motion.p
						className="mt-5 max-w-xl text-base leading-7 text-iclset-muted sm:text-[1.05rem] sm:leading-8"
						{...fadeUp(0.16)}
					>
						{conference.heroDescription[locale]}
					</motion.p>

					<motion.dl
						className="mt-7 flex flex-wrap gap-x-6 gap-y-4"
						{...fadeUp(0.22)}
					>
						{meta.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.label}
									className="flex items-center gap-3"
								>
									<span
										className={`grid size-9 place-items-center rounded-xl bg-white shadow-[0_8px_18px_-10px_rgb(31_64_120_/_0.25)] ring-1 ring-iclset-blue/10 ${item.accent}`}
									>
										<Icon className="size-4" />
									</span>
									<div className="min-w-0">
										<dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-iclset-muted uppercase">
											{item.label}
										</dt>
										<dd className="text-sm leading-5 font-semibold text-iclset-ink">
											{item.value}
										</dd>
									</div>
								</div>
							);
						})}
					</motion.dl>

					<motion.div
						className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
						{...fadeUp(0.3)}
					>
						<Button asChild size="lg" variant="default">
							<Link href={localizePath(locale, primaryCta.href)}>
								{primaryCta.label[locale]}
								<ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link href={localizePath(locale, secondaryCta.href)}>
								{secondaryCta.label[locale]}
							</Link>
						</Button>
					</motion.div>
				</div>

				<motion.div
					className="relative mx-auto w-full max-w-md lg:max-w-none"
					initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
					animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, ease: easing, delay: 0.18 }}
				>
					<HeroScienceMotion locale={locale} />
				</motion.div>
			</div>
		</section>
	);
}
