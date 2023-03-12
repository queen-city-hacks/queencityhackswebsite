import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/press-start-2p";
import "@fontsource/inter/";
// import light font inter
import "@fontsource/inter/300.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "react-notion-x/src/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import { GoogleAnalytics } from "nextjs-google-analytics";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-HEY4PGJ5FG" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
