import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { OrderForm } from "@/components/OrderForm";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function Pricing() {
  return (
    <>
      <Header />
      <main>
        <OrderForm />
      </main>
      <FooterCTABlock>
        Konsultasi gratis dengan profesional, sekarang.
      </FooterCTABlock>
      <Footer />
    </>
  )
}
