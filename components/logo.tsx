import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => (
  <svg
    width="46"
    height="46"
    className={cn("shrink-0", className)}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="10.864"
      width="9.63107"
      height="9.63107"
      rx="4.81554"
      fill="white"
    />
    <rect
      x="32.3247"
      y="9"
      width="8.75721"
      height="30.0125"
      rx="4.3786"
      transform="rotate(28.7796 32.3247 9)"
      fill="white"
    />
  </svg>
);
