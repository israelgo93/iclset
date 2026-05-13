"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

interface Hex {
	id: "bio" | "agro" | "tech";
	src: string;
	label: { es: string; en: string };
	caption: { es: string; en: string };
	top: string;
	left: string;
	glow: string;
	ring: string;
	delay: number;
	float: number;
}

const hexagons: Hex[] = [
	{
		id: "bio",
		src: "/tracks/bio.svg",
		label: { es: "Biociencia", en: "Life Sciences" },
		caption: { es: "Biodiversidad y ambiente", en: "Biodiversity & environment" },
		top: "4%",
		left: "8%",
		glow: "from-iclset-emerald/55 to-iclset-green/30",
		ring: "ring-iclset-emerald/50",
		delay: 0,
		float: -10,
	},
	{
		id: "tech",
		src: "/tracks/tech.svg",
		label: { es: "Tecnología", en: "Technology" },
		caption: { es: "IA, datos y sistemas", en: "AI, data & systems" },
		top: "12%",
		left: "58%",
		glow: "from-iclset-blue/55 to-iclset-sky/30",
		ring: "ring-iclset-blue/55",
		delay: 0.18,
		float: -8,
	},
	{
		id: "agro",
		src: "/tracks/agro.svg",
		label: { es: "Agrociencia", en: "Agroscience" },
		caption: { es: "Producción sostenible", en: "Sustainable production" },
		top: "54%",
		left: "30%",
		glow: "from-iclset-green/55 to-iclset-lime/30",
		ring: "ring-iclset-green/55",
		delay: 0.32,
		float: 10,
	},
];

interface HeroScienceMotionProps {
	locale: "es" | "en";
}

export function HeroScienceMotion({ locale }: HeroScienceMotionProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div
			className="relative isolate w-full overflow-hidden rounded-[1.75rem] border border-iclset-blue/15 bg-gradient-to-br from-[oklch(98%_0.012_220)] via-white to-[oklch(96%_0.025_215)] shadow-[0_30px_90px_-40px_rgb(31_64_120_/_0.35)]"
			style={{ aspectRatio: "1 / 1" }}
		>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,oklch(74%_0.16_230_/_0.28),transparent_22rem),radial-gradient(circle_at_78%_82%,oklch(78%_0.22_142_/_0.28),transparent_22rem),radial-gradient(circle_at_72%_24%,oklch(80%_0.14_215_/_0.18),transparent_18rem)]"
			/>
			<div
				aria-hidden="true"
				className="tech-grid absolute inset-0 -z-10 opacity-55"
			/>

			{/* Lineas de conexion entre hexagonos */}
			<svg
				className="absolute inset-0 h-full w-full"
				viewBox="0 0 400 400"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="heroLink" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="#1F94FF" stopOpacity="0.55" />
						<stop offset="0.5" stopColor="#3DD3F0" stopOpacity="0.55" />
						<stop offset="1" stopColor="#7BD957" stopOpacity="0.55" />
					</linearGradient>
				</defs>
				<motion.path
					d="M82 100 Q 200 60 290 130"
					stroke="url(#heroLink)"
					strokeWidth="2.2"
					strokeLinecap="round"
					strokeDasharray="6 9"
					fill="none"
					initial={shouldReduceMotion ? false : { pathLength: 0 }}
					animate={shouldReduceMotion ? undefined : { pathLength: 1 }}
					transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
				/>
				<motion.path
					d="M290 130 Q 280 280 200 320"
					stroke="url(#heroLink)"
					strokeWidth="2.2"
					strokeLinecap="round"
					strokeDasharray="6 9"
					fill="none"
					initial={shouldReduceMotion ? false : { pathLength: 0 }}
					animate={shouldReduceMotion ? undefined : { pathLength: 1 }}
					transition={{ duration: 1.8, ease: "easeInOut", delay: 0.7 }}
				/>
				<motion.path
					d="M200 320 Q 100 280 82 100"
					stroke="url(#heroLink)"
					strokeWidth="2.2"
					strokeLinecap="round"
					strokeDasharray="6 9"
					fill="none"
					initial={shouldReduceMotion ? false : { pathLength: 0 }}
					animate={shouldReduceMotion ? undefined : { pathLength: 1 }}
					transition={{ duration: 1.8, ease: "easeInOut", delay: 1 }}
				/>
			</svg>

			{/* Hexagonos animados */}
			{hexagons.map((hex) => (
				<motion.div
					key={hex.id}
					className="absolute"
					style={{ top: hex.top, left: hex.left, width: "38%" }}
					initial={
						shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.92 }
					}
					animate={
						shouldReduceMotion
							? undefined
							: { opacity: 1, y: 0, scale: 1 }
					}
					transition={{
						duration: 0.7,
						ease: [0.22, 1, 0.36, 1],
						delay: hex.delay,
					}}
				>
					<motion.div
						className={`relative rounded-[28%] bg-gradient-to-br ${hex.glow} p-1.5 shadow-[0_24px_50px_-22px_rgb(31_64_120_/_0.45)] ring-1 ${hex.ring}`}
						animate={
							shouldReduceMotion
								? undefined
								: { y: [0, hex.float, 0] }
						}
						transition={{
							duration: 5.5 + hex.delay * 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						whileHover={
							shouldReduceMotion
								? undefined
								: { scale: 1.05, transition: { duration: 0.25 } }
						}
					>
						<div className="overflow-hidden rounded-[26%] bg-white">
							<Image
								src={hex.src}
								alt={hex.label[locale]}
								width={480}
								height={480}
								className="h-auto w-full"
								priority={hex.id === "bio"}
							/>
						</div>
					</motion.div>
					<motion.div
						className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-iclset-blue/15 bg-white/95 px-3 py-1 text-[0.65rem] font-semibold whitespace-nowrap text-iclset-ink shadow-[0_8px_20px_-10px_rgb(31_64_120_/_0.35)] backdrop-blur"
						initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
						animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{
							duration: 0.4,
							delay: hex.delay + 0.5,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						{hex.label[locale]}
					</motion.div>
				</motion.div>
			))}

			{/* Nodos decorativos animados */}
			<div className="pointer-events-none absolute inset-0">
				{[
					{ top: "20%", left: "48%", color: "bg-iclset-blue", size: "size-2.5", delay: 0 },
					{ top: "44%", left: "12%", color: "bg-iclset-emerald", size: "size-2", delay: 0.5 },
					{ top: "68%", left: "72%", color: "bg-iclset-green", size: "size-2.5", delay: 1 },
					{ top: "78%", left: "18%", color: "bg-iclset-cyan", size: "size-1.5", delay: 1.5 },
					{ top: "30%", left: "90%", color: "bg-iclset-sky", size: "size-2", delay: 2 },
				].map((node) => (
					<motion.span
						key={`${node.top}-${node.left}`}
						className={`absolute rounded-full ${node.color} ${node.size} shadow-[0_0_18px_currentColor] ring-2 ring-white/85`}
						style={{ top: node.top, left: node.left }}
						animate={
							shouldReduceMotion
								? undefined
								: { scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }
						}
						transition={{
							duration: 2.4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: node.delay,
						}}
					/>
				))}
			</div>
		</div>
	);
}
