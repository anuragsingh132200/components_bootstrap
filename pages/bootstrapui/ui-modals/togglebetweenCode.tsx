import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Toggle Between Modal
const togglebetweenCode =
`
<!-- Default List -->

const [modal_togFirst, setmodal_togFirst] = useState(false);

    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState(false);

    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }

    <Button variant="primary" onClick={() => tog_togFirst()}>Open First Modal</Button>

<Modal
    show={modal_togFirst}
    onHide={() => {
        tog_togFirst();
    }}
    id="firstmodal"
    centered
>
    <Modal.Header className="modal-title fw-bold" id="exampleModalToggleLabel">
        Modal 1
    </Modal.Header>
    <Modal.Body className="text-center p-5">
        ...

        <div className="mt-4 pt-4">
            <h3>Uh oh, something went wrong!</h3>
            <p className="text-muted"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>

            <Button variant="warning">
                Continue
            </Button>
        </div>
    </Modal.Body>
</Modal>

<Modal
    isOpen={modal_togSecond}
    toggle={() => {
        tog_togSecond();
    }}
    id="secondmodal"
    centered
>
    <Modal.Header className="modal-title fw-bold" id="exampleModalToggleLabel2">
        Modal 2
    </Modal.Header>
    <Modal.Body className="text-center p-5">
        ...

        <div className="mt-4 pt-3">
            <h3 className="mb-3">Follow-Up Email</h3>
            <p className="text-muted mb-4">Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.</p>
            <div className="hstack gap-2 justify-content-center">
                <Button variant="danger" onClick={() => { tog_togFirst(); tog_togSecond(); }}>
                    Back to First
                </Button>
                <Button variant="light" onClick={() => tog_togSecond()}>Close</Button>
            </div>
        </div>
    </Modal.Body>
</Modal>
`;

const TogglebetweenExample = () => (
    <PrismCode
        code={togglebetweenCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TogglebetweenExample