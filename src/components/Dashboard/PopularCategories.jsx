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
    <>
      <div className="absolute h-[21px] top-[404px] left-[114px] font-semibold text-[#002020] text-lg">
        Popular Categories
      </div>
      <div className="w-[329px] h-[335px] top-[436px] absolute left-8 grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className="relative w-[155px] h-[155px] bg-cover bg-center"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
            onClick={() => onCategoryClick(category.id)}
          >
            <div className="absolute inset-0 flex items-center justify-center text-center px-2">
              <div className="font-black text-white text-sm tracking-[0.63px] leading-[normal] whitespace-normal">
                {category.name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default PopularCategories;
