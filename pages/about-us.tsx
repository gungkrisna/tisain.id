import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import JoinUsSection from "@/components/TalentSection";
import { TemplateHero } from "@/components/TemplateHero";
import TalentSection from "@/components/TalentSection";
import { AboutUsHero } from "@/components/AboutUsHero";
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import Head from "next/head";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Tentang Tisain</title>
        <meta content="Tentang Tisain" property="og:title" />
        <meta content="https://tisain.id/images/meta-image.png" property="og:image" />
        <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." name="description" />
        <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." property="og:description" />

        <meta name="twitter:image" content="https://tisain.id/images/meta-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang Tisain" />
        <meta name="twitter:description" content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." />

        <link href="https://tisain.id/about-us" rel="canonical" />
      </Head>
      <Header />
      <main>
        <AboutUsHero />
        <TalentSection />
      </main>
      <FloatingWhatsappButton />
      <Footer />
    </>
  )
}
