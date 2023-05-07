import { Container } from "./Container";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import SearchField from "./SearchField";
import { Link, animateScroll as scroll } from 'react-scroll';

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
                        <div className="flex flex-col overflow-hidden gap-0 whitespace-nowrap">
                            {dividedImages.map((images, index) => (
                                <Marquee key={index} speed={index === 1 ? 5 : 10} gradient={true} gradientColor={[16, 16, 16]}>
                                    {images.map((image, index) => (
                                        <div key={index} className="m-2 max-w-[30rem] max-h-[30rem]">
                                            <Image src={image} alt={`Template ${index + 1}`} width={1000} height={1000} priority />
                                        </div>
                                    ))}
                                    {images.map((image, index) => (
                                        <div key={index} className="m-2 max-w-[30rem] max-h-[30rem]">
                                            <Image src={image} alt={`Template ${index + 1}`} width={1000} height={1000} priority />
                                        </div>
                                    ))}
                                </Marquee>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 z-10 flex flex-col items-start justify-center bg-gradient-to-r from-[#121212] via-[#121212]">
                        <h1 className="mt-8 font-strong text-deadline-cta-gradient text-4xl md:text-8xl">
                            Jelajahi<br />Template Tisain
                        </h1>
                        <p className="my-8 text-white text-2xl max-w-[80rem]">
                            Temukan desain template pilihan dari Tisain yang cocok untuk kebutuhan proyek Anda.<br />
                        </p>

                        <div className="flex mt-4 w-full flex-col md:flex-row justify-center md:justify-start gap-24 md:gap-4">
                            <SearchField placeholder="Cari template" />
                            <Link to="section-template-highlight" className="flex items-center justify-center md:justify-start gap-1 text-md text-white hover:underline hover:cursor-pointer"
                                 spy={false} smooth={true} duration={500} >
                                <span>Tampilkan semua</span>
                                <span>
                                    <AiOutlineArrowDown />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </Container>

        </section>
    )
}