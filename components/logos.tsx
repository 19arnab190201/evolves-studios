const logos = [
  "/logos/1.jpg",
  "/logos/2.jpg",
  "/logos/3.jpg",
  "/logos/4.jpg",
  "/logos/5.jpg",
  "/logos/6.jpg",
  "/logos/7.jpg",
  "/logos/8.jpg",
  "/logos/9.jpg",
  "/logos/10.jpg",
];

const Logo = ({ src }: { src: string }) => (
  <img
    src={src}
    alt="Logo"
    className="max-h-full max-w-[200px] object-contain"
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
