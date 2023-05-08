const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

function prodSwitch(prod, dev) {
  return process.env.NODE_ENV === "production" ? prod : dev;
}

module.exports = withNextra({
  output: "export",
  assetPrefix: prodSwitch(
    "https://chepetime.github.io/react-design-system/",
    "/"
  ),
  basePath: prodSwitch("/react-design-system", ""),
  images: { unoptimized: true },
});
