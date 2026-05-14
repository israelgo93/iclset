import { CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  cmtAcknowledgmentPath,
  cmtAcknowledgmentText,
  cmtHelpLinks,
  cmtRequirementBlocks,
} from "@/content/cmt";
import type { Locale } from "@/types/locale";

interface CmtComplianceSectionProps {
  locale: Locale;
}

export function CmtComplianceSection({ locale }: CmtComplianceSectionProps) {
  return (
    <section className="section-band relative bg-white/55">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-iclset-blue text-xs font-semibold tracking-[0.2em] uppercase">
            {locale === "es" ? "Requisitos CMT" : "CMT requirements"}
          </p>
          <h2 className="text-iclset-ink mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {locale === "es"
              ? "Informacion preliminar para autores y envio"
              : "Preliminary author and submission information"}
          </h2>
          <p className="text-iclset-muted mt-4 text-base leading-7">
            {locale === "es"
              ? "Esta seccion concentra los elementos solicitados por Microsoft CMT para que la convocatoria sea publica, clara y verificable antes de habilitar el sitio editorial oficial."
              : "This section centralizes the elements requested by Microsoft CMT so the call is public, clear, and verifiable before the official editorial site is enabled."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {cmtRequirementBlocks.map((block) => (
            <Card
              key={block.key}
              className="border-iclset-blue/10 rounded-[1.5rem] bg-white/90 shadow-[0_20px_60px_-36px_rgb(31_64_120_/_0.25)]"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <span className="bg-iclset-blue-soft text-iclset-blue mt-1 inline-grid size-9 shrink-0 place-items-center rounded-xl">
                    <CheckCircle2 className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-iclset-ink text-lg font-semibold">
                      {block.title[locale]}
                    </h3>
                    <p className="text-iclset-muted mt-2 text-sm leading-6">
                      {block.description[locale]}
                    </p>
                  </div>
                </div>
                <ul className="text-iclset-muted mt-5 grid gap-3 text-sm leading-6">
                  {block.items.map((item) => (
                    <li key={item.en} className="flex gap-3">
                      <span className="bg-iclset-emerald mt-2 size-1.5 shrink-0 rounded-full" />
                      <span>{item[locale]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="border-iclset-cyan/25 bg-iclset-cyan-soft/55 mt-8 grid gap-5 rounded-[1.5rem] border p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-iclset-ink text-lg font-semibold">
              {locale === "es"
                ? "Ayuda oficial de Microsoft CMT"
                : "Official Microsoft CMT help"}
            </h3>
            <p className="text-iclset-muted mt-2 text-sm leading-6">
              {locale === "es"
                ? "Los autores deben contar con una cuenta CMT. La guia de cuenta y el flujo de envio de autores se enlazan como referencia operativa."
                : "Authors must have a CMT account. The account guide and author submission workflow are linked as operational references."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button asChild variant="outline">
              <Link href={cmtHelpLinks.accountCreation}>
                {locale === "es" ? "Crear cuenta CMT" : "Create a CMT account"}
                <ExternalLink className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={cmtHelpLinks.authorSubmission}>
                {locale === "es" ? "Guia de envio CMT" : "CMT submission guide"}
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-iclset-blue/15 mt-5 rounded-[1.5rem] border bg-white p-6">
          <h3 className="text-iclset-ink text-lg font-semibold">
            {locale === "es" ? "CMT acknowledgement" : "CMT ACKNOWLEDGMENT"}
          </h3>
          <p className="text-iclset-muted mt-3 text-sm leading-6">
            {cmtAcknowledgmentText}
          </p>
          <Button asChild className="mt-5" variant="solid">
            <Link href={cmtAcknowledgmentPath}>
              {locale === "es"
                ? "Ver pagina HTML verificable"
                : "View verifiable HTML page"}
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
