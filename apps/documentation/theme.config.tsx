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
    };
  },
};

export default config;
