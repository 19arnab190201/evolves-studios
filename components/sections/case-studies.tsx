"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/lazy-video";
import { Section } from "@/components/ui/section";
import { getAllProjects } from "@/lib/projects-data";

// The full roster, not just the featured three. Cards below the fold cost
// nothing until scrolled to, so showing every project here is cheap.
const features = getAllProjects().map((p) => ({
  brand: p.brand,
  category: p.category,
  title: p.headline,
  details: p.summary,
  outcome: p.outcome,
  tutorialLink: `/case-studies/${p.slug}`,
  // Prefer the lightweight loop; fall back to the full file if absent.
  videoSrc: p.videos[0]?.preview ?? p.videos[0]?.src ?? "",
  videoPoster: p.videos[0]?.poster,
}));

export const CaseStudies = () => {
  return (
    <Section as="div" id="case-studies" className="px-6">
      <div className="mx-auto w-full max-w-7xl">
        <Badge
          className="rounded-full border-border px-3 py-1 text-xs font-medium"
          variant="secondary"
        >
          Case Studies
        </Badge>
        <h2 className="mt-5 text-left text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for impact. Built for growth.
        </h2>
        <p className="mt-3 max-w-2xl text-left text-base text-muted-foreground sm:text-lg">
          Explore the work that’s moved brands forward—and what we can build
          next.
        </p>
        {/* Two across on desktop so each player is roughly twice the width of
            the old three-column grid. */}
        <div className="mt-12 grid w-full gap-x-8 gap-y-14 md:grid-cols-2">
          {features.map((feature) => (
            <div
              className="flex w-full flex-col text-start rounded-xl border border-white/5 bg-[#181818]"
              key={feature.brand}
            >
              <Link
                href={feature.tutorialLink}
                className="group block w-full overflow-hidden rounded-t-xl"
              >
                <div className="aspect-video w-full bg-white/5">
                  <LazyVideo
                    src={feature.videoSrc}
                    poster={feature.videoPoster}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-xl font-medium tracking-[-0.015em] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/50 sm:text-base">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CaseStudies;
