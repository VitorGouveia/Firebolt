import { AppProps } from "next/app";

import "../styles/global.css";
import "nextra-theme-docs/style.css";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
