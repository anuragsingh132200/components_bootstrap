import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

// Import images
import img1 from '@assets/images/small/img-1.jpg'
import img2 from '@assets/images/small/img-2.jpg'
import img3 from '@assets/images/small/img-3.jpg'

function WithIndicators() {
  return (
    <Carousel controls={false}>
        <Carousel.Item>
          <Image
            className="d-block img-fluid"
            src={img3}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block img-fluid"
            src={img2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block img-fluid"
            src={img1}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  );
};

export default WithIndicators;