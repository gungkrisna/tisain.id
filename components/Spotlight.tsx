import { BiSearch } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface SpotlightProps {
  onClose: () => void;
}

interface Template {
  slug: string;
  thumbnail: string;
  title: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // add style to body to disable scrolling
    document.body.style.overflow = "hidden";

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // set focus on the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      // remove style from body to enable scrolling
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (searchInput) {
      setIsLoading(true);
      fetch(`/api/templates/searchTemplates?searchInput=${encodeURIComponent(searchInput)}`)
        .then((response) => response.json())
        .then((templates) => {
          setSearchResults(templates);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error searching templates:', error);
          setIsLoading(false);
        });
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [searchInput]);

  return (
    <div className="fixed top-0 z-[50] left-0 w-screen h-screen bg-black bg-opacity-70 flex items-start pt-[calc(10vh_+_var(--navigation-height))] justify-center overflow-y-auto">
      <div ref={modalRef} className="w-[80vw] md:w-1/2 2xl:w-[40vw]">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari"
            className={`py-3 pl-12 pr-4 rounded-lg ${searchInput && "rounded-b-none"} bg-[#fff] text-gray-500 text-lg w-full focus:outline-none focus:ring-0 focus:border-transparent`}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <div className="absolute top-[50%] transform -translate-y-[50%] p-4">
            <BiSearch size={20} color="gray-500" />
          </div>
          {isLoading && (
            <div className="absolute top-[50%] transform -translate-y-[50%] p-4 right-0">
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0)]"
                >
                  Loading...
                </span>
              </div>
            </div>
          )}
        </div>
        {searchInput && (
          <div className="max-h-[40vh] py-2 overflow-y-auto rounded-b-lg bg-gray-100">
            <span className="text-gray-500 px-4 uppercase font-regular">{searchResults.length} template</span>
            {searchResults.map((template, index) => (
              <Link
                key={index}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                href={`/templates/${template.slug}`}
              >
                <Image
                  width={192}
                  height={108}
                  src={`/images/templates/${template.thumbnail}`}
                  alt={template.title}
                  className="rounded-lg mr-4 max-w-[30vw]"
                />
                <span className="text-lg">{template.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>);
};

export default Spotlight;

