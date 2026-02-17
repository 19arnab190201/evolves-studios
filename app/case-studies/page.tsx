import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Case Studies",
  description:
    "Real results for founders and SaaS companies. See how Evolves Studios has helped brands scale through podcast production and content strategy.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Case Studies
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Real results for founders and SaaS companies building
          category-defining brands.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <Card key={study.slug}>
              <CardHeader>
                <CardDescription>{study.client}</CardDescription>
                <CardTitle className="text-2xl">{study.headline}</CardTitle>
                <CardDescription className="text-base">
                  {study.summary}
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button asChild variant="outline" size="default">
                  <Link href={`/case-studies/${study.slug}`}>
                    View Case Study
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
