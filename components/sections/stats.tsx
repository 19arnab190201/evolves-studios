import { Section } from "@/components/ui/section";

export function Stats() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl px-6">
      <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl text-center">
        Building Media That Drives Results
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
        We help founders and SaaS companies build category-defining media
        through strategic podcast production, content repurposing, and brand
        building that scales.
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
