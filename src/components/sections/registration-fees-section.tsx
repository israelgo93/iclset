import { ClipboardList, Info, ReceiptText } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  registrationFees,
  registrationFeesContent,
} from "@/content/registration-fees";
import type { Locale } from "@/types/locale";

interface RegistrationFeesSectionProps {
  locale: Locale;
}

export function RegistrationFeesSection({
  locale,
}: RegistrationFeesSectionProps) {
  return (
    <section
      id="registration-fees"
      className="section-band relative scroll-mt-24 bg-white"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow={registrationFeesContent.eyebrow[locale]}
          title={registrationFeesContent.title[locale]}
          description={registrationFeesContent.description[locale]}
        />

        <div className="brand-gradient-border overflow-hidden rounded-[2rem] bg-white p-1 shadow-[0_30px_80px_-44px_rgb(31_64_120_/_0.35)]">
          <div className="via-iclset-cyan-soft/35 to-iclset-green-soft/30 rounded-[1.85rem] bg-gradient-to-br from-white p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {registrationFees.map((fee, index) => (
                <article
                  key={fee.key}
                  className="rounded-2xl border border-white/75 bg-white/90 p-5 shadow-[0_18px_40px_-30px_rgb(15_23_42_/_0.22)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-iclset-muted text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                        {fee.audience[locale]}
                      </p>
                      <p className="text-iclset-ink mt-2 text-3xl leading-none font-semibold tracking-tight">
                        {fee.amount}
                      </p>
                    </div>
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-xl text-white shadow-md ${
                        index % 2 === 0
                          ? "from-iclset-blue to-iclset-sky bg-gradient-to-br"
                          : "from-iclset-emerald to-iclset-green bg-gradient-to-br"
                      }`}
                      aria-hidden="true"
                    >
                      <ReceiptText className="size-5" />
                    </span>
                  </div>
                  <p className="text-iclset-muted mt-4 text-sm leading-6">
                    {fee.description[locale]}
                  </p>
                </article>
              ))}
            </div>

            <div className="border-iclset-blue/15 mt-5 grid gap-4 rounded-2xl border bg-white/80 p-5 sm:flex sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <span className="bg-iclset-blue/10 text-iclset-blue grid size-10 shrink-0 place-items-center rounded-xl">
                  <Info className="size-5" />
                </span>
                <p className="text-iclset-muted text-sm leading-6">
                  {registrationFeesContent.note[locale]}
                </p>
              </div>
              <Button type="button" variant="outline" className="shrink-0">
                <ClipboardList className="size-4" />
                {registrationFeesContent.cta[locale]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
