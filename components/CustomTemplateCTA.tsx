import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

interface CustomTemplateCTAProps {
    className?: string;
}

const CustomTemplateCTA = ({ className }: CustomTemplateCTAProps) => {
    return (
        <section id="section-custom-template-cta" className={  `bg-background ${className}` }>
            <Container className="py-16 drop-shadow-2xl">
                <div className="relative bg-gradient-to-r from-[#313131] to-tisain rounded-3xl pt-16 pb-0 lg:py-20 overflow-hidden">
                    <div className="px-8 mx-auto lg:px-12">
                        <div className="gap-y-12 gap-x-16 xl:gap-x-20">
                            <div className="flex flex-col justify-start lg:max-w-[50%]">
                                <div>
                                    <h1 className="text-4xl font-bold text-white sm:text-5xl leading-[4.5rem]">
                                        Butuh custom template?
                                    </h1>
                                    <p className="mt-6 text-md font-normal font-regular text-white text-opacity-80 lg:max-w-[80%]">
                                        Tim kami dapat meningkatkan kualitas presentasi bisnis maupun
                                        profesional mulai dari Rp30.000,00/slide.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <div className="w-md flex gap-4">
                                        <Button
                                            href="https://wa.me/+62881038352544?text=Halo, saya tertarik dengan layanan custom desain presentasi Tisain."
                                            newTab
                                            variant="whatsapp-cta"
                                            size="large"
                                        >
                                            <div className="text-zinc font-strong">WhatsApp Tisain</div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        className="ml-auto pt-16 lg:pt-0 lg:absolute lg:bottom-0 lg:right-0"
                        src="/images/vector/custom_template.png"
                        height={252}
                        width={532}
                        alt="cta-image"
                    />
                </div>
            </Container>
        </section>
    );
};

export default CustomTemplateCTA;
