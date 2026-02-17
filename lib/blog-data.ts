export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-founder-brand-through-podcasting",
    title: "Building a Founder Brand Through Podcasting",
    description:
      "How podcasting can establish founders as thought leaders in their industry.",
    date: "2025-01-15",
    author: "Evolves Studios",
    content: `
      <p>Podcasting has become one of the most effective channels for founders to build authority and connect with their audience. Unlike other content formats, podcasts allow for depth and personality that written content cannot match.</p>
      
      <p>At Evolves Studios, we've helped dozens of founders launch and scale their podcasts. The key is consistency, quality production, and a clear distribution strategy.</p>
      
      <p>Start with your unique perspective. What do you know that others don't? What conversations would benefit your audience? Answer these questions and you have the foundation for a compelling show.</p>
    `,
  },
  {
    slug: "content-repurposing-strategy",
    title: "The Content Repurposing Strategy That 10x Your Reach",
    description:
      "Transform one piece of content into a multi-platform distribution engine.",
    date: "2025-01-10",
    author: "Evolves Studios",
    content: `
      <p>One long-form piece of content can become dozens of assets across platforms. The trick is having a system.</p>
      
      <p>We recommend starting with your highest-performing content format—whether that's podcast episodes, webinar recordings, or long-form articles. From there, extract quotes, clips, and key insights for each platform.</p>
      
      <p>YouTube Shorts, LinkedIn posts, Twitter threads, and email newsletters all have different formats. Design your repurposing pipeline to feed each channel with native-format content.</p>
    `,
  },
  {
    slug: "distribution-over-production",
    title: "Why Distribution Beats Production",
    description:
      "The best content means nothing without a distribution strategy.",
    date: "2025-01-05",
    author: "Evolves Studios",
    content: `
      <p>Most brands overinvest in content production and underinvest in distribution. The result? Great content that nobody sees.</p>
      
      <p>Distribution strategy starts with understanding where your audience already spends time. Then, you need a repeatable system to get your content in front of them—whether through owned channels, partnerships, or paid amplification.</p>
      
      <p>Build distribution into your content calendar from day one. Every piece of content should have a distribution plan before production begins.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
