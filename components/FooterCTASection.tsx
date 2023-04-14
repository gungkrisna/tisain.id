import { Button } from "./Button"
import { Container } from "./Container"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import { RxCheck } from "react-icons/rx"

const highlightedFeatures = ["Pengerjaan Cepat", "Harga Terjangkau", "Bonus dan Diskon Menarik", "Konsultasi Gratis", "Jaminan Uang Kembali*"]

export const FooterCTABlock = () => {
    return (
        <section id="section-footer-cta" className="bg-tisain">
            <Container className="flex flex-col w-full h-full justify-center pt-[10rem]">
                <div className="text-center">
                    <div className="my-6 text-6xl md:text-8xl font-strong text-cta-gradient">
                        Konsultasi gratis dengan profesional, sekarang.
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button href="#" variant="whatsapp-cta" size="xlarge">
                        <div className="w-full text-center font-strong">WhatsApp Tisain.id</div>
                    </Button>
                </div>
                <Marquee className="mt-16" speed={30} gradient={true} gradientColor={[44, 115, 165]}>
                        {highlightedFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center font-strong text-medium text-lg md:text-2xl mx-4">
                                <div className="h-[2.2rem] md:h-[3rem]">
                                    <RxCheck size='auto' strokeWidth="0.5" className="mr-4 text-white/80" />
                                </div>
                                <span className="text-white/80 md:text-cta-gradient">
                                    {feature}
                                </span>
                            </div>
                        ))}
                </Marquee>
                <Image className="mt-6 border-[0.25rem] border-white/25 border-solid border-b-0 rounded-t-2xl w-full h-auto" width="0" height="0" sizes="100vw" src="/images/templates/1023.jpg" alt="CTA image" />
            </Container>
        </section>
    )
}