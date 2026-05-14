import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";
import { isLocale, locales } from "@/types/locale";
import "../globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F4F8FE" },
		{ media: "(prefers-color-scheme: dark)", color: "#0B1B33" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(site.baseUrl),
	title: {
		default: site.title.es,
		template: "%s | ICLSET 2026",
	},
	description: site.description.es,
	manifest: "/manifest.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
			{ url: "/brand/iclset-logo.png", type: "image/png", sizes: "512x512" },
		],
		shortcut: "/favicon.ico",
		apple: "/brand/iclset-logo.png",
	},
	openGraph: {
		images: [
			{
				url: "/brand/iclset-og.svg",
				width: 1200,
				height: 630,
				alt: "ICLSET 2026 - International Conference on Life Sciences and Emerging Technologies",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: ["/brand/iclset-og.svg"],
	},
};

function htmlLang(locale: (typeof locales)[number]) {
	return locale === "es" ? "es-EC" : "en-US";
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!isLocale(locale)) {
		notFound();
	}

	return (
		<html
			lang={htmlLang(locale)}
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body>
				<div className="flex min-h-screen flex-col">
					<SiteHeader locale={locale} />
					<main className="flex-1">{children}</main>
					<SiteFooter locale={locale} />
				</div>
			</body>
		</html>
	);
}
