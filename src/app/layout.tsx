import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { site } from "@/content/site";
import "./globals.css";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
