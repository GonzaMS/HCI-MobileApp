import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import goBack from "../../assets/Filter/vector-4.svg";
import { Footer } from "../Dashboard";

const DownloadSuccessPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#f8f9f5] flex flex-col items-center justify-center w-full h-screen">
      <div className="bg-white w-full max-w-md h-full shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-2 bg-[#edefe5] sticky top-0 z-10">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold flex items-center mr-2"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" />
          </button>
          <h4 className="pr-48 text-black text-xl font-bold">Descargar Guía</h4>
        </div>

        <div className="bg-[#f3f5eb] rounded-lg shadow-lg p-4 h-4/5 m-5">
          <div className="flex flex-col items-center pt-56 justify-center flex-grow p-4">
            <FaCheckCircle className="text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-xl text-black font-bold text-center">
              ¡Guía descargada con éxito!
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DownloadSuccessPage;
