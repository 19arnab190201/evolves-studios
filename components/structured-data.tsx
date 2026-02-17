import { siteMetadata } from "@/lib/metadata";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteMetadata.name,
  description: siteMetadata.description,
  url: siteMetadata.url,
} as const;

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Growth & Media Agency",
  provider: {
    "@type": "Organization",
    name: siteMetadata.name,
  },
  description: siteMetadata.description,
  areaServed: "Worldwide",
} as const;

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
    </>
  );
}
