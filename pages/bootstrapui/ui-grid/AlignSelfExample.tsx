import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const alignSelfCode =
    `
<!-- Align Self -->
<Row className="g-2" style={{minHeight: "9rem"}}>
    <Col sm={4} className="align-self-start">
        ...
    </Col>
    <Col sm={4} className="align-self-center">
        ...
    </Col>
    <Col sm={4} className="align-self-end">
        ...
    </Col>
</Row>
`;

const AlignSelfExample = () => (
    <PrismCode
        code={alignSelfCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default AlignSelfExample;