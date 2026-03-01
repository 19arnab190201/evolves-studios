import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
} from "@/components/logos";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";

const LogoCloud = () => {
  return (
    <Section className="flex items-center justify-center px-6 !pt-0">
      <div className="overflow-hidden">
        <div className="mt-14 max-w-(--breakpoint-xl) space-y-8">
          <Marquee
            className="mask-x-from-70% mask-x-to-90% [--duration:40s] [&_svg]:mr-10"
            pauseOnHover
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
          <Marquee
            className="mask-x-from-70% mask-x-to-90% [--duration:40s] [&_svg]:mr-10"
            pauseOnHover
            reverse
          >
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default LogoCloud;
