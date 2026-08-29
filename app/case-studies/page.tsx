import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Cta } from "@/components/sections/cta";
import { LazyVideo } from "@/components/ui/lazy-video";
import { getAllProjects } from "@/lib/projects-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Case Studies",
  description:
    "Commercial product films for consumer brands — beverages, consumer electronics, supplements and lifestyle. See the work Evolves Studios has produced for Prime, boAt, Nike, Bliss and more.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  return (
    <div className="py-24">
      {/* Padding goes on the outer wrapper, max-w-7xl on the inner one — the
          same nesting the CTA and footer use. With px-6 on the same element as
          max-w-7xl the padding eats into the 1280 and the grid ends up 48px
          narrower than everything below it. */}
      <div className="px-6">
        <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Case Studies
        </h1>
        {/* No mx-auto: it centred this block inside the wider container and
            pushed it out of line with the left-aligned heading. */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Commercial films for consumer brands — beverages, consumer
          electronics, supplements and lifestyle. Every spot is built to launch
          a product and make people want it.
        </p>
        {/* The whole card is the link. A separate button underneath meant the
            card looked clickable but mostly was not, and the button sat alone
            in its own row. */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#181818]"
            >
              {project.videos[0] && (
                <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                  <LazyVideo
                    src={project.videos[0].preview ?? project.videos[0].src}
                    poster={project.videos[0].poster}
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Arrow badge, fades and slides in over the footage. */}
                  <div className="pointer-events-none absolute right-4 top-4 flex size-10 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="size-5" aria-hidden />
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-xs uppercase tracking-[0.14em] text-white/35">
                  {project.brand} · {project.category}
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.015em]">
                  {project.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {project.summary}
                </p>

                {/* Reads as a link, animates on hover, but is not a nested
                    interactive element. */}
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-foreground">
                  View case study
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                {/* Underline that draws in from the left. */}
                <span className="mt-1 block h-px w-0 bg-white/30 transition-all duration-300 group-hover:w-28" />
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>

      {/* Shared closing CTA. "View Our Work" would point at this very page, so
          the secondary action sends a brief instead. */}
      <Cta secondaryLabel="Send a Brief" secondaryHref="/contact" />
    </div>
  );
}
