import { useNavigate, useParams } from "react-router-dom";
import goBack from "../../assets/Filter/vector-4.svg";
import { notices } from "./data/notices";

const NoticeDetails = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate();

  const notice = notices.find((item) => item.id === parseInt(noticeId));

  const handleBack = () => {
    navigate(-1);
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
        <div className="flex items-center justify-between p-2 bg-[#edefe5]">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold flex items-center"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" />
          </button>
          <h4 className="pr-16 text-black text-xl font-bold truncate max-w-72">
            Noticias {">"} {notice.title}
          </h4>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          {/* Sección principal */}
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
                  <div className="flex flex-wrap md:flex-nowrap ">
                    {section.imageUrl && (
                      <img
                        src={section.imageUrl}
                        alt={section.subtitle}
                        className="w-24 h-24 rounded-lg mb-4 md:mb-0 md:mr-4"
                      />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold text-[#205106] text-center mb-2">
                        {section.subtitle}
                      </h2>
                      <p className="text-sm text-[#464543]">
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
