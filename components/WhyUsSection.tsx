import Image from "next/image";
import { Container } from './Container'

const tisainFeatures = [
    {
        col: 1,
        features: [
            { title: "Data Aman", description: "Tisain sangat memperhatikan privasi dan keamanan data klien dengan protokol keamanan handal untuk mencegah penyalahgunaan.", image:"/images/feature-2.svg" },
            { title: "Professional", description: "Tisain memiliki tim desainer presentasi yang terampil dan handal untuk desain presentasi yang memukau audiens Anda", image:"/images/feature-1.svg" }
        ]
    },
    {
        col: 2,
        features: [
            { title: "Konsultasi Gratis", description: "Tim konsultan kami siap membantu klien dalam memilih tema, layout, dan gaya presentasi yang sesuai dengan konsep presentasi Anda.", image:"/images/feature-3.svg" },
            { title: "Revisi Gratis*", description: "Tisain memberikan jaminan kepuasan pelanggan dengan menawarkan layanan revisi gratis sesuai paket yang dipih oleh klien*.", image:"/images/feature-4.svg" }
        ]
    }
]

export const WhyUsSection = () => {
    return (
        <section id="section-why-us" className='bg-tisain h-auto'>
            <div className="max-w-[120rem] mx-auto flex flex-col min-[1310px]:flex-row justify-between items-center gap-12 overflow-hidden md:overflow-visible py-16">
                <div className="w-auto relative">
                    <div className="px-8 h-auto py-16 flex items-center">
                        <div className="rounded-[1.6rem] h-[30rem] w-[30rem] bg-gradient-to-br from-tisain to-[#1C4562] drop-shadow-2xl p-7 flex flex-col justify-center items-center relative z-10">
                            <h2 className="font-raleway text-white text-5xl leading-tight">Mengapa TISAIN.ID?</h2>
                            <p className="font-regular text-white/70 text-sm pt-3">Wujudkan presentasi yang memukai bersama Tisain.id</p>
                        </div>
                    </div>
                    <div className="px-8 absolute inset-0 z-0 w-full h-auto flex items-center">
                        <div className="rounded-[1.6rem] h-[30rem] w-[30rem] bg-white filter drop-shadow-sm blur-[5rem]"></div>
                        <div className="px-8 absolute w-full h-[30rem] flex justify-start items-end ml-[-10rem] mb-[-7rem]">
                            <Image src="/images/vector/whyus_arrow.png" alt="arrow" width="72" height="20" sizes="10"></Image>
                        </div>
                        <div className="px-8 absolute w-[30rem] h-[30rem] flex justify-end items-start ml-[8rem] mt-[-8rem]">
                            <Image src="/images/vector/whyus_highlight.png" alt="arrow" width="72" height="20" sizes="10"></Image>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 md:gap-12 px-12 lg:px-8">
                    {tisainFeatures.map((column, index) => (
                        <div className="flex flex-col gap-12" key={index}>
                            {column.features.map((feature, index) => (
                                <div key={index} className="flex flex-col md:flex-row gap-3 flex-start items-center">
                                    <div className="w-[6rem] h-[6rem] bg-[#2B666C] p-3 rounded-full flex justify-center items-center">
                                        <Image src={feature.image} alt="data" width="48" height="48" sizes="10" className="rounded-full"></Image>
                                    </div>
                                    <div className="flex flex-col text-center md:text-start md:max-w-sm">
                                        <h3 className="font-strong text-white text-xl ">{feature.title}</h3>
                                        <p className="font-regular text-white/70 text-sm pt-2">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}