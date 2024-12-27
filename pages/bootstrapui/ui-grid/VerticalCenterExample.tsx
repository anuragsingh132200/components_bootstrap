import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const verticalCenterCode =
    `
<!-- Vertical alignment (align-items-center) -->
<Row className="align-items-center" style={{minHeight: "6rem"}}>
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

const VerticalCenterExample = () => (
    <PrismCode
        code={verticalCenterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default VerticalCenterExample;