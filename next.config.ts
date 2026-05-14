import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static export (GitHub Pages has no Node server)
  output: "export",

  // TODO: If your repo is a *project* site (github.com/<user>/<repo>),
  //       uncomment and set these two lines to your repository name:
  // basePath: "/<your-repo-name>",
  // assetPrefix: "/<your-repo-name>/",

  // next/image optimization is not supported with static export
  images: { unoptimized: true },

  // Ensures each route produces an index.html — needed for GH Pages routing
  trailingSlash: true,
};

export default nextConfig;
