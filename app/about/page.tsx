import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Clapperboard,
  Layers,
  Repeat,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendlyLink } from "@/components/calendly-link";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllProjects } from "@/lib/projects-data";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Evolves Studios is a commercial production studio for consumer product brands — 3D commercials, photoreal renders and campaign films built to launch products.",
  path: "/about",
});

/** Faint engineering grid, faded out toward the bottom of a block. */
const gridTexture = {
  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
  backgroundSize: "44px 44px",
  maskImage: "radial-gradient(90% 70% at 50% 0%, black 30%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(90% 70% at 50% 0%, black 30%, transparent 100%)",
};

const capabilities = [
  {
    icon: Boxes,
    title: "Built, not just shot",
    body: "Most of what we make is constructed in 3D. The product, the set and the physics are all ours, so the camera can travel through a bottle, hold liquid mid-air, or reset a hero angle perfectly on the hundredth take.",
  },
  {
    icon: Clapperboard,
    title: "On set when it earns it",
    body: "Some things want a real lens — someone wearing the product, a room with weather in it, a moment that should feel caught rather than made. We shoot those, and routinely put CG in the same frame.",
  },
  {
    icon: Repeat,
    title: "Made to be reused",
    body: "A CG set does not get struck at wrap. New flavour, new colourway, new SKU — the lighting, the environment and the rig are still there, so campaign two costs a fraction of campaign one.",
  },
];

const process = [
  {
    step: "01",
    title: "Concept",
    body: "We come back with a treatment, references and a shot direction before anything is modelled. You approve an idea, not an invoice.",
  },
  {
    step: "02",
    title: "Blockout",
    body: "Grey-model previz of the full spot — timing, camera, staging. Changes here cost minutes. The same changes after lighting cost days.",
  },
  {
    step: "03",
    title: "Build",
    body: "Modelling, shading, lighting and simulation, graded to the look agreed at concept. This is where a bottle stops looking like geometry.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Hero film plus every cutdown and aspect the media plan actually needs — specified up front, not retrofitted after delivery.",
  },
];

export default function AboutPage() {
  const projects = getAllProjects();
  const brands = Array.from(new Set(projects.map((p) => p.brand)));
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <div className="relative overflow-hidden">
      {/* ---------- Hero ---------- */}
      <section className="relative px-6 pt-24 pb-20 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={gridTexture}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 z-0 size-[42rem] -translate-x-1/2 rounded-full bg-white/[0.07] blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Badge
            className="rounded-full border-border px-3 py-1 text-xs font-medium"
            variant="secondary"
          >
            About Us
          </Badge>

          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            We make the film that makes the product look inevitable.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Evolves Studios is a commercial production studio for consumer
            product brands. We build spots in 3D, shoot them on set, and cut
            them for everywhere they have to run.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

      {/* ---------- Facts strip ---------- */}
      <section className="px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4">
          {[
            { value: projects.length, label: "Case studies published" },
            { value: categories.length, label: "Product categories" },
            { value: "6", label: "Services, one studio" },
            { value: "3D + live", label: "Built or shot, or both" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#141414] px-6 py-8">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/45">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Statement ---------- */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <Badge
                className="rounded-full border-border px-3 py-1 text-xs font-medium"
                variant="secondary"
              >
                How we think
              </Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                A product film has one job.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Make someone want the thing. Everything else — the render
                quality, the sim, the grade — only matters to the extent it
                serves that. A beautiful film that leaves the viewer cold is a
                showreel piece, not a commercial.
              </p>
              <p>
                So we start with what the product actually has going for it. A
                texture worth a macro. A pour worth slowing down. A silhouette
                that reads at thumbnail size in a feed. Then we build the film
                around that one thing rather than decorating around a brief.
              </p>
              <p className="text-foreground">
                The work has to survive its own distribution. A spot that only
                looks right at full width on a desktop is a spot that mostly
                will not be seen — which is why the cutdowns get specified
                before the shoot, not after it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#141414] p-8 transition-colors duration-300 hover:border-white/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative z-10">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="relative px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <Badge
            className="rounded-full border-border px-3 py-1 text-xs font-medium"
            variant="secondary"
          >
            How it runs
          </Badge>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Four stages, and you sign off on each one.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            The expensive surprises in production all come from finding out late.
            This order exists to move the decisions forward.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, body }) => (
              <div key={step} className="relative bg-[#141414] p-8">
                <span className="text-sm font-medium tabular-nums text-white/30">
                  {step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Brands ---------- */}
      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#141414] px-6 py-12 sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0"
              style={gridTexture}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm text-white/45">
                <Sparkles className="size-4" aria-hidden />
                Selected work
              </div>
              <div className="mt-7 flex flex-wrap gap-x-3 gap-y-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
                  >
                    {brand}
                  </span>
                ))}
              </div>
              <Link
                href="/case-studies"
                className="mt-9 inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                View all {projects.length} case studies
                <ArrowUpRight className="ml-1 size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#141414] px-6 py-14 sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-[26rem] rounded-full bg-white/[0.06] blur-[100px]"
            />
            <div className="relative z-10 max-w-3xl">
              <Layers className="size-6 text-white/40" aria-hidden />
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
                Got a product that deserves a better film?
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Tell us what you’re launching. We’ll come back with a concept, a
                treatment and a clear scope — before you commit to anything.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
                  <Link href="/contact">Send a Brief</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
