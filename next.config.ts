import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "lexnova-consultoria-legal";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repoName}` : "",
  assetPrefix: isGitHubActions ? `/${repoName}/` : "",
};

export default nextConfig;
