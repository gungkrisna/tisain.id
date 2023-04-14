import { Container } from "./Container";
import { Button } from "./Button";
import Marquee from "react-fast-marquee";
import Image from "next/image"

export const TemplateHero = () => {
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
    ];

    // Shuffle the images array
    const shuffledImages = images.sort(() => Math.random() - 0.5);

    // Determine the number of images per array
    const imagesPerArray = Math.ceil(shuffledImages.length / 3);

    // Divide the shuffledImages into three arrays
    const dividedImages = [
        shuffledImages.slice(0, imagesPerArray),
        shuffledImages.slice(imagesPerArray, imagesPerArray * 2),
        shuffledImages.slice(imagesPerArray * 2)
    ];

    return (
        <section id="section-template-hero" className="bg-[#121212]" data-color="bg-[#121212]/60">
            <Container>
                <div className="relative">
                    <div className="flex justify-end">
                        <div className="flex flex-col overflow-hidden">
                            <div>
                                {dividedImages.map((images, index) => (
                                    <Marquee key={index} className="my-4" speed={index === 1 ? 5 : 10} gradient={true} gradientColor={[16, 16, 16]}>
                                        {images.map((image, index) => (

                                            <Image
                                                key={index}
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="mx-2 max-w-[30rem] max-h-[30rem]"
                                                src={image}
                                                alt={`Template ${index + 1}`}
                                            />
                                        ))}
                                        {images.map((image, index) => (

                                            <Image
                                                key={index}
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="mx-2 max-w-[30rem] max-h-[30rem]"
                                                src={image}
                                                alt={`Template ${index + 1}`}
                                            />))}
                                    </Marquee>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-10 flex flex-col items-start justify-center bg-gradient-to-r from-[#121212] via-[#121212]">
                        <h1 className="mt-8 font-strong text-deadline-cta-gradient text-4xl md:text-8xl">
                            Jelajahi<br />Template Tisain
                        </h1>
                        <p className="my-8 text-white text-2xl max-w-[80rem]">
                            Temukan desain template pilihan dari Tisain yang cocok untuk kebutuhan proyek Anda.<br />
                        </p>

                        <div className="flex justify-start">
                            <Button href="#" variant="get-started-light" size="large">
                                <div className="w-full text-center font-strong">Jelajahi</div>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    );
};
