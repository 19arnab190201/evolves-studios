import Link from "next/link";
import { ArrowUpRight, CalendarClock, Mail, PenLine } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { CalendlyLink } from "@/components/calendly-link";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Tell us what you're launching. Commercial production for consumer product brands — 3D commercials, product renders and campaign films.",
  path: "/contact",
});

const gridTexture = {
  backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)`,
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(85% 65% at 50% 0%, black 20%, transparent 95%)",
  WebkitMaskImage:
    "radial-gradient(85% 65% at 50% 0%, black 20%, transparent 95%)",
};

const steps = [
  {
    icon: PenLine,
    title: "Send the brief",
    body: "What the product is, roughly when you need it, and anything you already have — deck, packaging, CAD.",
  },
  {
    icon: CalendarClock,
    title: "We come back with a concept",
    body: "A direction, references and a clear scope, so you are approving an idea rather than an invoice.",
  },
];

export default function ContactPage() {
  return (
    // Negative margin sits here, not on the section: overflow-hidden would
    // otherwise clip a child pulled above this element's top edge.
    <div className="relative -mt-20 overflow-hidden">
      <section className="relative px-6 pb-28 pt-40 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={gridTexture}
        />
        <div
          aria-hidden
          className="ev-drift-slow pointer-events-none absolute -top-48 left-1/4 z-0 size-[40rem] rounded-full bg-white/[0.07] blur-[150px]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* ---------- Left: the pitch ---------- */}
          <div className="flex flex-col">
            <Badge
              className="w-fit rounded-full border-border px-3 py-1 text-xs font-medium"
              variant="secondary"
            >
              Contact
            </Badge>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Tell us what you’re{" "}
              <span className="bg-gradient-to-br from-white via-white to-white/35 bg-clip-text text-transparent">
                launching.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Whether it is one product or a full range, start with the brief.
              We will come back with a concept and a scope before you commit to
              anything.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs tabular-nums text-white/30">
                        0{i + 1}
                      </span>
                      <h2 className="font-medium">{title}</h2>
                    </div>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/50">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-white/8 pt-8">
              <p className="text-sm text-white/40">Prefer to talk it through?</p>
              <CalendlyLink className="mt-2 inline-flex items-center text-base font-medium text-foreground transition-colors hover:text-muted-foreground">
                Book a call
                <ArrowUpRight className="ml-1 size-4" aria-hidden />
              </CalendlyLink>
            </div>
          </div>

          {/* ---------- Right: the form ---------- */}
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#141414] p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/[0.06] blur-[90px]"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm text-white/45">
                <Mail className="size-4" aria-hidden />
                Send a brief
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                Start a project
              </h2>
              <p className="mt-2 text-sm text-white/50">
                The more you can tell us about the product, the more useful the
                first reply will be.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>

              <p className="mt-6 text-xs leading-relaxed text-white/35">
                Rather send it yourself? Everything here also works over email —
                or see{" "}
                <Link
                  href="/case-studies"
                  className="underline underline-offset-4 transition-colors hover:text-white/60"
                >
                  the work
                </Link>{" "}
                first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
