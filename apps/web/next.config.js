/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@chepe/ui"],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
