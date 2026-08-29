import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects-data";
import { siteMetadata } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.url;

  const staticPages = [
    "",
    "/services",
    "/case-studies",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  // Sourced from projects.json, the same data the pages are generated from.
  // This previously read lib/case-studies-data.ts, which listed three slugs
  // that have no page — they returned the not-found view with a 200, i.e.
  // soft 404s — while none of the real case studies were listed at all.
  const caseStudies = getAllProjects().map((project) => ({
    url: `${baseUrl}/case-studies/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudies];
}
