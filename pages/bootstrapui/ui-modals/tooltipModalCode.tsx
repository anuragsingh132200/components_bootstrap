import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Tooltips and Popovers
const tooltipModalCode =
    `
<!-- Tooltips and Popovers -->

const [modal_tooltip, setmodal_tooltip] = useState(false);

    function tog_tooltip() {
        setmodal_tooltip(!modal_tooltip);
    }

<Button variant="primary" onClick={() => tog_tooltip()}>
    Launch Demo Modal
</Button>

<Modal
    show={modal_tooltip}
    onHide={() => {
        tog_tooltip();
    }}
>
    <Modal.Header className="modal-title fw-bold">
        Tooltips and Popovers Modal
    </Modal.Header>
    <Modal.Body>
        <h5 className="fs-17">Popover in a Modal</h5>
        <p className="text-muted">You only need to know a little to make a big
            {" "}<Link href="#" className="popover-test fw-medium text-decoration-underline link-success" id="UncontrolledPopover">
                Popover on Click
            </Link>{" "}
            you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click.</p>

        <h5 className="fs-17">Tooltips in a Modal</h5>
        <p className="text-muted">Opposites attract, and that’s a fact. It’s in our
            {" "}<Link href="#" className="tooltip-test text-decoration-underline fw-medium" id="UncontrolledTooltip1">
                graphic design
            </Link>{" "} to be interested in the unusual, and that’s why using
            {" "}<Link href="#" className="tooltip-test text-decoration-underline" id="UncontrolledTooltip2">
                design
            </Link> contrasting colors in Graphic Design is a must.</p>
    </Modal.Body>
    <div className="modal-footer">
        <div className="mx-auto">
            <Link href="#" className="btn btn-link fw-semibold">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
        </div>
    </div>
</Modal>
`;

const TooltipModalExample = () => (
    <PrismCode
        code={tooltipModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TooltipModalExample