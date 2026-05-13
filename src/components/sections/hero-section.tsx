"use client";

import {
	ArrowRight,
	CalendarDays,
	Globe2,
	MapPin,
	Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { PointerGlow } from "@/components/shared/pointer-glow";
import { Button } from "@/components/ui/button";
import { callsToAction, conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface HeroSectionProps {
	locale: Locale;
}

const easing = [0.22, 1, 0.36, 1] as const;

const sparkleStars = [
	{ top: "16%", left: "62%", size: 22, delay: 0.2, color: "#3DD3F0" },
	{ top: "28%", left: "82%", size: 16, delay: 0.9, color: "#86E45F" },
	{ top: "44%", left: "70%", size: 20, delay: 0.4, color: "#5BB8FF" },
	{ top: "62%", left: "88%", size: 14, delay: 1.5, color: "#86E45F" },
	{ top: "78%", left: "72%", size: 18, delay: 0.7, color: "#3DD3F0" },
	{ top: "22%", left: "94%", size: 12, delay: 2.1, color: "#7BD957" },
	{ top: "70%", left: "58%", size: 14, delay: 1.2, color: "#5BB8FF" },
] as const;

const sparkleDots = [
	{ top: "24%", left: "66%", size: 8, delay: 0, color: "#3DD3F0" },
	{ top: "38%", left: "84%", size: 6, delay: 0.5, color: "#86E45F" },
	{ top: "56%", left: "62%", size: 9, delay: 1, color: "#5BB8FF" },
	{ top: "72%", left: "90%", size: 5, delay: 1.5, color: "#86E45F" },
	{ top: "82%", left: "78%", size: 7, delay: 0.4, color: "#7BD957" },
	{ top: "18%", left: "76%", size: 6, delay: 1.8, color: "#3DD3F0" },
	{ top: "48%", left: "94%", size: 5, delay: 0.8, color: "#86E45F" },
	{ top: "64%", left: "74%", size: 7, delay: 2.2, color: "#5BB8FF" },
] as const;

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
			accent: "text-iclset-cyan",
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
			accent: "text-iclset-lime",
		},
	];

	return (
		<section className="relative isolate overflow-hidden text-white">
			{/* Imagen de fondo */}
			<Image
				src="/back/background.png"
				alt=""
				fill
				priority
				sizes="100vw"
				className="-z-30 object-cover object-right"
			/>
			{/* Capa de profundidad navy para garantizar contraste sobre texto */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-20 bg-[linear-gradient(95deg,oklch(8%_0.045_252)_0%,oklch(10%_0.05_252_/_0.95)_42%,oklch(12%_0.055_252_/_0.55)_70%,transparent_100%)]"
			/>
			{/* Glow ambiental azul-verde sutil */}
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_60%,oklch(74%_0.16_230_/_0.18),transparent_28rem),radial-gradient(circle_at_88%_85%,oklch(78%_0.22_142_/_0.16),transparent_30rem)]"
			/>
			<PointerGlow variant="dark" />

			{/* Destellos sparkle que prolongan las particulas de la imagen */}
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
				{sparkleStars.map((star) => (
					<motion.span
						key={`star-${star.top}-${star.left}`}
						className="absolute"
						style={{
							top: star.top,
							left: star.left,
							width: star.size,
							height: star.size,
							transform: "translate(-50%, -50%)",
						}}
						animate={
							shouldReduceMotion
								? undefined
								: {
										opacity: [0, 1, 0.4, 1, 0],
										scale: [0.4, 1, 0.85, 1.1, 0.4],
										rotate: [0, 25, 0],
									}
						}
						transition={{
							duration: 4.4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: star.delay,
						}}
					>
						<svg
							viewBox="0 0 24 24"
							width={star.size}
							height={star.size}
							style={{
								filter: `drop-shadow(0 0 6px ${star.color}) drop-shadow(0 0 18px ${star.color})`,
							}}
						>
							<path
								d="M12 0c1.2 5.4 5.4 9.6 12 12-6.6 2.4-10.8 6.6-12 12-1.2-5.4-5.4-9.6-12-12C6.6 9.6 10.8 5.4 12 0Z"
								fill={star.color}
							/>
						</svg>
					</motion.span>
				))}
				{sparkleDots.map((dot) => (
					<motion.span
						key={`dot-${dot.top}-${dot.left}`}
						className="absolute rounded-full"
						style={{
							top: dot.top,
							left: dot.left,
							width: dot.size,
							height: dot.size,
							backgroundColor: dot.color,
							boxShadow: `0 0 14px ${dot.color}, 0 0 28px ${dot.color}`,
							transform: "translate(-50%, -50%)",
						}}
						animate={
							shouldReduceMotion
								? undefined
								: {
										scale: [1, 1.35, 1],
										opacity: [0.6, 1, 0.6],
									}
						}
						transition={{
							duration: 2.4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: dot.delay,
						}}
					/>
				))}
			</div>

			<div className="section-container relative z-10 py-16 sm:py-20 lg:py-28 xl:py-32">
				<div className="max-w-2xl">
					<motion.div
						className="inline-flex items-center gap-2 rounded-full border border-iclset-cyan/30 bg-white/8 px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-iclset-cyan uppercase shadow-[0_8px_24px_-12px_rgb(31_211_240_/_0.45)] backdrop-blur"
						{...fadeUp(0)}
					>
						<Sparkles className="size-3.5" />
						{conference.acronym}
						<span className="hidden h-3 w-px bg-iclset-cyan/40 sm:inline-block" />
						<span className="hidden text-white/70 sm:inline">
							Manta · Ecuador
						</span>
					</motion.div>

					<motion.h1
						className="mt-5 text-4xl leading-[1] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.75rem]"
						{...fadeUp(0.08)}
					>
						<span className="block bg-gradient-to-r from-[#5BB8FF] via-[#3DD3F0] to-[#86E45F] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgb(31_148_255_/_0.35)]">
							ICLSET 2026
						</span>
						<span className="mt-2 block text-[1.5rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-2xl lg:text-[1.9rem]">
							{conference.heroTitle[locale]}
						</span>
					</motion.h1>

					<motion.p
						className="mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-[1.05rem] sm:leading-8"
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
								<div key={item.label} className="flex items-center gap-3">
									<span
										className={`grid size-10 place-items-center rounded-xl border border-white/12 bg-white/8 shadow-[0_8px_18px_-10px_rgb(0_0_0_/_0.45)] backdrop-blur ${item.accent}`}
									>
										<Icon className="size-4" />
									</span>
									<div className="min-w-0">
										<dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-white/55 uppercase">
											{item.label}
										</dt>
										<dd className="text-sm leading-5 font-semibold text-white">
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
						<Button asChild size="lg" variant="glass">
							<Link href={localizePath(locale, secondaryCta.href)}>
								{secondaryCta.label[locale]}
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
