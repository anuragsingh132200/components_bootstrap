    import dynamic from "next/dynamic";
    const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Vertical alignment (align-items-start)

const verticalStartCode =
`
<!-- Vertical alignment (align-items-start) -->
<Row className="align-items-start" style={{minHeight: "6rem"}}>
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
</Row>
`;

const VerticalStartExample = () => (
    <PrismCode
        code={verticalStartCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default VerticalStartExample;