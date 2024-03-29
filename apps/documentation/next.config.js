const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

function prodSwitch(prod, dev) {
  return process.env.NODE_ENV === "production" ? prod : dev;
}

module.exports = withNextra({
  output: "export",
  images: { unoptimized: true },
});
