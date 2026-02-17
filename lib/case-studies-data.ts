export interface CaseStudySection {
  category: string;
  title: string;
  details: string;
  link?: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  headline: string;
  summary: string;
  metrics: string[];
  challenge: string;
  solution: string;
  results: string;
  sections?: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "techflow",
    client: "TechFlow",
    headline: "12M+ Views Generated",
    summary:
      "Scaling podcast and content distribution for a B2B SaaS leader.",
    metrics: ["12M+ views", "3x podcast downloads", "40% pipeline attribution"],
    challenge:
      "TechFlow had strong product-market fit but struggled to scale top-of-funnel awareness. Their founder had a unique perspective but no systematic way to share it.",
    solution:
      "We built a full podcast production and distribution system, including content repurposing for LinkedIn, YouTube, and Twitter. We also implemented a distribution strategy that leveraged their existing community.",
    results:
      "Within 12 months, TechFlow's content generated over 12 million views. The podcast became their top attribution source for pipeline, and the founder established category authority in their space.",
  },
  {
    slug: "scaleup",
    client: "ScaleUp",
    headline: "3x Pipeline Growth",
    summary:
      "Founder brand building and content strategy that drove measurable revenue.",
    metrics: ["3x pipeline growth", "2x brand searches", "50% faster sales cycles"],
    challenge:
      "ScaleUp was competing against larger players with bigger marketing budgets. Their founder was technical and reluctant to be the face of the brand.",
    solution:
      "We developed a founder brand strategy that played to their strengths—deep technical expertise delivered in approachable formats. We focused on podcast appearances, long-form LinkedIn content, and strategic webinar partnerships.",
    results:
      "ScaleUp's pipeline tripled within 9 months. Brand search volume doubled, and sales cycles shortened by 50% as prospects arrived already familiar with the founder's perspective.",
  },
  {
    slug: "sturdie",
    client: "Sturdie",
    headline: "Strengthen Your Strategy",
    summary:
      "How we helped Sturdie scale marketing and sales with content-driven growth.",
    metrics: ["2x engagement", "40% faster onboarding", "60% cost reduction"],
    challenge:
      "Sturdie needed to scale their marketing and sales operations while maintaining quality.",
    solution:
      "We implemented a comprehensive content and distribution strategy.",
    results:
      "Sturdie achieved significant improvements in engagement and operational efficiency.",
    sections: [
      {
        category: "Marketing and Sales",
        title: "Content-driven lead generation",
        details:
          "We built a content engine that generates qualified leads. Podcast clips, LinkedIn posts, and email sequences—all feeding a single pipeline with measurable attribution.",
        link: "/contact",
      },
      {
        category: "Podcast Production",
        title: "Full-service show from concept to distribution",
        details:
          "Format development, recording, editing, and publishing. We handled the entire production pipeline so the founder could focus on conversations, not logistics.",
        link: "/contact",
      },
      {
        category: "Content Repurposing",
        title: "One episode, dozens of assets",
        details:
          "Each podcast episode became clips for YouTube, LinkedIn, Twitter, and email. We built the systems and workflows so content works harder across every channel.",
        link: "/contact",
      },
      {
        category: "Founder Brand Building",
        title: "Positioned as the category authority",
        details:
          "Strategic framework for long-form LinkedIn content, podcast appearances, and webinar partnerships. The founder went from unknown to go-to expert in 9 months.",
        link: "/contact",
      },
      {
        category: "Distribution Strategy",
        title: "Data-driven reach and engagement",
        details:
          "We analyzed where their audience spends time and built repeatable systems—owned channels, partnerships, and paid amplification—for consistent distribution.",
        link: "/contact",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
