import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const horizontalCollapseCode =
    `
<!-- Horizontal Collapse -->
<div className="mb-3">
    <Button variant='primary' onClick={() => setcolOpen(!colOpen)}>
        Toggle Width Collapse
    </Button>
</div>
<Collapse in={colOpen} dimension="width">
    <div id='example-collapse-text'>
        <Card body className="mb-0" style={{width: "300px"}}>
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </Card>
    </div>
</Collapse>
`;

const HorizontalCollapseExample = () => (
    <PrismCode
        code={horizontalCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default HorizontalCollapseExample;