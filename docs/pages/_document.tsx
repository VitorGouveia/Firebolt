import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { SkipNavLink } from "@reach/skip-nav";

export default class AppDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />

        <body>
          <SkipNavLink />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
