import { useLocation } from "react-router-dom";
import Footer from "../Dashboard/Footer";
import Header from "../Dashboard/Header";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="bg-[#f8f9f5] flex flex-col w-full min-h-screen overflow-x-hidden">
      {location.pathname === "/" && (
        <div className="w-full bg-white">
          <Header />
        </div>
      )}
      <div className="bg-white w-full max-w-screen-md iphone12pro:max-w-screen-sm iphone14promax:max-w-screen-lg mx-auto shadow-lg flex flex-col h-full">
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
