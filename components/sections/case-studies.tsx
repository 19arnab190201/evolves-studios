import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    category: "Podcast Production",
    title: "Turn your expertise into a top-ranked show",
    details:
      "From format development to publishing, we handle the full production pipeline. Your podcast becomes a lead magnet and authority builder.",
    tutorialLink: "/case-studies/techflow",
  },
  {
    category: "Content Repurposing",
    title: "One episode, dozens of assets",
    details:
      "Transform long-form content into clips for YouTube, LinkedIn, and Twitter. We build the systems so your content works harder across every channel.",
    tutorialLink: "/case-studies/techflow",
  },
  {
    category: "Founder Brand Building",
    title: "Position yourself as the category leader",
    details:
      "Strategic frameworks to build authentic founder brands. Podcast appearances, long-form content, and webinar partnerships—without burning out.",
    tutorialLink: "/case-studies/scaleup",
  },
  {
    category: "Distribution Strategy",
    title: "Get your content in front of the right people",
    details:
      "Data-driven plans that maximize reach. We analyze where your audience spends time and create repeatable systems for consistent distribution.",
    tutorialLink: "/case-studies",
  },
];

export const CaseStudies = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-10">
        <h2 className="text-pretty font-semibold text-4xl tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]">
          Case Studies
        </h2>
        <p className="mt-2 text-lg text-muted-foreground sm:text-center sm:text-xl">
          Real results for founders and SaaS companies building category-defining brands.
        </p>
        <div className="mx-auto mt-8 w-full space-y-20 md:mt-16">
          {features.map((feature) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse"
              key={feature.category}
            >
              <div className="aspect-[4/3] w-full basis-1/2 rounded-xl border border-border/50 bg-muted" />
              <div className="shrink-0 basis-1/2">
                <span className="font-medium text-muted-foreground text-sm uppercase">
                  {feature.category}
                </span>
                <h4 className="my-3 font-semibold text-3xl tracking-[-0.02em]">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
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
