import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const induvidualIntervalCode =
    `
<!-- Individual Slide -->
<Carousel interval={2000} indicators={false}>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img12}
          alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img11}
          alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img10}
          alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const InduvidualIntervalExample = () => (
    <PrismCode
        code={induvidualIntervalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default InduvidualIntervalExample;