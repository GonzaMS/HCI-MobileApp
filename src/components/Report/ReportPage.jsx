import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import goBack from "../../assets/Filter/vector-4.svg";

const reasons = [
  "Baja calidad",
  "Información Incorrecta",
  "Poca información",
  "Contenido o lenguaje ofensivo",
  "Otro Motivo",
];

const ReportPage = () => {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState(null);
  const [reportSent, setReportSent] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSendReport = () => {
    if (selectedReason) {
      setReportSent(true);
      setTimeout(() => {
        setReportSent(false);
        navigate(-1);
      }, 2000);
    }
  };

  return (
    <div className="bg-[#f8f9f5] flex flex-col min-h-screen relative">
      <div className="bg-white w-full max-w-md mx-auto shadow-lg flex flex-col h-full">
        <div className="flex items-center justify-between p-4 bg-[#edefe5] sticky top-0 z-10">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold flex items-center"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" />
          </button>
          <h4 className="pr-52 text-black text-xl font-bold">Reportar</h4>
        </div>

        {/* Contenido */}
        {!reportSent && (
          <div className="flex-grow flex flex-col h-auto">
            <div className="grid grid-rows-9 gap-4 p-4 flex-grow">
              {reasons.map((reason, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-between bg-[#f3f5eb] text-[#205106] font-semibold p-4 rounded-lg shadow-md ${
                    selectedReason === reason ? "ring-2 ring-green-500" : ""
                  }`}
                  onClick={() => setSelectedReason(reason)}
                >
                  <span>{reason}</span>
                  <span>{">"}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-center mb-4">
              <button
                className={`px-6 py-2 bg-[#205106] text-white font-semibold rounded-md shadow-md ${
                  !selectedReason ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSendReport}
                disabled={!selectedReason}
              >
                Enviar
              </button>
            </div>
          </div>
        )}

        {/* Mensaje de reporte enviado */}
        {reportSent && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white w-full h-full flex flex-col items-center justify-center">
              <FaCheckCircle className="text-green-500 w-16 h-16 mb-4" />
              <span className="text-green-700 font-bold text-lg">
                Reporte enviado
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;
