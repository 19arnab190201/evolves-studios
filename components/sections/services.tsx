import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  Clapperboard,
  Package,
  Palette,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

const services = [
  {
    title: "3D Commercials",
    description:
      "Fully computer-generated spots built shot by shot. Impossible camera moves, physics you control, and a set that never has to be struck.",
    href: "/services#3d-commercials",
    icon: Boxes,
  },
  {
    title: "Product Renders",
    description:
      "Photoreal stills and turntables from your CAD or packaging art. Every angle, colourway and finish, without a studio day.",
    href: "/services#product-renders",
    icon: Package,
  },
  {
    title: "Video Production",
    description:
      "Live-action campaign films end to end — direction, shoot and post — for the work that belongs in front of a real lens.",
    href: "/services#video-production",
    icon: Clapperboard,
  },
  {
    title: "Video & Social Content",
    description:
      "Vertical cutdowns, hooks and platform edits built from the hero film, so one production feeds an entire content calendar.",
    href: "/services#video-social",
    icon: Share2,
  },
  {
    title: "Brand Visuals",
    description:
      "The look that holds it together — art direction, colour, motion language and packaging visuals your brand can reuse.",
    href: "/services#brand-visuals",
    icon: Palette,
  },
  {
    title: "Media Strategy",
    description:
      "Where the work runs and in what order. Channel planning and launch sequencing so the film lands, not just ships.",
    href: "/services#media-strategy",
    icon: BarChart3,
  },
] as const;

export function Services() {
  return (
    <Section className="px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <Badge
          className="rounded-full border-border px-3 py-1 text-xs font-medium"
          variant="secondary"
        >
          Our Services
        </Badge>
        <h2 className="mt-5 text-pretty text-left text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything that makes the product look inevitable.
        </h2>
        <p className="mt-3 max-w-2xl text-left text-base text-muted-foreground sm:text-lg">
          From a single render to a full campaign — built in 3D, shot on set, or
          both, then cut for every place it needs to run.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#141414] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#181818]"
              >
                {/* Corner glow, revealed on hover. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-white/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <ArrowUpRight
                      className="size-5 -translate-x-1 translate-y-1 text-white/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
