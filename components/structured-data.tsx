import { siteMetadata } from "@/lib/metadata";

/**
 * Organization markup. `alternateName` matters here because the brand is
 * routinely typed as one word or with the singular "Evolve", and Google
 * rewrites those queries toward established studios with similar names.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteMetadata.url}/#organization`,
  name: siteMetadata.name,
  alternateName: ["EvolvesStudios", "Evolves Studio", "Evolves"],
  description: siteMetadata.description,
  url: siteMetadata.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteMetadata.url}/icon.svg`,
  },
} as const;

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteMetadata.url}/#website`,
  name: siteMetadata.name,
  url: siteMetadata.url,
  publisher: { "@id": `${siteMetadata.url}/#organization` },
} as const;

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial video production and 3D product visualisation",
  provider: { "@id": `${siteMetadata.url}/#organization` },
  description: siteMetadata.description,
  areaServed: "Worldwide",
} as const;

export function StructuredData() {
  return (
    <>
      {[organizationSchema, websiteSchema, servicesSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
