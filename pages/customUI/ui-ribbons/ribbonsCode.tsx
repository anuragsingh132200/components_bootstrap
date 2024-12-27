import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Ribbons

const ribbonsCode =
    `
<!-- Ribbons -->
<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-primary ribbon-shape">Primary</div>
        <h5 className="fs-14 text-end">Ribbon Shape</h5>
        <div className="ribbon-content text-muted mt-4">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-success ribbon-shape">Success</div>
        <h5 className="fs-14 text-end">Ribbon Shape</h5>
        <div className="ribbon-content text-muted mt-4">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0 right">
    <Card.Body>
        <div className="ribbon ribbon-info ribbon-shape">Info</div>
        <h5 className="fs-14 text-start">Ribbon Shape Right</h5>
        <div className="ribbon-content text-muted mt-4">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>
`;

const RibbonsExample = () => (
    <PrismCode
        code={ribbonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RibbonsExample;