import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from '@/components/Hero';
import { FooterCTABlock } from "@/components/FooterCTASection";
import { DeadlineCTABlock } from "@/components/DeadlineCTASection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { WhyUsSection } from '@/components/WhyUsSection';
import { TestimonialSection } from "@/components/TestimonialSection";
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import Head from 'next/head';

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Jasa Desain Presentasi, Pengetikan, dan Event Organizer Profesional | Tisain</title>
        <meta content="Jasa Desain Presentasi, Pengetikan, dan Event Organizer Profesional | Tisain" property="og:title" />
        <meta content="https://tisain.id/images/meta-image.png" property="og:image" />
        <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." name="description" />
        <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." property="og:description" />

        <meta name="twitter:image" content="https://tisain.id/images/meta-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jasa Desain Presentasi, Pengetikan, dan Event Organizer Profesional | Tisain" />
        <meta name="twitter:description" content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." />

        <link href="https://tisain.id/" rel="canonical" />
      </Head>
      <Header />
      <main>
        <Hero />
        <ComparisonSection />
        <WhyUsSection />
        <DeadlineCTABlock />
        <TestimonialSection />
      </main>
      <FloatingWhatsappButton />
      <FooterCTABlock>
        Let&apos;s Making<br />Something Great.
      </FooterCTABlock>
      <Footer />
    </>
  )
}
