import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/sitemap-0.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "milliyin.dev",
          },
        ],
        destination: "https://www.milliyin.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
