import Image from "next/image";

interface ImageGridProps {
    images: string[];
}

export const ImageGrid = ({ images }: ImageGridProps) => {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);

    return (
        <div
            className="bg-black grid grid-cols-2 lg:grid-cols-3 w-auto"
        >
            {shuffledImages.map((image, index) => {
                return (
                    <Image
                        key={index}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto opacity-[.15] hover:opacity-25 transition-opacity duration-300 ease-in-out"
                        src={image}
                        alt={`image grid ${index}`}
                    />
                );
            })}
        </div>
    );
};
