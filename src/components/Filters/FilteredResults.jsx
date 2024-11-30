import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import iconX from "../../assets/Filter/icon-x-letter.png";
import search from "../../assets/Filter/search-fill0-wght400-grad0-opsz24-1.svg";
import goBack from "../../assets/Filter/vector-4.svg";
import { categoryNames, guides } from "../Guide/data/guides";

const FilteredResults = ({ categoryId, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const categoryName = categoryNames[categoryId] || "";
    setSearchTerm(categoryName);
    setFilterResults(
      guides.filter(
        (item) =>
          item.categoryId === categoryId &&
          (item.title.toLowerCase().includes(categoryName.toLowerCase()) ||
            item.description.toLowerCase().includes(categoryName.toLowerCase()))
      )
    );
  }, [categoryId]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = guides.filter(
      (item) =>
        item.categoryId === categoryId &&
        (item.title.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value))
    );
    setFilterResults(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilterResults(guides.filter((item) => item.categoryId === categoryId));
  };

  const handleGuideClick = (id) => {
    navigate(`/guide/${id}`);
  };

  return (
    <div className="relative bg-[#f8f9f5]">
      <div className="flex items-center p-2 bg-[#edefe5]">
        <button
          className="text-sm bg-transparent text-[#205106] font-bold"
          onClick={onBack}
        >
          <img src={goBack} alt="Back" />
        </button>
        <h4 className="text-center pr-56 mb-0.5 flex-grow text-black text-xl font-bold">
          Resultados
        </h4>
      </div>

      <div className="mt-4 px-4">
        <div className="relative w-full bg-white rounded-full flex items-center shadow">
          <img className="ml-2" src={search} alt="Search" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar..."
            className="w-full py-2 pl-4 pr-10 text-sm bg-transparent text-gray-600 rounded-full focus:outline-none"
          />
        </div>
      </div>

      {searchTerm && (
        <div className="mt-2 px-4">
          <span className="inline-block bg-[#a0cfd0] text-[#1e4e4e] px-4 py-1 text-xs rounded-full">
            {searchTerm}{" "}
            <button
              className="ml-2 bg-transparent text-[#205106]"
              onClick={handleClearSearch}
            >
              <img src={iconX} alt="X" />
            </button>
          </span>
        </div>
      )}

      <div className="mt-6 px-4">
        {filterResults.length > 0 ? (
          filterResults.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-[#f3f5eb] p-4 rounded-lg mb-4 shadow cursor-pointer"
              onClick={() => handleGuideClick(item.id)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[70px] h-[50px] rounded-lg mr-4"
              />
              <div>
                <h3 className="font-bold text-[#205106]">{item.title}</h3>
                <p className="text-sm text-[#464543]">{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No hay resultados disponibles
          </p>
        )}
      </div>
    </div>
  );
};

export default FilteredResults;
