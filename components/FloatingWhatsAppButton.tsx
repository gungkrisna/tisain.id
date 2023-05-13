import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "./Button";

const FloatingWhatsappButton = () => {
    const phoneNumber = '1234567890';

    const handleClick = () => {
        const url = `https://wa.me/+62881038352544`;
        window.open(url, '_blank');
    };

    return (
        <Button
            onClick={handleClick}
            href=""
            variant="whatsapp-cta"
            size="xlarge"
            className="fixed bottom-8 right-8 z-[19] w-16 h-16 rounded-full bg-[#25D366] text-white flex justify-center items-center"
        >
            <span><BsWhatsapp size={30} /></span>
        </Button>
    );
};

export default FloatingWhatsappButton;
