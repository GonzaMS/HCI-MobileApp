import { useNavigate } from "react-router-dom";
import guideImage1 from "../../assets/Filter/frame-3.png";
import guideImage2 from "../../assets/Filter/frame-4.png";
import guideImage3 from "../../assets/Filter/frame-5.png";
import guideImage4 from "../../assets/Filter/frame-6.png";
import guideImage5 from "../../assets/Filter/frame-7.png";
import goBack from "../../assets/Filter/vector-4.svg";

const guidesData = [
  {
    id: 1,
    title: "Reciclaje Básico",
    description: "Enseñamos las bases de reciclaje básico",
    imageUrl: guideImage1,
  },
  {
    id: 2,
    title: "Limpieza de Residuos",
    description: "Clasifica tus residuos correctamente",
    imageUrl: guideImage2,
  },
  {
    id: 3,
    title: "Separación de residuos",
    description: "Separa correctamente tus residuos!",
    imageUrl: guideImage3,
  },
  {
    id: 4,
    title: "Reducir y Reutilizar",
    description: "Reduce correctamente tus residuos, y aprende a reutilizarlos",
    imageUrl: guideImage4,
  },
  {
    id: 5,
    title: "Identificación de residuos",
    description: "Identifica tus residuos para su correcto reciclaje",
    imageUrl: guideImage5,
  },
];

const GuidesPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
            {guidesData.map((guide) => (
              <div
                key={guide.id}
                className="flex items-center bg-[#f3f5eb] p-4 rounded-lg mb-4 shadow"
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
