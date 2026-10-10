import type { NextConfig } from "next";

/** Project Pages live at https://<user>.github.io/steelhands/ */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/steelhands" : "";

const nextConfig: NextConfig = {
  // Static HTML for GitHub Pages (and any static host).
  // cacheComponents / partialPrefetching enable PPR, which export mode rejects.
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
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
