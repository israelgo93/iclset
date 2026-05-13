"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { conference } from "@/content/conference";
import { navigation } from "@/content/navigation";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/types/locale";

interface MobileNavProps {
	locale: Locale;
}

export function MobileNav({ locale }: MobileNavProps) {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon-lg"
					className="xl:hidden"
					aria-label={locale === "es" ? "Abrir menu" : "Open menu"}
				>
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="w-[min(88vw,24rem)]">
				<SheetHeader>
					<SheetTitle className="text-left text-iclset-ink">
						{conference.acronym}
					</SheetTitle>
				</SheetHeader>
				<nav className="mt-8 grid gap-2" aria-label="Mobile">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={localizePath(locale, item.href)}
							onClick={() => setOpen(false)}
							className="rounded-xl px-3 py-3 text-base font-medium text-iclset-ink transition-colors hover:bg-iclset-blue/8 hover:text-iclset-blue"
						>
							{item.label[locale]}
						</Link>
					))}
				</nav>
				<div className="mt-8 grid gap-3">
					<LanguageSwitcher locale={locale} />
					<Button asChild size="default" variant="default">
						<Link
							href={localizePath(locale, "/call-for-papers")}
							onClick={() => setOpen(false)}
						>
							Call for Papers
						</Link>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}
