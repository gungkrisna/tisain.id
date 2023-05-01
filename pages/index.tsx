import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from '@/components/Hero';
import { FooterCTABlock } from "@/components/FooterCTASection";
import { DeadlineCTABlock } from "@/components/DeadlineCTASection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { WhyUsSection } from '@/components/WhyUsSection';
import { TestimonialSection } from "@/components/TestimonialSection";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComparisonSection />
        <WhyUsSection />
        <DeadlineCTABlock />
        <TestimonialSection />
      </main>
      <FooterCTABlock />
      <Footer />
    </>
  )
}
