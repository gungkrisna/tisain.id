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
            className="fixed bottom-8 right-8 z-[19] w-16 h-16 rounded-full bg-[#25D366] text-white flex justify-center items-center"
        >
            <span><BsWhatsapp size={30} /></span>
        </Button>
    );
};

export default FloatingWhatsappButton;
