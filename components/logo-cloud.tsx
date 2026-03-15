import {
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
  Logo10,
} from "@/components/logos";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";

const LogoCloud = () => {
  return (
    <Section className="flex items-center justify-center px-6 !pt-0">
      <div className="overflow-hidden">
        <div className="mx-auto mt-10 max-w-7xl">
          <Marquee
            className="mask-x-from-70% mask-x-to-90% [--duration:24s] [&_img]:mr-12"
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
            <Logo09 />
            <Logo10 />
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default LogoCloud;
