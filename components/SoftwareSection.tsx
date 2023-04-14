import Image from "next/image";
import { motion } from "framer-motion";

const softwareLogos = [
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Powerpoint",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Slide",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Keynote",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Powerpoint",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Slide",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Keynote",
    }, {
        icon: "/images/logos/PowerPoint.svg",
        name: "Powerpoint",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Slide",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Keynote",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Powerpoint",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Slide",
    },
    {
        icon: "/images/logos/PowerPoint.svg",
        name: "Keynote",
    },
];

interface Logo {
    icon: string;
    name: string;
}

const marqueeVariants = {
    animate: {
        x: ["-19vw", "-17vw"],
        y: ["-35vh", "-30vh"],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
            },
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
            },
        },
    },
};

export const LogoElement = ({ icon, name }: Logo) => {
    return (
        <div className="flex items-center justify-center rounded-[1.4rem] bg-gray-200 h-[16rem] w-[16rem]">
            <Image src={icon} alt={name} width="128" height="128" sizes="128"></Image>
        </div>
    );
};

export const SoftwareElement = () => {
    return (
        <>
            {softwareLogos
                .reduce((resultArray: any, item: any, index: number) => {
                    const chunkIndex = Math.floor(index / 3);

                    if (!resultArray[chunkIndex]) {
                        resultArray[chunkIndex] = [];
                    }

                    resultArray[chunkIndex].push(item);

                    return resultArray;
                }, [])
                .map((chunk: Logo[], index: number) => (
                    <ul key={index}
                        className="flex space-x-8"
                        style={{ marginLeft: `calc(19.2rem * ${index})` }}
                    >
                        {chunk.map((logo: any, index: any) => (
                            <li key={index}>
                                <LogoElement icon={logo.icon} name={logo.name} />
                            </li>
                        ))}
                    </ul>

                ))}
        </>
    )
}


export const SoftwareSection = () => {
    return (
        <section className="relative h-[45vh] bg-white overflow-hidden">
            <div className="flex flex-col items-center w-full whitespace-nowrap">
                <div className="software-3d-logo">

                    <motion.div
                        className="track"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        <div className="space-y-8 ml-[24rem] pb">
                            <SoftwareElement />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};