/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@chepe/ui"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = withTM(nextConfig);
