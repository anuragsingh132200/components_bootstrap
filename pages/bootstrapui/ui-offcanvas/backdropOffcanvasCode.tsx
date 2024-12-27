import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Backdrop Offcanvas

const backdropOffcanvasCode =
    `
<!-- Backdrop Offcanvas -->

const [isEnableScroll, setIsEnableScroll] = useState(false);
const toggleEnableScroll = () => {
    setIsEnableScroll(!isEnableScroll);
    setIsBackdrop(false);
};

const [isBackdrop, setIsBackdrop] = useState(false);
const toggleBackdrop = () => {
    setIsBackdrop(!isBackdrop);
    setIsEnableScroll(false);
};

const [isScrollBackDrop, setIsScrollBackDrop] = useState(false);
const toggleScrollBackDrop = () => {
    setIsScrollBackDrop(!isScrollBackDrop);
};

<div className="d-flex flex-wrap gap-2">
    <Button onClick={toggleEnableScroll} variant="light">Enable Body Scrolling</Button>
    <Button onClick={toggleBackdrop} variant="light">Enable Backdrop (Default)</Button>
    <Button onClick={toggleScrollBackDrop} variant="light">Enable Both Scrolling & Backdrop</Button>
</div>    

<Offcanvas show={isEnableScroll} onHide={toggleEnableScroll} scroll={true} backdrop={false}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasScrollingLabel">Customer Activity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<Offcanvas show={isBackdrop} onHide={toggleBackdrop} scroll={false} backdrop={true}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasWithBackdropLabel">Customer Activity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>

<Offcanvas show={isScrollBackDrop} onHide={toggleScrollBackDrop} scroll={true} backdrop={true}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasWithBothOptionsLabel">Customer Activity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>
`;

const BackdropOffcanvasExample = () => (
    <PrismCode
        code={backdropOffcanvasCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BackdropOffcanvasExample