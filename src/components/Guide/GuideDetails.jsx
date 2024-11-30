import { jsPDF } from "jspdf";
import { useState } from "react";
import { FaInfoCircle, FaYoutube } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import goBack from "../../assets/Filter/vector-4.svg";
import { guides } from "../Guide/data/guides";

const GuideDetails = () => {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const [showVideo, setShowVideo] = useState(false);

  const guide = guides.find((item) => item.id === parseInt(guideId));

  const handleBack = () => {
    navigate(-1);
  };

  const handleReport = () => {
    alert("Funcionalidad de reporte en desarrollo.");
  };

  const handleDownload = () => {
    if (!guide) return;

    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.text(guide.title, 10, 10);

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Descripción: ${guide.description}`, 10, 20);
    doc.text("Contenido:", 10, 30);

    const contentLines = doc.splitTextToSize(guide.content, 180);
    doc.text(contentLines, 10, 40);

    doc.save(`${guide.title}.pdf`);

    setTimeout(() => navigate("/download-success"), 2000);
  };

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
    <div className="bg-[#f8f9f5] flex flex-col min-h-screen">
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center justify-between p-2 bg-[#edefe5]">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold flex items-center"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" />
          </button>
          <h4
            className="pr-16 text-black text-xl font-bold truncate max-w-72"
            data-tooltip-id="title"
            data-tooltip-content={guide.title}
          >
            Guias {">"} {guide.title}
          </h4>
          <Tooltip id="title" />
          <button
            onClick={handleReport}
            className="bg-transparent flex items-center"
          >
            <FaInfoCircle className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 h-[calc(100vh-200px)] overflow-y-scroll custom-scrollbar">
          <div className="relative">
            <img
              src={guide.imageUrl}
              alt={guide.title}
              className="w-full rounded mb-4"
            />
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaYoutube className="text-red-600 w-12 h-12" />
            </button>
          </div>
          <p className="text-sm text-[#464543]">{guide.content}</p>
        </div>
        <div className="flex justify-between mt-3">
          <button className="bg-[#386a1f] text-white w-[48%] px-4 py-2 rounded">
            Tomar Quiz
          </button>
          <button
            onClick={handleDownload}
            className="bg-[#386a1f] text-white flex items-center justify-center w-[48%] px-4 py-2 rounded"
          >
            Descargar Guía
            <RiDownloadLine className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-4 relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              X
            </button>
            <iframe
              width="100%"
              height="315"
              src={guide.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideDetails;
