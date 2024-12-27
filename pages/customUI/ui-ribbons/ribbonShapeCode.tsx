import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Ribbon Shape

const ribbonShapeCode =
    `
<!-- Ribbon Shape -->
<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="d-flex">
            <div className="ribbon ribbon-primary vertical-shape">Primary</div>
            <div className="flex-grow-1">
                <div className="ribbon-content text-muted ms-5">
                    <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none mb-lg-0">
    <Card.Body>
        <div className="d-flex">
                 <div className="ribbon ribbon-success vertical-shape">Success</div>
            <div className="flex-grow-1">
                <div className="ribbon-content text-muted ms-5">
                    <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none right mb-lg-0">
    <Card.Body>
        <div className="d-flex">
            <div className="ribbon ribbon-info vertical-shape">Info</div>
            <div className="flex-grow-1">
                <div className="ribbon-content text-muted me-5">
                    <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                        mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                </div>
            </div>
        </div>
    </Card.Body>
</Card>
`;

const RibbonShapeExample = () => (
    <PrismCode
        code={ribbonShapeCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RibbonShapeExample;