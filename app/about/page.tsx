import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendlyLink } from "@/components/calendly-link";
import { Cta } from "@/components/sections/cta";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Evolves Studios is a commercial production studio for consumer product brands — built in 3D, shot on set, cut for everywhere it runs.",
  path: "/about",
});

/** Faint engineering grid, faded out from the top of the block. */
const gridTexture = {
  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)`,
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(85% 65% at 50% 0%, black 20%, transparent 95%)",
  WebkitMaskImage:
    "radial-gradient(85% 65% at 50% 0%, black 20%, transparent 95%)",
};

/** Film-grain overlay. Keeps the large flat panels from banding. */
const grain = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Grain sits above everything, at very low opacity. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay"
        style={grain}
      />

      {/* ---------- Hero ---------- */}
      {/* The sticky header is 80px tall and occupies flow space, so without the
          negative margin the grid and glows start beneath it, leaving a bare
          band across the top. Pull the section up behind the header and add
          that 80px back as top padding so the content sits where it did. */}
      <section className="relative -mt-20 flex min-h-[88vh] items-center px-6 pb-24 pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={gridTexture}
        />
        {/* Layered glows, drifting at different speeds. */}
        <div
          aria-hidden
          className="ev-drift-slow pointer-events-none absolute -top-52 left-1/3 z-0 size-[46rem] rounded-full bg-white/[0.09] blur-[150px]"
        />
        <div
          aria-hidden
          className="ev-drift-fast pointer-events-none absolute -right-40 top-24 z-0 size-[34rem] rounded-full bg-white/[0.05] blur-[130px]"
        />
        {/* Horizon line under the headline. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Badge
            className="rounded-full border-border px-3 py-1 text-xs font-medium"
            variant="secondary"
          >
            About Us
          </Badge>

          <h1 className="mt-7 max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-[5.5rem]">
            We make the film that makes the product{" "}
            <span className="bg-gradient-to-br from-white via-white to-white/35 bg-clip-text text-transparent">
              look inevitable.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A commercial production studio for consumer product brands. Built in
            3D, shot on set, or both.
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full text-base" size="lg">
              <CalendlyLink>
                Book a Call <ArrowUpRight className="ml-1 size-4" />
              </CalendlyLink>
            </Button>
            <Button
              asChild
              className="rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
              <Link href="/case-studies">See the work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Same CTA block the homepage closes on. */}
      <div className="relative z-10">
        <Cta />
      </div>
    </div>
  );
}
