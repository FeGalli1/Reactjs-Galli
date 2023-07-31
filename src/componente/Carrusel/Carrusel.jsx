import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../ExampleCarouselImagen/ExampleCarouselImagen';

const UncontrolledExample = ({ productos }) => {
  console.log(productos);
  return (
    <Carousel>
      {productos.map((producto, index) => (
        <Carousel.Item key={index}>
          <CarouselImage
            imagenURL={producto.imageURL}
            description={producto.description}
          />
          <Carousel.Caption />
        </Carousel.Item>

      ))}
    
    </Carousel>
    
  );
};

export default UncontrolledExample;

