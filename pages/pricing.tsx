import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <PricingSection />
        <ComparisonSection />
      </main>
      <FooterCTABlock />
      <Footer />
    </>
  )
}
