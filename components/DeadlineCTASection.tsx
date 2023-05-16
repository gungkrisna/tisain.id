import { Container } from "./Container";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { ImageGrid } from "./ImageGrid";
import { Button } from "./Button";

export const DeadlineCTABlock = () => {
    const images = [
        "/images/templates/highlighted/1001.jpg",
        "/images/templates/highlighted/1002.jpg",
        "/images/templates/highlighted/1003.jpg",
        "/images/templates/highlighted/1004.jpg",
        "/images/templates/highlighted/1005.jpg",
        "/images/templates/highlighted/1006.jpg",
        "/images/templates/highlighted/1007.jpg",
        "/images/templates/highlighted/1008.jpg",
        "/images/templates/highlighted/1009.jpg",
        "/images/templates/highlighted/1010.jpg",
        "/images/templates/highlighted/1011.jpg",
        "/images/templates/highlighted/1012.jpg",
        "/images/templates/highlighted/1013.jpg",
        "/images/templates/highlighted/1014.jpg",
        "/images/templates/highlighted/1015.jpg",
        "/images/templates/highlighted/1016.jpg",
        "/images/templates/highlighted/1017.jpg",
        "/images/templates/highlighted/1018.jpg",
        "/images/templates/highlighted/1019.jpg",
        "/images/templates/highlighted/1020.jpg",
        "/images/templates/highlighted/1021.jpg",
        "/images/templates/highlighted/1022.jpg",
        "/images/templates/highlighted/1023.jpg",
        "/images/templates/highlighted/1024.jpg",
        "/images/templates/highlighted/1025.jpg",
        "/images/templates/highlighted/1026.jpg",
        "/images/templates/highlighted/1027.jpg",
        "/images/templates/highlighted/1028.jpg",
        "/images/templates/highlighted/1029.jpg",
        "/images/templates/highlighted/1030.jpg",
    ];


    return (
        <section id="section-deadline" className="bg-[#121212]" data-color="bg-[#121212]/60">
        <ParallaxProvider>
            <ParallaxBanner
                layers={[{
                    children: <ImageGrid images={images} />, speed: -15
                },

                ]}
                className="aspect-[2/1] h-screen bg-black"
            >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Container>
                        <div className="text-center">
                            <div className="my-6 font-strong text-deadline-cta-gradient text-4xl md:text-8xl pointer-events-auto">
                                Terkendala deadline?
                                <br />
                                Hubungi kami <br />— hemat waktu,
                                <br />
                                capai tujuan.
                            </div>

                            <div className="pointer-events-auto mt-12">
                                <Button href="https://wa.me/+62881038352544?text=Halo,%20saya%20mau%20tanya%20mengenai%20layanan%20Tisain." newTab variant="whatsapp-cta" size="xlarge">
                                    <div className="w-full text-center font-strong">WhatsApp Tisain.id</div>
                                </Button>
                            </div>
                        </div>
                    </Container>

                </div>
            </ParallaxBanner>
        </ParallaxProvider>
        </section>
    );
};
