import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const withControlCode =
    `
<!-- With Controls -->
<Carousel indicators={false}>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img4}
            alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img5}
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img6}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const WithControlExample = () => (
    <PrismCode
        code={withControlCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default WithControlExample;