import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const verticalEndCode =
    `
<!-- Vertical alignment (align-items-end) -->
<Row className="align-items-end" style={{minHeight: "6rem"}}>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
    <Col sm={4}>
        ...
    </Col>
</Row>
`;

const VerticalEndExample = () => (
    <PrismCode
        code={verticalEndCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default VerticalEndExample;