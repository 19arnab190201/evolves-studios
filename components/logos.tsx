const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
  "/logos/logo9.png",
  "/logos/logo10.png",
];

const Logo = ({ src }: { src: string }) => (
  <img
    src={src}
    alt="Client logo"
    className="h-24 w-auto max-w-[300px] object-contain opacity-90"
  />
);

export const Logo01 = () => <Logo src={logos[0]} />;
export const Logo02 = () => <Logo src={logos[1]} />;
export const Logo03 = () => <Logo src={logos[2]} />;
export const Logo04 = () => <Logo src={logos[3]} />;
export const Logo05 = () => <Logo src={logos[4]} />;
export const Logo06 = () => <Logo src={logos[5]} />;
export const Logo07 = () => <Logo src={logos[6]} />;
export const Logo08 = () => <Logo src={logos[7]} />;
export const Logo09 = () => <Logo src={logos[8]} />;
export const Logo10 = () => <Logo src={logos[9]} />;
