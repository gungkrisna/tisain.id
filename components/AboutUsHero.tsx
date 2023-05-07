import { Container } from "./Container"
import { HiOutlineCheckCircle } from "react-icons/hi"
import Image from "next/image";

type StudyCase = {
    image: string;
    title: string;
    description: string;
}

const studyCases: StudyCase[] = [
    {
        image: "/images/study-case-1.png",
        title: "Akademisi",
        description: "Tak peduli apapun bidang studi Anda, kami dapat membantu Anda membuat presentasi yang sempurna tentang topik tersebut. Baik guru maupun siswa menggunakan layanan presentasi Tisain untuk mengekspresikan ide dan gagasan mereka."
    },
    {
        image: "/images/study-case-2.png",
        title: "Bisnis",
        description: "Setiap tim pasti akan membutuhkan presentasi yang menarik perhatian untuk membuat dunia melihat usaha mereka. Penjualan, pemasaran, atau SDM, Tisain hadir dengan layanan presentasi kami untuk membantu keseluruhan perusahaan Anda meraih keberhasilan."
    },
    {
        image: "/images/study-case-3.jpg",
        title: "Event",
        description: "Manajemen event merupakan hal yang tak mudah khususnya dalam menjangkau perhatian banyak orang. Layanan event organizer Tisain dapat membantu Anda untuk berhasil menggelar acara yang tak terlupakan."
    }
]

export const AboutUsHero = () => {
    return (
        <section id="section-pricing" className='bg-background h-auto'>
            <div className="max-w-[120rem] mx-auto flex-row justify-between items-center py-navigation-height px-8">
                <div className="flex flex-col">
                    <h2 className="font-raleway text-zinc text-6xl leading-tight text-center mt-3">Tisain hadir untuk membantu bisnis dan profesional untuk naik kelas</h2>
                </div>

                <div className="flex w-full mt-16 justify-center">
                    <div className="hidden md:flex md:justify-around md:gap-8">
                        {studyCases.map((studyCase, index) => (
                            <div
                                key={index}
                                className={`flex flex-col gap-8 justify-start max-w-[330px] ${index == 1 ? 'mt-8' : 'mt-0'}`}
                            >
                                <Image src={studyCase.image} alt={studyCase.title} width={330} height={413} />
                                <div className="flex flex-col gap-4 w-full">
                                    <h3 className="text-lg font-raleway text-black">{studyCase.title}</h3>
                                    <p className="text-gray-600 text-sm">{studyCase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>c
        </section>
    )
}
