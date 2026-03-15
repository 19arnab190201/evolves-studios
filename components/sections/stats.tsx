import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

export function Stats() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-6">
        <Badge
          className="rounded-full border-border px-3 py-1 text-xs font-medium"
          variant="secondary"
        >
          Key Insights
        </Badge>
        <h2 className="mt-5 font-semibold text-2xl tracking-tighter md:text-3xl !text-left">
          Discover the intelligence behind every visual we build.
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground !text-left sm:text-base">
          Every number tells a story—from episodes produced to pipeline created. Here’s what our work has delivered.
        </p>

      <div className="mt-16 grid justify-center gap-x-10 gap-y-16 sm:mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <span className="font-semibold text-5xl tracking-tight md:text-6xl">
            500+
          </span>
          <p className="mt-6 font-medium text-xl">
            Podcast Episodes Produced
          </p>
          <p className="mt-2 text-muted-foreground">
            High-quality podcast episodes that position founders as thought
            leaders in their space.
          </p>
        </div>
        <div>
          <span className="font-semibold text-5xl text-muted-foreground tracking-tight md:text-6xl">
            10M+
          </span>
          <p className="mt-6 font-medium text-xl">Content Pieces Created</p>
          <p className="mt-2 text-muted-foreground">
            Repurposed content across platforms that maximizes reach and
            engagement.
          </p>
        </div>
        <div>
          <span className="font-semibold text-5xl tracking-tight md:text-6xl">
            50+
          </span>
          <p className="mt-6 font-medium text-xl">Founders & Brands Served</p>
          <p className="mt-2 text-muted-foreground">
            Trusted by scaling SaaS companies and founder-led brands building
            category authority.
          </p>
        </div>
        <div>
          <span className="font-semibold text-5xl text-muted-foreground tracking-tight md:text-6xl">
            300%+
          </span>
          <p className="mt-6 font-medium text-xl">Average Pipeline Growth</p>
          <p className="mt-2 text-muted-foreground">
            Data-driven media strategies that consistently drive measurable
            pipeline and growth.
          </p>
        </div>
      </div>
      </div>
    </Section>
  );
}
