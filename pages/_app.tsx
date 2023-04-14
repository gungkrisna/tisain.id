import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
      document.body.className = pageProps.bgColor;
  });
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
