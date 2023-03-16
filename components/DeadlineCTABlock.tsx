import { Container } from "./Container";
import { Hero, HeroTitle } from "./Hero";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { ImageGrid } from "./ImageGrid";
import { Button } from "./Button";

export const DeadlineCTABlock = () => {
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


    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[{
                    children: <ImageGrid images={images} />, speed: -15
                },

                ]}
                className="aspect-[2/1] h-screen"
            >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Hero>
                        <HeroTitle className="font-strong text-deadline-cta-gradient text-5xl pointer-events-auto">
                            Terkendala deadline?
                            <br />
                            Hubungi kami <br />— hemat waktu,
                            <br />
                            capai tujuan.
                        </HeroTitle>

                        <div className="pointer-events-auto">
                            <Button href="#" variant="whatsapp-cta" size="xlarge">
                                <div className="w-full text-center font-strong">WhatsApp Tisain.id</div>
                            </Button>
                        </div>

                    </Hero>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
    );
};
