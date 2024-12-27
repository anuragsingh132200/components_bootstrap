import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Placement Offcanvas
const placementOffcanvasCode =
    `
<!-- Placement Offcanvas -->

const [isTop, setIsTop] = useState(false);
const toggleTopCanvas = () => {
    setIsTop(!isTop);
};

const [isRight, setIsRight] = useState(false);
const toggleRightCanvas = () => {
    setIsRight(!isRight);
};

const [isBottom, setIsBottom] = useState(false);
const toggleBottomCanvas = () => {
    setIsBottom(!isBottom);
};

const [isLeft, setIsLeft] = useState(false);
const toggleLeftCanvas = () => {
    setIsLeft(!isLeft);
};

<div className="d-flex flex-wrap gap-2">
    <Button onClick={toggleTopCanvas} variant="primary">Toggle Top Offcanvas</Button>
    <Button onClick={toggleRightCanvas} variant="secondary">Toggle Right Offcanvas</Button>
    <Button onClick={toggleBottomCanvas} variant="success">Toggle Bottom Offcanvas</Button>
    <Button onClick={toggleLeftCanvas} variant="danger">Toggle Left Offcanvas</Button>
</div>

<!-- top offcanvas -->
<Offcanvas show={isTop} onHide={toggleTopCanvas} placement='top' style={{minHeight: "46vh"}}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasTopLabel">Gallery</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<!-- right offcanvas -->
<Offcanvas show={isRight} onHide={toggleRightCanvas} placement='end'>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasRightLabel">Recent Acitivity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>


<!-- bottom offcanvas -->
<Offcanvas show={isBottom} onHide={toggleBottomCanvas} placement='bottom' style={{minHeight: "46vh"}}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasBottomLabel">Gallery</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<!-- left offcanvas -->
<Offcanvas show={isLeft} onHide={toggleLeftCanvas} placement='start'>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasLeftLabel">Recent Acitivity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>
`;

const PlacementOffcanvasExample = () => (
    <PrismCode
        code={placementOffcanvasCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default PlacementOffcanvasExample