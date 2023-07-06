const productos = [
    {
      id: "1",
      category: "lienzo",
      stock:1,
      nombre: 'Pexels Steve Johnson',
      precio: 15000,
      imagen: 'https://i.ibb.co/H7zYsZZ/pexels-steve-johnson.jpg',
      descripcion:
        'Arte moderno virtual. Esta obra fue publicada el 9 de agosto del 2021 por Steve Johnson en pexels. Fue diseñada virtualmente con el software Adobe Photoshop.',
    },
    {
      id: "2",
      category: "lienzo",
      stock:1,
      nombre: 'Costa En Santa Cristina',
      precio: 94000,
      imagen: 'https://i.ibb.co/Cb6FhcT/COSTA-EN-SANTA-CRISTINA.jpg',
      descripcion:
        'Una obra del autor Joaquin Sorolla Y Bastida y fue hecha en el año 1914. Esta hecha con la tecnica de óleo sobre lienzo y tiene una dimension de 99x74 cm',
    },
    {
      id: "3",
      category: "papel",
      stock:1,
      nombre: 'Tintas Tintas y Tintas',
      precio: 10000,
      imagen: 'https://i.ibb.co/JcZpxNs/Tintas-tintas-y-tintas.jpg',
      descripcion:
        'Una obra de la autora Luchi Sanguinetti. El color y la forma prevalecen en mi visión. Aparece reiteradamente formas percibidas en el pasado, las cuales han dejado huella en mi memoria.',
    },
    {
      id: "4",
      category: "papel",
      stock:1,
      nombre: 'On The Road From Moret',
      precio: 11000,
      imagen: 'https://i.ibb.co/MPyjZWF/Alfred-Sisley-On-the-Road-from-Moret.jpg',
      descripcion:
        'Una obra del autor Alfred Sisley y fue hecha en el año 1882.El dibujo lleva una inscripción que identifica el lugar como el camino de Moret a Sainte-Mammès. Tiene un tamaño de 54 x 73 cm',
    },
  ];

  export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        },500 )  
    })
  }

  export const getProductosById = (productoId) => {
        return new Promise((resolve) => {
          setTimeout(() =>{
            resolve(productos.find(prod => prod.id === productoId))
        },500 )  
        })
  }

  export const getProductosByCategory = (productoCategory) => {
    return new Promise((resolve) => {
      resolve(productos.filter((prod) => prod.category === productoCategory));
    });
  };
  