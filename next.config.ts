import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // The blog is indexed — /blog still appears in search results — but the
      // pages were removed, so those results led to a 404. A permanent
      // redirect passes the signal to the homepage and tells Google to drop
      // the old URLs rather than keep retrying them.
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
