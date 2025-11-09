// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Keep the static export setting
  output: "export",

  // 2. Resolve the Image Optimization Error
  // This disables the built-in image optimization API,
  // which is incompatible with static export.
  images: {
    unoptimized: true,
  },

  experimental: {
    typedRoutes: true,
  },

  // 3. REMOVE the complex webpack hack.
  // Instead, the fix for the manifest error (Error: export const dynamic = "force-static")
  // must be applied directly in the manifest route file itself:
  // `app/manifest.webmanifest/route.js`.

  // You can safely remove the entire 'webpack' block:
  /*
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push({
      "./app/manifest.webmanifest/route": "{}",
    });
    return config;
  },
  */
};

export default nextConfig;
