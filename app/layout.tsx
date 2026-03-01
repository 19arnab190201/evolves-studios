import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { CalendlyInit } from "@/components/calendly-init";
import { LenisProvider } from "@/components/lenis-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/structured-data";
import { siteMetadata } from "@/lib/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: `${siteMetadata.name} | Growth & Media Agency`,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.name,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.name,
    description: siteMetadata.description,
  },
  alternates: {
    canonical: siteMetadata.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <LenisProvider>
          <CalendlyInit />
          <StructuredData />
          <Navbar />
          <main className="min-h-screen text-center">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
