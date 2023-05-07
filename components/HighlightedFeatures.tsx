import { CgSandClock } from "react-icons/cg"
import { TbCoins, TbDiscount2, TbShieldCheck, TbWallet, } from "react-icons/tb"
export const HighlightedFeatures = () => {
    return (
        <section id="section-highlighted-features" className="bg-background hidden lg:block">
            <div className="pb-12 bg-[#212121]">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-background pt-12"></div>
                    <div className="relative mx-auto">
                        <div className="max-w-[120rem] mx-auto">
                            <div className=" bg-[#212121] w-full py-12 px-12 rounded-3xl drop-shadow-[0_2.4rem_4.8rem_rgb(255,255,255,.7)] border-[0.25rem] border-white/10 border-solid">
                                <div className="flex justify-center gap-x-12 gap-y-4 items-center">
                                    <div className="flex justify-center text-gray-200  w-full items-center">
                                        <CgSandClock size={36} />
                                        <p className="ml-3 text-sm font-raleway leading-tight">Pengerjaan<br />Cepat</p>
                                    </div>

                                    <div className="block">
                                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                        </svg>
                                    </div>

                                    <div className="flex justify-center text-gray-200  w-full items-center">
                                        <TbCoins size={36} />
                                        <p className="ml-3 text-sm font-raleway leading-tight">Harga<br />Kompetitif</p>
                                    </div>

                                    <div className="block">
                                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                        </svg>
                                    </div>


                                    <div className="flex justify-center text-gray-200  w-full items-center">
                                        <TbDiscount2 size={36} />
                                        <p className="ml-3 text-sm font-raleway leading-tight">Bonus<br /> dan Diskon Menarik</p>
                                    </div>

                                    <div className="block">
                                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                        </svg>
                                    </div>

                                    <div className="flex justify-center text-gray-200  w-full items-center">
                                        <TbShieldCheck size={36} />
                                        <p className="ml-3 text-sm font-raleway leading-tight">Money<br />Back Guarantee*</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}