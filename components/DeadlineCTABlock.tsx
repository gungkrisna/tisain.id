import { Container } from "./Container"
import { Hero, HeroTitle } from "./Hero"

export const DeadlineCTABlock = () => {
    return (
        <section>
            <Container className="flex items-center justify-center h-[calc(100vh_-_var(--navigation-height))] w-full">
                <Hero>
                    <HeroTitle className="font-strong text-cta-gradient">
                        Terkendala deadline?<br />Hubungi kami <br />— hemat waktu Anda,<br />capai tujuan.
                    </HeroTitle>
                </Hero>
            </Container>
        </section>
    )
}