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

export const PricingSection = () => {
    return (
        <section id="section-pricing" className='bg-white h-auto'>
            <div className="max-w-[120rem] mx-auto flex-row justify-between items-center py-navigation-height px-8">

                <div className="flex flex-col">
                    <h2 className="font-raleway text-zinc text-8xl leading-tight text-center mt-3">Pricing</h2>
                    <div className="font-regular text-gray-600 text-center text-lg md:text-xl leading-[3.2rem] pt-6">
                        <p className="hidden sm:block">Buat audiens Anda terkesan dengan presentasi yang memukau.</p>
                        <p>Pilih paket sesuai kebutuhan dan anggaran Anda.</p>
                    </div>
                </div>

                <div className="flex w-full mt-16 justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {pricingOptions.map((plan) => (
                            <div
                                key={plan.name}
                                className={`flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xl  ${plan.isPopular && 'border-tisain'}`}
                            >
                                <div className="px-6 py-8">
                                    <div className="flex gap-2 justify-between align-middle relative">

                                        <h3 className="text-lg font-raleway text-black">{plan.name}</h3>
                                        {plan.isPopular && (
                                            <div className="bg-tisain w-auto h-auto rounded-xl py-1 px-2">
                                                <p className="font-reguler text-xs text-white">Paling populer</p>
                                            </div>
                                        )
                                        }
                                    </div>

                                    <div className="my-8 flex gap-2">
                                        <span className="text-4xl font-strong text-gray-900 leading-none">
                                            Rp. {plan.price}K
                                        </span>
                                        <span className="flex-column ">
                                            <div className=" text-gray-600">Per project</div>
                                            <div className=" text-gray-600">Per 10 slides</div>
                                        </span>
                                    </div>
                                    {plan.features.map((feature, index) => (
                                        <div className="my-4 flex gap-2" key={index}>
                                            <span>
                                                <HiOutlineCheckCircle size={15} />
                                            </span>
                                            <p className="text-gray-600 text-sm first-line:leading-none">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <Button href="#" variant="pricing" className={`${plan.isPopular && 'bg-tisain'}`} size="large">
                                        <div className="font-raleway w-full text-center">Pilih Paket</div>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
