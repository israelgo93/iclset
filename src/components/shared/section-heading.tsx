import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Badge className="border-iclset-cyan/40 text-iclset-blue mb-4 rounded-full bg-white/75 shadow-sm">
        {eyebrow}
      </Badge>
      <h2 className="text-iclset-ink text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-iclset-muted mt-4 text-base leading-7 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
