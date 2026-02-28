import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Stats } from "@/components/sections/stats";

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
    <div className="min-h-[calc(100svh-10rem)] py-12 !pb-0 max-w-(--breakpoint-xl) mx-auto text-center px-6">
      {" "}
      <div className="relative max-w-4xl mx-auto py-12">
        <div className="absolute inset-0 -z-10" style={dottedPatternStyle} />
        <strong className="text-lg font-semibold text-muted-foreground/90 sm:text-xl">
          Growth & Media Agency for Founders
        </strong>
        <h1 className="mt-5 max-w-3xl mx-auto text-5xl sm:text-6xl md:text-7xl leading-[1.1] font-semibold tracking-tighter text-balance">
          We Build Media That Scales Modern Brands
        </h1>
        <div className="mt-8 max-w-3xl mx-auto text-xl text-muted-foreground text-balance sm:text-2xl">
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
    </div>
  );
}
