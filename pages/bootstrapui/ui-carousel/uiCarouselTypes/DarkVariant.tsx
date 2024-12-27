import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';

// Import Images
import img4 from '@assets/images/small/img-4.jpg'
import img5 from '@assets/images/small/img-5.jpg'
import img6 from '@assets/images/small/img-6.jpg'

function DarkVariant() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img4}
          alt="First slide"
        />

        <Carousel.Caption>
          <h5>Drawing a sketch</h5>
          <p className='text-dark'>Too much or too little spacing, as in the example below, can make things unpleasant for the reader.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img5}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h5>Blue clock on a pastel background</h5>
            <p className='text-dark'>In some designs, you might adjust your tracking to create a certain artistic effect asked them what graphic design tips they live.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block img-fluid"
          src={img6}
          alt="Third slide"
        />

        <Carousel.Caption>
            <h5>Working at a coffee shop</h5>
            <p className='text-dark'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default DarkVariant;