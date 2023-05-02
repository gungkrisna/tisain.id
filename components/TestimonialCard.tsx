import Image from "next/image";
import { useState } from "react";
import RatingStars from "./RatingStars";

interface TestimonialCardProps {
    image: string;
    name: string;
    testimony: string;
    company: string;
    stars: number;
    className?: string;
}

export const TestimonialCard = ({ image, testimony, name, company, stars, className }: TestimonialCardProps) => {

    return (
        <div className={`block py-6 px-6 my-10 md:my-40 mx-2 md:mx-4 lg:mx-8 rounded-2xl bg-white border-[0.25rem] border-black/5 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer ${className}`}>
            <div className="flex flex-row justify-start">
                <RatingStars rating={stars} />
            </div>
            <div className="divide-y">
                <p className={`py-4 mb-4 text-md font-regular text-gray-700 line-clamp-4 h-[11rem]`}>
                    {testimony}
                </p>
                <div className="pt-4 flex flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="relative h-10 w-10 aspect-square">
                            <Image src={image} alt={name} fill className="rounded-full object-cover " />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-md font-strong leading-tight text-gray-800 line-clamp-1">
                                {name}
                            </h5>
                            <p className="text-md font-regular text-gray-700 line-clamp-1">{company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
