import { FaInfoCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import goBack from "../../assets/Filter/vector-4.svg";
import { notices } from "./data/notices";

const NoticeDetails = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();

  const notice = notices.find((item) => item.id === parseInt(noticeId));

  const handleBack = () => {
    navigate(-1);
  };

  const handleReport = () => {
    navigate("/report");
  };

  if (!notice) {
    return (
      <div className="text-center mt-10">
        <p>No se encontró la noticia seleccionada.</p>
        <button
          className="mt-4 px-4 py-2 bg-[#386a1f] text-white rounded"
          onClick={handleBack}
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9f5] flex flex-col min-h-screen">
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center p-2 justify-between bg-[#edefe5]">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold flex items-center"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" />
          </button>
          <h4
            className="pr-24 text-black text-xl font-bold truncate max-w-72"
            data-tooltip-id="title"
            data-tooltip-content={notice.title}
          >
            Noticias {">"} {notice.title}
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
          <div className="flex flex-wrap md:flex-nowrap mb-4">
            <img
              src={notice.imageUrl}
              alt={notice.title}
              className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex-grow">
              <h1 className="text-xl font-bold text-[#205106] mb-4">
                {notice.title}
              </h1>
              <p className="text-sm text-[#464543]">{notice.content}</p>
            </div>
          </div>

          {notice.additionalSections && (
            <>
              {notice.additionalSections.map((section, index) => (
                <div key={index} className="mt-6">
                  <h2 className="text-lg font-semibold text-[#205106] text-center mb-2">
                    {section.subtitle}
                  </h2>

                  <div className="flex">
                    {section.imageUrl && (
                      <img
                        src={section.imageUrl}
                        alt={section.subtitle}
                        className="w-24 h-24 rounded-lg mb-4 md:mb-0 md:mr-4"
                      />
                    )}
                    <div>
                      <p className="pl-2 pt-1 text-sm text-[#464543]">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
