"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { conference } from "@/content/conference";
import { navigation } from "@/content/navigation";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface SiteHeaderProps {
	locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
	const { scrollY } = useScroll();
	const headerBg = useTransform(
		scrollY,
		[0, 80],
		[
			"rgba(255, 255, 255, 0.55)",
			"rgba(255, 255, 255, 0.88)",
		],
	);
	const headerBorder = useTransform(
		scrollY,
		[0, 80],
		[
			"rgba(31, 148, 255, 0.08)",
			"rgba(31, 148, 255, 0.18)",
		],
	);
	const headerShadow = useTransform(
		scrollY,
		[0, 80],
		[
			"0 0 0 rgba(15, 23, 42, 0)",
			"0 18px 40px -22px rgba(31, 64, 120, 0.18)",
		],
	);

	return (
		<motion.header
			className="sticky top-0 z-50 text-iclset-ink backdrop-blur-xl"
			style={{
				backgroundColor: headerBg,
				borderBottom: "1px solid",
				borderBottomColor: headerBorder,
				boxShadow: headerShadow,
			}}
		>
			<div className="section-container flex h-18 items-center justify-between gap-4">
				<Link
					href={`/${locale}`}
					className="group flex min-w-0 items-center gap-3"
					aria-label={conference.acronym}
				>
					<motion.span
						className="relative grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-iclset-blue/10 via-iclset-cyan/10 to-iclset-green/10 ring-1 ring-iclset-blue/15"
						whileHover={{ rotate: -6, scale: 1.05 }}
						transition={{ type: "spring", stiffness: 320, damping: 22 }}
					>
						<Image
							src="/brand/iclset-icon-mark.svg"
							alt=""
							width={32}
							height={32}
							className="size-8"
							style={{ width: "auto", height: "auto" }}
							priority
						/>
					</motion.span>
					<span className="min-w-0">
						<span className="block text-sm leading-5 font-semibold text-iclset-ink">
							{conference.acronym}
						</span>
						<span className="hidden max-w-64 truncate text-xs text-iclset-muted sm:block">
							{conference.location.faculty}
						</span>
					</span>
				</Link>
				<nav
					className="hidden items-center gap-0.5 xl:flex"
					aria-label="Main"
				>
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={localizePath(locale, item.href)}
							className="relative rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap text-iclset-muted transition-colors duration-300 hover:text-iclset-ink after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-iclset-blue after:to-iclset-green after:transition-all after:duration-300 hover:after:w-6"
						>
							{item.label[locale]}
						</Link>
					))}
				</nav>
				<div className="hidden items-center gap-3 xl:flex">
					<LanguageSwitcher locale={locale} />
					<Button asChild size="sm" variant="default">
						<Link
							className="whitespace-nowrap"
							href={localizePath(locale, "/call-for-papers")}
						>
							Call for Papers
						</Link>
					</Button>
				</div>
				<MobileNav locale={locale} />
			</div>
		</motion.header>
	);
}
