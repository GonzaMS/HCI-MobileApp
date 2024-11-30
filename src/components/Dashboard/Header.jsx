import leafIcon from "../../assets/Dashboard/leaf--nature-environment-leaf-ecology-plant-plants-eco.png";
import recycleIcon from "../../assets/Dashboard/recycle-1--nature-sign-environment-protect-save-arrows.png";

const Header = () => (
  <div className="w-full h-[73px] bg-[url('../../assets/rectangle-40.svg')] bg-cover flex items-center justify-between px-4">
    {/* Texto */}
    <div className="text-[#205106] font-semibold text-sm tracking-wide">
      RECYCLE NOW
    </div>

    {/* Iconos */}
    <div className="flex items-center space-x-4">
      <div className="w-[26px] h-[26px] bg-[#386a1f] flex items-center justify-center rounded">
        <img
          className="w-[17px] h-[17px]"
          alt="Recycle nature"
          src={recycleIcon}
        />
      </div>
      <div className="w-[26px] h-[26px] bg-[#9dd67d] flex items-center justify-center rounded">
        <img className="w-3.5 h-3.5" alt="Leaf nature" src={leafIcon} />
      </div>
    </div>
  </div>
);

export default Header;
