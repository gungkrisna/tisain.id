import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import CustomTemplateCTA from "@/components/CustomTemplateCTA";
import { useRouter } from 'next/router';
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";
import Head from "next/head";

type Package = {
    isPopular: boolean;
    name: string;
    price: number;
    features: string[];
};

const templatePricingOptions: Package[] = [
    {
        isPopular: false,
        name: 'Mini',
        price: 100,
        features: [
            '1x revisi',
            'Pilihan template yang menarik',
        ],
    },
    {
        isPopular: false,
        name: 'Basic',
        price: 200,
        features: [
            '2x revisi',
            'Pilihan template yang menarik',
            'Kustomisasi dengan warna dari brand Anda',
        ],
    },
    {
        isPopular: true,
        name: 'Pro',
        price: 300,
        features: [
            '5x revisi',
            'Pilihan template yang menarik',
            'Kustomisasi dengan warna dari brand Anda',
        ],
    },
    {
        isPopular: false,
        name: 'Business',
        price: 400,
        features: [
            'Revisi unlimited',
            'Layanan konsultasi prioritas Tisain',
            'Kustomisasi penuh sesuai keinginan Anda',
        ],
    },
];
export default function PresentationDesignService() {

    return (
        <>
        <Head>
          <title>Harga Layanan Desain Presentasi Tisain</title>
          <meta content="Harga Layanan Desain Presentasi Tisain" property="og:title" />
          <meta content="https://tisain.id/images/meta-image.png" property="og:image" />
          <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." name="description" />
          <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." property="og:description" />
  
          <meta name="twitter:image" content="https://tisain.id/images/meta-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Harga Layanan Desain Presentasi Tisain" />
          <meta name="twitter:description" content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." />
  
          <link href="https://tisain.id/pricing/presentation-design-service" rel="canonical" />
        </Head>
            <Header />
            <main>
                <PricingSection
                    title="Desain Presentasi"
                    description="Buat audiens Anda terkesan dengan presentasi yang memukau."
                    pricingOptions={templatePricingOptions}
                    pricingDescription="Per 10 slides"
                    cta={<CustomTemplateCTA className="bg-transparent"/>} />
                <ComparisonSection />
            </main>
            <FloatingWhatsappButton />
            <FooterCTABlock>
                Konsultasi gratis dengan profesional, sekarang.
            </FooterCTABlock>
            <Footer />
        </>
    )
}
