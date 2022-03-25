const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
});

module.exports = withNextra({
  basePath: "/Firebolt",
  assetPrefix: "/Firebolt/",

  // amp: true,
  images: {
    loader: "custom",
  },
});
