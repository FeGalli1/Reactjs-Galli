import { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import "./carrusel.css";

const CarouselImage = ({ numero }) => {
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        // Obtener la instancia de Firestore
        const db = getFirestore();
        
        // Obtener el documento del producto a partir de su ID
        const productoDoc = doc(db, "productos", numero);
        const productoSnapshot = await getDoc(productoDoc);

        // Verificar si el documento existe
        if (productoSnapshot.exists()) {
          // Extraer los datos del producto del documento
          const productoData = productoSnapshot.data();

          // Establecer los estados de imagen y descripción
          setImagen(productoData.imagen);
          setDescripcion(productoData.descripcion);
        } else {
          console.error("El producto no existe en la base de datos.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [numero]);

  // Verificar si tanto imagen como descripcion son valores válidos antes de mostrar el contenido
  if (!imagen || !descripcion) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carrusel-texto">
        <p>{descripcion}</p>
      </div>
      <div className="carruselImg-container">
        <img src={imagen} alt={`Imagen del producto ${numero}`} className="carruselImg" />
      </div>
    </div>
  );
};

export default CarouselImage;
