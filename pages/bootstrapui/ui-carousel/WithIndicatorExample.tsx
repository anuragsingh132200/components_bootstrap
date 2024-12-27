import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const withIndicatorCode =
`
<!-- With Indicators -->
<Carousel controls={false}>
    <Carousel.Item>
        <Image
            className="d-block w-100"
            src={img3}
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
            src={img1}
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
`;

const WithIndicatorExample = () => (
    <PrismCode
        code={withIndicatorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default WithIndicatorExample;