import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Placeholder

const defaultPlaceholderCode =
`
<!-- Base Examples -->
<Card>
    <Image src={img1} width="341" className="card-img-top" alt="card img" />
    <Card.Body>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link href="#" className="btn btn-primary">Go somewhere</Link>
    </Card.Body>
</Card>

<Card>
    <Image src={img2} width="341" className="card-img-top" alt="card dummy img" />
    <Card.Body>
        <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
        </p>
        <Link href="#" className="btn btn-primary disabled placeholder col-6"></Link>
    </Card.Body>
</Card>
`;

const DefaultPlaceholderExample = () => (
    <PrismCode
        code={defaultPlaceholderCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DefaultPlaceholderExample
