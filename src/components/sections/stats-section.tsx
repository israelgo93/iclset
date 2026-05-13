"use client";

import { motion, useReducedMotion } from "motion/react";

import { stats } from "@/content/conference";
import type { Locale } from "@/types/locale";

interface StatsSectionProps {
	locale: Locale;
}

const cardStyles = [
	{
		gradient: "from-iclset-blue to-iclset-sky",
		text: "text-white",
		ring: "ring-iclset-blue/30",
		shadow: "shadow-[0_24px_70px_-30px_rgb(31_148_255_/_0.55)]",
	},
	{
		gradient: "from-iclset-emerald to-iclset-green",
		text: "text-iclset-navy",
		ring: "ring-iclset-emerald/30",
		shadow: "shadow-[0_24px_70px_-30px_rgb(78_205_87_/_0.55)]",
	},
	{
		gradient: "from-iclset-cyan to-iclset-sky",
		text: "text-iclset-navy",
		ring: "ring-iclset-cyan/30",
		shadow: "shadow-[0_24px_70px_-30px_rgb(61_211_240_/_0.55)]",
	},
	{
		gradient: "from-iclset-green to-iclset-lime",
		text: "text-iclset-navy",
		ring: "ring-iclset-green/30",
		shadow: "shadow-[0_24px_70px_-30px_rgb(134_228_95_/_0.55)]",
	},
] as const;

const easing = [0.22, 1, 0.36, 1] as const;

export function StatsSection({ locale }: StatsSectionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="relative -mt-10 pb-10 sm:pb-12">
			<div className="section-container">
				<motion.div
					className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
					initial={shouldReduceMotion ? false : "hidden"}
					whileInView={shouldReduceMotion ? undefined : "visible"}
					viewport={{ once: true, margin: "-60px" }}
					variants={{
						visible: { transition: { staggerChildren: 0.08 } },
					}}
				>
					{stats.map((item, index) => {
						const style = cardStyles[index % cardStyles.length];
						return (
							<motion.div
								key={item.value}
								variants={{
									hidden: { opacity: 0, y: 24 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.55, ease: easing }}
								whileHover={
									shouldReduceMotion
										? undefined
										: { y: -6, transition: { duration: 0.25, ease: easing } }
								}
								className={`solid-card rounded-2xl bg-gradient-to-br ${style.gradient} p-5 ring-1 ${style.ring} ${style.shadow} ${style.text}`}
							>
								<p className="text-3xl font-semibold tracking-tight">
									{item.value}
								</p>
								<p className="mt-1 text-sm font-medium opacity-85">
									{item.label[locale]}
								</p>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
