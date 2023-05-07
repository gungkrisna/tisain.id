import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import JoinUsSection from "@/components/FreelanceSection";
import { TemplateHero } from "@/components/TemplateHero";
import FreelanceSection from "@/components/FreelanceSection";
import { AboutUsHero } from "@/components/AboutUsHero";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <AboutUsHero />
        <FreelanceSection />
      </main>
      <Footer />
    </>
  )
}
