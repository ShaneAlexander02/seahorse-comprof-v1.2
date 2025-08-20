import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "seahorse-comprof-v1.2";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};

// export default nextConfig;

// const isProd = process.env.NODE_ENV === "production";
// const repo = "seahorse-comprof-v1.2";

// const nextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: { unoptimized: true },
//   basePath: isProd ? `/${repo}` : undefined,
//   assetPrefix: isProd ? `/${repo}/` : undefined,

//   env: {
//     NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
//   },
// };

// export default nextConfig;
