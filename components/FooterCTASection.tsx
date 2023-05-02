import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { RxCheck } from "react-icons/rx"; import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const images = [
    "/images/templates/1001.jpg",
    "/images/templates/1002.jpg",
    "/images/templates/1003.jpg",
    "/images/templates/1004.jpg",
    "/images/templates/1005.jpg",
    "/images/templates/1006.jpg",
    "/images/templates/1007.jpg",
    "/images/templates/1008.jpg",
    "/images/templates/1009.jpg",
    "/images/templates/1010.jpg",
    "/images/templates/1011.jpg",
    "/images/templates/1012.jpg",
    "/images/templates/1013.jpg",
    "/images/templates/1014.jpg",
    "/images/templates/1015.jpg",
    "/images/templates/1016.jpg",
    "/images/templates/1017.jpg",
    "/images/templates/1018.jpg",
    "/images/templates/1019.jpg",
    "/images/templates/1020.jpg",
    "/images/templates/1021.jpg",
    "/images/templates/1022.jpg",
    "/images/templates/1023.jpg",
    "/images/templates/1024.jpg",
    "/images/templates/1025.jpg",
    "/images/templates/1026.jpg",
    "/images/templates/1027.jpg",
    "/images/templates/1028.jpg",
    "/images/templates/1029.jpg",
    "/images/templates/1030.jpg",
];

const highlightedFeatures = [
    "Pengerjaan Cepat",
    "Harga Terjangkau",
    "Bonus dan Diskon Menarik",
    "Konsultasi Gratis",
    "Jaminan Uang Kembali*",
];

export const FooterCTABlock = () => {
        const [slide, setSlide] = useState(1);

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
                            <div className="w-full text-center font-strong">
                                WhatsApp Tisain.id
                            </div>
                        </Button>
                    </div>
                    <Marquee
                        className="mt-16"
                        speed={30}
                        gradient={true}
                        gradientColor={[44, 115, 165]}
                    >
                        {highlightedFeatures.concat(highlightedFeatures).map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center font-strong text-medium text-lg md:text-cta-gradient mx-4"
                            >
                                <RxCheck size="30" strokeWidth="0.5" className="mr-4 text-white/80" />
                                <span className="text-white/80 md:text-cta-gradient">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </Marquee>

                    <div className="relative">
                        <Image
                            className="mt-6 border-[0.25rem] border-white/25 border-solid border-b-0 rounded-t-2xl w-full h-auto"
                            width="0"
                            height="0"
                            sizes="100vw"
                            src={"/images/vector/slides_bg.png"}
                            alt="CTA slide image"
                            priority
                        />

                        <CarouselProvider
                            totalSlides={images.length}
                            visibleSlides={1}
                            step={1}
                            currentSlide={slide}
                            naturalSlideWidth={1920}
                            naturalSlideHeight={1080}
                            isPlaying={true}
                            infinite={true}
                            dragEnabled={false}
                            touchEnabled={false}
                            interval={2000}
                            className="mt-6 absolute transform -translate-y-[79%] sm:-translate-y-[76%] pl-[0.25rem] pr-[0.25em] w-full h-full "

                        >
                            <Slider className="px-[10%] sm:px-[15%]">
                                {images.map((image, index) => (
                                    <Slide index={index} key={index}>
                                        <Image
                                            className="w-[calc(100%-10px)] h-[calc(100%-20px)] md:w-[calc(100%-20px)] md:h-[calc(100%-10px)] mx-auto border-[0.05rem] md:border-[0.25rem] border-black/10 border-solid rounded-md md:rounded-2xl"
                                            width={1920}
                                            height={1080}
                                            src={image}
                                            alt={`Presentation ${index}`}
                                            priority
                                        />
                                    </Slide>
                                ))}
                            </Slider>
                        </CarouselProvider>
                    </div>
                </Container>
            </section>
        );
    };
