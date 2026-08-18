import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.thum.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
