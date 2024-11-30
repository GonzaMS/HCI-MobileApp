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
    <div className="w-full h-[200px] iphone12pro:h-[130px] iphone14promax:h-[180px] sm:h-[300px] relative flex items-center justify-center bg-gray-100 rounded-md overflow-hidden px-4">
      <img
        className="object-cover w-full h-full rounded-lg"
        alt="Hero"
        src={images[currentIndex]}
      />
      <button
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        <img
          src={arrowLeft}
          alt="Previous"
          className="w-5 h-5 iphone14promax:w-6 iphone14promax:h-6"
        />
      </button>
      <button
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        <img
          src={arrowRight}
          alt="Next"
          className="w-5 h-5 iphone14promax:w-6 iphone14promax:h-6"
        />
      </button>
    </div>
  );
};

export default HeroCarousel;
