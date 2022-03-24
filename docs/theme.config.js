import React from "react";

import Footer from "components/Footer";

export default {
  projectLink: "https://github.com/VitorGouveia/Firebolt", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/VitorGouveia/Firebolt/blob/master", // base URL for the docs repository
  titleSuffix: " - Firebolt 🔥",
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  // customSearch: <MyCustomSearchBar />
  darkMode: true,
  defaultMenuCollapsed: false,
  font: true,
  footer: true,
  // footerText: `MIT ${new Date().getFullYear()} © Firebolt.`,
  footerText: <Footer />,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">Firebolt 🧹</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The new web framework
      </span>
    </React.Fragment>
  ),
  head: ({ title, meta }) => (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
      {/* 
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="Nextra: the next docs builder" />
      <meta property="og:description" content="Nextra: the next docs builder" />
      <meta name="apple-mobile-web-app-title" content="Nextra" /> */}
    </React.Fragment>
  ),
  direction: "ltr",
  floatTOC: true,
};
