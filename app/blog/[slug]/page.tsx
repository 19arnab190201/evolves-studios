import { notFound } from "next/navigation";
import Link from "next/link";

import {
  getBlogPost,
  getAllBlogPosts,
} from "@/lib/blog-data";
import { generatePageMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export const revalidate = 3600;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Blog
        </Link>
        <time
          dateTime={post.date}
          className="mt-6 block text-sm text-muted-foreground"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">By {post.author}</p>
        <div
          className="prose prose-neutral dark:prose-invert mt-12 max-w-none text-muted-foreground prose-p:mt-4 prose-p:leading-7"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-16">
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
