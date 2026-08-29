import Link from "next/link";

import { CalendlyLink } from "@/components/calendly-link";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Services",
  description:
    "3D commercials, photoreal product renders, video production, social content, brand visuals and media strategy for consumer product brands.",
  path: "/services",
});

const services = [
  {
    id: "3d-commercials",
    title: "3D Commercials",
    description:
      "Fully computer-generated commercials, built shot by shot. Because the set, the product and the physics are all constructed, the camera can do things a rig cannot — travel through a bottle, hold a bead of liquid mid-air, reset a hero angle perfectly on the hundredth take. Lighting is repeatable, so a spot can be extended to new flavours, colourways or SKUs later without reshooting anything.",
  },
  {
    id: "product-renders",
    title: "Product Renders",
    description:
      "Photoreal stills and turntables generated from your CAD, packaging artwork or a built model. One asset set covers every angle, finish and colourway, at print resolution and in the crops each channel needs — usually before a physical sample exists, and without booking a studio day per variant.",
  },
  {
    id: "video-production",
    title: "Video Production",
    description:
      "Live-action campaign films, handled end to end: direction, casting, shoot and post. For work that needs a real lens — people wearing the product, a room with atmosphere, a moment that should feel captured rather than constructed. Frequently combined with CG elements in the same film.",
  },
  {
    id: "video-social",
    title: "Video & Social Content",
    description:
      "Vertical cutdowns, hook variants and platform-native edits built from the hero film. One production feeds an entire content calendar, with each edit graded and paced for where it actually runs instead of a 16:9 master cropped and reposted.",
  },
  {
    id: "brand-visuals",
    title: "Brand Visuals",
    description:
      "The visual system that holds a campaign together — art direction, colour, typography, motion language and packaging visuals. Defined once and documented, so the next film, render or social drop looks like it belongs to the same brand without rediscovering the look each time.",
  },
  {
    id: "media-strategy",
    title: "Media Strategy",
    description:
      "Where the work runs and in what order. Channel planning, launch sequencing and asset specification, decided before production so the edit list matches the media plan — rather than discovering after delivery that the campaign needs three formats nobody shot for.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Services
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Commercial production for consumer product brands — built in 3D, shot
          on set, or both, then cut for every place it needs to run.
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
              <p className="mt-4 max-w-3xl text-muted-foreground">
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
