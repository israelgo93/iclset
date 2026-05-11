import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-band border-b bg-white/65">
      <div className="section-container">
        <Badge className="bg-iclset-blue mb-5 rounded-full text-white">
          {eyebrow}
        </Badge>
        <h1 className="text-iclset-ink max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-iclset-muted mt-5 max-w-3xl text-lg leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
