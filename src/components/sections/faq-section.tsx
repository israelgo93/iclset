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
    <section className="section-band bg-white/65">
      <div className="section-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow={locale === "es" ? "Preguntas frecuentes" : "FAQ"}
          title={
            locale === "es"
              ? "Respuestas claras para autores y asistentes"
              : "Clear answers for authors and attendees"
          }
          description={
            locale === "es"
              ? "Las respuestas se actualizarán cuando existan nuevas aprobaciones institucionales."
              : "Answers will be updated as new institutional approvals are available."
          }
        />
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border bg-white p-2"
        >
          {faqs.map((item, index) => (
            <AccordionItem key={item.question.en} value={`item-${index}`}>
              <AccordionTrigger className="text-iclset-ink px-4 text-left text-base font-semibold">
                {item.question[locale]}
              </AccordionTrigger>
              <AccordionContent className="text-iclset-muted px-4 text-sm leading-6">
                {item.answer[locale]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
