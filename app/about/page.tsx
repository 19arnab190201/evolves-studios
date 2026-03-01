import { Button } from "@/components/ui/button";
import { CalendlyLink } from "@/components/calendly-link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About",
  description:
    "Evolves Studios is a growth & media agency for founders and SaaS companies. We build media that scales modern brands.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          About Evolves Studios
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Evolves Studios is a growth and media agency built for founders and
          SaaS companies who want to build category-defining brands.
        </p>
        <div className="mt-12 space-y-8 text-muted-foreground">
          <p>
            We believe the best brands are built by founders who share their
            unique perspective consistently. Our job is to make that easy—through
            podcast production, content repurposing, distribution strategy, and
            founder brand building.
          </p>
          <p>
            We work with ambitious founders who are ready to invest in media as
            a growth channel. No vanity metrics. No spray-and-pray. Just
            systematic content that drives pipeline and builds authority.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Button asChild size="lg">
            <CalendlyLink>Book a Strategy Call</CalendlyLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
