import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

// Import images
import img9 from '@assets/images/small/img-9.jpg'
import img8 from '@assets/images/small/img-8.jpg'
import img7 from '@assets/images/small/img-7.jpg'

function DisableTouch() {
  return (
    <Carousel indicators={false}>
        <Carousel.Item>
            <Image
                src={img9}
                className="d-block img-fluid"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block img-fluid"
                src={img8}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block img-fluid"
                src={img7}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  );
};

export default DisableTouch;