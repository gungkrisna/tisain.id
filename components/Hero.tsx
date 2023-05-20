import { Button } from "./Button";
import Image from "next/image";
import { HighlightedFeatures } from "./HighlightedFeatures";

export const Hero = () => {
    return (
        <section id="section-hero" className="bg-background">
            <div className="relative ">

                <div className="absolute bottom-0 right-0 overflow-hidden">
                    <Image className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" height={1188} width={2434} src="/images/vector/background-pattern.png" alt="Background pattern" />
                </div>

                <div className="relative px-4 mx-auto max-w-[120rem] sm:px-6 lg:px-8 py-12 sm:py-16 lg:pb-32">
                    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                            <h1 className="text-5xl font-bold leading-tight lg:text-7xl lg:leading-[1.1] text-gray-900 font-raleway">Professional designer on-demand untuk segala
                                <span className="relative inline-flex sm:inline">
                                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                    <span className="relative text-5xl font-bold leading-tight lg:text-7xl lg:leading-[1.1] text-gray-900 font-raleway">&nbsp;pekerjaan.</span>
                                </span>
                            </h1>

                            <p className="mt-2 text-lg md:text-lg text-gray-600 leading-[1.3] sm:mt-6 font-nunito">Tisain merupakan professional design agency yang melayani pembuatan slide presentasi, pengetikan, dan event organizer terpercaya sesuai kebutuhan dan anggaran proyek Anda.</p>

                            <Button href="https://wa.me/+62881038352544?text=Halo,%20saya%20mau%20tanya%20mengenai%20layanan%20Tisain." newTab className="inline-flex px-8 py-4 mt-8 " variant="get-started-dark" size="large">
                                <div className="text-zinc font-strong">Get Started</div>
                            </Button>

                            <div className="mt-8 sm:mt-16">
                                <div className="flex items-center justify-center lg:justify-start">
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>

                                <blockquote className="mt-6">
                                    <p className="text-lg font-bold text-gray-900 font-raleway">Best design agency in Bali!</p>
                                    <p className="mt-3 text-sm leading-7 text-gray-600 font-nunito">Tisain telah membantu menyelesaikan segala kebutuhan desain dan pengetikan pada event saya, mulai dari membuat poster hingga mengatur susunan jalannya acara.</p>
                                </blockquote>

                                <div className="flex items-center justify-center mt-3 lg:justify-start ">
                                    <div className="relative h-6 w-6 aspect-square">
                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Kim_Jong-un_2019_%28cropped%29.jpg/230px-Kim_Jong-un_2019_%28cropped%29.jpg"
                                            alt="User avatar"
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <p className="ml-2 text-sm font-bold text-gray-900 font-nunito">I Wayan Koster Jr.</p>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-1">
                            <Image className="w-full mx-auto" src="/images/hero.png" width={656} height={502} alt="Hero image" priority />
                        </div>
                    </div>
                </div>


            <HighlightedFeatures />
            </div>
        </section>
    )
}