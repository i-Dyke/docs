import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

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
  useNextSeoProps() {
    return {
      titleTemplate: '%s - K-Scale Labs'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://docs.kscale.dev' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title?.replace(/ ?[-–—] ?Nextra/g, '') || 'K-Scale Labs Docs'} />
        <meta property="og:description" content={frontMatter.description || 'K-Scale open source humanoid building guide'} />
      </>
    );
  }
};

export default config;
