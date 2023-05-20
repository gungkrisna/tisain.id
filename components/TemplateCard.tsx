import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface TemplateCardProps {
  thumbnail?: string;
  title?: string;
  slug?: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ thumbnail, title, slug }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const renderThumbnail = thumbnail ? (
    <Image src={`/images/templates/${thumbnail}`} alt={title!} width={1000} height={1000} />
  ) : (
    <Skeleton className="w-full h-full aspect-video" />
  );

  const renderTitle = title ? (
    <h5 className={`mb-2 text-lg font-medium leading-tight text-gray-800 line-clamp-2`}>
      {title}
    </h5>
  ) : (
    <Skeleton className="w-2/3 h-4 mb-1" count={2} />
  );

  const renderLink = slug ? (
    <Link href={`/templates/${slug}`} passHref>
        <div className="relative overflow-hidden">
          {renderThumbnail}
          {isHovering && <div className="absolute top-0 bottom-0 w-full h-full bg-[rgba(0,0,0,.2)]" />}
        </div>
        <div className="p-6 h-40">{renderTitle}</div>
    </Link>
  ) : (
    <div>
      <div className="relative overflow-hidden">{renderThumbnail}</div>
      <div className="p-6 h-40">{renderTitle}</div>
    </div>
  );

  return (
    <div
      className="block rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-90 cursor-pointer min-h-[8rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderLink}
    </div>
  );
};

export default TemplateCard;
