"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface FinalCtaSectionProps {
	locale: Locale;
}

const easing = [0.22, 1, 0.36, 1] as const;

export function FinalCtaSection({ locale }: FinalCtaSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="section-band relative">
			<div className="section-container">
				<motion.div
					className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[oklch(20%_0.06_250)] via-[oklch(28%_0.10_240)] to-[oklch(22%_0.08_220)] p-8 text-white sm:p-12 lg:p-14"
					initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
					whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.65, ease: easing }}
				>
					<div
						aria-hidden="true"
						className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,oklch(74%_0.16_230_/_0.45),transparent_24rem),radial-gradient(circle_at_88%_85%,oklch(78%_0.22_142_/_0.38),transparent_24rem)]"
					/>
					<div
						aria-hidden="true"
						className="tech-grid-dark absolute inset-0 -z-10 opacity-50"
					/>
					<div
						aria-hidden="true"
						className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-iclset-green/30 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-iclset-blue/30 blur-3xl"
					/>

					<div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div>
							<p className="text-sm font-semibold tracking-[0.22em] text-iclset-cyan uppercase">
								{conference.acronym}
							</p>
							<h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-[2.85rem]">
								{locale === "es"
									? "Convocatoria abierta para ciencia aplicada al territorio."
									: "Call open for territory-focused applied science."}
							</h2>
							<p className="mt-5 max-w-2xl text-base leading-7 text-white/72">
								{locale === "es"
									? "Revise los lineamientos, seleccione el track correspondiente y prepare su contribucion anonimizada para el flujo de revision doble ciego."
									: "Review the guidelines, select the right track, and prepare an anonymized contribution for the double-blind review workflow."}
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<Button asChild size="lg" variant="default">
								<Link href={localizePath(locale, "/call-for-papers")}>
									Call for Papers
									<ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="glass">
								<Link href={localizePath(locale, "/contact")}>
									{locale === "es"
										? "Contacto institucional"
										: "Institutional contact"}
								</Link>
							</Button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
