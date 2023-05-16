import classNames from "classnames";
import Image from "next/image";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type TemplatePreviewProps = {
    images: {
        imageUrl: string;
    }[];
};

export const TemplatePreview = ({ images }: TemplatePreviewProps) => {
    return (
        <>
            <section
                id="section-comparison"
                className="bg-slate-800 h-auto"
                data-color="bg-[#121212]/60"
            >
                <div className="bg-gradient-to-b from-[#212121] to-slate-800">
                    <div className="max-w-[120rem] mx-auto flex-row justify-between items-center">
                        <div className="flex flex-col w-full relative">
                            <Carousel
                                showThumbs={true}
                                autoPlay={true}
                                swipeable={true}
                                emulateTouch={true}
                                renderIndicator={(onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number, label: string) => (
                                    <li
                                        className="inline-block mx-2 cursor-pointer"
                                        style={{ opacity: isSelected ? '1' : '0.7' }}
                                        onClick={onClickHandler}
                                        onKeyDown={onClickHandler}
                                        value={index}
                                        key={index}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`${label} ${index + 1}`}
                                    >
                                        <div
                                            className={`w-2 h-2 rounded-full ${isSelected ? 'bg-tisain ' : 'bg-white/80'
                                                } border border-black/50 `}
                                        ></div>
                                    </li>
                                )}
                                renderThumbs={() =>
                                    images.map((image, index) => (
                                        <div key={index} className="w-full h-10 relative">
                                            <Image
                                                src={`/images/templates/${image.imageUrl}`}
                                                fill
                                                className="object-cover"
                                                alt={`Slide ${index}`}
                                            ></Image>
                                        </div>
                                    ))
                                }
                                renderArrowPrev={(onClickHandler: () => void, hasPrev: boolean) =>
                                    hasPrev && (
                                        <>
                                            <button
                                                type="button"
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                                                onClick={onClickHandler}
                                            >
                                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50">
                                                    <IoIosArrowBack size={18} color="black" />
                                                </div>
                                            </button>
                                        </>
                                    )
                                }
                                renderArrowNext={(onClickHandler: () => void, hasNext: boolean) =>
                                    hasNext && (
                                        <>
                                            <button
                                                type="button"
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
                                                onClick={onClickHandler}
                                            >
                                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50">
                                                    <IoIosArrowForward size={18} color="black" />
                                                </div>
                                            </button>
                                        </>
                                    )
                                }
                                className="drop-shadow-[0_2.4rem_4.8rem_rgb(44,115,165)] m-8"
                            >
                                {images.map((image, index) => (
                                    <div key={index} className="flex items-center justify-center text-2xl">
                                        <Image src={`/images/templates/${image.imageUrl}`} height={1080} width={1920} alt={`Slide ${index}`} priority />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

