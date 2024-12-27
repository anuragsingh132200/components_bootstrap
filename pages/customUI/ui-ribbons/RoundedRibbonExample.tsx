import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Rounded Ribbon
const roundedRibbonCode =
    `
<!-- Rounded Ribbon -->
<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-primary round-shape">Primary</div>
        <h5 className="fs-14 text-end">Rounded Ribbon</h5>

        <div className="ribbon-content mt-4 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-success round-shape">Success</div>
        <h5 className="fs-14 text-end">Rounded Ribbon</h5>
        <div className="ribbon-content mt-4 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<!-- Right Ribbon -->
<Card className="ribbon-box border shadow-none right mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-info round-shape">Info</div>
        <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
        <div className="ribbon-content mt-4 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>
`;

const RoundedRibbonExample = () => (
    <PrismCode
        code={roundedRibbonCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RoundedRibbonExample;