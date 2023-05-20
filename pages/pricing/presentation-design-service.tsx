import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FooterCTABlock } from "@/components/FooterCTASection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import CustomTemplateCTA from "@/components/CustomTemplateCTA";
import { useRouter } from 'next/router';
import FloatingWhatsappButton from "@/components/FloatingWhatsAppButton";

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
