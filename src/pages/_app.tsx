/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/raleway/latin.css";
import "@fontsource/montserrat/latin.css";
import "@fontsource/playfair-display/latin.css";
import Script from "next/script";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewpo`rt"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'GOOGLE_ANALYTICS_ID', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          id="other-analyitcs"
          dangerouslySetInnerHTML={{
            __html: `if(!sessionStorage.getItem("_swa") && document.referrer.indexOf(location.protocol+"//"+location.host)!== 0)
            {fetch(
              https://counter.dev/track?{new URLSearchParams({
                referrer: document.referrer,
                // eslint-disable-next-line no-restricted-globals
                screen: {screen.width}x{screen.height},
                user: "daggy1234",
                utcoffset: "6",
              })}
            )}
            ;sessionStorage.setItem("_swa","1");}
            `,
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
