import { useNavigate } from "react-router-dom";
import quizIcon from "../../assets/Dashboard/vector-1.svg";
import newsIcon from "../../assets/Dashboard/vector-4.svg";
import homeIcon from "../../assets/Dashboard/vector-5.svg";
import guidesIcon from "../../assets/Dashboard/vector.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-[#edefe5] flex justify-around items-center px-4 py-3 shadow-md">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center focus:outline-none"
      >
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Home" src={homeIcon} />
      </button>

      <button
        onClick={() => navigate("/guias")}
        className="flex items-center justify-center focus:outline-none"
      >
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Guías" src={guidesIcon} />
      </button>

      <button
        onClick={() => navigate("/quizzes")}
        className="flex items-center justify-center focus:outline-none"
      >
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Quizzes" src={quizIcon} />
      </button>

      <button
        onClick={() => navigate("/noticias")}
        className="flex items-center justify-center focus:outline-none"
      >
        <img className="w-6 h-6 sm:w-8 sm:h-8" alt="Noticias" src={newsIcon} />
      </button>
    </div>
  );
};

export default Footer;
