"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getFeaturedProjects } from "@/lib/projects-data";

const features = getFeaturedProjects()
  .slice(0, 3)
  .map((p) => ({
    brand: p.brand,
    category: p.category,
    title: p.headline,
    details: p.summary,
    outcome: p.outcome,
    tutorialLink: `/case-studies/${p.slug}`,
    videoSrc: p.videos[0]?.src ?? "",
  }));

export const CaseStudies = () => {
  return (
    <Section as="div" id="case-studies" className="px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Badge
          className="rounded-full border-border px-3 py-1 text-xs font-medium"
          variant="secondary"
        >
          Case Studies
        </Badge>
        <h2 className="mt-5 text-left text-2xl font-semibold tracking-tight sm:text-3xl">
          Built for impact. Built for growth.
        </h2>
        <p className="mt-2 text-left text-sm text-muted-foreground sm:text-base">
          Explore the work that’s moved brands forward—and what we can build next.
        </p>
        <div className="mt-10 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex w-full flex-col text-start rounded-xl border border-white/5 bg-[#181818] shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
              key={feature.brand}
            >
              <Link
                href={feature.tutorialLink}
                className="group block w-full overflow-hidden rounded-t-xl"
              >
                <div className="aspect-video w-full">
                  <video
                    src={feature.videoSrc}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </div>
              </Link>
              <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
                <h3 className="font-medium text-lg tracking-[-0.015em]">
                  {feature.title}
                </h3>

                <p className="mt-2 flex items-center text-sm leading-[19px] text-white/50">
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
