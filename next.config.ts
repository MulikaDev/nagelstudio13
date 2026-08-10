import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/nagelstudio13",
  assetPrefix: "/nagelstudio13/",
};

export default nextConfig;
