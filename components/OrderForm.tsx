import { Container } from "./Container"
import { HiOutlineCheckCircle } from "react-icons/hi"
import { Button } from "./Button";

type Package = {
    isPopular: boolean;
    name: string;
    price: number;
    features: string[];
};

const pricingOptions: Package[] = [
    {
        isPopular: false,
        name: 'Mini',
        price: 100,
        features: [
            '1x revisi',
            'Pilihan template yang menarik',
        ]
    },
    {
        isPopular: false,
        name: 'Basic',
        price: 200,
        features: [
            '2x revisi',
            'Pilihan template yang menarik',
            'Kustomisasi dengan warna dari brand Anda',
        ]
    },
    {
        isPopular: true,
        name: 'Pro',
        price: 300,
        features: [
            '5x revisi',
            'Pilihan template yang menarik',
            'Kustomisasi dengan warna dari brand Anda',
        ]
    },
    {
        isPopular: false,
        name: 'Business',
        price: 400,
        features: [
            'Revisi unlimited',
            'Layanan konsultasi prioritas Tisain',
            'Kustomisasi penuh sesuai keinginan Anda',
        ]
    }
];

export const OrderForm = () => {
    return (
        <section id="section-pricing" className='bg-white h-auto'>
            <div className="max-w-[120rem] mx-auto flex-col justify-between items-center py-navigation-height px-8 divide-x">
                    <div className="flex flex-col md:w-[70vw]">
                        <h1 className="font-nunito font-bold text-[32px] text-zinc">Pilih layanan yang Anda inginkan</h1>
                        <ol className="flex flex-col list-decimal gap-8 mt-[40px] text-[18px] text-[#222D39] font-nunino font-regular">
                            <li>Bantuan apa yang Anda butuhkan untuk presentasi Anda<span className="text-[#E95F72]">*</span></li>
                            <li>Konsep desain mana yang Anda inginkan?<span className="text-[#E95F72]">*</span></li>
                            <li>Masukkan deadline Anda</li>
                            <li>Unggah file draft atau materi presentasi Anda (Opsional)</li>
                            <li>Jelaskan tentang proyek yang Anda inginkan</li>
                        </ol>
                    </div>
                    <div className="flex md:w-[30vw]">
                    </div>
            </div>
        </section>
    )
}
