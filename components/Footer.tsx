import Link from "next/link"
import { Container } from "./Container"
import { RiInstagramLine, RiWhatsappLine } from "react-icons/ri";
import TisainLogo from "./Icons/TisainLogo";

const footerLinks = [
    {
        title: "Produk",
        links: [
            { title: "Layanan", href: "/" },
            { title: "Dukungan Software", href: "/" },
            { title: "Template Presentasi", href: "/" },
            { title: "Harga", href: "/" },
        ]
    },
    {
        title: "Perusahaan",
        links: [
            { title: "Tentang kami", href: "/" },
            { title: "Syarat dan ketentuan", href: "/" }
        ]
    },
]

export const Footer = () => {
    return (
        <footer className="py-[5.6rem] bg-black text-white border-t border-white/[0.08] text-sm">
            <Container className="flex flex-col w-full h-full">
                <div className="flex flex-col md:flex-row justify-between w-full gap-12">
                    <div className="flex flex-col md:max-w-3xl gap-6">
                        <TisainLogo className="mb-12" size={12} />
                        <div className="font-strong text-2xl">
                            Layanan Desain Presentasi Profesional
                        </div>
                        <div className="text-lg text-gray-400">
                            Tisain.id merupakan penyedia layanan jasa desain slide presentasi profesional on-demand.
                        </div>
                        <div className="flex flex-row text-lg gap-3 text-gray-200 [&_a:hover]:text-white [&_a:hover]:transition-colors">
                            <Link href="https://instagram.com/tisain.id__">
                                <RiInstagramLine />
                            </Link>
                            <Link href="https://wa.me/+6285238071534">
                                <RiWhatsappLine />
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
                                            <Link className="text-gray-400 mb-3 block hover:text-white transition-colors" href={link.href}>{link.title}</Link>
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