import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

const stats = [
  {
    value: "500+",
    label: "Projects Delivered",
    body: "Commercials, product films and campaign assets shipped for consumer brands across categories.",
  },
  {
    value: "10M+",
    label: "Content Views",
    body: "Views earned by the work across paid and organic placements.",
  },
  {
    value: "50+",
    label: "Founders & Brands Served",
    body: "From single-product launches to established names running multi-market campaigns.",
  },
  {
    value: "300%+",
    label: "Average Engagement Growth",
    body: "Typical lift in engagement once brands move to purpose-built creative.",
  },
] as const;

export function Stats() {
  return (
    <Section className="px-6">
      <div className="mx-auto max-w-7xl">
        <Badge
          className="rounded-full border-border px-3 py-1 text-xs font-medium"
          variant="secondary"
        >
          By the Numbers
        </Badge>
        <h2 className="mt-5 text-left text-3xl font-semibold tracking-tight sm:text-4xl">
          The work, and what it has added up to.
        </h2>
        <p className="mt-3 max-w-2xl text-left text-base text-muted-foreground sm:text-lg">
          Built over hundreds of launches for brands that needed the product to
          look like the best thing on the shelf.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, body }) => (
            <div
              key={label}
              className="group relative overflow-hidden bg-[#141414] p-8 transition-colors duration-300 hover:bg-[#181818]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative z-10">
                <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl">
                  {value}
                </span>
                <p className="mt-5 text-lg font-medium">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
