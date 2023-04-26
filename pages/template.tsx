import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { TemplateHero } from "@/components/TemplateHero";
import { TemplateHighlight } from "@/components/TemplateHighlight";

export async function getStaticProps() {
    return { props: { bgColor: "bg-black" } };
}

export default function Template() {
    return (
        <>
            <Header bgColor="bg-[#121212]/60" />
            <main>
                <TemplateHero />
                <TemplateHighlight />
            </main>
            <FooterCTABlock />
            <Footer />
        </>
    )
}
