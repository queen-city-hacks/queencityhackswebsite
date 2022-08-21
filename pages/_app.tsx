import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/press-start-2p";
import "@fontsource/inter/";
// import light font inter
import "@fontsource/inter/300.css";
import "@fontsource/inter/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
