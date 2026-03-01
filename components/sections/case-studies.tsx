"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getFeaturedProjects } from "@/lib/projects-data";

const features = getFeaturedProjects().map((p) => ({
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
    <Section
      as="div"
      id="case-studies"
      className="flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-left text-pretty font-semibold text-4xl tracking-[-0.03em] md:text-[2.75rem] md:leading-[1.2]">
          Case Studies
        </h2>
        <p className="mt-2 text-left text-lg text-muted-foreground sm:text-xl">
          Real results for founders and SaaS companies building
          category-defining brands.
        </p>
        <div className="mt-12 w-full space-y-20 md:mt-16">
          {features.map((feature, index) => (
            <div
              className="flex flex-col items-stretch gap-x-12 gap-y-6 md:flex-row md:items-center md:even:flex-row-reverse"
              key={feature.brand}
            >
              <Link
                href={feature.tutorialLink}
                className="group aspect-video w-full basis-1/2 overflow-hidden rounded-xl border border-border/50 bg-muted"
              >
                <video
                  src={feature.videoSrc}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </Link>
              <div
                className={`shrink-0 basis-1/2 text-left ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <span className="font-medium text-muted-foreground text-sm uppercase">
                  {feature.brand} · {feature.category}
                </span>
                <h4 className="my-3 font-semibold text-3xl tracking-[-0.02em]">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <p className="mt-4 font-medium text-foreground">
                  {feature.outcome}
                </p>
                <Button asChild className="mt-6">
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CaseStudies;
