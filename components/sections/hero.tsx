import Link from "next/link";

import { Button } from "@/components/ui/button";

const dottedPatternStyle = {
  backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
  backgroundSize: "20px 20px",
  backgroundPosition: "0px 0px, 0px 0px",
  maskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
    linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%),
    linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)`,
  maskComposite: "intersect" as const,
  WebkitMaskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
    linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%),
    linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)`,
  WebkitMaskComposite: "source-in" as const,
};

export function Hero() {
  return (
    <div className="min-h-[calc(100svh-4rem)] py-16 max-w-(--breakpoint-xl) mx-auto text-center px-6">
      {" "}
      <div className="relative max-w-4xl mx-auto py-12">
        <div className="absolute inset-0 -z-10" style={dottedPatternStyle} />
        <strong className="font-semibold text-muted-foreground/90">
          Growth & Media Agency for Founders
        </strong>
        <h1 className="mt-5 max-w-3xl mx-auto text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tighter text-balance">
          We Build Media That Scales Modern Brands
        </h1>
        <div className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
          <p>
            Podcast production, content repurposing, and founder brand building
            for SaaS companies ready to build category-defining media.
          </p>
        </div>
        <div className="mt-12 flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </div>
      <div className="-mt-2 aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="mt-24 max-w-[1600px] mx-auto px-6">
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
            <p className="mt-6 font-medium text-xl">Podcast Episodes Produced</p>
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
    </div>
  );
}
