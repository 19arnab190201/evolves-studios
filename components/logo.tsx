import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * The mark was drawn on a 46x46 canvas but occupies only x 8-40, y 9-39.5 —
 * roughly 30% of the box is padding, and its centre sits 1.26 units below the
 * canvas centre. At small sizes that reads as an undersized logo hanging high
 * next to its wordmark.
 *
 * The viewBox below is a 34-unit square centred on the artwork's true centre
 * (24, 24.26), leaving ~1 unit of breathing room on the wide axis. Same
 * drawing, but it fills the space it is given and sits on the optical centre.
 */
export const Logo = ({ className }: LogoProps) => (
  <svg
    // Default size matters: the width/height attributes are gone, and an SVG
    // without them falls back to 300x150. Footer and mobile sheet render
    // <Logo /> with no class of their own.
    className={cn("size-10 shrink-0", className)}
    viewBox="7 7.26 34 34"
    fill="none"
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="10.864"
      width="9.63107"
      height="9.63107"
      rx="4.81554"
      fill="currentColor"
    />
    <rect
      x="32.3247"
      y="9"
      width="8.75721"
      height="30.0125"
      rx="4.3786"
      transform="rotate(28.7796 32.3247 9)"
      fill="currentColor"
    />
  </svg>
);
