const products = [
  {
    name: "🍇 Cremosito de Mora",
    price: 3000,
    text_color: "#a3224a", // morado intenso
    background_color: "#e3bdc9", // pastel morado
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      ¡Frutos del bosque a otro nivel! 🌿
      Cremoso y refrescante, con el dulzor natural de la mora y su color morado intenso.
      Cada cucharada es como una escapada a la campiña. 🏞️✨
    `,
    images: [
      "/images/helados/mora/1.jpg",
   
    ],
    videos: ["https://youtube.com/shorts/zYOdZPVTLpE?feature=share"],
  },
  {
    name: "🥥 Cremosito de Coco",
    price: 3000,
    text_color: "#7a4b33", // marrón coco
    background_color: "#d7c9c2", // pastel coco
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      Un pedacito de paraíso en cada bocado 🌴
      Cremoso, suave y lleno de trocitos de coco que te transportan directo a la playa. 🌊
      ¡Sabor tropical que conquista! 🏖️
    `,
    images: [
      "/images/helados/coco/2.jpg",
    
    ],
    videos:[
      'https://youtube.com/shorts/xTnhAnPXrYM?feature=share'
    ]
  },
  {
    name: "🍊 Cremosito de Maracuyá",
    price: 3000,
    text_color: "#fe8301", // naranja maracuyá
    background_color: "#ffdab3", // pastel maracuyá
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      Explosión cítrica y refrescante 🔥
      La acidez perfecta del maracuyá combinada con suavidad cremosa.
      Ideal para los que aman el equilibrio entre dulce y ácido. 😋
    `,
    images: ["/images/helados/maracuya/1.jpg"],
    videos:['https://youtube.com/shorts/sd00cOOLPOc?feature=share']
  },
  {
    name: "🍬 Cremosito de Chicle",
    price: 3000,
    text_color: "#32b192", // rosa chicle (hex turquesa)
    background_color: "#c2e8de", // pastel chicle
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      ¡Vuelve a la niñez con su divertido sabor! 🎈
      Cremoso color pastel, con ese toque dulce y nostálgico del chicle.
      Perfecto para sorpresas y fiestas. 🎉
    `,
    images: ["/images/helados/chicle/1.jpg"],
    videos:['https://youtube.com/shorts/P4Iv5HrNWgI?feature=share']
  },
  {
    name: "🍓 Cremosito de Fresa",
    price: 3000,
    text_color: "#ff4d6a", // rojo fresa
    background_color: "#ffcad2", // pastel fresa
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      Frescura de huerta en cada cucharada 🍓
      Con trocitos de fresa natural y un aroma que enamora.
      Un clásico que nunca falla. ❤️
    `,
    images: ["/images/helados/fresa/1.jpg"],
    videos:['https://youtube.com/shorts/uhLmpgYQP0k?feature=share']
  },
  {
    name: "🥜 Cremosito de Maní",
    price: 3000,
    text_color: "#d9a066", // dorado maní
    background_color: "#f4e2d1", // pastel maní
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      Irresistible sabor a maní tostado 🤤
      Cremoso y con un toque salado-dulce que hace match perfecto.
      ¡Puro placer para los amantes del maní! ✨
    `,
    images: ["/images/helados/mani/1.jpg"],
    videos:['https://youtube.com/shorts/DRwnJUd7JYg?feature=share']
  },
  {
    name: "🍍 Cremosito de Piña",
    price: 3000,
    text_color: "#f7c200", // amarillo piña
    background_color: "#fdedb2", // pastel piña
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      Dulce, jugoso y refrescante 🍍
      La piña tropical con un toque cremoso que alegra cualquier momento.
      ¡Una fiesta de sabor veraniego! ☀️
    `,
    images: ["/images/helados/pina/1.jpg"],
    videos:['https://youtube.com/shorts/N4M5YiBr1IE?feature=share']
  },
  {
    name: "🧀 Cremosito de Queso",
    price: 3000,
    text_color: "#3d1d20", // amarillo queso (marrón oscuro)
    background_color: "#c5bbbc", // pastel queso
    capacidad: "1.5–2 toneladas",
    toneladas: "Potencia: 3 HP (trifásico)",
    medidas: "2 m × 2 m × 2.40 m",
    voltaje: "220 V",
    descipcion: `
      La combinación perfecta entre dulce y salado 😍
      Cremoso sabor a queso crema con un final suave y adictivo.
      ¡Una experiencia gourmet! 🧑‍🍳
    `,
    images: ["/images/helados/queso/1.jpg"],
    videos:['https://youtube.com/shorts/Jtuhjx6DMuY?feature=share']
  },
];

export { products };
