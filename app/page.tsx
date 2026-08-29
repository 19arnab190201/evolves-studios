import LogoCloud from "@/components/logo-cloud";
import { CaseStudies } from "@/components/sections/case-studies";
import { ClientLogos } from "@/components/sections/client-logos";
import { Cta } from "@/components/sections/cta";
import { HeroTagline } from "@/components/sections/hero-tagline";
import Hero from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { VideoList } from "@/components/sections/video-list";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Evolves Studios | Growth & Media Agency",
  description:
    "We build media that scales modern brands. Growth & media agency for founders and SaaS companies. Podcast production, content repurposing, and founder brand building.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <LogoCloud />
      <HeroTagline />
      {/* <VideoList /> */}
      <CaseStudies />
      {/* <WhyChooseUs /> */}
      <Services />
      <Stats />
      <Cta />
    </div>
  );
}
