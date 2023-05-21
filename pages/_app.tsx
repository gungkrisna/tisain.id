import "@/styles/globals.css";
import { Montserrat, Nunito_Sans } from "next/font/google"
import localFont from '@next/font/local'
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Analytics } from '@vercel/analytics/react'

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
        <meta content="id_ID" property="og:locale" />
        <meta content="Tisain" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content="https://tisain.id/" property="og:url" />
        <meta content="https://tisain.id/templates" property="og:see_also" />
        <meta content="https://api.whatsapp.com/send/?phone=%2B62881038352544&text=Halo%2C+saya+mau+tanya+mengenai+layanan+Tisain." property="og:see_also" />
        <meta content="https://www.instagram.com/tisain.id_/" property="og:see_also" />
        <meta name="robots" content="index,follow" />
        <link href="https://tisain.id/" rel="home" />
        <link type="text/plain" href="https://tisain.id/humans.txt" rel="author" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2972a7" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#2972a7"></meta>
      </Head>
      <main className={`${gtWalsheim.variable} ${raleway.variable} ${montserrat.variable} ${nunito.variable}`}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
