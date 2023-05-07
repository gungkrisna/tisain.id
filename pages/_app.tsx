import "@/styles/globals.css";
import { Montserrat, Nunito_Sans } from "next/font/google"
import localFont from '@next/font/local'
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat"
})

const gtWalsheim = localFont({
  src: '../public/fonts/GT-Walsheim-Bold.ttf',
  variable: '--font-gt-walsheim'
})

const raleway = localFont({
  src: '../public/fonts/Raleway-ExtraBold.ttf',
  variable: '--font-raleway'
})

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ['latin'],
  variable: "--font-nunito"
})

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
      <main className={`${gtWalsheim.variable} ${raleway.variable} ${montserrat.variable} ${nunito.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
