import { HiOutlineCheckCircle } from "react-icons/hi";
import { Button } from "./Button";

type Package = {
    isPopular: boolean;
    name: string;
    price: number;
    features: string[];
};

type PricingSectionProps = {
    title: string;
    description: string;
    pricingOptions: Package[];
    pricingDescription: string;
    cta?: React.ReactNode;
};

export const PricingSection = ({
    title,
    description,
    pricingOptions,
    pricingDescription,
    cta,
}: PricingSectionProps) => {
    return (
        <section id="section-pricing" className="bg-background h-auto">
            <div className="bg-gradient-to-t from-tisain/25 to-white py-navigation-height">
                <div className="md:max-w-[120rem] mx-auto flex-row justify-between items-center px-8">
                    <div className="flex flex-col items-center">
                        <div className="inline-block pb-4">
                            <div className="inline-block bg-gradient-to-r from-tisain/10 to-tisain/25 rounded-full py-1 px-3 md:py-2 md:px-4">
                                <p className="font-strong text-md md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-tisain/60 to-tisain">
                                    PRICING & FEATURE
                                </p>
                            </div>
                        </div>

                        <h2 className="font-raleway text-zinc text-7xl md:text-8xl leading-[1] text-center mt-3">
                            {title}
                        </h2>
                        <div className="font-regular text-gray-600 text-center text-xl leading-tight md:leading-[3.2rem] pt-6">
                            <p className="hidden sm:block">{description}</p>
                            <p>Pilih paket sesuai kebutuhan dan anggaran Anda.</p>
                        </div>
                    </div>

                    <div className="flex w-full mt-16 justify-center">
                        <div className={`grid grid-cols-1 md:grid-cols-${pricingOptions.length / 2 < 2 ? pricingOptions.length : pricingOptions.length / 2} 
                            ${pricingOptions.length == 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} w-full gap-8 md:gap-4`
                        } >
                            {pricingOptions.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xl  ${plan.isPopular && "shadow-tisain border-none"
                                        }`}
                                >
                                    <div className="px-6 py-8">
                                        <div className="flex gap-2 justify-between align-middle relative">
                                            <h3 className="text-xl font-raleway text-black">
                                                {plan.name}
                                            </h3>
                                            {plan.isPopular && (
                                                <div className="bg-gradient-to-r from-[rgb(94,159,206)] to-tisain w-auto h-auto rounded-lg py-1 px-2 drop-shadow-lg">
                                                    <p className="font-strong text-xs uppercase text-white leading-none my-1">
                                                        Paling populer
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="my-8 flex gap-2">
                                            <span className="text-4xl font-strong text-gray-900 leading-none">
                                                Rp. {plan.price}K
                                            </span>
                                            <span className="flex-column ">
                                                <div className=" text-gray-600">Per project</div>
                                                <div className=" text-gray-600">{pricingDescription}</div>
                                            </span>
                                        </div>
                                        {plan.features.map((feature, index) => (
                                            <div className="my-4 flex gap-2" key={index}>
                                                <span>
                                                    <HiOutlineCheckCircle size={15} />
                                                </span>
                                                <p className="text-gray-600 text-lg first-line:leading-none">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <Button
                                            href={`https://wa.me/+62881038352544?text=Halo, saya tertarik dengan paket ${plan.name} dari layanan ${title} Tisain.`}
                                            newTab
                                            variant="pricing"
                                            className={`${plan.isPopular && "bg-gradient-to-r from-[rgb(94,159,206)] to-tisain"} py-8 relative`}
                                            size="large"
                                        >
                                            <div className="font-raleway w-full text-center text-xl">
                                                Pilih Paket
                                            </div>
                                            <div className="absolute inset-0 bg-transparent transition-opacity duration-75 ease-in-out hover:bg-white/10"></div>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {cta}
            </div >
        </section >
    );
};
