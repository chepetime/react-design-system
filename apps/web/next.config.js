/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
