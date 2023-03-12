import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode,
    href: string,
}

const buttonClasses = cva("inline-flex items-center", {
    variants: {
        variant: {
            primary: "rounded-full bg-primary-gradient",
            secondary: "",
            whatsapp: "rounded-full bg-whatsapp hover:text-shadow hover:shadow-whatsapp",
            "whatsapp-cta": "rounded-3xl bg-whatsapp hover:text-shadow hover:shadow-whatsapp",
            "whatsapp-mobile-menu": "bg-whatsapp hover:text-shadow hover:shadow-whatsapp w-full",
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

export const Button = ({children, href, variant, size}: ButtonProps) => {
    return <Link className={buttonClasses( {variant, size} )} href={href}>
        {children}
        </Link>
}