import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Spotlight from "./Spotlight";
import templatesData from "@/mockdata/templates.json"

interface Props {
  placeholder: string;
}

const SearchField: React.FC<Props> = ({ placeholder }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="py-3 pl-10 pr-4 rounded-full bg-[#333333] text-gray-500 text-sm w-full md:w-[24rem] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onClick={() => setShowModal(true)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <BiSearch className="w-5 h-5" color="white"/>
      </div>
      {showModal && <Spotlight onClose={() => setShowModal(false)} templates={templatesData} />}
    </div>
  );
};


export default SearchField;
