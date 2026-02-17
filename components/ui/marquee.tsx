"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  pauseOnHover = true,
  reverse = false,
  vertical = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden [--duration:40s] [--gap:1rem]",
        vertical ? "h-full" : "w-full",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex",
          vertical ? "flex-col" : "flex-row",
          vertical ? "animate-marquee-vertical" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        <div
          className={cn(
            "flex shrink-0 justify-around gap-[--gap]",
            vertical ? "min-h-full flex-col" : "min-w-full flex-row"
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            "flex shrink-0 justify-around gap-[--gap]",
            vertical ? "min-h-full flex-col" : "min-w-full flex-row"
          )}
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}
