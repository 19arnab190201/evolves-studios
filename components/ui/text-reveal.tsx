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
    offset: ["start 80%", "end 20%"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={sectionRef} className={cn("relative z-0 py-16", className)}>
      <div
        className={cn(
          "flex items-center bg-transparent px-4 py-8 md:px-6",
          contentClassName ?? "mx-auto max-w-4xl",
        )}
      >
        <span
          className={cn(
            "flex flex-wrap text-white/10",
            textClassName ??
              "text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl",
          )}
        >
          {words.map((word, i) => {
            const total = words.length;
            const start = i / total;
            const end = (i + 1.2) / total; // slight overlap between neighbours

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

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, (v) => {
    // Compress the animation so it fully completes by 60% scroll progress
    const p = Math.min(v / 0.6, 1);
    const [start, end] = range;
    const t = (p - start) / (end - start || 1);
    return Math.max(0, Math.min(1, t));
  });
  return (
    <span className="relative mx-1 lg:mx-1.5 xl:mx-3">
      <span className="absolute opacity-20 [color:inherit]">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
