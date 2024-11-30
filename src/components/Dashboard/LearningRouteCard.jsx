const LearningRouteCard = () => {
  return (
    <div className="w-full p-3 mt-2 iphone12pro:mt-3 iphone14promax:mt-2">
      <div className="bg-[#edefe5] rounded-lg p-3 shadow-lg iphone12pro:p-4 iphone14promax:p-2">
        <h3 className="text-base font-semibold text-[#205106] mb-1 iphone12pro:text-lg iphone14promax:text-xl">
          Ruta de Aprendizaje
        </h3>
        <p className="text-xs text-[#464543] iphone12pro:text-sm iphone14promax:text-base">
          Accede a nuestra ruta de aprendizaje para tener todos los
          conocimientos necesarios en el menor tiempo posible.
        </p>
        <button className="mt-3 px-3 py-1 bg-[#386a1f] text-white rounded shadow-md iphone12pro:py-2 iphone12pro:px-4 iphone14promax:py-3 iphone14promax:px-5">
          IR A GUÍAS
        </button>
      </div>
    </div>
  );
};

export default LearningRouteCard;
