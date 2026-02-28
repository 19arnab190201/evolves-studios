"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { getAllVideos } from "@/lib/projects-data";

const videos = getAllVideos();

/**
 * Row 1: 1, 2, 3... (L→R)
 * Row 2: N, N-1, N-2... (R→L)
 * Load priority alternates: 1, N, 2, N-1, 3, N-2...
 */
function getLoadPriority(index: number, total: number): number {
  const row1Col = index;
  const row2Col = total - 1 - index;
  const row1Priority = row1Col * 2 + 1;
  const row2Priority = row2Col * 2 + 2;
  return Math.min(row1Priority, row2Priority);
}

function VideoCard({
  video,
  loadPriority,
  loadUpTo,
  onLoad,
}: {
  video: (typeof videos)[0];
  loadPriority: number;
  loadUpTo: number;
  onLoad: (loadPriority: number) => void;
}) {
  const canLoad = loadPriority <= loadUpTo;

  return (
    <Link
      href={`/case-studies/${video.projectSlug}`}
      className="group block w-[520px] shrink-0 overflow-hidden rounded-lg border border-border bg-muted transition-transform hover:scale-[1.02]"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <video
          src={canLoad ? video.src : undefined}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload={canLoad ? "auto" : "none"}
          onCanPlay={
            canLoad && loadPriority === loadUpTo
              ? () => onLoad(loadPriority)
              : undefined
          }
        />
      </div>
    </Link>
  );
}

export function VideoList() {
  const [loadUpTo, setLoadUpTo] = useState(1);
  const total = videos.length;

  const handleLoad = useCallback(
    (loadPriority: number) => {
      setLoadUpTo((prev) =>
        loadPriority === prev ? Math.min(prev + 1, total) : prev
      );
    },
    [total]
  );

  return (
    <div className="mt-24 w-full overflow-hidden px-6">
      <h2 className="font-semibold text-4xl tracking-tighter md:text-5xl text-center">
        Our Work in Motion
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
        See how we help founders and SaaS companies build category-defining
        media through strategic production and content that scales.
      </p>

      <div className="mt-16">
        <Marquee className="[--duration:50s] [--gap:1rem]" pauseOnHover>
          {videos.map((video, index) => (
            <VideoCard
              key={`row1-${video.projectSlug}-${video.id}`}
              video={video}
              loadPriority={getLoadPriority(index, total)}
              loadUpTo={loadUpTo}
              onLoad={handleLoad}
            />
          ))}
        </Marquee>
        <Marquee className="[--duration:50s] [--gap:1rem]" pauseOnHover reverse>
          {videos.map((video, index) => (
            <VideoCard
              key={`row2-${video.projectSlug}-${video.id}`}
              video={video}
              loadPriority={getLoadPriority(index, total)}
              loadUpTo={loadUpTo}
              onLoad={handleLoad}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
