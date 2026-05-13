"use client";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useReducedMotion,
} from "motion/react";
import { useEffect } from "react";

interface PointerGlowProps {
	variant?: "dark" | "light";
}

export function PointerGlow({ variant = "dark" }: PointerGlowProps) {
	const x = useMotionValue(50);
	const y = useMotionValue(50);
	const shouldReduceMotion = useReducedMotion();

	const darkBackground = useMotionTemplate`radial-gradient(540px circle at ${x}% ${y}%, oklch(80% 0.14 215 / 0.35), oklch(78% 0.22 142 / 0.18) 28%, transparent 62%)`;
	const lightBackground = useMotionTemplate`radial-gradient(520px circle at ${x}% ${y}%, oklch(74% 0.16 230 / 0.28), oklch(78% 0.22 142 / 0.16) 28%, transparent 65%)`;
	const background = variant === "dark" ? darkBackground : lightBackground;

	useEffect(() => {
		if (shouldReduceMotion) return;

		function handlePointerMove(event: PointerEvent) {
			x.set((event.clientX / window.innerWidth) * 100);
			y.set((event.clientY / window.innerHeight) * 100);
		}

		window.addEventListener("pointermove", handlePointerMove);
		return () => window.removeEventListener("pointermove", handlePointerMove);
	}, [x, y, shouldReduceMotion]);

	return (
		<motion.div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 -z-10"
			style={{ background }}
		/>
	);
}
