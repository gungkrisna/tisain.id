import Image from "next/image";
import { useState } from "react";

interface TemplateCardProps {
  imgUrl: string;
  title: string;
}

const TemplateCard = ({ imgUrl, title }: TemplateCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="block rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-90 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <a href="#!">
          <Image src={imgUrl} alt={title} width={1000} height={1000} />
        </a>
        {isHovering && (
          <div className="absolute top-0 bottom-0 w-full h-full bg-[rgba(0,0,0,.2)]" />
        )}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default TemplateCard;
