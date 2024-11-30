import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilteredResults from "../Filters/FilteredResults";
import SearchBar from "../Filters/SearchBar";
// import Header from "./Header";
import HeroCarousel from "./HeroCarousel";
import LearningRouteCard from "./LearningRouteCard";
import PopularCategories from "./PopularCategories";

const Dashboard = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
    navigate(`/category/${id}`);
  };

  const handleBackToCategories = () => {
    setSelectedCategoryId(null);
    navigate("/");
  };

  return (
    <div className="bg-[#f8f9f5] flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <div className="bg-white w-full max-w-screen-md sm:max-w-screen-lg lg:max-w-screen-xl mx-auto shadow-lg min-h-screen">
        {/* <Header /> */}
        {!selectedCategoryId ? (
          <>
            <HeroCarousel />
            <div className="mt-4 px-4">
              <SearchBar />
              <LearningRouteCard />
              <PopularCategories onCategoryClick={handleCategoryClick} />
            </div>
          </>
        ) : (
          <FilteredResults
            categoryId={selectedCategoryId}
            onBack={handleBackToCategories}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
