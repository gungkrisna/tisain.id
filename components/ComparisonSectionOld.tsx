import React, { useState } from 'react'
import { ReactCompareSlider, ReactCompareSliderHandle, ReactCompareSliderImage } from "react-compare-slider";
import { Button } from "./Button";

export const ComparisonSection2 = () => {
    const [value, setValue] = useState(50);
    return (
        <div className='bg-[#ececec] h-auto'>
            <div className="max-w-[120rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 py-16 px-8">
                <div className="w-full">
                    <ReactCompareSlider
                        handle={<ReactCompareSliderHandle linesStyle={{ opacity: 0.5 }} />}
                        boundsPadding={40}
                        changePositionOnHover
                        itemOne={
                            <div className="bg-red-200 flex items-center justify-center text-2xl">
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white w-auto h-auto rounded-xl py-1 px-2 drop-shadow-2xl border border-black/10">
                                        <p className="font-raleway text-xs">Before</p>
                                    </div>
                                </div>
                                <ReactCompareSliderImage alt="Before" src="/images/templates/1012.jpg" />
                            </div>
                        }
                        itemTwo={
                            <div className="bg-red-200 flex items-center justify-center text-2xl">
                                <div className="absolute top-4 right-4">
                                    <div className="bg-white w-auto h-auto rounded-xl py-1 px-2 drop-shadow-2xl border border-black/10">
                                        <p className="font-raleway text-xs">After</p>
                                    </div>
                                </div>
                                <ReactCompareSliderImage alt="After" src="/images/templates/1009.jpg" />
                            </div>}
                        className="max-w-5xl drop-shadow-2xl h-auto rounded-2xl"
                        position={50}
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-raleway text-black text-5xl leading-tight">Transformasi presentasi</h2>
                    <p className="font-regular text-black/70 text-md pt-3">Geser slider untuk melihat bagaimana Tisain mengubah slide presentasi client menjadi lebih profesional.</p>
                    <div className="w-md pt-8">
                        <Button href="#" variant="get-started-dark" size="large">
                            <div className="text-white font-strong">Get Started</div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}