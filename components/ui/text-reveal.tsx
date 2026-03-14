"use client";

import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  /** Optional class for the sticky content wrapper (alignment, max-width) */
  contentClassName?: string;
  /** Optional class for the text (font, size, line-height, color) */
  textClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  contentClassName,
  textClassName,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={cn(
          "sticky top-0 flex h-[50%] items-center bg-transparent px-4 py-20 md:px-6",
          contentClassName ?? "mx-auto max-w-4xl",
        )}
      >
        <span
          className={cn(
            "flex flex-wrap text-black/20 dark:text-white/20",
            textClassName ??
              "text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl",
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            // Wider range (2.5x) so each word fades in over more scroll = smoother feel
            const end = start + 2.5 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

// Smoothstep for softer ease-in-out on the reveal
function smoothstep(t: number): number {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const [start, end] = range;
  const opacity = useTransform(progress, (v) => {
    const t = (v - start) / (end - start);
    return smoothstep(t);
  });
  return (
    <span className="relative mx-1 lg:mx-1.5 xl:mx-3">
      <span className="absolute opacity-30 [color:inherit]">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
