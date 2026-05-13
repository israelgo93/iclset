"use client";

import { motion, useReducedMotion } from "motion/react";

import { stats } from "@/content/conference";
import type { Locale } from "@/types/locale";

interface StatsSectionProps {
	locale: Locale;
}

type StatCardStyle = {
	variant: "light" | "solid";
	gradient?: string;
	text: string;
	valueText: string;
	ring: string;
	shadow: string;
	dot: string;
	accent: string;
};

const cardStyles: readonly StatCardStyle[] = [
	{
		variant: "light",
		text: "text-iclset-ink",
		valueText: "text-iclset-blue",
		ring: "ring-iclset-blue/15",
		shadow: "shadow-[0_18px_50px_-30px_rgb(31_148_255_/_0.35)]",
		dot: "bg-iclset-blue",
		accent: "from-iclset-blue/0 via-iclset-blue/0 to-iclset-blue/8",
	},
	{
		variant: "solid",
		gradient: "from-iclset-emerald to-iclset-green",
		text: "text-iclset-navy",
		valueText: "text-iclset-navy",
		ring: "ring-iclset-emerald/30",
		shadow: "shadow-[0_24px_70px_-30px_rgb(78_205_87_/_0.5)]",
		dot: "bg-iclset-navy/40",
		accent: "",
	},
	{
		variant: "light",
		text: "text-iclset-ink",
		valueText: "text-iclset-sky",
		ring: "ring-iclset-cyan/20",
		shadow: "shadow-[0_18px_50px_-30px_rgb(61_211_240_/_0.4)]",
		dot: "bg-iclset-sky",
		accent: "from-iclset-cyan/0 via-iclset-cyan/0 to-iclset-cyan/10",
	},
	{
		variant: "solid",
		gradient: "from-iclset-green to-iclset-lime",
		text: "text-iclset-navy",
		valueText: "text-iclset-navy",
		ring: "ring-iclset-green/30",
		shadow: "shadow-[0_24px_70px_-30px_rgb(134_228_95_/_0.5)]",
		dot: "bg-iclset-navy/40",
		accent: "",
	},
];

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
						const baseClasses = `rounded-2xl p-5 ring-1 ${style.ring} ${style.shadow} ${style.text}`;
						const surfaceClasses =
							style.variant === "solid"
								? `solid-card bg-gradient-to-br ${style.gradient}`
								: `relative isolate overflow-hidden bg-white bg-gradient-to-br ${style.accent}`;

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
								className={`${surfaceClasses} ${baseClasses}`}
							>
								<div className="flex items-center gap-2">
									<span
										className={`size-2 rounded-full ${style.dot}`}
										aria-hidden="true"
									/>
									<p
										className={`text-3xl leading-none font-semibold tracking-tight ${style.valueText}`}
									>
										{item.value}
									</p>
								</div>
								<p className="mt-2 text-sm font-medium opacity-85">
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
