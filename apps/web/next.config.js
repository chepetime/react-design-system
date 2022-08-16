/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = withTM(nextConfig);
