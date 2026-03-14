"use client";

import { TextReveal } from "@/components/ui/text-reveal";

const TAGLINE =
  "We help consumer brands turn ordinary product content into cinematic commercials that capture attention, elevate perception, and convert audiences into customers.";

const taglineTextClass = "font-medium text-[40px] leading-[46px] text-white/20";

export function HeroTagline() {
  return (
    <TextReveal
      contentClassName="mx-auto w-full max-w-7xl justify-start"
      textClassName={taglineTextClass}
    >
      {TAGLINE}
    </TextReveal>
  );
}
