import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
	eyebrow: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	tone?: "default" | "dark";
	children?: ReactNode;
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	align = "left",
	tone = "default",
	children,
}: SectionHeadingProps) {
	const isDark = tone === "dark";

	return (
		<div
			className={cn(
				"mb-10 max-w-3xl",
				align === "center" && "mx-auto text-center",
			)}
		>
			<span
				className={cn(
					"inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur",
					isDark
						? "border border-white/15 bg-white/10 text-iclset-cyan"
						: "border border-iclset-blue/15 bg-white/85 text-iclset-blue shadow-[0_8px_24px_-14px_rgb(31_148_255_/_0.45)]",
				)}
			>
				<span
					className={cn(
						"size-1.5 rounded-full",
						isDark ? "bg-iclset-cyan" : "bg-iclset-blue",
					)}
				/>
				{eyebrow}
			</span>
			<h2
				className={cn(
					"mt-5 text-3xl leading-[1.05] font-semibold tracking-tight sm:text-4xl lg:text-[2.85rem]",
					isDark ? "text-white" : "text-iclset-ink",
				)}
			>
				{title}
			</h2>
			{description ? (
				<p
					className={cn(
						"mt-4 text-base leading-7 sm:text-lg",
						isDark ? "text-white/72" : "text-iclset-muted",
					)}
				>
					{description}
				</p>
			) : null}
			{children}
		</div>
	);
}
