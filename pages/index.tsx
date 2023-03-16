import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';
import { FooterCTABlock } from "@/components/FooterCTABlock";
import { DeadlineCTABlock } from "@/components/DeadlineCTABlock";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-navigation-height">
        <Container>
          <Hero>
            <HeroTitle>
              Presentasi profesional,<br />
              sesuai kebutuhan.
            </HeroTitle>
            <HeroSubtitle>
              <span className="hidden md:block">Hemat waktu dan capai tujuan bersama Tisain. <br /></span>
              Kami membantu pembuatan slide presentasi profesional secara tepat waktu, sesuai kebutuhan dan anggaran proyek Anda.
            </HeroSubtitle>
            <Image className="rounded-md w-full h-auto" width="0" height="0" sizes="100vw" src="/images/templates/1088.jpg" alt="Hero image" />
          </Hero>
        </Container>
        <DeadlineCTABlock />
      </main>
      <FooterCTABlock />
      <Footer />
    </>
  )
}
