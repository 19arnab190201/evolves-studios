import { ArrowUpRight, CirclePlay } from "lucide-react";
import { HeroVideo } from "@/components/sections/hero-video";
import Link from "next/link";
import { CalendlyLink } from "@/components/calendly-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Hero() {
  return (
    <Section
      as="section"
      size="large"
      className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center !pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-6 lg:grid-cols-[5fr_7fr]">
        <div className="text-left">
          <Badge
            asChild
            className="rounded-full border-border py-1"
            variant="secondary"
          >
            <Link href="#case-studies">
              Growth & Media Agency <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[20ch] font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            We Build Media That Scales Brands
          </h1>
          <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
            Podcast production, content repurposing, and founder brand building
            for SaaS companies and founders. We help you create media that
            drives growth.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button asChild className="rounded-full text-base" size="lg">
              <CalendlyLink>
                Book a Call <ArrowUpRight className="ml-1 size-4" />
              </CalendlyLink>
            </Button>
            <Button
              asChild
              className="rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
              <Link href="#case-studies">
                <CirclePlay className="mr-1 size-4" /> View Our Work
              </Link>
            </Button>
          </div>
        </div>

        <HeroVideo />
      </div>
    </Section>
  );
}
