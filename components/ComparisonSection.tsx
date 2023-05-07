import React from 'react'
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from "react-compare-slider";
import Marquee from "react-fast-marquee";

const services = [
    "Presentation Design",
    "Document Writing",
    "Event Organizer",
];

export const ComparisonSection = () => {
    return (
        <>
            <section id="section-comparison" className='bg-slate-800 h-auto' data-color="bg-[#121212]/60">
                <div className="bg-gradient-to-b from-[#212121] to-slate-800">
                    <div className="max-w-[120rem] mx-auto flex-row justify-between items-center py-navigation-height px-8">

                        <div className="flex flex-col">
                            <p className="font-regular text-white/70 text-md tracking-[.45rem] text-center">OUR WORK</p>
                            <h2 className="font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[rgb(94,159,206)] to-white text-5xl sm:text-6xl leading-tight text-center mt-3">Visualisasi dan interaktivitas <br className="hidden md:block" /> merupakan prioritas Tisain</h2>
                            <p className="font-regular text-white/70 text-center text-xl pt-6">Tim kami berpengalaman dalam membantu bisnis dan profesional <br className="hidden md:block" />menyampaikan gagasan mereka dengan lebih baik.</p>
                            <Link href="/template" className="flex items-center justify-center gap-1 text-xl font-nunito font-semibold text-white hover:underline hover:cursor-pointer mt-12"
                            >
                                <span>Lihat lebih banyak</span>
                                <span>
                                    <BsChevronRight />
                                </span>
                            </Link>
                        </div>

                        <div className="flex w-full my-16">
                            <ReactCompareSlider
                                handle={<ReactCompareSliderHandle linesStyle={{ opacity: 0.5 }} />}
                                boundsPadding={10}
                                changePositionOnHover
                                itemOne={
                                    <div className="bg-red-200 flex items-center justify-center text-2xl">
                                        <div className="absolute top-4 left-4">
                                            <div className="bg-white w-auto h-auto rounded-xl py-2 px-4">
                                                <p className="font-nunito text-lg">Before</p>
                                            </div>
                                        </div>
                                        <ReactCompareSliderImage alt="Before" src="/images/templates/1012.jpg" />
                                    </div>
                                }
                                itemTwo={
                                    <div className="bg-red-200 flex items-center justify-center text-2xl">
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-white w-auto h-auto rounded-xl py-2 px-4">
                                                <p className="font-nunito text-lg">After</p>
                                            </div>
                                        </div>
                                        <ReactCompareSliderImage alt="After" src="/images/templates/1009.jpg" />
                                    </div>}
                                className="drop-shadow-[0_2.4rem_4.8rem_rgb(44,115,165,.3)] scale-[.95] hover:drop-shadow-[0_2.4rem_4.8rem_rgb(44,115,165,.5)] hover:scale-100 transition-all duration-100 ease-in-out h-auto rounded-2xl"
                                position={50}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20 md:mx-16">
                            <div className="flex flex-col gap-3 pb-8 md:pb-0 md:pr-8">
                                <h1 className="text-white text-2xl font-raleway">Masalah Anda</h1>
                                <p className="text-white/80 font-regular text-md">Terlalu banyak teks dengan grafik yang membosankan menyulitkan audiens untuk memahami slide Anda. Sulit untuk membaca dan mendengar dalam waktu yang sama.</p>
                            </div>
                            <div className="flex flex-col gap-3 pt-8 md:pt-0 md:pl-8">
                                <h1 className="text-white text-2xl font-raleway">Solusi Tisain</h1>
                                <p className="text-white/80 font-regular text-md">Visualisasi presentasi yang menarik dengan struktur yang jelas akan membantu audiens untuk mengingat setiap slide presentasi Anda dengan lebih baik.</p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[115rem] mx-auto">
                    <Marquee
                        className="pb-navigation-height"
                        speed={60}
                        gradient={true}
                        gradientColor={[30, 41, 59]}
                        pauseOnClick
                    >
                        {services.concat(services).map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center mx-4 gap-10"
                            >
                                <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M 22.605 2.202 L 28.508 13.001 C 28.68 13.314 28.937 13.571 29.249 13.743 L 40.079 19.646 C 40.373 19.806 40.618 20.042 40.788 20.329 C 40.959 20.616 41.049 20.944 41.049 21.278 C 41.049 21.612 40.959 21.94 40.788 22.227 C 40.618 22.514 40.373 22.75 40.079 22.91 L 29.281 28.821 C 28.97 28.992 28.713 29.246 28.539 29.554 L 22.636 40.353 C 22.476 40.647 22.24 40.891 21.953 41.062 C 21.666 41.233 21.338 41.323 21.004 41.323 C 20.67 41.323 20.342 41.233 20.055 41.062 C 19.768 40.891 19.532 40.647 19.372 40.353 L 13.469 29.554 C 13.295 29.246 13.038 28.992 12.727 28.821 L 1.928 22.91 C 1.635 22.75 1.39 22.514 1.22 22.227 C 1.049 21.94 0.959 21.612 0.959 21.278 C 0.959 20.944 1.049 20.616 1.22 20.329 C 1.39 20.042 1.635 19.806 1.928 19.646 L 12.727 13.743 C 13.04 13.571 13.297 13.314 13.469 13.001 L 19.372 2.202 C 19.534 1.917 19.769 1.679 20.053 1.514 C 20.337 1.348 20.66 1.261 20.988 1.261 C 21.317 1.261 21.64 1.348 21.924 1.514 C 22.207 1.679 22.442 1.917 22.605 2.202 Z" fill="rgba(255,255,255,.2)" /></svg>
                                <span className="text-[rgba(255,255,255,.2)] text-9xl font-strong text-medium ">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </Marquee>

                </div>
            </section>
        </>
    )
}