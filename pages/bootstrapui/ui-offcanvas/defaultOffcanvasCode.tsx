import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Offcanvas

const defaultOffcanvasCode =
`
<!-- Base Examples -->
const [show, setShow] = useState(false);
const [isTop, setIsTop] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

<div className="hstack flex-wrap gap-2">
    <Link to="#" className="btn btn-secondary" onClick={handleShow}>
        Link with href
    </Link>
    <Button variant="secondary" onClick={handleShow}>
        Button with data-bs-target
    </Button>
</div>

<Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header className="border-bottom" closeButton>
        <Offcanvas.Title id="offcanvasExampleLabel">Recent Acitivity</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        ...
    </Offcanvas.Body>
</Offcanvas>
`;

const DefaultOffcanvasExample = () => (
    <PrismCode
        code={defaultOffcanvasCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DefaultOffcanvasExample