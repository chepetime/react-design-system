const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

function prodSwitch(prod, dev) {
  return process.env.NODE_ENV === "production" ? prod : dev;
}

module.exports = withNextra({
  output: "export",
  assetPrefix: prodSwitch("./", "/"),
  basePath: prodSwitch("/react-design-system", ""),
  images: { unoptimized: true },
});
