import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const horizontalAlignCode =
`
<!-- Horizontal Alignment -->
<Row className="justify-content-start">
<Col sm={4}>
...
</Col>
</Row>
<Row className="justify-content-center">
<Col sm={4}>
...
</Col>
</Row>
<Row className="justify-content-end">
<Col sm={4}>
...
</Col>
</Row>
`;

const HorizontalAlignExample = () => (
<PrismCode
    code={horizontalAlignCode}
    language={("js")}
    plugins={["line-numbers"]}
/>
);
export default HorizontalAlignExample;