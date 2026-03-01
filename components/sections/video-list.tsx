"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Marquee } from "@/components/ui/marquee";
import { getAllVideos } from "@/lib/projects-data";
import { getCloudinaryVideoUrl } from "@/lib/cloudinary";

const videos = getAllVideos();

function getLoadPriority(index: number, total: number): number {
  return index + 1;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!canLoad || !containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect ?? {};
      if (width > 0 && height > 0) {
        setVideoSrc(getCloudinaryVideoUrl(video.src, width, height));
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [canLoad, video.src]);

  return (
    <Link
      href={`/case-studies/${video.projectSlug}`}
      className="group block w-[520px] shrink-0 overflow-hidden rounded-lg border border-border bg-muted transition-transform duration-300 ease-in-out hover:scale-[1.05]"
    >
      <div ref={containerRef} className="aspect-[16/10] overflow-hidden">
        <video
          src={videoSrc}
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
    <Section className="w-full overflow-hidden px-6">
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
              key={`${video.projectSlug}-${video.id}`}
              video={video}
              loadPriority={getLoadPriority(index, total)}
              loadUpTo={loadUpTo}
              onLoad={handleLoad}
            />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
