import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/seahorse-comprof-v1.2',
  assetPrefix: '/seahorse-comprof-v1.2/'
};

export default nextConfig;