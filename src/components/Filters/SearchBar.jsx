import { useState } from "react";
import searchIcon from "../../assets/Dashboard/search-fill0-wght400-grad0-opsz24-1.svg";

const SearchBar = ({ value, onChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${searchValue}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-4"
    >
      <div className="relative flex items-center w-full h-12 bg-white rounded-full shadow px-4">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar..."
          className="flex-grow bg-transparent text-sm text-[#43483e] placeholder-gray-400 focus:outline-none"
        />
        <button type="submit" className="bg-transparent p-0 focus:outline-none">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-6 h-6 object-contain"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
