"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CLOUDINARY_VIDEO_TRANSFORM =
  "w_640,c_fill,ar_4:3,vc_auto,q_auto,f_auto:video";
const CLOUDINARY_POSTER_TRANSFORM = "so_auto,q_auto,f_auto";

function getCloudinaryVideoUrl(url: string): string {
  const insertAt = url.indexOf("/upload/") + "/upload/".length;
  return (
    url.slice(0, insertAt) +
    CLOUDINARY_VIDEO_TRANSFORM +
    "/" +
    url.slice(insertAt)
  );
}

function getCloudinaryPosterUrl(url: string): string {
  const insertAt = url.indexOf("/upload/") + "/upload/".length;
  const path = url.slice(insertAt).replace(/\.\w+$/, "");
  return (
    url.slice(0, insertAt) + CLOUDINARY_POSTER_TRANSFORM + "/" + path + ".jpg"
  );
}

const features = [
  {
    brand: "Prime",
    category: "Sports & Beverage",
    title: "Prime",
    details:
      "Full creative production for Prime's entry into the hydration market. We delivered TV-ready spots, social cutdowns, and influencer content that matched the brand's energy and Gen-Z audience.",
    outcome:
      "Campaign drove 2M+ impressions in first month. Spots adapted across 8 platforms.",
    tutorialLink: "/case-studies/prime",
    videoSrc:
      "https://res.cloudinary.com/dss9edy22/video/upload/v1772275563/Drink_Prime_ivuet2.mp4",
  },
  {
    brand: "Boat",
    category: "Consumer Electronics",
    title: "Boat",
    details:
      "Audio brand storytelling that puts product and lifestyle front and center. We created hero spots and social-first content that resonates with India's youth—from unboxing moments to real-world use.",
    outcome:
      "Assets scaled across retail, digital, and influencer partnerships.",
    tutorialLink: "/case-studies/boat",
    videoSrc:
      "https://res.cloudinary.com/dss9edy22/video/upload/v1772276584/Boat_metqv6.mp4",
  },
  {
    brand: "Nike",
    category: "Athletic & Lifestyle",
    title: "Nike",
    details:
      "Commercial production aligned with Nike's performance and culture pillars. We delivered polished spots that fit global brand guidelines while pushing creative boundaries for regional campaigns.",
    outcome:
      "Integrated into regional campaigns across APAC. Consistent quality at scale.",
    tutorialLink: "/case-studies/nike",
    videoSrc:
      "https://res.cloudinary.com/dss9edy22/video/upload/v1772279054/nike_commercial_xnmuha.mp4",
  },
  {
    brand: "Bliss",
    category: "Wellness & Lifestyle",
    title: "Bliss",
    details:
      "End-to-end production for Bliss's brand refresh. From concept to final cut, we shaped a premium visual identity—product hero shots, testimonial content, and lifestyle vignettes for their D2C and retail channels.",
    outcome:
      "Full asset library delivered. Content performing 40% above benchmarks.",
    tutorialLink: "/case-studies/bliss",
    videoSrc:
      "https://res.cloudinary.com/dss9edy22/video/upload/v1772279241/Bliss_commercial_Main_fzqkhz.mp4",
  },
];

export const CaseStudies = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-10">
        <h2 className="text-pretty font-semibold text-4xl tracking-[-0.03em] md:text-[2.75rem] md:leading-[1.2]">
          Case Studies
        </h2>
        <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
          Real results for founders and SaaS companies building
          category-defining brands.
        </p>
        <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
          {features.map((feature, index) => (
            <div
              className="flex flex-col items-stretch gap-x-12 gap-y-6 md:flex-row md:items-center md:even:flex-row-reverse"
              key={feature.brand}
            >
              <Link
                href={feature.tutorialLink}
                className="group aspect-[4/3] w-full basis-1/2 overflow-hidden rounded-xl border border-border/50 bg-muted"
              >
                <video
                  src={getCloudinaryVideoUrl(feature.videoSrc)}
                  poster={getCloudinaryPosterUrl(feature.videoSrc)}
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
    </div>
  );
};

export default CaseStudies;
