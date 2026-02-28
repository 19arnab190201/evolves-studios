import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, getAllProjects } from "@/lib/projects-data";
import { generatePageMetadata } from "@/lib/metadata";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return generatePageMetadata({
    title: `${project.brand} Case Study`,
    description: project.summary,
    path: `/case-studies/${slug}`,
  });
}

export default async function ProjectPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero video - full quality, no optimization */}
      {project.videos.length > 0 && (
        <div className="relative w-full bg-black">
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
              <video
                src={project.videos[0].src}
                className="h-auto w-full object-contain"
                controls
                playsInline
                preload="auto"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {project.videos[0].title}
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/#case-studies"
          className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Case Studies
        </Link>

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {project.brand} · {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {project.headline}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <Badge
                key={metric}
                variant="secondary"
                className="px-3 py-1 text-sm font-medium"
              >
                {metric}
              </Badge>
            ))}
          </div>
        </header>

        {/* Additional videos (if any) */}
        {project.videos.length > 1 && (
          <div className="mt-16 space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">
              More from this project
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {project.videos.slice(1).map((video) => (
                <div
                  key={video.id}
                  className="overflow-hidden rounded-xl border border-border bg-muted/50"
                >
                  <div className="aspect-video">
                    <video
                      src={video.src}
                      className="h-full w-full object-contain"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <p className="p-4 text-sm font-medium text-muted-foreground">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story sections */}
        <div className="mt-20 space-y-16">
          <section className="border-l-4 border-primary/50 pl-6">
            <h2 className="text-2xl font-semibold text-foreground">
              The Challenge
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
          </section>
          <section className="border-l-4 border-primary/50 pl-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Our Approach
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
          </section>
          <section className="border-l-4 border-primary/50 pl-6">
            <h2 className="text-2xl font-semibold text-foreground">
              The Results
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {project.results}
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-12 sm:flex-row sm:items-center sm:gap-6">
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              Book a Strategy Call <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#case-studies">View More Case Studies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
