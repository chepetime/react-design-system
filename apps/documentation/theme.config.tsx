import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>React Design System</span>,
  project: {
    link: "https://github.com/chepetime/react-design-system",
  },
  chat: {
    link: "https://discord.gg/34XAxadpYp",
  },
  docsRepositoryBase:
    "https://github.com/chepetime/react-design-system/blob/main/apps/documentation/",
  footer: {
    text: "React Design System",
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
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
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
};

export default config;
