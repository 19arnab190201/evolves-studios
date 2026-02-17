import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Insights on podcast production, content strategy, founder branding, and growth for SaaS companies.",
  path: "/blog",
});

export const revalidate = 3600;

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Blog
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Insights on podcast production, content strategy, and founder branding.
        </p>
        <div className="mt-16 space-y-6">
          {posts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <CardTitle className="text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-muted-foreground transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
