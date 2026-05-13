"use client";

import { ArrowUpRight, Cpu, Leaf, Sprout } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { tracks } from "@/content/tracks";
import { localizePath } from "@/lib/i18n";
import type { TrackKey } from "@/types/conference";
import type { Locale } from "@/types/locale";

const trackStyles: Record<
	TrackKey,
	{
		icon: typeof Leaf;
		image: string;
		iconBg: string;
		iconColor: string;
		glow: string;
		accentText: string;
		ring: string;
		badge: string;
		imageBg: string;
	}
> = {
	bio: {
		icon: Leaf,
		image: "/tracks/bio.svg",
		iconBg: "bg-gradient-to-br from-iclset-emerald to-iclset-green",
		iconColor: "text-white",
		glow:
			"hover:shadow-[0_36px_90px_-40px_rgb(78_205_87_/_0.55)] hover:ring-iclset-emerald/40",
		accentText: "text-iclset-emerald",
		ring: "ring-iclset-emerald/15",
		badge: "bg-iclset-emerald-soft text-iclset-emerald",
		imageBg:
			"bg-gradient-to-br from-iclset-emerald/15 via-iclset-green/10 to-iclset-cyan/10",
	},
	agro: {
		icon: Sprout,
		image: "/tracks/agro.svg",
		iconBg: "bg-gradient-to-br from-iclset-green to-iclset-lime",
		iconColor: "text-iclset-navy",
		glow:
			"hover:shadow-[0_36px_90px_-40px_rgb(134_228_95_/_0.55)] hover:ring-iclset-green/40",
		accentText: "text-iclset-green",
		ring: "ring-iclset-green/15",
		badge: "bg-iclset-green-soft text-iclset-green",
		imageBg:
			"bg-gradient-to-br from-iclset-green/15 via-iclset-lime/10 to-iclset-emerald/10",
	},
	tech: {
		icon: Cpu,
		image: "/tracks/tech.svg",
		iconBg: "bg-gradient-to-br from-iclset-blue to-iclset-sky",
		iconColor: "text-white",
		glow:
			"hover:shadow-[0_36px_90px_-40px_rgb(31_148_255_/_0.55)] hover:ring-iclset-blue/40",
		accentText: "text-iclset-blue",
		ring: "ring-iclset-blue/15",
		badge: "bg-iclset-blue-soft text-iclset-blue",
		imageBg:
			"bg-gradient-to-br from-iclset-blue/15 via-iclset-sky/10 to-iclset-cyan/10",
	},
};

interface TracksSectionProps {
	locale: Locale;
	detailed?: boolean;
}

const easing = [0.22, 1, 0.36, 1] as const;

export function TracksSection({
	locale,
	detailed = false,
}: TracksSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="section-band relative">
			<div className="section-container">
				<SectionHeading
					eyebrow={locale === "es" ? "Tracks cientificos" : "Scientific tracks"}
					title={
						locale === "es"
							? "Tres areas, una agenda de investigacion aplicada"
							: "Three areas, one applied research agenda"
					}
					description={
						locale === "es"
							? "La conferencia articula ciencias de la vida, produccion sostenible y tecnologia emergente para responder a desafios territoriales."
							: "The conference connects life sciences, sustainable production, and emerging technology to address territorial challenges."
					}
				/>
				<motion.div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
					initial={shouldReduceMotion ? false : "hidden"}
					whileInView={shouldReduceMotion ? undefined : "visible"}
					viewport={{ once: true, margin: "-80px" }}
					variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
				>
					{tracks.map((track) => {
						const style = trackStyles[track.key];
						const Icon = style.icon;

						return (
							<motion.article
								key={track.key}
								variants={{
									hidden: { opacity: 0, y: 28 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.6, ease: easing }}
								whileHover={
									shouldReduceMotion
										? undefined
										: { y: -8, transition: { duration: 0.3, ease: easing } }
								}
								className={`group relative isolate flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-white ring-1 ${style.ring} shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.16)] transition-all duration-500 ${style.glow}`}
							>
								<div
									className={`relative overflow-hidden ${style.imageBg}`}
								>
									<div className="aspect-[16/10] w-full">
										<Image
											src={style.image}
											alt={track.name[locale]}
											width={480}
											height={300}
											className="h-full w-full object-cover object-center"
										/>
									</div>
									<span
										className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${style.badge}`}
									>
										{track.shortName[locale]}
									</span>
									<span
										className={`absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold ${style.accentText} shadow-[0_8px_18px_-8px_rgb(15_23_42_/_0.25)] backdrop-blur`}
									>
										<Icon className="size-3.5" />
										{locale === "es" ? "Track" : "Track"} · {track.key.toUpperCase()}
									</span>
								</div>
								<div className="flex flex-1 flex-col p-6 sm:p-7">
									<h3 className="text-xl font-semibold tracking-tight text-iclset-ink sm:text-2xl">
										{track.name[locale]}
									</h3>
									<p className="mt-3 text-sm leading-6 text-iclset-muted">
										{track.description[locale]}
									</p>
									<div className="mt-5 rounded-2xl border border-iclset-blue/10 bg-iclset-blue-soft/40 p-4">
										<p
											className={`text-[0.7rem] font-semibold tracking-[0.16em] uppercase ${style.accentText}`}
										>
											{locale === "es"
												? "Carreras articuladoras"
												: "Articulating programs"}
										</p>
										<p className="mt-2 text-sm leading-6 font-medium text-iclset-ink">
											{track.careers.map((career) => career[locale]).join(" · ")}
										</p>
									</div>
									<div className="mt-4 flex flex-wrap gap-2">
										{(detailed ? track.topics : track.topics.slice(0, 3)).map(
											(topic) => (
												<span
													key={topic[locale]}
													className="rounded-full bg-iclset-surface px-3 py-1 text-xs font-medium text-iclset-ink ring-1 ring-iclset-blue/10"
												>
													{topic[locale]}
												</span>
											),
										)}
									</div>
									{detailed ? (
										<div className="mt-5 rounded-2xl border border-iclset-blue/10 bg-white p-4">
											<p
												className={`text-[0.7rem] font-semibold tracking-[0.16em] uppercase ${style.accentText}`}
											>
												Chair
											</p>
											<p className="mt-1 text-sm font-medium text-iclset-ink">
												{track.chair[locale]}
											</p>
										</div>
									) : null}
									<div className="mt-auto pt-6">
										<Button asChild variant="outline" size="sm">
											<Link href={localizePath(locale, "/tracks")}>
												{locale === "es" ? "Ver ejes" : "View themes"}
												<ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
											</Link>
										</Button>
									</div>
								</div>
							</motion.article>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
