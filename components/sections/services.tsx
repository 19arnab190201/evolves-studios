import Link from "next/link";
import { Section } from "@/components/ui/section";
import {
  BarChart3,
  Mic2,
  RefreshCw,
  Share2,
  User,
  Video,
} from "lucide-react";

const services = [
  {
    title: "Podcast Production",
    description:
      "Full-service podcast production that positions founders as thought leaders in their space.",
    href: "/services#podcast-production",
    icon: Mic2,
  },
  {
    title: "Content Repurposing",
    description:
      "Transform long-form content into a multi-platform distribution engine.",
    href: "/services#content-repurposing",
    icon: RefreshCw,
  },
  {
    title: "Distribution Strategy",
    description:
      "Data-driven distribution plans that maximize reach and engagement.",
    href: "/services#distribution-strategy",
    icon: Share2,
  },
  {
    title: "Founder Brand Building",
    description:
      "Strategic frameworks to build authentic, influential founder brands.",
    href: "/services#founder-brand-building",
    icon: User,
  },
  {
    title: "Video & Social Content",
    description:
      "Short-form video and social content that drives engagement and builds audience.",
    href: "/services#video-social",
    icon: Video,
  },
  {
    title: "Media Strategy",
    description:
      "Strategic media planning and execution to scale your brand presence.",
    href: "/services#media-strategy",
    icon: BarChart3,
  },
] as const;

const gridBackgroundStyle = {
  backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
  backgroundSize: "20px 20px",
  backgroundPosition: "0px 0px, 0px 0px",
  maskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
    radial-gradient(80% 80% at 100% 0%, rgb(0, 0, 0) 50%, transparent 90%)`,
  maskComposite: "source-in" as const,
  WebkitMaskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
    repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
    radial-gradient(80% 80% at 100% 0%, rgb(0, 0, 0) 50%, transparent 90%)`,
  WebkitMaskComposite: "source-in" as const,
};

export function Services() {
  return (
    <Section className="mx-auto flex max-w-screen-xl flex-col px-6">
      <h2 className="text-pretty text-center text-4xl font-semibold tracking-tight sm:text-5xl">
        Our Services
      </h2>
      <p className="mt-3 text-center text-xl text-muted-foreground sm:text-2xl">
        End-to-end media and growth solutions for founders and SaaS companies.
      </p>
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link key={service.title} href={service.href}>
              <div className="relative overflow-hidden rounded-lg border bg-card px-5 py-7 dark:border-card-foreground/7">
                <div className="relative z-10 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.005em]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-foreground/90">
                    {service.description}
                  </p>
                </div>
                <div
                  className="absolute inset-0 -top-px z-0"
                  style={gridBackgroundStyle}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
