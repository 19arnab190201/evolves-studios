import type { Metadata } from "next";

// Must match the host that actually serves the site. evolvesstudios.com
// 307-redirects to www, so pointing canonicals, OG urls and the sitemap at the
// bare domain made every one of them a redirect to somewhere else.
const baseUrl = "https://www.evolvesstudios.com";

interface PageMetadataParams {
  title: string;
  description: string;
  path?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
}: PageMetadataParams): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Evolves Studios",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export const siteMetadata = {
  name: "Evolves Studios",
  description:
    "Commercial production studio for consumer product brands. 3D commercials, photoreal product renders, video production, brand visuals and media strategy.",
  url: baseUrl,
} as const;
