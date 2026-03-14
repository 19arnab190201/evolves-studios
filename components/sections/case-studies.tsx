"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
    <Section
      as="div"
      id="case-studies"
      className="flex min-h-screen items-center justify-center px-6 py-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-left font-semibold text-4xl tracking-tight sm:text-5xl">
          Case Studies
        </h2>
        <p className="mt-2 text-left text-lg text-muted-foreground sm:text-xl">
          Real results for founders and SaaS companies building
          category-defining brands.
        </p>
        <div className="mt-10 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex w-full flex-col text-start"
              key={feature.brand}
            >
              <Link
                href={feature.tutorialLink}
                className="group mb-5 block w-full overflow-hidden rounded-xl bg-muted sm:mb-6"
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
              {/* <span className="font-medium text-muted-foreground text-sm uppercase">
                {feature.brand} · {feature.category}
              </span> */}
              <h3 className="mt-2 font-semibold text-2xl tracking-[-0.015em]">
                {feature.title}
              </h3>
              {/* <p className="mt-2 max-w-[25ch] text-[17px] text-muted-foreground">
                {feature.details}
              </p> */}
              <p className="mt-4 font-medium text-foreground">
                {feature.outcome}
              </p>
              <Button
                asChild
                className="mt-6 w-full bg-white text-black hover:bg-white/90"
                variant="default"
                size="default"
              >
                <Link
                  href={feature.tutorialLink}
                  className="flex w-full items-center justify-center gap-2"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CaseStudies;
