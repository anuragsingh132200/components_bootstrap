import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const inlineBLockCollapseCode =
    `
<!-- Inline & Block Element Collapse -->
<div className="mb-3">
    <h6 className="text-primary" onClick={() => setblockCol(!blockCol)}>
        <code>&lt;h6&gt;</code> Inline Element Collapse
    </h6>
    <span className="text-primary" onClick={() => setblockCol2(!blockCol2)}>
        <code>&lt;span&gt;</code> Block Element Collapse
    </span>
</div>
<Row className="g-2">
    <Collapse dimension='width' in={blockCol}>
        <div className="col-auto">
            <Card body className="mb-0" style={{width: "300px"}}>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart.
            </Card>
        </div>
    </Collapse>
    <Collapse dimension='width' in={blockCol2} >
        <div className="col-auto">
            <Card body className="mb-0" style={{width: "300px"}}>
                When you have created a new account schedule and set up the rows, you must set up columns.
            </Card>
        </div>
    </Collapse>
</Row>
`;

const InlineBLockCollapseExample = () => (
    <PrismCode
        code={inlineBLockCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default InlineBLockCollapseExample;