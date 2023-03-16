import Link from "next/link";

interface AnouncementBarProps {
    message: string;
    link?: string;
}

export const AnnouncementBar = ({ message, link }: AnouncementBarProps) => {
    return (
        <div className="w-full bg-blue-500 text-white px-4 py-2 h-full">
            <p className="text-center text-sm">
                {message}
                {link && (
                    <>
                        {" "}
                        <Link href={link} className="underline">
                            Pelajari
                        </Link>
                    </>
                )}
            </p>

        </div >
    );
};
