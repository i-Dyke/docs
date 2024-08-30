import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>K-Scale Labs Docs</span>,
  project: {
    link: "https://github.com/kscalelabs/docs",
  },
  chat: {
    link: "https://discord.gg/kscale",
  },
  docsRepositoryBase: "https://github.com/kscalelabs/docs/tree/master/",
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1, 
  },
  footer: {
    text: "K-Scale Labs Documentation",
  },
};

export default config;
