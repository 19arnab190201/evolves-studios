"use client";

import { useState, useCallback } from "react";
import { Marquee } from "@/components/ui/marquee";

const videos = [
  {
    id: 1,
    title: "Prime",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772275563/Drink_Prime_ivuet2.mp4",
  },
  {
    id: 2,
    title: "Boat",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772276584/Boat_metqv6.mp4",
  },
  {
    id: 3,
    title: "Trimmer",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772276950/Trimmer_commercial_chujxc.mp4",
  },
  {
    id: 4,
    title: "Maluma Vape",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277040/Maluma_ejaxgd.mp4",
  },
  {
    id: 5,
    title: "Chris Bar Vape",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277191/chris_bar_vape_n4itsv.mp4",
  },
  {
    id: 6,
    title: "Super Human Black",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277466/creatine_black_sfk9xa.mp4",
  },
  {
    id: 7,
    title: "Insane Labz",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277590/Insane_Whey_protien_c7pagd.mp4",
  },
  {
    id: 8,
    title: "Super Human Orange",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772277984/Super_Human_Orange_rr4arv.mp4",
  },
  {
    id: 9,
    title: "Karma and Luck",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772278420/Karma_and_luck_yafx3i.mp4",
  },
  {
    id: 10,
    title: "Bliss",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772279241/Bliss_commercial_Main_fzqkhz.mp4",
  },
  {
    id: 11,
    title: "Nike",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772279054/nike_commercial_xnmuha.mp4",
  },
  {
    id: 12,
    title: "Airpods",
    src: "https://res.cloudinary.com/dss9edy22/video/upload/v1772279334/airpods_pro_h98l6z.mp4",
  },
];

/**
 * Cloudinary video optimization per https://cloudinary.com/documentation/video_optimization
 * - w_520: Resize to display width (card is 520px) — biggest file size reduction
 * - c_fill,ar_16:10: Fill card aspect ratio, crop intelligently
 * - vc_auto: Best codec for device (H.264, VP9, AV1)
 * - q_auto: Automatic quality (balances size vs appearance, Save-Data → eco)
 * - f_auto:video: Best format per browser (WebM, MP4, AV1)
 */
const CLOUDINARY_VIDEO_TRANSFORM =
  "w_520,c_fill,ar_16:10,vc_auto,q_auto,f_auto:video";

/**
 * Poster optimization: so_auto (best frame), q_auto, f_auto for thumbnail
 */
const CLOUDINARY_POSTER_TRANSFORM = "so_auto,q_auto,f_auto";

function getCloudinaryVideoUrl(url: string): string {
  const insertAt = url.indexOf("/upload/") + "/upload/".length;
  return (
    url.slice(0, insertAt) +
    CLOUDINARY_VIDEO_TRANSFORM +
    "/" +
    url.slice(insertAt)
  );
}

function getCloudinaryPosterUrl(url: string): string {
  const insertAt = url.indexOf("/upload/") + "/upload/".length;
  const path = url.slice(insertAt).replace(/\.\w+$/, "");
  return (
    url.slice(0, insertAt) +
    CLOUDINARY_POSTER_TRANSFORM +
    "/" +
    path +
    ".jpg"
  );
}

/**
 * Row 1: 1, 2, 3... (L→R)
 * Row 2: N, N-1, N-2... (R→L)
 * Load priority alternates: 1, N, 2, N-1, 3, N-2...
 */
function getLoadPriority(videoId: number, total: number): number {
  const row1Col = videoId - 1; // 0-based column in row 1
  const row2Col = total - videoId; // 0-based column in row 2
  const row1Priority = row1Col * 2 + 1; // interleaved: col 0 row1 = 1, col 1 row1 = 3...
  const row2Priority = row2Col * 2 + 2; // col 0 row2 = 2, col 1 row2 = 4...
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
  const videoUrl = getCloudinaryVideoUrl(video.src);
  const posterUrl = getCloudinaryPosterUrl(video.src);

  return (
    <div className="w-[520px] shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
      <div className="aspect-[16/10] overflow-hidden">
        <video
          src={canLoad ? videoUrl : undefined}
          poster={posterUrl}
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
    </div>
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
          {videos.map((video) => (
            <VideoCard
              key={`row1-${video.id}`}
              video={video}
              loadPriority={getLoadPriority(video.id, total)}
              loadUpTo={loadUpTo}
              onLoad={handleLoad}
            />
          ))}
        </Marquee>
        <Marquee className="[--duration:50s] [--gap:1rem]" pauseOnHover reverse>
          {videos.map((video) => (
            <VideoCard
              key={`row2-${video.id}`}
              video={video}
              loadPriority={getLoadPriority(video.id, total)}
              loadUpTo={loadUpTo}
              onLoad={handleLoad}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
