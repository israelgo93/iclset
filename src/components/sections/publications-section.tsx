"use client";

import { ArrowRight, ExternalLink, FileCheck2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { journals } from "@/content/journals";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface PublicationsSectionProps {
	locale: Locale;
	detailed?: boolean;
}

const processLabels = {
	es: [
		"Recepcion",
		"Revision doble ciego",
		"Decision editorial",
		"Presentacion",
		"Canalizacion a revista",
	],
	en: [
		"Reception",
		"Double-blind review",
		"Editorial decision",
		"Presentation",
		"Journal pathway",
	],
};

const easing = [0.22, 1, 0.36, 1] as const;

export function PublicationsSection({
	locale,
	detailed = false,
}: PublicationsSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="section-band relative">
			<div className="section-container">
				<SectionHeading
					eyebrow={locale === "es" ? "Proceso editorial" : "Editorial process"}
					title={
						locale === "es"
							? "Publicacion academica con revision y ruta posterior"
							: "Academic publication with review and post-conference pathways"
					}
					description={
						locale === "es"
							? "ICLSET 2026 contempla libro de actas y canalizacion de articulos aceptados hacia revistas aliadas, respetando los procesos editoriales de cada publicacion."
							: "ICLSET 2026 includes proceedings and pathways for accepted papers toward partner journals, respecting each publication's editorial process."
					}
				/>
				<motion.div
					className="grid gap-4 lg:grid-cols-5"
					initial={shouldReduceMotion ? false : "hidden"}
					whileInView={shouldReduceMotion ? undefined : "visible"}
					viewport={{ once: true, margin: "-60px" }}
					variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
				>
					{processLabels[locale].map((label, index) => (
						<motion.div
							key={label}
							variants={{
								hidden: { opacity: 0, y: 18 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5, ease: easing }}
							className="relative overflow-hidden rounded-2xl border border-iclset-blue/10 bg-white p-5 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.18)]"
						>
							<span
								aria-hidden="true"
								className="absolute -top-6 -right-6 -z-10 size-16 rounded-full bg-gradient-to-br from-iclset-blue/15 to-iclset-green/15 blur-2xl"
							/>
							<span className="inline-grid size-10 place-items-center rounded-full bg-gradient-to-br from-iclset-blue to-iclset-sky font-mono text-sm font-semibold text-white shadow-md shadow-iclset-blue/30">
								{index + 1}
							</span>
							<p className="mt-4 text-sm font-semibold text-iclset-ink">
								{label}
							</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div
					className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
					initial={shouldReduceMotion ? false : "hidden"}
					whileInView={shouldReduceMotion ? undefined : "visible"}
					viewport={{ once: true, margin: "-60px" }}
					variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
				>
					{(detailed ? journals : journals.slice(0, 5)).map((journal) => (
						<motion.article
							key={journal.name}
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
							className="group rounded-2xl border border-iclset-blue/10 bg-white p-5 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.18)] transition-all duration-500 hover:border-iclset-emerald/30 hover:shadow-[0_28px_70px_-30px_rgb(78_205_87_/_0.35)]"
						>
							<span className="inline-grid size-10 place-items-center rounded-xl bg-iclset-emerald-soft text-iclset-emerald">
								<FileCheck2 className="size-5" />
							</span>
							<h3 className="mt-4 font-semibold text-iclset-ink">
								{journal.name}
							</h3>
							<p className="mt-2 text-sm leading-6 text-iclset-muted">
								{journal.area[locale]}
							</p>
							<p className="mt-3 text-xs font-semibold tracking-[0.12em] text-iclset-blue uppercase">
								{journal.indexing[locale]}
							</p>
							{journal.url ? (
								<a
									href={journal.url}
									target="_blank"
									rel="noreferrer"
									className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-iclset-ink transition-colors hover:text-iclset-blue"
								>
									{locale === "es" ? "Ver revista" : "View journal"}
									<ExternalLink className="size-3.5" />
								</a>
							) : null}
						</motion.article>
					))}
				</motion.div>
				<div className="mt-10">
					<Button asChild size="default" variant="default">
						<Link href={localizePath(locale, "/publications")}>
							{locale === "es" ? "Ver proceso completo" : "View full process"}
							<ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
