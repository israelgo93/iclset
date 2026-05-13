"use client";

import { UsersRound } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { committees } from "@/content/committees";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface CommitteesPreviewProps {
	locale: Locale;
	detailed?: boolean;
}

const accents = [
	"bg-gradient-to-br from-iclset-blue to-iclset-sky",
	"bg-gradient-to-br from-iclset-emerald to-iclset-green",
	"bg-gradient-to-br from-iclset-cyan to-iclset-sky",
	"bg-gradient-to-br from-iclset-green to-iclset-lime",
] as const;

const easing = [0.22, 1, 0.36, 1] as const;

export function CommitteesPreview({
	locale,
	detailed = false,
}: CommitteesPreviewProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="section-band relative">
			<div className="section-container">
				<SectionHeading
					eyebrow={locale === "es" ? "Organizacion" : "Organization"}
					title={
						locale === "es"
							? "Chairs y comites de ICLSET 2026"
							: "ICLSET 2026 chairs and committees"
					}
					description={
						locale === "es"
							? "La gobernanza academica integra direccion general, chairs por track, comite honorifico, comite organizador y comite cientifico."
							: "Academic governance includes general leadership, track chairs, honorary committee, organizing committee, and scientific committee."
					}
				/>
				<motion.div
					className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
					initial={shouldReduceMotion ? false : "hidden"}
					whileInView={shouldReduceMotion ? undefined : "visible"}
					viewport={{ once: true, margin: "-80px" }}
					variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
				>
					{(detailed ? committees : committees.slice(0, 4)).map(
						(group, index) => (
							<motion.article
								key={group.title.en}
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
								className="group rounded-2xl border border-iclset-blue/10 bg-white p-6 shadow-[0_18px_50px_-30px_rgb(15_23_42_/_0.18)] transition-all duration-500 hover:shadow-[0_28px_70px_-30px_rgb(31_64_120_/_0.25)] hover:border-iclset-blue/20"
							>
								<span
									className={`inline-grid size-11 place-items-center rounded-2xl text-white shadow-md shadow-iclset-navy/15 ${accents[index % accents.length]}`}
								>
									<UsersRound className="size-5" />
								</span>
								<h3 className="mt-5 font-semibold text-iclset-ink">
									{group.title[locale]}
								</h3>
								<p className="mt-2 text-sm leading-6 text-iclset-muted">
									{group.description[locale]}
								</p>
								<ul className="mt-4 grid gap-2">
									{(detailed ? group.members : group.members.slice(0, 3)).map(
										(member) => (
											<li
												key={member.es}
												className="rounded-xl bg-iclset-surface px-3 py-2 text-sm leading-5 font-medium text-iclset-ink ring-1 ring-iclset-blue/8"
											>
												{member[locale]}
											</li>
										),
									)}
								</ul>
							</motion.article>
						),
					)}
				</motion.div>
				{!detailed ? (
					<div className="mt-10">
						<Button asChild size="default" variant="outline">
							<Link href={localizePath(locale, "/committees")}>
								{locale === "es" ? "Ver comites" : "View committees"}
							</Link>
						</Button>
					</div>
				) : null}
			</div>
		</section>
	);
}
