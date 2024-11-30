import { useNavigate, useParams } from "react-router-dom";
import { guides } from "../Guide/data/guides";

const GuideDetails = () => {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const guide = guides.find((item) => item.id === parseInt(guideId));

  if (!guide) {
    return (
      <div className="text-center mt-10">
        <p>No se encontró la guía seleccionada.</p>
        <button
          className="mt-4 px-4 py-2 bg-[#386a1f] text-white rounded"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9f5] h-screen">
      <div className="flex items-center p-4 bg-[#edefe5]">
        <button
          className="text-sm bg-transparent text-[#205106] font-bold"
          onClick={() => navigate(-1)}
        >
          ← Atrás
        </button>
        <h4 className="text-center flex-grow text-black text-xl font-bold">
          GUÍAS {guide.title}
        </h4>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={guide.imageUrl}
            alt={guide.title}
            className="w-full rounded mb-4"
          />
          <p className="text-sm text-[#464543] mb-4">{guide.content}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-[#386a1f] text-white px-4 py-2 rounded">
              Tomar Quiz
            </button>
            <a
              href="#"
              download={`${guide.title}.pdf`}
              className="bg-[#9dd67d] text-white px-4 py-2 rounded"
            >
              Descargar Guía
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
