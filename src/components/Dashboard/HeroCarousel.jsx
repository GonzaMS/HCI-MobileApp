import { useState } from "react";
import heroImage from "../../assets/Dashboard/rectangle-39.png";
import heroImage2 from "../../assets/Dashboard/rectangle-41.png";
import heroImage3 from "../../assets/Dashboard/rectangle-42.png";
import arrowRight from "../../assets/Dashboard/vector-2.svg";
import arrowLeft from "../../assets/Dashboard/vector-3.svg";

const HeroCarousel = () => {
  const images = [heroImage, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="absolute w-[329px] h-[136px] top-[90px] left-8">
      <img
        className="w-full h-full object-cover"
        alt="Hero"
        src={images[currentIndex]}
      />
      <button
        className="absolute top-[54px] left-[9px] bg-transparent p-0 focus:outline-none"
        onClick={handlePrev}
      >
        <img src={arrowLeft} alt="Previous" />
      </button>
      <button
        className="absolute top-[54px] right-[9px] bg-transparent p-0 focus:outline-none"
        onClick={handleNext}
      >
        <img src={arrowRight} alt="Next" />
      </button>
    </div>
  );
};

export default HeroCarousel;
