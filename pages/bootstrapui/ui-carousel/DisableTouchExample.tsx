import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const disableTouchCode =
    `
<!-- Disable Touch Swiping -->
<Carousel indicators={false}>
    <Carousel.Item>
        <Image
            src={img9}
            className="d-block w-100"
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img8}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img7}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const DisableTouchExample = () => (
    <PrismCode
        code={disableTouchCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DisableTouchExample;