import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable caching and performance features
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,

  // Remote image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname: "/**",
      },
    ],
  },

  // Turbopack rules for Tailwind CSS
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
