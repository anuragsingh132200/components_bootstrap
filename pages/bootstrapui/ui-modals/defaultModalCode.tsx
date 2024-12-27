import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Modal

const defaultModalCode =
`
<!-- Default Modals -->

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

<Button variant="primary" onClick={() => tog_standard()}>Standard Modal</Button>
<Modal id="myModal" show={modal_standard} onHide={() => { tog_standard(); }} >
    <Modal.Header className="modal-title fw-bold" id="myModalLabel">
        Modal Heading
    </Modal.Header>
    <Modal.Body>
        <h5 className="fs-16">
            Overflowing text to show scroll behavior
        </h5>
        <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
        <p className="text-muted">It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
    </Modal.Body>
    <div className="modal-footer">
        <Button
            color="light"
            onClick={() => {
                tog_standard();
            }}
        >
            Close
        </Button>
        <Button
            color="primary"
        >
            Save changes
        </Button>
    </div>
</Modal>

`;

const DefaultModalExample = () => (
    <PrismCode
        code={defaultModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DefaultModalExample