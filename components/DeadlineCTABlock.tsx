import { Container } from "./Container"
import { Hero, HeroTitle } from "./Hero"

export const DeadlineCTABlock = () => {
    return (
        <section>
            <Container className="flex flex-col items-center justify-center h-[100vh] w-full">
                <Hero>
                    <HeroTitle className="font-strong text-cta-gradient text-5xl">
                        Terkendala deadline?<br />Hubungi kami <br />— hemat waktu,<br />capai tujuan.
                    </HeroTitle>
                </Hero>
            </Container>
        </section>
    )
}