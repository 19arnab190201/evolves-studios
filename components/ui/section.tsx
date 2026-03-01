import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML element to render. Default: "section" */
  as?: "section" | "div";
  /** Reduce vertical padding for compact sections */
  size?: "default" | "compact" | "large";
}

const sizeClasses = {
  default: "py-20 sm:py-24 lg:py-28",
  compact: "py-12 sm:py-16 lg:py-20",
  large: "py-24 sm:py-28 lg:py-32",
};

export function Section({
  as: Comp = "section",
  size = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn(sizeClasses[size], className)}
      {...props}
    />
  );
}
