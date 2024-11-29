import { useNavigate } from "react-router-dom";

const LearningRouteCard = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/guias");
  };

  return (
    <div className="w-[331px] h-24 top-[283px] absolute left-8">
      <div className="relative w-[329px] h-24 bg-[#edefe5] rounded-[10px]">
        <div className="absolute w-[106px] h-[30px] top-[59px] left-4">
          <button
            onClick={handleNavigation}
            className="relative w-[104px] h-[30px] rounded-[5px] bg-[#386a1f] flex items-center justify-center"
          >
            <span className="absolute h-3 top-[7px] left-[20px] [font-family:'Roboto',Helvetica] font-extrabold text-white text-[10px] tracking-[0.35px] leading-[normal] whitespace-nowrap">
              IR A GUÍAS
            </span>
          </button>
        </div>

        <div className="flex flex-col items-start gap-2.5 absolute w-[302px] h-[35px] top-[13px] left-4">
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#464543] text-xs tracking-[0] leading-[5px]">
            Accede a nuestra ruta de aprendizaje para que tengas
          </p>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#464543] text-xs tracking-[0] leading-[5px]">
            todos los conocimientos necesarios en el menor tiempo
          </p>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#464543] text-xs tracking-[0] leading-[5px]">
            posible!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningRouteCard;
