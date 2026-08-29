import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/lazy-video";
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

  // Wraps around, so the final case study points back to the first.
  const all = getAllProjects();
  const idx = all.findIndex((p) => p.slug === project.slug);
  const next = idx >= 0 ? all[(idx + 1) % all.length] : undefined;

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
          <div className="mb-16 overflow-hidden rounded-2xl bg-black/40">
            {/*
              Sized by height rather than forced to full width. Not every film
              here is 16:9 — the Sidemen activewear spot is 1080x1920 — and
              `w-full` on a portrait video made it roughly 1100x1955, a wall of
              video you had to scroll past. Capping the height and letting the
              width follow keeps every aspect ratio at its native shape.
            */}
            <video
              src={project.videos[0].src}
              poster={project.videos[0].poster}
              // `block` matters: a video is inline by default, so mx-auto has
              // nothing to centre and a portrait film sits against the left edge.
              className="mx-auto block max-h-[78vh] w-auto max-w-full"
              controls
              playsInline
              // Click-to-play, so only fetch enough to show duration and the
              // first frame. "auto" pulled the whole file on page load.
              preload="metadata"
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
            <section className="border-border py-8 lg:py-12">
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
                    poster={video.poster}
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

        {/* Next project — keeps people moving through the work instead of
            landing on a dead end after the last paragraph. */}
        {next && (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group relative mt-16 block overflow-hidden rounded-2xl border border-white/8 bg-[#141414] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div
              aria-hidden
              className="ev-drift-slow pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-white/[0.07] blur-[100px]"
            />
            <div className="relative z-10 grid gap-6 p-6 sm:grid-cols-[220px_1fr] sm:items-center sm:p-8">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-white/5">
                <LazyVideo
                  src={next.videos[0]?.preview ?? next.videos[0]?.src ?? ""}
                  poster={next.videos[0]?.poster}
                  className="transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                  Next case study
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">
                  {next.headline}
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  {next.brand} · {next.category}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors group-hover:text-foreground">
                  View case study
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-1 block h-px w-0 bg-white/30 transition-all duration-300 group-hover:w-28" />
              </div>
            </div>
          </Link>
        )}
      </section>

      <Cta secondaryLabel="View Our Work" secondaryHref="/case-studies" />
    </div>
  );
}
