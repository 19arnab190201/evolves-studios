import { cn } from "@/lib/utils";

/**
 * Decorative panel for each service on /services. Pure CSS and inline SVG —
 * no assets, no client JS — so it costs nothing to ship. Every animation is
 * disabled under prefers-reduced-motion (see globals.css).
 */

const shell =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/8 bg-[#141414]";

const glow =
  "pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-white/[0.06] blur-3xl";

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(shell, className)}>
      <div aria-hidden className="sv-grid absolute inset-0" />
      <div aria-hidden className={glow} />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/** Wireframe cube — the set is built, not shot. */
function Cube() {
  const faces = [
    "rotateY(0deg) translateZ(58px)",
    "rotateY(90deg) translateZ(58px)",
    "rotateY(180deg) translateZ(58px)",
    "rotateY(270deg) translateZ(58px)",
    "rotateX(90deg) translateZ(58px)",
    "rotateX(-90deg) translateZ(58px)",
  ];
  return (
    <div className="sv-scene">
      <div className="sv-cube sv-cube-lg">
        {faces.map((t) => (
          <span key={t} className="sv-face" style={{ transform: t }} />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Compact variants, sized for the 48px icon tiles on the homepage. Same
 * animations (the keyframes are global), just scaled down to read at that size
 * — the full panels lose all their detail if simply shrunk.
 * ------------------------------------------------------------------------ */

function MiniCube() {
  const d = 9; // half the cube edge
  const faces = [
    `rotateY(0deg) translateZ(${d}px)`,
    `rotateY(90deg) translateZ(${d}px)`,
    `rotateY(180deg) translateZ(${d}px)`,
    `rotateY(270deg) translateZ(${d}px)`,
    `rotateX(90deg) translateZ(${d}px)`,
    `rotateX(-90deg) translateZ(${d}px)`,
  ];
  return (
    <div className="sv-scene-sm">
      <div className="sv-cube sv-cube-sm">
        {faces.map((t) => (
          <span key={t} className="sv-face" style={{ transform: t }} />
        ))}
      </div>
    </div>
  );
}

function MiniTurntable() {
  return (
    <svg viewBox="0 0 40 40" className="size-7" fill="none" aria-hidden>
      <ellipse cx="20" cy="27" rx="14" ry="5" stroke="currentColor" strokeOpacity="0.4" />
      <g className="sv-orbit" style={{ transformOrigin: "20px 27px" }}>
        <circle cx="34" cy="27" r="1.8" fill="currentColor" />
      </g>
      <g className="sv-bob">
        <rect
          x="14"
          y="10"
          width="12"
          height="16"
          rx="3.5"
          stroke="currentColor"
          strokeOpacity="0.85"
        />
      </g>
    </svg>
  );
}

function MiniFilm() {
  return (
    <div className="relative h-6 w-8 overflow-hidden rounded-[3px] border border-current/70">
      <span className="absolute inset-y-0 left-0 w-1 border-r border-current/40" />
      <span className="absolute inset-y-0 right-0 w-1 border-l border-current/40" />
      <span
        aria-hidden
        className="sv-scan absolute inset-x-1.5 h-px bg-current"
      />
    </div>
  );
}

function MiniStack() {
  return (
    // Kept under the 48px tile width: 8 + 12 + 14 + two 2px gaps = 38px.
    <div className="flex items-center gap-0.5">
      {[
        { c: "h-6 w-2", d: "0s" },
        { c: "h-4 w-3", d: "0.3s" },
        { c: "h-3.5 w-3.5", d: "0.6s" },
      ].map(({ c, d }) => (
        <span
          key={c}
          className={cn("sv-float rounded-[3px] border border-current/70", c)}
          style={{ animationDelay: d }}
        />
      ))}
    </div>
  );
}

function MiniSwatches() {
  return (
    <div className="grid grid-cols-3 gap-[3px]">
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="sv-pulse size-[7px] rounded-[2px] bg-current"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  );
}

function MiniBars() {
  return (
    <div className="flex h-7 items-end gap-1">
      {[10, 18, 13, 24].map((h, i) => (
        <span
          key={i}
          className="sv-rise w-1.5 rounded-t-[2px] bg-current"
          style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

const miniVisuals: Record<string, () => React.ReactElement> = {
  "3d-commercials": MiniCube,
  "product-renders": MiniTurntable,
  "video-production": MiniFilm,
  "video-social": MiniStack,
  "brand-visuals": MiniSwatches,
  "media-strategy": MiniBars,
};

/** Animated stand-in for a static icon, for the homepage service cards. */
export function ServiceIcon({ id }: { id: string }) {
  const Mini = miniVisuals[id];
  if (!Mini) return null;
  return <Mini />;
}

/** Turntable — one model, every angle. */
function Turntable() {
  return (
    <svg viewBox="0 0 200 200" className="size-56" fill="none" aria-hidden>
      <ellipse
        cx="100"
        cy="128"
        rx="72"
        ry="26"
        stroke="rgba(255,255,255,0.18)"
      />
      <ellipse
        cx="100"
        cy="128"
        rx="50"
        ry="18"
        stroke="rgba(255,255,255,0.12)"
      />
      <g className="sv-orbit" style={{ transformOrigin: "100px 128px" }}>
        <circle cx="172" cy="128" r="3.5" fill="rgba(255,255,255,0.75)" />
        <circle cx="28" cy="128" r="2.5" fill="rgba(255,255,255,0.35)" />
      </g>
      <g className="sv-bob">
        <rect
          x="82"
          y="62"
          width="36"
          height="62"
          rx="10"
          stroke="rgba(255,255,255,0.5)"
          fill="rgba(255,255,255,0.04)"
        />
        <rect
          x="92"
          y="50"
          width="16"
          height="14"
          rx="4"
          stroke="rgba(255,255,255,0.35)"
        />
      </g>
    </svg>
  );
}

/** Film frame with a sweeping scan — the live-action side. */
function FilmFrame() {
  return (
    <div className="relative h-40 w-56 overflow-hidden rounded-lg border border-white/20 bg-white/[0.02]">
      <div className="absolute inset-y-0 left-0 flex w-4 flex-col justify-around border-r border-white/10 px-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="block h-2 rounded-[2px] bg-white/15" />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 flex w-4 flex-col justify-around border-l border-white/10 px-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="block h-2 rounded-[2px] bg-white/15" />
        ))}
      </div>
      <div
        aria-hidden
        className="sv-scan absolute inset-x-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />
    </div>
  );
}

/** Aspect stack — one film, cut for every placement. */
function AspectStack() {
  const items = [
    { w: "w-16", h: "h-32", d: "0s", label: "9:16" },
    { w: "w-24", h: "h-24", d: "0.35s", label: "1:1" },
    { w: "w-32", h: "h-20", d: "0.7s", label: "16:9" },
  ];
  return (
    <div className="flex items-center gap-4">
      {items.map(({ w, h, d, label }) => (
        <div
          key={label}
          className={cn(
            "sv-float flex items-end justify-center rounded-lg border border-white/20 bg-white/[0.03] pb-1.5",
            w,
            h
          )}
          style={{ animationDelay: d }}
        >
          <span className="text-[10px] tabular-nums text-white/40">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Swatch grid — the system that keeps a campaign consistent. */
function Swatches() {
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="sv-pulse size-10 rounded-lg border border-white/10 bg-white/[0.06]"
          style={{ animationDelay: `${(i % 4) * 0.18 + Math.floor(i / 4) * 0.3}s` }}
        />
      ))}
    </div>
  );
}

/** Channel bars — where the work runs, and in what order. */
function Bars() {
  const bars = [72, 116, 54, 132, 90, 108];
  return (
    <div className="flex h-36 items-end gap-3">
      {bars.map((h, i) => (
        <span
          key={i}
          className="sv-rise w-7 rounded-t-md border border-b-0 border-white/15 bg-gradient-to-t from-white/[0.03] to-white/20"
          style={{ height: `${h}px`, animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </div>
  );
}

const visuals: Record<string, () => React.ReactElement> = {
  "3d-commercials": Cube,
  "product-renders": Turntable,
  "video-production": FilmFrame,
  "video-social": AspectStack,
  "brand-visuals": Swatches,
  "media-strategy": Bars,
};

export function ServiceVisual({ id }: { id: string }) {
  const Visual = visuals[id];
  if (!Visual) return null;
  return (
    <Frame>
      <Visual />
    </Frame>
  );
}
