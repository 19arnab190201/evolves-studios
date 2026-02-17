import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getCaseStudy,
  getAllCaseStudies,
} from "@/lib/case-studies-data";
import { generatePageMetadata } from "@/lib/metadata";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return generatePageMetadata({
    title: `${study.client} Case Study`,
    description: study.summary,
    path: `/case-studies/${slug}`,
  });
}

export const revalidate = 3600;

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  if (study.sections) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-6xl px-6 py-10">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to Case Studies
          </Link>
          <h2 className="mt-6 text-pretty text-4xl font-semibold tracking-[-0.03em] sm:mx-auto sm:max-w-xl sm:text-center md:text-[2.75rem] md:leading-[1.2]">
            {study.headline}
          </h2>
          <p className="mt-2 text-center text-lg text-muted-foreground sm:text-xl">
            {study.summary}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {study.metrics.map((metric) => (
              <Badge key={metric} variant="outline" className="px-4 py-2 text-sm">
                {metric}
              </Badge>
            ))}
          </div>
          <div className="mx-auto mt-16 w-full space-y-20 md:mt-20">
            {study.sections.map((section) => (
              <div
                className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse"
                key={section.category}
              >
                <div className="aspect-[4/3] w-full basis-1/2 shrink-0 rounded-xl border border-border/50 bg-muted" />
                <div className="shrink-0 basis-1/2">
                  <span className="text-sm font-medium uppercase text-muted-foreground">
                    {section.category}
                  </span>
                  <h4 className="my-3 text-3xl font-semibold tracking-[-0.02em]">
                    {section.title}
                  </h4>
                  <p className="text-muted-foreground">{section.details}</p>
                  {section.link && (
                    <Button asChild className="mt-6 gap-3 rounded-full" size="lg">
                      <Link href={section.link}>
                        Learn More <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <Link href="/contact">
                Book a Strategy Call <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/case-studies"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Case Studies
        </Link>
        <p className="mt-6 text-sm font-medium text-muted-foreground">
          {study.client}
        </p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          {study.headline}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">{study.summary}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {study.metrics.map((metric) => (
            <Badge key={metric} variant="outline" className="px-4 py-2 text-sm">
              {metric}
            </Badge>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-foreground">The Challenge</h2>
            <p className="mt-4 text-muted-foreground">{study.challenge}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Our Approach</h2>
            <p className="mt-4 text-muted-foreground">{study.solution}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">The Results</h2>
            <p className="mt-4 text-muted-foreground">{study.results}</p>
          </section>
        </div>
        <div className="mt-16 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
