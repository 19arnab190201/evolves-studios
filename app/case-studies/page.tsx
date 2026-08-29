import Link from "next/link";

import { Cta } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/lazy-video";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllProjects } from "@/lib/projects-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Case Studies",
  description:
    "Commercial product films for consumer brands — beverages, consumer electronics, supplements and lifestyle. See the work Evolves Studios has produced for Prime, boAt, Nike, Bliss and more.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Case Studies
        </h1>
        {/* No mx-auto: it centred this block inside the wider container and
            pushed it out of line with the left-aligned heading. */}
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Commercial films for consumer brands — beverages, consumer
          electronics, supplements and lifestyle. Every spot is built to launch
          a product and make people want it.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="overflow-hidden pt-0">
              {project.videos[0] && (
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="group block aspect-video w-full overflow-hidden bg-white/5"
                >
                  <LazyVideo
                    src={project.videos[0].preview ?? project.videos[0].src}
                    poster={project.videos[0].poster}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              )}
              <CardHeader>
                <CardDescription>{project.brand} · {project.category}</CardDescription>
                <CardTitle className="text-2xl">{project.headline}</CardTitle>
                <CardDescription className="text-base">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" size="default">
                  <Link href={`/case-studies/${project.slug}`}>
                    View Case Study
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>

      {/* Shared closing CTA. "View Our Work" would point at this very page, so
          the secondary action sends a brief instead. */}
      <Cta secondaryLabel="Send a Brief" secondaryHref="/contact" />
    </div>
  );
}
