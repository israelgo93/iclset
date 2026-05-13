"use client";

import { motion, useReducedMotion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MotionCardProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	as?: "div" | "article" | "section";
	interactive?: boolean;
}

const easing = [0.22, 1, 0.36, 1] as const;

export function MotionCard({
	children,
	className,
	delay = 0,
	as = "article",
	interactive = true,
}: MotionCardProps) {
	const shouldReduceMotion = useReducedMotion();

	const baseMotionProps: MotionProps = {
		initial: shouldReduceMotion ? false : { opacity: 0, y: 22 },
		whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
		viewport: { once: true, margin: "-80px" },
		transition: { duration: 0.55, ease: easing, delay },
	};

	const hoverProps: MotionProps =
		interactive && !shouldReduceMotion
			? {
					whileHover: { y: -6, transition: { duration: 0.25, ease: easing } },
					whileTap: { y: -2, scale: 0.99 },
				}
			: {};

	const merged: MotionProps = { ...baseMotionProps, ...hoverProps };

	const classes = cn(
		"relative isolate",
		interactive && "will-change-transform",
		className,
	);

	if (as === "article") {
		return (
			<motion.article className={classes} {...merged}>
				{children}
			</motion.article>
		);
	}

	if (as === "section") {
		return (
			<motion.section className={classes} {...merged}>
				{children}
			</motion.section>
		);
	}

	return (
		<motion.div className={classes} {...merged}>
			{children}
		</motion.div>
	);
}
