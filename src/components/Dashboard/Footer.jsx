import { useNavigate } from "react-router-dom";

import quizIcon from "../../assets/Dashboard/vector-1.svg";
import newsIcon from "../../assets/Dashboard/vector-4.svg";
import homeIcon from "../../assets/Dashboard/vector-5.svg";
import guidesIcon from "../../assets/Dashboard/vector.svg";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute w-[393px] h-[73px] bottom-0 left-0 bg-[#edefe5] flex justify-evenly items-center">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center bg-transparent focus:outline-none"
      >
        <img className="w-[31px] h-[33px]" alt="Home" src={homeIcon} />
      </button>

      <button
        onClick={() => navigate("/guias")}
        className="flex items-center justify-center bg-transparent focus:outline-none"
      >
        <img className="w-[30px] h-[33px]" alt="Guías" src={guidesIcon} />
      </button>

      <button
        onClick={() => navigate("/quizzes")}
        className="flex items-center justify-center bg-transparent focus:outline-none"
      >
        <img className="w-[30px] h-[33px]" alt="Quizzes" src={quizIcon} />
      </button>

      <button
        onClick={() => navigate("/noticias")}
        className="flex items-center justify-center bg-transparent focus:outline-none"
      >
        <img className="w-[31px] h-[33px]" alt="Noticias" src={newsIcon} />
      </button>
    </div>
  );
};

export default Footer;
