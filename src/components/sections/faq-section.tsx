import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/content/faqs";
import type { Locale } from "@/types/locale";

interface FaqSectionProps {
	locale: Locale;
}

export function FaqSection({ locale }: FaqSectionProps) {
	return (
		<section className="section-band relative">
			<div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
				<SectionHeading
					eyebrow={locale === "es" ? "Preguntas frecuentes" : "FAQ"}
					title={
						locale === "es"
							? "Respuestas claras para autores y asistentes"
							: "Clear answers for authors and attendees"
					}
					description={
						locale === "es"
							? "Las respuestas se actualizaran cuando existan nuevas aprobaciones institucionales."
							: "Answers will be updated as new institutional approvals are available."
					}
				/>
				<Accordion
					type="single"
					collapsible
					className="rounded-[1.5rem] border border-iclset-blue/10 bg-white p-2 shadow-[0_24px_70px_-40px_rgb(15_23_42_/_0.2)]"
				>
					{faqs.map((item, index) => (
						<AccordionItem key={item.question.en} value={`item-${index}`}>
							<AccordionTrigger className="px-4 text-left text-base font-semibold text-iclset-ink">
								{item.question[locale]}
							</AccordionTrigger>
							<AccordionContent className="px-4 text-sm leading-6 text-iclset-muted">
								{item.answer[locale]}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
