const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  latex: true,
  flexsearch: false,
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
