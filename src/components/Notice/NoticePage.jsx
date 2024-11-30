import { useNavigate } from "react-router-dom";
import goBack from "../../assets/Filter/vector-4.svg";
import { notices } from "./data/notices";

const NoticePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNoticeClick = (id) => {
    navigate(`/notice/${id}`);
  };

  return (
    <div className="bg-[#f8f9f5] flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <div className="bg-white w-full max-w-screen-md sm:max-w-screen-lg lg:max-w-screen-xl mx-auto shadow-lg min-h-screen">
        <div className="flex items-center p-2 bg-[#edefe5] sticky top-0 z-10 w-full">
          <button
            className="text-sm bg-transparent text-[#205106] font-bold"
            onClick={handleBack}
          >
            <img src={goBack} alt="Back" className="w-5 h-5" />
          </button>
          <h4 className="pr-64 text-center flex-grow text-black text-lg font-bold iphone12pro:text-xl iphone14promax:text-2xl">
            Noticias
          </h4>
        </div>

        <div className="mt-4 px-4 overflow-y-auto flex-grow custom-scrollbar pb-20">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="flex items-center bg-[#f3f5eb] p-3 rounded-lg mb-3 shadow cursor-pointer iphone12pro:p-4 iphone14promax:p-5"
              onClick={() => handleNoticeClick(notice.id)}
            >
              <img
                src={notice.imageUrl}
                alt={notice.title}
                className="w-[60px] h-[40px] rounded-lg mr-3 iphone12pro:w-[70px] iphone12pro:h-[50px] iphone14promax:w-[80px] iphone14promax:h-[60px]"
              />
              <div>
                <h3 className="font-bold text-[#205106] text-sm iphone12pro:text-base iphone14promax:text-lg">
                  {notice.title}
                </h3>
                <p className="text-xs text-[#464543] iphone12pro:text-sm iphone14promax:text-base">
                  {notice.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
