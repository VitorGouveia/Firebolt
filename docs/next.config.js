const withNextra = require("nextra");

const projectName = "Firebolt";

/** @type {import('next').NextConfig} */
const config = {
  typescript: true,

  basePath: `/${projectName}`,
  assetPrefix: `/${projectName}/`,
  // amp: true,
  images: {
    loader: "custom",
  },
};

module.exports = withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,

  ...config,
});
