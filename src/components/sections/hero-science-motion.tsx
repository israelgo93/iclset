"use client";

import { motion, useReducedMotion } from "motion/react";

const orbits = [
	{ size: 320, color: "oklch(74% 0.16 230 / 0.55)", duration: 28 },
	{ size: 240, color: "oklch(80% 0.14 215 / 0.5)", duration: 22 },
	{ size: 160, color: "oklch(78% 0.22 142 / 0.55)", duration: 18 },
] as const;

const nodes = [
	{ cx: 80, cy: 96, color: "bg-iclset-emerald", label: "Bio" },
	{ cx: 170, cy: 60, color: "bg-iclset-sky", label: "Tech" },
	{ cx: 244, cy: 132, color: "bg-iclset-green", label: "Agro" },
	{ cx: 116, cy: 212, color: "bg-iclset-blue", label: "Data" },
	{ cx: 238, cy: 244, color: "bg-iclset-cyan", label: "Cloud" },
] as const;

export function HeroScienceMotion() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<div className="brand-gradient-border relative isolate min-h-[26rem] overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-white to-[oklch(96%_0.02_215)] p-5 shadow-[0_30px_90px_-40px_rgb(31_64_120_/_0.35)] md:min-h-[32rem]">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,oklch(74%_0.16_230_/_0.22),transparent_22rem),radial-gradient(circle_at_78%_82%,oklch(78%_0.22_142_/_0.22),transparent_22rem)]"
			/>
			<div
				aria-hidden="true"
				className="tech-grid absolute inset-0 -z-10 opacity-45"
			/>

			{orbits.map((orbit, index) => (
				<motion.div
					key={orbit.size}
					aria-hidden="true"
					className="absolute top-1/2 left-1/2 rounded-full border"
					style={{
						width: orbit.size,
						height: orbit.size,
						marginLeft: -orbit.size / 2,
						marginTop: -orbit.size / 2,
						borderColor: orbit.color,
					}}
					animate={
						shouldReduceMotion
							? undefined
							: { rotate: index % 2 === 0 ? 360 : -360 }
					}
					transition={{
						duration: orbit.duration,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			))}

			<svg
				viewBox="0 0 320 320"
				className="absolute inset-0 m-auto h-[19rem] w-[19rem] md:h-[24rem] md:w-[24rem]"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="heroLeafGrad" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="#A4ED6B" />
						<stop offset="1" stopColor="#3FB337" />
					</linearGradient>
					<linearGradient id="heroBarGrad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0" stopColor="#36A7FF" />
						<stop offset="1" stopColor="#1F94FF" />
					</linearGradient>
					<linearGradient id="heroCGrad" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="#1F94FF" />
						<stop offset="0.55" stopColor="#2BC1B6" />
						<stop offset="1" stopColor="#7BD957" />
					</linearGradient>
				</defs>

				<motion.g
					animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				>
					<rect x="98" y="120" width="34" height="120" rx="17" fill="url(#heroBarGrad)" opacity="0.95" />
					<path
						d="M226 116c-30 0-54 14-66 36a48 48 0 0 0 0 52c12 22 36 36 66 36v-30c-18 0-33-8-41-22a26 26 0 0 1 0-28c8-14 23-22 41-22Z"
						fill="url(#heroCGrad)"
						opacity="0.95"
					/>
					<path
						d="M114 62c-22 8-32 26-28 50 4 22 18 36 38 40-2-20-6-37-12-50-6-13-12-25-18-40Z"
						fill="url(#heroLeafGrad)"
					/>
					<path
						d="M114 62c4 13 8 28 12 44 4-12 10-22 18-30"
						stroke="#FFFFFF"
						strokeWidth="3"
						strokeLinecap="round"
						opacity="0.7"
					/>
				</motion.g>

				<path
					d="M80 96c30-12 60-12 90 36c20 32 60 48 70 14"
					stroke="oklch(74% 0.16 230 / 0.45)"
					strokeWidth="2.4"
					strokeDasharray="6 10"
					strokeLinecap="round"
					fill="none"
				/>
				<path
					d="M170 60c30 12 50 50 74 80"
					stroke="oklch(78% 0.22 142 / 0.5)"
					strokeWidth="2.4"
					strokeDasharray="6 10"
					strokeLinecap="round"
					fill="none"
				/>
			</svg>

			{nodes.map((node, index) => (
				<motion.span
					key={`${node.cx}-${node.cy}`}
					className={`absolute grid size-6 place-items-center rounded-full ${node.color} shadow-[0_8px_24px_-8px_rgb(31_64_120_/_0.45)] ring-2 ring-white/85`}
					style={{
						left: `calc(50% - 160px + ${node.cx}px)`,
						top: `calc(50% - 160px + ${node.cy}px)`,
					}}
					animate={
						shouldReduceMotion
							? undefined
							: {
									y: [0, index % 2 === 0 ? -10 : 10, 0],
									scale: [1, 1.18, 1],
								}
					}
					transition={{
						duration: 3.6 + index * 0.35,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<span className="size-2 rounded-full bg-white" />
				</motion.span>
			))}

			<div className="absolute right-5 bottom-5 left-5 grid grid-cols-3 gap-3">
				{[
					{ label: "Bio", className: "bg-iclset-emerald text-white" },
					{ label: "Agro", className: "bg-iclset-green text-iclset-navy" },
					{ label: "Tech", className: "bg-iclset-blue text-white" },
				].map((item, index) => (
					<motion.div
						key={item.label}
						initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
						animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
						transition={{
							duration: 0.55,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.25 + index * 0.12,
						}}
						className={`rounded-2xl px-4 py-3 text-center text-sm font-semibold shadow-[0_12px_30px_-12px_rgb(15_23_42_/_0.25)] ${item.className}`}
					>
						{item.label}
					</motion.div>
				))}
			</div>
		</div>
	);
}
