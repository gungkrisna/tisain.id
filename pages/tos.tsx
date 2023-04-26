import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TOSSection } from "@/components/TOSSection";

export async function getStaticProps() {
  return { props: { bgColor: "bg-background" } };
}

export default function TOS() {
  return (
    <>
      <Header />
      <main>
        <TOSSection />
      </main>
      <Footer />
    </>
  )
}
