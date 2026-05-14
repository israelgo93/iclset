"use client";

import { MapPin, MonitorUp, Waves } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface VenueSectionProps {
	locale: Locale;
}

const easing = [0.22, 1, 0.36, 1] as const;

const cardStyles = [
	{
		gradient: "from-iclset-blue to-iclset-sky",
		text: "text-white",
		shadow: "shadow-[0_24px_70px_-30px_rgb(31_148_255_/_0.5)]",
	},
	{
		gradient: "from-iclset-emerald to-iclset-green",
		text: "text-iclset-navy",
		shadow: "shadow-[0_24px_70px_-30px_rgb(78_205_87_/_0.5)]",
	},
	{
		gradient: "from-iclset-cyan to-iclset-sky",
		text: "text-iclset-navy",
		shadow: "shadow-[0_24px_70px_-30px_rgb(61_211_240_/_0.5)]",
	},
] as const;

export function VenueSection({ locale }: VenueSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	const items = [
		{
			icon: MapPin,
			title: conference.location.venue,
			text: `${conference.location.mainHall} · ${conference.location.city}, ${conference.location.province}`,
		},
		{
			icon: MonitorUp,
			title: locale === "es" ? "Virtual sincrónica" : "Synchronous virtual",
			text:
				locale === "es"
					? "Salas Zoom institucionales: una sala plenaria y tres salas paralelas, una por track."
					: "Institutional Zoom rooms: one plenary room and three parallel rooms, one per track.",
		},
		{
			icon: Waves,
			title: locale === "es" ? "Territorio costero" : "Coastal territory",
			text:
				locale === "es"
					? "Manta aporta contexto territorial, biodiversidad, puerto, agroindustria y transferencia."
					: "Manta contributes territorial context, biodiversity, port activity, agroindustry, and transfer.",
		},
	];

	return (
		<section className="section-band relative">
			<div className="section-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
				<div>
					<SectionHeading
						eyebrow={locale === "es" ? "Sede híbrida" : "Hybrid venue"}
						title={
							locale === "es"
								? "Manta conecta ciencia, agro y tecnología"
								: "Manta connects science, agriculture, and technology"
						}
						description={
							locale === "es"
								? "La conferencia se desarrollará en la Universidad Laica Eloy Alfaro de Manabí con participación presencial y virtual sincrónica."
								: "The conference will take place at Universidad Laica Eloy Alfaro de Manabí with in-person and synchronous virtual participation."
						}
					/>
					<Button asChild size="default" variant="default">
						<Link href={localizePath(locale, "/venue")}>
							{locale === "es" ? "Ver sede" : "View venue"}
						</Link>
					</Button>
				</div>
				<div className="grid gap-4">
					{items.map((item, index) => {
						const Icon = item.icon;
						const style = cardStyles[index];

						return (
							<motion.article
								key={item.title}
								initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
								whileInView={
									shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
								}
								viewport={{ once: true, margin: "-60px" }}
								transition={{
									duration: 0.55,
									ease: easing,
									delay: 0.07 * index,
								}}
								whileHover={
									shouldReduceMotion
										? undefined
										: { y: -6, transition: { duration: 0.25, ease: easing } }
								}
								className={`solid-card rounded-[1.5rem] bg-gradient-to-br ${style.gradient} ${style.shadow} ${style.text} p-6 ring-1 ring-white/30`}
							>
								<span className="inline-grid size-11 place-items-center rounded-2xl bg-white/22 backdrop-blur">
									<Icon className="size-5" />
								</span>
								<h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
								<p className="mt-2 text-sm leading-6 opacity-90">{item.text}</p>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
