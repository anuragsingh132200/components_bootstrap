import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

// Import images
import img4 from '@assets/images/small/img-4.jpg'
import img5 from '@assets/images/small/img-5.jpg'
import img6 from '@assets/images/small/img-6.jpg'

function controlledSlide() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img4}
          alt="First slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img5}
          alt="Second slide"
          />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img6}
          alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>
  );
};

export default controlledSlide;