import { Button } from "./Button";
import { Container } from "./Container";

export const Hero = () => {
    return (
        <section id="section-hero" className="bg-background">
            <Container>
                <div className="flex h-[60vh] flex-col md:flex-row justify-between py-24 gap-12">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-raleway text-black text-7xl">
                            Layanan desain presentasi profesional.
                        </h1>
                        <p className="font-regular text-xl text-black/90 mt-6">
                            Tisain melayani pembuatan slide presentasi profesional secara tepat waktu, sesuai kebutuhan, dan anggaran proyek Anda.
                        </p>
                        <div className="w-md pt-8">
                            <Button href="#" variant="get-started-dark" size="large">
                                <div className="text-zinc font-strong">Get Started</div>
                            </Button>
                        </div>
                    </div>
                </div>
            <div className="flex z-10 h-[15vh] w-full bg-white rounded-[2rem]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                </div>
            </div>
            </Container>
        </section>
    )
}