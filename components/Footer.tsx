import Link from "next/link"
import { Container } from "./Container"
import { RiInstagramLine, RiWhatsappLine } from "react-icons/ri";
import TisainLogo from "./Icons/TisainLogo";

const footerLinks = [
    {
        title: "Navigasi",
        links: [
            { title: "Testimoni", href: "/#section-testimonial" },
            { title: "Template Presentasi", href: "/templates/" },
            { title: "Layanan Desain Presentasi", href: "/pricing/presentation-design-service" },
            { title: "Layanan Pengetikan", href: "/pricing/writing-service" },
            { title: "Layanan Event Organizer", href: "https://wa.me/+62881038352544", newTab: true },
        ]
    },
    {
        title: "Perusahaan",
        links: [
            { title: "Tentang kami", href: "/about-us/" },
            { title: "Syarat dan ketentuan", href: "/tos/" }
        ]
    },
]

interface FooterProps {
    className?: string;
}

export const Footer = ( { className }: FooterProps ) => {
    return (
        <footer className={`${className} py-[6rem] bg-black text-white border-t border-white/[0.08] text-sm`}>
            <Container className="flex flex-col w-full h-full">
                <div className="flex flex-col md:flex-row justify-between w-full gap-12">
                    <div className="flex flex-col md:max-w-3xl gap-3">
                        <TisainLogo className="mb-12" size={12} />
                        <div className="font-strong text-2xl">
                            Layanan Desain Presentasi Profesional
                        </div>
                        <div className="text-lg text-gray-400">
                            Tisain.id merupakan penyedia layanan jasa desain slide presentasi profesional on-demand.
                        </div>
                        <div className="flex flex-row text-lg gap-4 mt-2 text-gray-200 [&_a:hover]:text-white [&_a:hover]:transition-colors">
                            <Link href="https://instagram.com/tisain.id__" target="_blank">
                                <RiInstagramLine size={30}/>
                            </Link>
                            <Link href="https://wa.me/+62881038352544" target="_blank">
                                <RiWhatsappLine size={30} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-12">
                        {footerLinks.map((column, index) => (
                            <div key={index} className="flex flex-col min-w-[18rem] text-md">
                                <h3 className="font-medium mb-6">{column.title}</h3>
                                <ul>
                                    {column.links.map((link, index) => (
                                        <li key={index} className="[&_a]:last:mb-0">
                                            <Link className="text-gray-400 mb-3 block hover:text-white transition-colors" href={link.href} target={link.newTab ? "_blank" : ""}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 w-full text-gray-500">
                    Copyright © 2023 Tisain. All rights reserved.
                </div>

            </Container>
        </footer>
    )
}