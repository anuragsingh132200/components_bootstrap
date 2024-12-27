import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Ribbons Hover

const ribbonsHoverCode =
    `
<!-- Ribbons Hover -->
<Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
    <Card.Body className="text-muted">
        <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
            <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </Card.Body>
</Card>

<Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
    <Card.Body className="text-muted">
        <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
            <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
        </div>
        <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </Card.Body>
</Card>

<Card className="ribbon-box right border shadow-none overflow-hidden mb-lg-0">
    <Card.Body className="text-muted">
        <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
            <i className="ri-flashlight-fill text-white align-bottom float-start me-1"></i> <span className="trending-ribbon-text">Trending</span>
        </div>
        <h5 className="fs-14 mb-3">Ribbon Right Shape</h5>
        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
    </Card.Body>
</Card>
`;

const RibbonsHoverExample = () => (
    <PrismCode
        code={ribbonsHoverCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RibbonsHoverExample;