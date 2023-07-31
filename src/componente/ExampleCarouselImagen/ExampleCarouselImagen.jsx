import "./carrusel.css";

const CarouselImage = ({ imagenURL, description }) => {
  // Verificar si tanto imagen como descripcion son valores válidos antes de mostrar el contenido
  if (!imagenURL || !description) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carrusel-texto">
        <p>{description}</p>
      </div>
      <div className="carruselImg-container">
        <img
          src={imagenURL}
          alt={`Imagen del producto ${description}`}
          className="carruselImg"
        />
      </div>
    </div>
  );
};

export default CarouselImage;
