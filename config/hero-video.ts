/**
 * Maps video timestamps (in seconds) to project slugs.
 * As the hero video plays, the project chip updates based on the current time.
 * Each segment runs from `start` until the next segment's `start` (or end of video).
 *
 * Update these values to match your hero video's content and duration.
 * Project slugs must exist in data/projects.json.
 */
export const heroVideoSegments = [
  { start: 0, projectSlug: "airpods" },
  { start: 13, projectSlug: "prime" },
  { start: 31, projectSlug: "nike" },
  { start: 46, projectSlug: "karma-luck" },
  { start: 72.5, projectSlug: "boat" },
  { start: 84.5, projectSlug: "trimmer" },
  { start: 116, projectSlug: "bliss" },
  { start: 125, projectSlug: "insane-labz" },
  { start: 140.5, projectSlug: "super-human" },
  { start: 162.5, projectSlug: "chris-bar" },
] as const;

export type HeroVideoSegment = (typeof heroVideoSegments)[number];

/**
 * Resolves the project slug for a given timestamp.
 * Returns the first segment where start <= time.
 */
export function getProjectSlugAtTime(
  time: number,
  segments: readonly HeroVideoSegment[] = heroVideoSegments,
): string | undefined {
  let current: string | undefined;
  for (const seg of segments) {
    if (time >= seg.start) {
      current = seg.projectSlug;
    } else {
      break;
    }
  }
  return current;
}
