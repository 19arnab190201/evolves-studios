import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CalendlyLink } from "@/components/calendly-link";
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
    <div className="min-h-screen w-full">
      <section className="mx-auto w-full max-w-6xl px-6 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-28 lg:px-12 lg:pt-20 lg:pb-32">
        {/* Header - title at top */}
        <header className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1 text-left">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.headline}
            </h1>
            <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.summary}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-6 sm:flex-row lg:flex-col lg:items-end">
            <Button asChild variant="outline" size="sm" className="w-fit gap-2">
              <Link href="/#case-studies">
                View More Case Studies <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex gap-8 sm:gap-12 lg:justify-end">
              <div className="text-sm">
                <p className="mb-1 text-muted-foreground">Category</p>
                <p className="font-medium">{project.category}</p>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-muted-foreground">Client</p>
                <p className="font-medium">{project.brand}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero video */}
        {project.videos.length > 0 && (
          <div className="mb-16 overflow-hidden rounded-2xl bg-muted/20">
            <video
              src={project.videos[0].src}
              className="h-auto w-full object-cover"
              controls
              playsInline
              preload="auto"
            />
            <p className="p-4 text-sm text-muted-foreground">
              {project.videos[0].title}
            </p>
          </div>
        )}

        {/* Story sections - numbered */}
        <div className="mb-20 space-y-0">
            <section className="border-b border-border py-8 first:pt-0 lg:py-12">
              <div className="grid grid-cols-1 items-start justify-items-start gap-8 text-left lg:grid-cols-[1fr_2fr] lg:gap-12">
                <div className="min-w-0">
                  <span className="block text-4xl font-light text-muted-foreground sm:text-5xl lg:text-6xl">
                    01.
                  </span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    The Challenge.
                  </h2>
                </div>
                <div className="min-w-0 space-y-4 text-left">
                  <p className="leading-relaxed text-muted-foreground">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </section>
            <section className="border-b border-border py-8 lg:py-12">
              <div className="grid grid-cols-1 items-start justify-items-start gap-8 text-left lg:grid-cols-[1fr_2fr] lg:gap-12">
                <div className="min-w-0">
                  <span className="block text-4xl font-light text-muted-foreground sm:text-5xl lg:text-6xl">
                    02.
                  </span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    Our Approach.
                  </h2>
                </div>
                <div className="min-w-0 space-y-4 text-left">
                  <p className="leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              </div>
            </section>
            <section className="border-b border-border py-8 lg:py-12">
              <div className="grid grid-cols-1 items-start justify-items-start gap-8 text-left lg:grid-cols-[1fr_2fr] lg:gap-12">
                <div className="min-w-0">
                  <span className="block text-4xl font-light text-muted-foreground sm:text-5xl lg:text-6xl">
                    03.
                  </span>
                  <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    The Results.
                  </h2>
                </div>
                <div className="min-w-0 space-y-4 text-left">
                  <p className="leading-relaxed text-muted-foreground">
                    {project.results}
                  </p>
                </div>
              </div>
            </section>
        </div>

        {/* Additional videos gallery */}
        {project.videos.length > 1 && (
          <section className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold">More from this project</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.videos.slice(1).map((video) => (
                <div
                  key={video.id}
                  className="overflow-hidden rounded-xl bg-muted/20"
                >
                  <video
                    src={video.src}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-80 lg:h-96"
                    controls
                    playsInline
                    preload="metadata"
                  />
                  <p className="p-4 text-sm font-medium text-muted-foreground">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-12 sm:flex-row sm:items-center sm:gap-6 lg:pt-16">
          <Button asChild size="lg" className="gap-2">
            <CalendlyLink>
              Book a Strategy Call <ArrowRight className="size-4" />
            </CalendlyLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#case-studies">View More Case Studies</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
