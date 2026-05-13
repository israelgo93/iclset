import { Sparkles } from "lucide-react";

interface PageHeroProps {
	eyebrow: string;
	title: string;
	description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
	return (
		<section className="section-band relative isolate overflow-hidden border-b border-iclset-blue/10 bg-gradient-to-b from-white via-[oklch(98%_0.012_220)] to-[oklch(96%_0.022_215)] text-iclset-ink">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,oklch(74%_0.16_230_/_0.24),transparent_30rem),radial-gradient(circle_at_90%_18%,oklch(78%_0.22_142_/_0.2),transparent_30rem)]"
			/>
			<div
				aria-hidden="true"
				className="tech-grid absolute inset-0 -z-10 opacity-45"
			/>
			<div className="section-container">
				<span className="inline-flex items-center gap-2 rounded-full border border-iclset-blue/20 bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-iclset-blue uppercase shadow-[0_8px_24px_-14px_rgb(31_148_255_/_0.45)] backdrop-blur">
					<Sparkles className="size-3.5" />
					{eyebrow}
				</span>
				<h1 className="mt-6 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
					{title}
				</h1>
				<p className="mt-5 max-w-3xl text-lg leading-8 text-iclset-muted">
					{description}
				</p>
			</div>
		</section>
	);
}
