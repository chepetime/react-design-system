const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "./" : "/",
  images: { unoptimized: true },
});
