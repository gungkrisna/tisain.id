import { useState } from "react";
import Image from "next/image";

type StudyCase = {
    image: string;
    title: string;
    description: string;
};

const studyCases: StudyCase[] = [
    {
        image: "/images/akademisi.png",
        title: "Akademisi",
        description:
            "Tak peduli apapun bidang studi Anda, kami dapat membantu Anda membuat presentasi yang sempurna tentang topik tersebut. Baik guru maupun siswa menggunakan layanan presentasi Tisain untuk mengekspresikan ide dan gagasan mereka.",
    },
    {
        image: "/images/business.png",
        title: "Bisnis",
        description:
            "Setiap tim pasti akan membutuhkan presentasi yang menarik perhatian untuk membuat dunia melihat usaha mereka. Penjualan, pemasaran, atau SDM, Tisain hadir dengan layanan presentasi kami untuk membantu keseluruhan bisnis Anda meraih kesuksesan.",
    },
    {
        image: "/images/event.png",
        title: "Event",
        description:
            "Manajemen event merupakan hal yang tak mudah khususnya dalam meraih perhatian banyak orang. Layanan event organizer Tisain dapat membantu Anda untuk berhasil menggelar acara yang tak terlupakan.",
    },
];

export const AboutUsHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section id="section-pricing" className="bg-background h-auto">
            <div className="max-w-[120rem] mx-auto flex-row justify-between items-center py-[calc(var(--navigation-height)_/_2)] md:py-navigation-height px-8">
                <div className="flex flex-col">
                    <h2 className="font-raleway text-zinc text-4xl md:text-7xl md:text-center leading-tight md:mt-3">
                        Tisain hadir untuk membantu bisnis dan profesional naik kelas
                    </h2>
                </div>

                <div className="flex w-full mt-16 justify-center">
                    <div className="hidden md:flex md:justify-around md:gap-8">
                        {studyCases.map((studyCase, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-8 justify-start max-w-[330px] ${index === 1 ? "mt-8" : "mt-0"
                                    }`}
                            >
                                <Image
                                    src={studyCase.image}
                                    alt={studyCase.title}
                                    width={330}
                                    height={413}
                                />
                                <div className="flex flex-col gap-4 w-full">
                                    <h3 className="text-xl font-raleway text-black">
                                        {studyCase.title}
                                    </h3>
                                    <p className="text-gray-600 text-md">
                                        {studyCase.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="block md:hidden">
                        <div key={activeIndex} className="flex flex-col gap-8 justify-start">
                            <div className="w-full">
                                <Image
                                    src={studyCases[activeIndex].image}
                                    alt={studyCases[activeIndex].title}
                                    layout="responsive"
                                    style={{ objectFit: "cover" }}
                                    width={330}
                                    height={413}
                                />
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="grid grid-cols-3 divide-x-[1px] my-2">
                                    {studyCases.map((studyCase, index) => (
                                        <h3
                                            key={index}
                                            className={`text-lg font-regular text-[#212121] text-center ${index === activeIndex ? "text-tisain font-medium" : ""}`}
                                            onClick={() => handleClick(index)}
                                        >
                                            {studyCase.title}
                                        </h3>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-lg">{studyCases[activeIndex].description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
