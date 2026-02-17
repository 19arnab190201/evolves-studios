import type { Metadata } from "next";

const baseUrl = "https://evolvesstudios.com";

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
    "Growth & Media Agency for Founders and SaaS Companies. We build media that scales modern brands.",
  url: baseUrl,
} as const;
