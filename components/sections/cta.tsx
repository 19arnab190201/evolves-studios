import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CalendlyLink } from "@/components/calendly-link";
import { Section } from "@/components/ui/section";

export function Cta() {
  return (
    <Section>
      <div className="dark:border relative mx-auto w-full max-w-screen-lg overflow-hidden rounded-2xl border bg-background px-6 py-8 text-foreground dark md:px-14 md:py-12">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-[200%] w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)] inset-x-0 inset-y-[-30%] skew-y-12"
        >
          <defs>
            <pattern
              id="cta-pattern-right"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x="-1"
              y="-1"
            >
              <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern-right)" />
          <svg x="-1" y="-1" className="overflow-visible">
            <rect
              width="39"
              height="39"
              x="641"
              y="561"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.09"
            />
            <rect
              width="39"
              height="39"
              x="841"
              y="121"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="441"
              y="361"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="321"
              y="41"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="481"
              y="521"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="481"
              y="201"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.09"
            />
            <rect
              width="39"
              height="39"
              x="401"
              y="1"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.08"
            />
            <rect
              width="39"
              height="39"
              x="281"
              y="121"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.07"
            />
            <rect
              width="39"
              height="39"
              x="801"
              y="201"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.06"
            />
            <rect
              width="39"
              height="39"
              x="521"
              y="121"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.05"
            />
            <rect
              width="39"
              height="39"
              x="921"
              y="41"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.04"
            />
            <rect
              width="39"
              height="39"
              x="241"
              y="1"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.02"
            />
          </svg>
        </svg>
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-[200%] w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)] inset-x-0 inset-y-0 skew-y-12"
        >
          <defs>
            <pattern
              id="cta-pattern-left"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              x="-1"
              y="-1"
            >
              <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern-left)" />
          <svg x="-1" y="-1" className="overflow-visible">
            <rect
              width="39"
              height="39"
              x="441"
              y="441"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.09"
            />
            <rect
              width="39"
              height="39"
              x="881"
              y="121"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="321"
              y="441"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="1"
              y="281"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="401"
              y="361"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.10"
            />
            <rect
              width="39"
              height="39"
              x="81"
              y="81"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.08"
            />
            <rect
              width="39"
              height="39"
              x="1"
              y="81"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.07"
            />
            <rect
              width="39"
              height="39"
              x="281"
              y="481"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.06"
            />
            <rect
              width="39"
              height="39"
              x="81"
              y="1"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.05"
            />
            <rect
              width="39"
              height="39"
              x="881"
              y="441"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.04"
            />
            <rect
              width="39"
              height="39"
              x="81"
              y="481"
              fill="currentColor"
              strokeWidth="0"
              opacity="0.02"
            />
          </svg>
        </svg>
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Ready to Build Category-Defining Media?
          </h3>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            Book a strategy call and discover how we can help scale your brand.
          </p>
        </div>
        <div className="relative z-0 mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <CalendlyLink>
              Book Strategy Call <ArrowUpRight className="ml-2 size-4" />
            </CalendlyLink>
          </Button>
          <Button asChild variant="outline">
            <Link href="/case-studies">
              View Case Studies <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
