import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/section-heading";
import { schedule } from "@/content/schedule";
import type { Locale } from "@/types/locale";

interface ProgramPreviewSectionProps {
  locale: Locale;
  detailed?: boolean;
}

export function ProgramPreviewSection({
  locale,
  detailed = false,
}: ProgramPreviewSectionProps) {
  return (
    <section className="section-band bg-white/50">
      <div className="section-container">
        <SectionHeading
          eyebrow={
            locale === "es" ? "Programa preliminar" : "Preliminary program"
          }
          title={
            locale === "es"
              ? "Tres días de ciencia, diálogo y transferencia"
              : "Three days of science, dialogue, and transfer"
          }
          description={
            locale === "es"
              ? "El programa definitivo se actualizará cuando se confirmen ponentes, salas y enlaces virtuales."
              : "The final program will be updated when speakers, rooms, and virtual links are confirmed."
          }
        />
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="bg-muted mb-6 grid h-auto w-full grid-cols-1 gap-2 rounded-2xl p-2 sm:grid-cols-3">
            {schedule.map((day, index) => (
              <TabsTrigger
                key={day.day.en}
                value={String(index)}
                className="py-3"
              >
                {day.day[locale]}
              </TabsTrigger>
            ))}
          </TabsList>
          {schedule.map((day, index) => (
            <TabsContent
              key={day.day.en}
              value={String(index)}
              className="rounded-2xl border bg-white p-5"
            >
              <div className="flex flex-col gap-2 border-b pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-iclset-blue text-sm font-semibold">
                    {day.date[locale]}
                  </p>
                  <h3 className="text-iclset-ink mt-1 text-2xl font-semibold">
                    {day.summary[locale]}
                  </h3>
                </div>
              </div>
              <div className="mt-5 grid gap-4">
                {(detailed ? day.items : day.items.slice(0, 2)).map((item) => (
                  <article
                    key={`${item.time}-${item.title.en}`}
                    className="bg-muted/45 grid gap-3 rounded-xl p-4 sm:grid-cols-[5rem_1fr]"
                  >
                    <p className="text-iclset-blue font-mono text-sm font-semibold">
                      {item.time}
                    </p>
                    <div>
                      <h4 className="text-iclset-ink font-semibold">
                        {item.title[locale]}
                      </h4>
                      <p className="text-iclset-muted mt-1 text-sm leading-6">
                        {item.description[locale]}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
