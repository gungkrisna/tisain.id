import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";

const FloatingWhatsappButton = () => {
    const phoneNumber = '1234567890';

    return (
        <Button
            href="https://wa.me/+62881038352544?text=Halo,%20saya%20mau%20tanya%20mengenai%20layanan%20Tisain."
            newTab
            variant="whatsapp-cta"
            size="xlarge"
            className="py-12 fixed bottom-6 right-6 z-[19] w-15 md:w-auto h-16 md:h-auto rounded-full text-xl flex gap-2 justify-center items-center"
        >
            <span><BsWhatsapp size={22} /></span>
            <span className="font-nunito text-lg hidden md:block">Chat</span>
        </Button>
    );
};

export default FloatingWhatsappButton;
