import Link from "next/link";

import { CalendlyLink } from "@/components/calendly-link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Services",
  description:
    "Podcast production, content repurposing, distribution strategy, and founder brand building. Growth & media services for founders and SaaS companies.",
  path: "/services",
});

const services = [
  {
    id: "podcast-production",
    title: "Podcast Production",
    description:
      "Full-service podcast production that positions founders as thought leaders in their space. From concept and format development to recording, editing, and publishing—we handle the entire production pipeline so you can focus on the conversation.",
  },
  {
    id: "content-repurposing",
    title: "Content Repurposing",
    description:
      "Transform long-form content into a multi-platform distribution engine. One podcast episode becomes clips for YouTube, LinkedIn, Twitter, and email. We build the systems and processes so your content works harder across every channel.",
  },
  {
    id: "distribution-strategy",
    title: "Distribution Strategy",
    description:
      "Data-driven distribution plans that maximize reach and engagement. We analyze where your audience spends time, build partnerships, and create repeatable systems to get your content in front of the right people—consistently.",
  },
  {
    id: "founder-brand-building",
    title: "Founder Brand Building",
    description:
      "Strategic frameworks to build authentic, influential founder brands. We help founders develop their voice, create content systems, and position themselves as category leaders—without sacrificing authenticity or burning out.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Services
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          End-to-end media and growth solutions for founders and SaaS companies.
          We build the systems that scale your brand.
        </p>
        <div className="mt-16 space-y-16">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="border-b border-border pb-16 last:border-0"
            >
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                {service.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {service.description}
              </p>
              <CalendlyLink
                className="mt-6 inline-block text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Discuss Your Project →
              </CalendlyLink>
            </section>
          ))}
        </div>
        <div className="mt-24 text-center">
          <CalendlyLink
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Strategy Call
          </CalendlyLink>
        </div>
      </div>
    </div>
  );
}
