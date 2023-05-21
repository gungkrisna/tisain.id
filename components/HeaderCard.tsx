import Image from "next/image";
import Link from "next/link";

interface HeaderCardProps {
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  image: string;
  title: string;
  shadowColor: string;
}

const HeaderCard = ({
  href,
  newTab,
  onClick,
  image,
  title,
  shadowColor,
}: HeaderCardProps) => {
  return (
    <Link href={href ? href : ""} target={newTab ? "_blank" : ""} onClick={onClick} >
        <span
          className={`block bg-black rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-in-out cursor-pointer relative ${shadowColor} hover:shadow-xl`}
          onClick={onClick}
        >
          <Image src={image} alt={title} width={1000} height={1000} priority className="aspect-video" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 md:from-black/75 mdto-transparent hover:bg-white/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h5 className="text-lg md:text-xl font-regular leading-tight text-white">
              {title}
            </h5>
          </div>
        </span>
    </Link>
  );
};

export default HeaderCard;
