const withNextra = require("nextra");

/** @type {import('next').NextConfig} */
const config = {
  typescript: true,
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
