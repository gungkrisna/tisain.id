import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TOSSection } from "@/components/TOSSection";
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import Head from "next/head";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function TOS() {
  return (
    <>
    <Head>
      <title>Terms of Service</title>
      <meta content="Terms of Service" property="og:title" />
      <meta content="https://tisain.id/images/meta-image.png" property="og:image" />
      <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." name="description" />
      <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." property="og:description" />

      <meta name="twitter:image" content="https://tisain.id/images/meta-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Terms of Service" />
      <meta name="twitter:description" content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." />

      <link href="https://tisain.id/tos" rel="canonical" />
    </Head>
      <Header />
      <main>
        <TOSSection />
      </main>
      <FloatingWhatsappButton />
      <Footer />
    </>
  )
}
