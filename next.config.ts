import type { NextConfig } from "next";

// GitHub Pages project site: https://<user>.github.io/RSBs-Profile/
// PAGES_BASE_PATH is set to "/RSBs-Profile" in the deploy workflow.
// Local dev stays at root when the env var is absent.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
