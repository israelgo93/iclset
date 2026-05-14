"use client";

import { CalendarClock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { schedule } from "@/content/schedule";
import type { Locale } from "@/types/locale";

interface ProgramPreviewSectionProps {
	locale: Locale;
	detailed?: boolean;
}

const dayAccents = [
	"bg-gradient-to-br from-iclset-emerald to-iclset-green",
	"bg-gradient-to-br from-iclset-blue to-iclset-sky",
	"bg-gradient-to-br from-iclset-green to-iclset-lime",
] as const;

const dayAccentText = [
	"text-iclset-emerald",
	"text-iclset-blue",
	"text-iclset-green",
] as const;

const easing = [0.22, 1, 0.36, 1] as const;

export function ProgramPreviewSection({
	locale,
	detailed = false,
}: ProgramPreviewSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="section-band relative">
			<div className="section-container">
				<SectionHeading
					eyebrow={locale === "es" ? "Programa académico" : "Academic program"}
					title={
						locale === "es"
							? "Tres días de ciencia, diálogo y transferencia"
							: "Three days of science, dialogue, and transfer"
					}
					description={
						locale === "es"
							? "La agenda combina plenarias presenciales en el Paraninfo, transmisión por Zoom, sesiones paralelas por track y feria de pósters en Plaza Centenario."
							: "The agenda combines in-person plenaries at the auditorium, Zoom broadcast, parallel sessions by track, and a poster fair at Plaza Centenario."
					}
				/>
				<div className="grid gap-6">
					{schedule.map((day, index) => (
						<motion.article
							key={day.day.en}
							initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
							whileInView={
								shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
							}
							viewport={{ once: true, margin: "-80px" }}
							transition={{
								duration: 0.6,
								ease: easing,
								delay: 0.06 * index,
							}}
							className="border-iclset-blue/10 overflow-hidden rounded-[1.85rem] border bg-white shadow-[0_24px_70px_-40px_rgb(15_23_42_/_0.2)]"
						>
							<div className="grid lg:grid-cols-[0.85fr_1.15fr]">
								<div className={`relative p-5 sm:p-6 ${dayAccents[index]}`}>
									<div className="shadow-iclset-navy/25 relative overflow-hidden rounded-[1.35rem] border border-white/30 shadow-2xl">
										<div className="aspect-[4/3] w-full">
											<Image
												src={day.image.src}
												alt={day.image.alt[locale]}
												width={1024}
												height={1024}
												sizes="(max-width: 1024px) 100vw, 40vw"
												loading={index === 0 ? "eager" : "lazy"}
												className="h-full w-full object-cover object-center"
											/>
										</div>
									</div>
								</div>
								<div className="p-5 sm:p-7">
									<div className="border-iclset-blue/10 border-b pb-5">
										<p
											className={`text-sm font-semibold tracking-[0.1em] uppercase ${dayAccentText[index]}`}
										>
											{day.day[locale]} · {day.date[locale]}
										</p>
										<h3 className="text-iclset-ink mt-2 text-2xl font-semibold tracking-tight">
											{day.summary[locale]}
										</h3>
									</div>
									<div className="mt-5 grid gap-3">
										{(detailed ? day.items : day.items.slice(0, 3)).map(
											(item) => (
												<motion.div
													key={`${item.time}-${item.title.en}`}
													whileHover={
														shouldReduceMotion
															? undefined
															: {
																	y: -2,
																	transition: {
																		duration: 0.2,
																		ease: easing,
																	},
																}
													}
													className="border-iclset-blue/10 bg-iclset-surface grid gap-3 rounded-2xl border p-4 transition-colors hover:bg-white sm:grid-cols-[7.5rem_1fr]"
												>
													<div>
														<p
															className={`font-mono text-sm font-semibold ${dayAccentText[index]}`}
														>
															{item.time}
														</p>
														<p className="text-iclset-muted mt-1 flex items-center gap-1 text-xs font-medium">
															<CalendarClock className="size-3.5" />
															{item.modality[locale]}
														</p>
													</div>
													<div>
														<h4 className="text-iclset-ink font-semibold">
															{item.title[locale]}
														</h4>
														<p className="text-iclset-muted mt-1 text-sm leading-6">
															{item.description[locale]}
														</p>
													</div>
												</motion.div>
											),
										)}
									</div>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
