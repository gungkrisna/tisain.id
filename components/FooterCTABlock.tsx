import { Button } from "./Button"
import { Container } from "./Container"
import { Hero, HeroTitle } from "./Hero"

export const FooterCTABlock = () => {
    return (
        <section className="bg-blue-500">
            <Container className="flex flex-col w-full h-full justify-center pt-[10rem]">
                <Hero>
                    <HeroTitle className="font-strong text-cta-gradient">
                        Konsultasi gratis dengan profesional, sekarang.
                    </HeroTitle>
                </Hero>
                <div className="flex justify-center">
                    <Button href="#" variant="whatsapp-cta" size="xlarge">
                        <div className="w-full text-center font-strong">WhatsApp Tisain.id</div>
                    </Button>
                </div>
                <img className="mt-6 border-[0.25rem] border-white/25 border-solid border-b-0 rounded-t-2xl" src="/images/google-slide.png" alt="Hero image" />
            </Container>
        </section>
    )
}