"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps {
  src: string;
  /** Poster frame shown before the video loads. Strongly recommended. */
  poster?: string;
  className?: string;
  /**
   * How far outside the viewport to start loading, in px.
   * Gives the video a head start so it is ready as it scrolls in.
   */
  rootMargin?: number;
}

/**
 * Video that downloads nothing until it scrolls near the viewport.
 *
 * Plain `<video autoPlay preload="auto">` fetches the full file on page load,
 * even when the element is far below the fold. With several cards on one page
 * that is tens of megabytes before the user has scrolled at all — which is how
 * the previous Cloudinary account exhausted its delivery quota.
 *
 * Uses IntersectionObserver where it works, with a scroll-listener fallback.
 * The fallback matters in environments where IO never fires (headless or
 * non-compositing renderers, some embedded webviews); without it the video
 * would silently never load in those cases.
 */
export function LazyVideo({
  src,
  poster,
  className,
  rootMargin = 200,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const isNearViewport = useCallback(() => {
    const el = containerRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    return rect.top < viewportHeight + rootMargin && rect.bottom > -rootMargin;
  }, [rootMargin]);

  useEffect(() => {
    if (shouldLoad) return;
    const el = containerRef.current;
    if (!el) return;

    // Already in view on mount (e.g. deep link, restored scroll position).
    if (isNearViewport()) {
      setShouldLoad(true);
      return;
    }

    const load = () => setShouldLoad(true);

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) load();
        },
        { rootMargin: `${rootMargin}px` }
      );
      observer.observe(el);
    }

    // Fallback: cheap rect check on scroll, in case IO never reports.
    const onScroll = () => {
      if (isNearViewport()) load();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [shouldLoad, isNearViewport, rootMargin]);

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)}>
      <video
        // Only set once near view; until then the browser fetches nothing.
        src={shouldLoad ? src : undefined}
        poster={poster}
        className="h-full w-full object-cover"
        autoPlay={shouldLoad}
        muted
        loop
        playsInline
        preload="none"
      />
    </div>
  );
}

export default LazyVideo;
