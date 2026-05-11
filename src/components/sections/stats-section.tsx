import { stats } from "@/content/conference";
import type { Locale } from "@/types/locale";

interface StatsSectionProps {
  locale: Locale;
}

export function StatsSection({ locale }: StatsSectionProps) {
  return (
    <section className="border-b bg-white/70 py-8">
      <div className="section-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.value} className="rounded-2xl border bg-white p-5">
            <p className="text-iclset-blue text-3xl font-semibold">
              {item.value}
            </p>
            <p className="text-iclset-muted mt-1 text-sm font-medium">
              {item.label[locale]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
