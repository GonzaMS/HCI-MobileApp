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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[393px] h-[852px]">
        <div className="relative h-[852px] bg-[#f8f9f5]">
          <div className="flex items-center h-[73px] bg-[#edefe5] shadow">
            <button
              className="ml-4 text-sm bg-transparent text-[#205106] font-bold"
              onClick={handleBack}
            >
              <img src={goBack} alt="Back" className="w-5 h-5" />
            </button>
            <h1 className="flex-grow text-start mt-0.5 text-black text-xl font-bold">
              GUÍAS DE RECICLAJE
            </h1>
          </div>

          <div className="mt-4 px-4 overflow-y-scroll h-[calc(100%-73px)]">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="flex items-center bg-[#f3f5eb] p-4 rounded-lg mb-4 shadow cursor-pointer"
                onClick={() => handleGuideClick(guide.id)}
              >
                <img
                  src={guide.imageUrl}
                  alt={guide.title}
                  className="w-[70px] h-[50px] rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-bold text-[#205106]">{guide.title}</h3>
                  <p className="text-sm text-[#464543]">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
