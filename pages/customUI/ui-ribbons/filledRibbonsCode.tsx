import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Filled Ribbons

const filledRibbonsCode =
    `
<!-- Filled Ribbons -->
<Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-primary">New</div>
        <h5 className="fs-14 text-end">Fill Ribbon</h5>
        <div className="ribbon-content mt-3 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-success">Sale</div>
        <h5 className="fs-14 text-end">Fill Ribbon</h5>
        <div className="ribbon-content mt-3 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>

<!-- Right Ribbon -->
<Card className="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
    <Card.Body>
        <div className="ribbon ribbon-info">New</div>
        <h5 className="fs-14 text-start">Fill Ribbon Right</h5>
        <div className="ribbon-content mt-3 text-muted">
            <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
        </div>
    </Card.Body>
</Card>
`;

const FilledRibbonsExample = () => (
    <PrismCode
        code={filledRibbonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default FilledRibbonsExample;