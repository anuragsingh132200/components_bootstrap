import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';

// Import Images
import img12 from '@assets/images/small/img-12.jpg'
import img11 from '@assets/images/small/img-11.jpg'
import img10 from '@assets/images/small/img-10.jpg'

function CarouselitemInterval() {
  return (
    <Carousel interval={2000} indicators={false}>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img12}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img11}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img10}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselitemInterval;