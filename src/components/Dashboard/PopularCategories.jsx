import image1 from "../../assets/Dashboard/rectangle-35.png";
import image4 from "../../assets/Dashboard/rectangle-36.png";
import image3 from "../../assets/Dashboard/rectangle-37.png";
import image2 from "../../assets/Dashboard/rectangle-38.png";

const categories = [
  { id: 1, name: "Reciclaje", imageUrl: image1 },
  { id: 2, name: "Reutilización", imageUrl: image4 },
  { id: 3, name: "Gestión de residuos", imageUrl: image2 },
  { id: 4, name: "Tips", imageUrl: image3 },
];

const PopularCategories = ({ onCategoryClick }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#205106] mb-4 px-4">
        Popular Categories
      </h2>
      <div className="px-4 grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="relative w-full h-[100px] rounded-lg bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
            onClick={() => onCategoryClick(category.id)}
          >
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 text-white font-semibold text-sm">
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
