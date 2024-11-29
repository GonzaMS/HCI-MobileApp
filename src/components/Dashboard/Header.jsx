import leafIcon from "../../assets/Dashboard/leaf--nature-environment-leaf-ecology-plant-plants-eco.png";
import recycleIcon from "../../assets/Dashboard/recycle-1--nature-sign-environment-protect-save-arrows.png";

const Header = () => (
  <div className="absolute w-[393px] h-[73px] top-0 left-0 bg-[url('../../assets/rectangle-40.svg')] bg-cover">
    <div className="absolute h-[25px] top-[43px] left-[293px] font-semibold text-[#205106] text-[10px] tracking-[0.35px] leading-[25px] whitespace-nowrap">
      RECYCLE NOW
    </div>
    <div className="absolute w-[25px] h-[26px] top-[23px] left-[301px] bg-[#386a1f]"></div>
    <img
      className="absolute w-[17px] h-[17px] top-[27px] left-[305px]"
      alt="Recycle nature"
      src={recycleIcon}
    />
    <div className="absolute w-[25px] h-[26px] top-[23px] left-[326px] bg-[#9dd67d]"></div>
    <img
      className="absolute w-3.5 h-3.5 top-7 left-[332px]"
      alt="Leaf nature"
      src={leafIcon}
    />
  </div>
);

export default Header;
