import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    const router = useRouter();
    const [inputPage, setInputPage] = useState<number>(currentPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            // Redirect to the last page if the current page is out of range
            router.push(`/templates/?page=${totalPages}`);
        }
    }, [currentPage, totalPages, router]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPage(Number(e.target.value));
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const newPage = Math.max(1, Math.min(totalPages, inputPage));
            onPageChange(newPage);
            router.push(`/templates/?page=${newPage}`);
        }
    };

    const getPageNumbers = (): number[] => {
        const pageNumbers = [];
        const maxPageNumbers = 4;

        // Calculate the start and end page numbers based on the current page and total pages
        let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
        const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

        // Adjust the start page if the range is smaller than the maximum page numbers
        if (endPage - startPage < maxPageNumbers - 1) {
            startPage = Math.max(1, endPage - maxPageNumbers + 1);
        }

        // Generate the page numbers within the specified range
        for (let page = startPage; page <= endPage; page++) {
            pageNumbers.push(page);
        }

        return pageNumbers;
    };

    return (
        <section id="section-pagination" className="bg-background flex items-center justify-center pt-6">
            {currentPage > 1 && (
                <>
                    <Link
                        href={`/templates/?page=${currentPage - 1}`}
                        className="flex items-center justify-center w-8 h-8 mx-1 font-regular bg-gray-200 rounded-xl"
                    >
                        <FaChevronLeft className="w-3 h-3 text-gray-600" />
                    </Link>
                </>
            )}
            {currentPage >= (totalPages - 1) && (
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-8 h-8 mx-1 text-center bg-gray-200 rounded-xl outline-none"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder="..."
                    min="1"
                    max={totalPages}
                />
            )}
            {getPageNumbers().map((page) => (
                <Link
                    key={page}
                    href={`/templates/?page=${page}`}
                    className={`flex items-center justify-center w-8 h-8 mx-1 font-regular rounded-xl ${currentPage === page
                        ? "bg-tisain text-white"
                        : "bg-gray-200 text-gray-600"
                        }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Link>
            ))}
            {currentPage < (totalPages - 1) && (
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-8 h-8 mx-1 text-center bg-gray-200 rounded-xl outline-none"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder="..."
                    min="1"
                    max={totalPages}
                />
            )}
            {currentPage < totalPages && (
                <Link
                    href={`/templates/?page=${currentPage + 1}`}
                    aria-label="Next"
                    className="flex items-center justify-center w-8 h-8 mx-1 font-regular bg-gray-200 rounded-xl">

                    <FaChevronRight className="w-3 h-3 text-gray-600" />
                </Link>
            )}
        </section>
    );
};

export default Pagination;
