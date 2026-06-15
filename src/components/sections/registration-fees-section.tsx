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
                  data-testid={
                    fee.key === "facsvitec-faculty"
                      ? "facivitec-fee-card"
                      : undefined
                  }
                  className={`relative overflow-hidden rounded-2xl border bg-white/90 p-5 ${
                    fee.key === "facsvitec-faculty"
                      ? "iclset-card-glow border-iclset-emerald/45"
                      : "border-white/75 shadow-[0_18px_40px_-30px_rgb(15_23_42_/_0.22)]"
                  }`}
                >
                  <div className="relative z-10 flex items-start justify-between gap-4">
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
                  <p
                    className={`text-iclset-muted relative z-10 mt-4 leading-6 ${
                      fee.key === "facsvitec-faculty"
                        ? "text-[0.8rem]"
                        : "text-sm"
                    }`}
                  >
                    {fee.description[locale]}
                  </p>
                </article>
              ))}
            </div>

            <div className="from-iclset-blue via-iclset-sky to-iclset-emerald mt-5 grid gap-4 overflow-hidden rounded-2xl bg-gradient-to-r p-5 text-white shadow-[0_18px_46px_-24px_rgb(31_148_255_/_0.75)] sm:flex sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/18 text-white shadow-sm ring-1 ring-white/25">
                  <Info className="size-5" />
                </span>
                <div>
                  <p className="text-base leading-6 font-semibold">
                    {registrationFeesContent.note[locale]}
                  </p>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-white/82">
                    {registrationFeesContent.ctaDescription[locale]}
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="text-iclset-ink min-w-44 shrink-0 border-white/70 bg-white shadow-[0_16px_34px_-20px_rgb(15_23_42_/_0.7)] hover:border-white hover:bg-white"
              >
                <a href={registrationFeesContent.ctaUrl}>
                  <ClipboardList className="size-4" />
                  {registrationFeesContent.cta[locale]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
