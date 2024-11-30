import noticeImage1 from "../../../assets/Notice/1.png";
import noticeImage2 from "../../../assets/Notice/2.png";
import noticeImage3 from "../../../assets/Notice/3.png";
import noticeImage4 from "../../../assets/Notice/4.png";
import noticeImage5 from "../../../assets/Notice/5.png";

import subNoticia1 from "../../../assets/Notice/noticia1/1.png";
import subNoticia2 from "../../../assets/Notice/noticia1/2.png";
import subNoticia3 from "../../../assets/Notice/noticia1/3.png";
import subNoticia4 from "../../../assets/Notice/noticia1/4.png";
import subNoticia5 from "../../../assets/Notice/noticia1/5.png";

export const notices = [
  {
    id: 1,
    title: "Tala de Árboles",
    description: "Enseñamos las bases de reciclaje básico.",
    imageUrl: noticeImage1,
    content: `
      Vecinos del Barrio San Vicente de Asunción expresaron inquietudes respecto a la futura construcción de un supermercado en un predio ubicado sobre la Avenida Félix Bogado y 21 Proyectadas. Indican que la obra implicaría la tala
      de 150 árboles.
      Un grupo de vecinos se reunió con varios diputados, a los cuales indicaron que la instalación de este supermercado implicaría la tala de unos 150 árboles

    `,
    additionalSections: [
      {
        content: `
          Los pobladores manifestaron mucha preocupación por este hecho y solicitaron que la construcción del supermercado sea motivo de una reunión con todos los diputados . 
        `,
        imageUrl: subNoticia5,
      },
    ],
  },
  {
    id: 2,
    title: "Calentamiento global",
    description: "Clasifica tus residuos correctamente.",
    imageUrl: noticeImage2,
    categoryId: 1,
    content: `
      El ministro de Agricultura de Paraguay, Carlos Giménez, dijo este miércoles que dudaba seriamente de que existiera el cambio climático. “Siempre hubo sequías e inundaciones en Paraguay”, señaló en una entrevista radial en Asunción
      Desde que tengo uso de razón, siempre hemos tenido esa situación, hay épocas en que las lluvias son oportunas y otras en que no, no hay que tomarlo como un cambio climático”
    `,
    additionalSections: [
      {
        content: `
          En opinión de Giménez, el calentamiento global se debe al uso de vehículos y a las emisiones de carbono. Dijo asimismo que analizaría los requisitos medioambientales.
        `,
        imageUrl: subNoticia4,
      },
    ],
  },
  {
    id: 3,
    title: "Casa de reciclados",
    description: "Separa correctamente tus residuos.",
    imageUrl: noticeImage3,
    content: `
      La construcción sostenible a partir del reciclado de basura es una técnica que se está utilizando cada vez más en todo el mundo para reducir la cantidad de residuos y minimizar el impacto ambiental. Es importante recordar que el sector construcción es responsable del 40% de las emisiones de CO2 a nivel global.El problema de la construcción es que sigue un modelo lineal: extracción, producción, construcción, uso y demolición

      Adentrándote más en la eficaz separación de residuos, es fundamental no solo conocer los materiales aceptados, sino comprender cómo identificarlos y clasificarlos correctamente. Al recibir residuos, asegúrate de utilizar contenedores designados específicamente para papel, cartón, vidrio, plástico y metal, facilitando así el proceso de reciclaje. Dedica tiempo a aprender a diferenciar los tipos de plásticos, ya que algunos son más reciclables que otros. La práctica de lavar los envases antes de desecharlos es esencial para evitar contaminaciones y garantizar la pureza de los materiales reciclados.
    `,
    additionalSections: [
      {
        content: `
          Por eso es un buen momento para convertir este viejo esquema en un modelo circular donde los desechos se reciclen y sustituyan, aunque sea parcialmente.
        `,
        imageUrl: subNoticia3,
      },
    ],
  },
  {
    id: 4,
    title: "La contaminacion",
    description: "Aprende a reducir y reutilizar tus residuos.",
    imageUrl: noticeImage4,
    content: `
      Para reducir y reutilizar tus residuos, comienza siendo consciente de tus hábitos y realiza un seguimiento de la generación de desechos. Al comprar, opta por productos duraderos y evita los desechables; lleva siempre contigo bolsas y envases reutilizables. Explora tiendas de segunda mano y repara artículos dañados en lugar de desecharlos. Dona lo que ya no necesitas y participa en eventos de intercambio. Prioriza productos con empaques sostenibles y mantente educado sobre prácticas sostenibles para compartir con otros. Estas pequeñas acciones diarias contribuyen significativamente a la reducción de residuos y promueven un estilo de vida más sostenible.
      
      Es esencial profundizar en la clasificación específica de cada tipo de desecho para asegurar un manejo y reciclaje efectivos. Al comenzar, familiarízate con los diferentes tipos de residuos: los orgánicos, como restos de comida; papel y cartón; vidrio; plástico; metal; y los residuos peligrosos, que pueden incluir baterías y productos químicos.
    `,
    additionalSections: [
      {
        subtitle: "La contaminación",
        content: `
          Al menos 253.000 muertes en la UE en 2021 se deben a una exposición a la contaminación por partículas finas (PM2.5) superior a la concentración.
        `,
        imageUrl: subNoticia1,
      },
    ],
  },
  {
    id: 5,
    title: "Autos electricos",
    description: "Identifica tus residuos para su correcto reciclaje.",
    imageUrl: noticeImage5,
    content: `
      Todos los vehículos sufren con el clima frío, sin embargo, los autos eléctricos sufren un poco más. El invierno y las bajas temperaturas, son los peores aliados para la movilidad eléctrica pues consumen más energía.
      Cuando hay bajas temperaturas un auto eléctrico es más sensible que el resto. Gasta más energía para mantener una mejor temperatura en la cabina y para que la batería funcione adecuadamente

      Es esencial profundizar en la clasificación específica de cada tipo de desecho para asegurar un manejo y reciclaje efectivos. Al comenzar, familiarízate con los diferentes tipos de residuos: los orgánicos, como restos de comida; papel y cartón; vidrio; plástico; metal; y los residuos peligrosos, que pueden incluir baterías y productos químicos.
    `,
    additionalSections: [
      {
        content: `
          Para verificar esto la consultora Recurrent, realizó un estudio en Estados Unidos durante la temporada invernal 2022-2023, pero hasta ahora arrojó sus resultados. 
        `,
        imageUrl: subNoticia2,
      },
    ],
  },
];
