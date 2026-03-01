import { Section } from "@/components/ui/section";

const clientLogos = [
  "TechFlow",
  "ScaleUp",
  "DataVault",
  "InnovateX",
  "BrandBoost",
] as const;

export function ClientLogos() {
  return (
    <Section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by founders at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale">
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-medium text-muted-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
