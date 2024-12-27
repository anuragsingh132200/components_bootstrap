import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })
const darkVariantCode =
`
<!-- Dark Variant -->
<Carousel indicators={false}>
    <Carousel.Item>
      <Image
        className="d-block w-100"
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
        className="d-block w-100"
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
        className="d-block w-100"
        src={img6}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h5>Working at a coffee shop</h5>
        <p className='text-dark'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>
`;

const DarkVariantExample = () => (
    <PrismCode
        code={darkVariantCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DarkVariantExample;