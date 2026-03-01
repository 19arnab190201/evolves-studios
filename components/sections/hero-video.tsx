"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Play, Pause } from "lucide-react";
import { getProject } from "@/lib/projects-data";
import { getProjectSlugAtTime } from "@/config/hero-video";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/dss9edy22/video/upload/v1772321376/Final_dqpskj.mp4";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const projectSlug = getProjectSlugAtTime(currentTime);
  const project = projectSlug ? getProject(projectSlug) : undefined;

  const handlePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video) setCurrentTime(video.currentTime);
  }, []);

  const handlePlay = useCallback(() => setIsPlaying(true), []);
  const handlePause = useCallback(() => setIsPlaying(false), []);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-accent">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {/* Play / Pause button (bottom-left) */}
      <button
        type="button"
        onClick={handlePlayPause}
        className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white text-gray-900"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="size-5 text-gray-900" fill="currentColor" />
        ) : (
          <Play className="ml-0.5 size-5 text-gray-900" fill="currentColor" />
        )}
      </button>

      {/* Project chip (bottom-right) */}
      {project && (
        <Link
          href={`/case-studies/${project.slug}`}
          className="absolute bottom-4 right-4 flex items-center rounded-full border border-white/30 bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
        >
          <span className="text-base font-medium text-gray-900">
            {project.brand}
          </span>
        </Link>
      )}
    </div>
  );
}
