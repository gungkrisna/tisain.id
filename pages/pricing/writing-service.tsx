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

const writingPricingOptions: Package[] = [
    {
        isPopular: false,
        name: 'Mini',
        price: 2.5,
        features: [
            'Pengerjaan 7 hari',
            'Tanpa minimal order',
            '1x revisi',
        ],
    },
    {
        isPopular: true,
        name: 'Pro',
        price: 3.5,
        features: [
            'Pengerjaan 3 hari',
            'Tanpa minimal order',
            '3x revisi',
            'Cloud backup',
        ],
    },
    {
        isPopular: false,
        name: 'Business',
        price: 7,
        features: [
            'Pengerjaan 24 jam',
            'Tanpa minimal order',
            'Revisi unlimited',
            'Cloud backup',
        ],
    },
];

export default function WritingService() {
    const router = useRouter();
    const { service } = router.query;

    return (
        <>
            <Head>
                <title>Harga Jasa Pengetikan Tisain</title>
                <meta content="Harga Jasa Pengetikan Tisain" property="og:title" />
                <meta content="https://tisain.id/images/meta-image.png" property="og:image" />
                <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." name="description" />
                <meta content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." property="og:description" />

                <meta name="twitter:image" content="https://tisain.id/images/meta-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Harga Jasa Pengetikan Tisain" />
                <meta name="twitter:description" content="Tisain merupakan professional design agency on-demand yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda." />

                <link href="https://tisain.id/pricing/writing-service" rel="canonical" />
            </Head>
            <Header />
            <main>
                <PricingSection
                    title="Jasa Pengetikan"
                    description="Tuangkan ide Anda melalui sentuhan profesional Tisain."
                    pricingOptions={writingPricingOptions}
                    pricingDescription="Per lembar" />
            </main>
            <FloatingWhatsappButton />
            <FooterCTABlock>
                Konsultasi gratis dengan profesional, sekarang.
            </FooterCTABlock>
            <Footer />
        </>

    )
}
