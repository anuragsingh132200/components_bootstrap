import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const withCaptionCode =
 `
<!-- With Captions -->
<Carousel indicators={false}>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img7}
          alt="First slide"
        />
    <Carousel.Caption>
        <h5 className="text-white">Sunrise above a beach</h5>
        <p>You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h5 className="text-white">Working from home little spot</h5>
            <p>Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <Image
          className="d-block w-100"
          src={img9}
          alt="Third slide"
        />

        <Carousel.Caption>
            <h5 className="text-white">Dramatic clouds at the Golden Gate Bridge</h5>
            <p>Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>
`;

const WithCaptionExample = () => (
    <PrismCode
        code={withCaptionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default WithCaptionExample;