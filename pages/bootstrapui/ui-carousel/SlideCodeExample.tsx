import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Slides Only

const SlideCode =
    `
<!-- Slides Only -->
<Carousel controls={false} indicators={false}>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img1}
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img2}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img3}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const SlideCodeExample = () => (
    <PrismCode
        code={SlideCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default SlideCodeExample;