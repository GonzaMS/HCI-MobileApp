import guideImage1 from "../../../assets/Filter/frame-3.png";
import guideImage2 from "../../../assets/Filter/frame-4.png";
import guideImage3 from "../../../assets/Filter/frame-5.png";
import guideImage4 from "../../../assets/Filter/frame-6.png";
import guideImage5 from "../../../assets/Filter/frame-7.png";

export const guides = [
  {
    id: 1,
    title: "Reciclaje Básico",
    description: "Enseñamos las bases de reciclaje básico.",
    imageUrl: guideImage1,
    categoryId: 1,
    content: `
      Inicia tu camino hacia un estilo de vida más sostenible con esta guía básica de reciclaje.
      Primero, conoce los materiales reciclables, como papel, cartón, vidrio, plástico y metal.
      Establece contenedores de reciclaje en casa y asegúrate de separar adecuadamente los materiales.
      Reduce el uso de plástico y participa en programas de reciclaje locales.
    `,
  },
  {
    id: 2,
    title: "Limpieza de Residuos",
    description: "Clasifica tus residuos correctamente.",
    imageUrl: guideImage2,
    categoryId: 1,
    content: `
      Aprende a limpiar y clasificar los residuos correctamente. Identifica cuáles son reciclables
      y cuáles no. Usa bolsas específicas para cada tipo de residuo y contribuye al reciclaje adecuado.
    `,
  },
  {
    id: 3,
    title: "Separación de Residuos",
    description: "Separa correctamente tus residuos.",
    imageUrl: guideImage3,
    categoryId: 2,
    content: `
      Descubre cómo separar correctamente los residuos en orgánicos e inorgánicos para optimizar
      el reciclaje. Usa etiquetas claras y sigue las normativas locales para la separación de residuos.
    `,
  },
  {
    id: 4,
    title: "Reducir y Reutilizar",
    description: "Aprende a reducir y reutilizar tus residuos.",
    imageUrl: guideImage4,
    categoryId: 2,
    content: `
      Aprende a reducir el desperdicio reutilizando materiales en casa y en tu comunidad.
      Evita los productos de un solo uso y adopta hábitos sostenibles.
    `,
  },
  {
    id: 5,
    title: "Identificación de Residuos",
    description: "Identifica tus residuos para su correcto reciclaje.",
    imageUrl: guideImage5,
    categoryId: 3,
    content: `
      Aprende a identificar los residuos para su correcta disposición. Usa símbolos y
      etiquetas para asegurarte de que cada material vaya al lugar correcto.
    `,
  },
];

export const categoryNames = {
  1: "Reciclaje",
  2: "Reutilización",
  3: "Gestión de Residuos",
  4: "Tips",
};
