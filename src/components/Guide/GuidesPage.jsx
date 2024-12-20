import { useNavigate } from "react-router-dom";
import goBack from "../../assets/Filter/vector-4.svg";
import { guides } from "../Guide/data/guides";

const GuidesPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleGuideClick = (id) => {
    navigate(`/guide/${id}`);
  };

  return (
    <div>
      <div>
        <div className="flex items-center p-2 bg-[#edefe5] sticky top-0 z-10 w-full">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" className="w-5 h-5" />
          </button>
          <h4 className="text-center pr-20 flex-grow text-black text-lg font-bold iphone12pro:text-xl iphone14promax:text-2xl">
            Guías de aprendizaje
          </h4>
        </div>

        <div className="mt-4 px-4 overflow-y-auto flex-grow custom-scrollbar pb-20">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="flex items-center bg-[#f3f5eb] p-3 rounded-lg mb-3 shadow cursor-pointer iphone12pro:p-4 iphone14promax:p-5"
              onClick={() => handleGuideClick(guide.id)}
            >
              <img
                src={guide.imageUrl}
                alt={guide.title}
                className="w-[60px] h-[40px] rounded-lg mr-3 iphone12pro:w-[70px] iphone12pro:h-[50px] iphone14promax:w-[80px] iphone14promax:h-[60px]"
              />
              <div>
                <h3 className="font-bold text-[#205106] text-sm iphone12pro:text-base iphone14promax:text-lg">
                  {guide.title}
                </h3>
                <p className="text-xs text-[#464543] iphone12pro:text-sm iphone14promax:text-base">
                  {guide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
