import { useState } from "react";
import FilteredResults from "../Filters/FilteredResults";
import SearchBar from "../Filters/SearchBar";
import Footer from "./Footer";
import Header from "./Header";
import HeroCarousel from "./HeroCarousel";
import LearningRouteCard from "./LearningRouteCard";
import PopularCategories from "./PopularCategories";

const Dashboard = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
  };

  const handleBackToCategories = () => {
    setSelectedCategoryId(null);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[393px] h-[852px]">
        <div className="relative h-[852px] bg-[#f8f9f5]">
          <Header />

          {!selectedCategoryId ? (
            <>
              <HeroCarousel />
              <SearchBar />
              <LearningRouteCard />
              <PopularCategories onCategoryClick={handleCategoryClick} />
            </>
          ) : (
            <FilteredResults
              categoryId={selectedCategoryId}
              onBack={handleBackToCategories}
            />
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
