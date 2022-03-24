const withNextra = require("nextra");

const isGithubPages = process.env.GH_PAGES === "true";
const projectName = "Firebolt";

/** @type {import('next').NextConfig} */
const config = {
  typescript: true,

  basePath: isGithubPages ? `/${projectName}` : "",
  assetPrefix: isGithubPages ? `/${projectName}/` : "",
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
