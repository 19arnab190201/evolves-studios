import LogoCloud from "@/components/logo-cloud";
import { CaseStudies } from "@/components/sections/case-studies";
import { ClientLogos } from "@/components/sections/client-logos";
import { Cta } from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
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
      {/* <VideoList /> */}
      <Stats />
      <CaseStudies />
      {/* <WhyChooseUs /> */}
      <Services />
      <Testimonials />
      <Cta />
    </div>
  );
}
