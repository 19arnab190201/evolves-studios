import projectsJson from "@/data/projects.json";

export interface ProjectVideo {
  id: number;
  title: string;
  src: string;
}

export interface Project {
  slug: string;
  brand: string;
  category: string;
  headline: string;
  summary: string;
  metrics: string[];
  challenge: string;
  solution: string;
  results: string;
  outcome: string;
  videos: ProjectVideo[];
  featured: boolean;
}

const projects: Project[] = projectsJson.projects as Project[];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** All videos across projects, with projectSlug for linking */
export interface VideoWithProject {
  id: number;
  title: string;
  src: string;
  projectSlug: string;
}

export function getAllVideos(): VideoWithProject[] {
  return projects.flatMap((p) =>
    p.videos.map((v) => ({ ...v, projectSlug: p.slug }))
  );
}
