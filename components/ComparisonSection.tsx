import React from 'react'
import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from "react-compare-slider";

export const ComparisonSection = () => {
    return (
        <section id="section-comparison" className='bg-[#121212] h-auto' >
            <div className="max-w-[120rem] mx-auto flex-row justify-between items-center py-navigation-height px-8">

                <div className="flex flex-col">
                    <p className="font-regular text-white/70 text-md tracking-[.45rem] text-center">OUR WORK</p>
                    <h2 className="font-raleway text-white text-5xl leading-tight text-center mt-3">Before & After</h2>
                    <p className="font-regular text-white/80 text-center text-lg pt-6">Tim kami berpengalaman dalam membantu bisnis mewujudkan brand mereka menjadi lebih profesional.</p>
                </div>

                <div className="flex w-full mt-16">
                    <ReactCompareSlider
                        handle={<ReactCompareSliderHandle linesStyle={{ opacity: 0.5 }} />}
                        boundsPadding={10}
                        changePositionOnHover
                        itemOne={
                            <div className="bg-red-200 flex items-center justify-center text-2xl">
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white w-auto h-auto rounded-xl py-1 px-2">
                                        <p className="font-raleway text-xs">Before</p>
                                    </div>
                                </div>
                                <ReactCompareSliderImage alt="Before" src="/images/templates/1012.jpg" />
                            </div>
                        }
                        itemTwo={
                            <div className="bg-red-200 flex items-center justify-center text-2xl">
                                <div className="absolute top-4 right-4">
                                    <div className="bg-white w-auto h-auto rounded-xl py-1 px-2">
                                        <p className="font-raleway text-xs">After</p>
                                    </div>
                                </div>
                                <ReactCompareSliderImage alt="After" src="/images/templates/1009.jpg" />
                            </div>}
                        className="drop-shadow-[0_2.4rem_4.8rem_rgba(255,255,255,.3)] scale-[.95] hover:drop-shadow-[0_2.4rem_4.8rem_rgba(255,255,255,.5)] hover:scale-100 transition-all duration-100 ease-in-out h-auto rounded-2xl"
                        position={50}
                    />
                </div>
            </div>
        </section>
    )
}