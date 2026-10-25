import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: fast, hostable anywhere (Vercel, Netlify, any static host).
  // No server, no booking, no backend — exactly what this site needs.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
