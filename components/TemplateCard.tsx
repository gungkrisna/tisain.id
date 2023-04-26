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
      className="block rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-90"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a href="#!">
          <Image src={imgUrl} alt={title} width={1000} height={1000} />
        </a>
        {isHovering && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          />
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
