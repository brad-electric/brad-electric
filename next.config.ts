import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cijenik",
        destination: "/cjenik",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
