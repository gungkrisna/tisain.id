import Link from "next/link"
import classNames from "classnames"
import { cva, VariantProps } from "class-variance-authority"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode,
    className?: string,
    href: string,
    newTab?: boolean
    onClick?: () => void,
}

const buttonClasses = cva("inline-flex items-center", {
    variants: {
        variant: {
            primary: "rounded-full bg-primary-gradient",
            "get-started-dark": "rounded-xl bg-gray-900 text-white hover:bg-gray-600 hover:shadow-lg",
            "get-started-light": "rounded-xl bg-white text-black hover:bg-white/80 border hover:shadow-lg",
            "whatsapp-header": "rounded-full bg-whatsapp hover:drop-shadow-[0_0_4.8rem_rgba(37,211,102,.5)] transition duration-75 ease-in-out text-white",
            "whatsapp-cta": "rounded-3xl bg-whatsapp drop-shadow-lg hover:drop-shadow-[0_0_4.8rem_rgba(37,211,102,.5)] hover:scale-[1.1] transition-all duration-100 ease-in-out text-white",
            "whatsapp-mobile-menu": "bg-whatsapp w-full text-white",
            "pricing": "bg-[#121212] w-full text-white py-7 hover:drop-shadow-[0_0_2.4rem_rgb(44,115,165,0.9)] transition duration-75 ease-in-out",
            "pricing-popular": "bg-[#2C73A5] w-full text-white py-7 hover:drop-shadow-[0_0_2.4rem_rgb(44,115,165,0.9)] transition duration-75 ease-in-out",
            "use-template": "rounded-xl bg-[#2C73A5] text-white hover:bg-[#2C73A5]/90 hover:shadow-lg hover:drop-shadow-[0_0_2.4rem_rgb(44,115,165,0.9)] transition duration-75 ease-in-out",
        },
        size: {
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 h-8",
            large: "text-md px-6 h-12",
            xlarge: "text-lg py-4 px-8"
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "medium",
    },
});

export const Button = ({ children, href, onClick, variant, size, className, newTab }: ButtonProps) => {
    return (
        <Link className={classNames(buttonClasses({ variant, size }), className)} href={href} onClick={onClick} target={`${newTab ? "_blank" : ""}`}>
            {children}
        </Link>
    )
}