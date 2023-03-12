import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero, HeroSubtitle, HeroTitle } from '@/components/Hero';
import { FooterCTABlock } from "@/components/FooterCTABlock";
import { DeadlineCTABlock } from "@/components/DeadlineCTABlock";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <main className="pt-navigation-height">
          <Container>
            <Hero>
              <HeroTitle>
                Presentasi profesional,<br />
                sesuai kebutuhan
              </HeroTitle>
              <HeroSubtitle>
                Hemat waktu dan capai tujuan bersama Tisain. <br />
                Kami membantu pembuatan slide presentasi profesional secara tepat waktu, sesuai kebutuhan dan anggaran proyek Anda. 
              </HeroSubtitle>
              <img className="rounded-md" src="/images/google-slide.png" alt="Hero image"/>
            </Hero>
          </Container>
          <DeadlineCTABlock />
        </main>
        <FooterCTABlock />
        <Footer />
      </div>
    </>
  )
}
