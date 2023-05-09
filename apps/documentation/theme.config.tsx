import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>React Desgn System</span>,
  project: {
    link: "https://github.com/chepetime/react-design-system",
  },
  chat: {
    link: "https://discord.gg/34XAxadpYp",
  },
  docsRepositoryBase:
    "https://github.com/chepetime/react-design-system/apps/documentation/pages",
  footer: {
    text: "React Design System",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – React Design System",
      description: "A Design System built with React by José Lugo, @chepe",
    };
  },
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://chepetime.github.io/react-design-system/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://chepetime.github.io/react-design-system/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://chepetime.github.io/react-design-system/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://chepetime.github.io/react-design-system/site.webmanifest"
      />
    </>
  ),
};

export default config;
