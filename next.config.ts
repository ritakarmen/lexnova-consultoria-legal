import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "lexnova-consultoria-legallexnova-consultoria-legal";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repoName}` : "",
  assetPrefix: isGitHubActions ? `/${repoName}/` : "",
};

export default nextConfig;
