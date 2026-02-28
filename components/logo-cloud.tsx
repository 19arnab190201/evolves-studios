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

const LogoCloud = () => {
  return (
    <div className="w-full mt-10">
      <div className="space-y-1">
        <Marquee className="[--duration:40s] [&_svg]:mr-10" pauseOnHover>
          {[Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08].map(
            (Logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-48 h-20 px-6 py-3 border border-gray-200 rounded-[10px] bg-white"
              >
                <Logo />
              </div>
            ),
          )}
        </Marquee>
        <Marquee
          className="[--duration:40s] [&_svg]:mr-10"
          pauseOnHover
          reverse
        >
          {[Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08].map(
            (Logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-48 h-20 px-6 py-3 border border-gray-200 rounded-[10px] bg-white"
              >
                <Logo />
              </div>
            ),
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoCloud;
