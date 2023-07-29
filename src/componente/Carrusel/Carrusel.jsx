import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../ExampleCarouselImagen/ExampleCarouselImagen';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage numero="1" />
        <Carousel.Caption/>
      </Carousel.Item>
      
      <Carousel.Item>
        <CarouselImage numero="2" />
        <Carousel.Caption/>
      </Carousel.Item>
      
      <Carousel.Item>
        <CarouselImage numero="3" />
        <Carousel.Caption/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
