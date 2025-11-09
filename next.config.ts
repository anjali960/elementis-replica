import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ enables static export for Netlify
  images: {
    unoptimized: true, // disables next/image optimization (needed for static export)
  },
};

export default nextConfig;
