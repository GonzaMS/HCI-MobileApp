import { useState } from "react";
import searchIcon from "../../assets/Dashboard/search-fill0-wght400-grad0-opsz24-1.svg";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${searchValue}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="absolute top-[235px] left-8 w-[331px] h-[38px]"
    >
      <div className="relative flex items-center w-full h-full bg-white rounded-full shadow-md px-4">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="flex-grow bg-transparent text-xs text-[#43483e] font-normal outline-none"
        />
        <button type="submit" className="bg-transparent p-0 focus:outline-none">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
