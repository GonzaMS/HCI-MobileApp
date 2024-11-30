import noticeImage1 from "../../../assets/Notice/1.png";
import noticeImage2 from "../../../assets/Notice/2.png";
import noticeImage3 from "../../../assets/Notice/3.png";
import noticeImage4 from "../../../assets/Notice/4.png";
import noticeImage5 from "../../../assets/Notice/5.png";

import subNoticia1 from "../../../assets/Notice/noticia1/1.png";

export const notices = [
  {
    id: 1,
    title: "Tala de Árboles",
    description: "Enseñamos las bases de reciclaje básico.",
    imageUrl: noticeImage1,
    categoryId: 1,
    content: `
      La contaminación ambiental en ciudades de Estados Unidos está afectando desproporcionalmente a las familias hispanas. Uno de cada tres latinos viven en áreas que exceden los límites de contaminación, según la Oficina del Censo. El menor nivel de ingresos de los hispanos es uno de los factores que según expertos, terminan llevando a los latinos a vivir en áreas industriales con menor calidad del aire.
    `,
    additionalSections: [
      {
        subtitle: "La contaminación",
        content: `
          Al menos 253.000 muertes en la UE en 2021 se deben a una exposición a la contaminación por partículas finas (PM2.5) superior a la concentración.
        `,
        imageUrl: subNoticia1,
      },
      {
        subtitle: "Grandes avances",
        content: `
          A pesar de los "grandes avances" realizados en los últimos años, el impacto de la contaminación atmosférica en nuestra salud sigue siendo demasiado elevado.
        `,
        imageUrl: noticeImage3,
      },
    ],
    videoUrl: "https://www.youtube.com/embed/YiHTNfKJwAw",
  },
  {
    id: 2,
    title: "Calentamiento global",
    description: "Clasifica tus residuos correctamente.",
    imageUrl: noticeImage2,
    categoryId: 1,
    content: `
      La limpieza de residuos de manera sostenible implica una evaluación inicial para clasificar los desechos, utilizando el equipo adecuado y organizando un equipo eficiente. Durante la recogida selectiva, separa los materiales reciclables y no reciclables, identificando y manejando adecuadamente los residuos peligrosos. Reduzca la generación de residuos utilizando contenedores reutilizables, educa a la comunidad sobre prácticas sostenibles y coordina con servicios locales de gestión de residuos para una eliminación adecuada. Registra los datos de la limpieza y celebra los esfuerzos del equipo para fomentar una conciencia ambiental duradera y un compromiso continuo.

      La limpieza de residuos de manera sostenible es un proceso integral que comienza con una evaluación inicial para clasificar eficientemente los desechos. Es fundamental contar con el equipo adecuado y organizar un equipo efectivo que pueda llevar a cabo una recogida selectiva. Durante este proceso, es esencial separar con precisión los materiales reciclables de los no reciclables, además de identificar y manejar adecuadamente los residuos peligrosos, asegurando la seguridad del equipo y del entorno.
    `,
    videoUrl: "https://www.youtube.com/embed/d9u6OHt4ojI",
  },
  {
    id: 3,
    title: "Casa de reciclados",
    description: "Separa correctamente tus residuos.",
    imageUrl: noticeImage3,
    categoryId: 2,
    content: `
      La separación efectiva de residuos es esencial para un sistema de reciclaje exitoso. Primero, conoce los tipos de materiales aceptados en tu área, que generalmente incluyen papel, cartón, vidrio, plástico y metal. Al recibir residuos, clasifica en contenedores designados según el material. Aprende a identificar y separar correctamente los distintos tipos de plásticos, ya que algunos no son reciclables. Lava los envases antes de desecharlos para prevenir la contaminación. Familiarízate con las normativas locales, ya que pueden variar. Educa a tu comunidad sobre la importancia de la separación de residuos y participa activamente en programas de reciclaje locales. Establecer un sistema eficiente de separación en el hogar y en la comunidad contribuirá significativamente a maximizar la cantidad de materiales reciclados.

      Adentrándote más en la eficaz separación de residuos, es fundamental no solo conocer los materiales aceptados, sino comprender cómo identificarlos y clasificarlos correctamente. Al recibir residuos, asegúrate de utilizar contenedores designados específicamente para papel, cartón, vidrio, plástico y metal, facilitando así el proceso de reciclaje. Dedica tiempo a aprender a diferenciar los tipos de plásticos, ya que algunos son más reciclables que otros. La práctica de lavar los envases antes de desecharlos es esencial para evitar contaminaciones y garantizar la pureza de los materiales reciclados.
    `,
    videoUrl: "https://www.youtube.com/embed/5spEt5jwZHg",
  },
  {
    id: 4,
    title: "La contaminacion",
    description: "Aprende a reducir y reutilizar tus residuos.",
    imageUrl: noticeImage4,
    categoryId: 2,
    content: `
      Para reducir y reutilizar tus residuos, comienza siendo consciente de tus hábitos y realiza un seguimiento de la generación de desechos. Al comprar, opta por productos duraderos y evita los desechables; lleva siempre contigo bolsas y envases reutilizables. Explora tiendas de segunda mano y repara artículos dañados en lugar de desecharlos. Dona lo que ya no necesitas y participa en eventos de intercambio. Prioriza productos con empaques sostenibles y mantente educado sobre prácticas sostenibles para compartir con otros. Estas pequeñas acciones diarias contribuyen significativamente a la reducción de residuos y promueven un estilo de vida más sostenible.
      
      Es esencial profundizar en la clasificación específica de cada tipo de desecho para asegurar un manejo y reciclaje efectivos. Al comenzar, familiarízate con los diferentes tipos de residuos: los orgánicos, como restos de comida; papel y cartón; vidrio; plástico; metal; y los residuos peligrosos, que pueden incluir baterías y productos químicos.
    `,
    videoUrl: "https://www.youtube.com/embed/a4G-Kcc6ouY",
  },
  {
    id: 5,
    title: "Autos electricos",
    description: "Identifica tus residuos para su correcto reciclaje.",
    imageUrl: noticeImage5,
    categoryId: 3,
    content: `
      Para reducir y reutilizar tus residuos, comienza siendo consciente de tus hábitos y realiza un seguimiento de la generación de desechos. Al comprar, opta por productos duraderos y evita los desechables; lleva siempre contigo bolsas y envases reutilizables. Explora tiendas de segunda mano y repara artículos dañados en lugar de desecharlos. Dona lo que ya no necesitas y participa en eventos de intercambio. Prioriza productos con empaques sostenibles y mantente educado sobre prácticas sostenibles para compartir con otros. Estas pequeñas acciones diarias contribuyen significativamente a la reducción de residuos y promueven un estilo de vida más sostenible.

      Es esencial profundizar en la clasificación específica de cada tipo de desecho para asegurar un manejo y reciclaje efectivos. Al comenzar, familiarízate con los diferentes tipos de residuos: los orgánicos, como restos de comida; papel y cartón; vidrio; plástico; metal; y los residuos peligrosos, que pueden incluir baterías y productos químicos.
    `,
    videoUrl: "https://www.youtube.com/embed/8f9jNtSgIx8",
  },
];
