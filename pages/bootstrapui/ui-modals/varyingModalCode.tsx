import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Varying Modal Content
const varyingModalCode =
`
<!-- Varying Modal Content -->
<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_varying1()}>Open Modal for Mary</Button>
    <Button variant="primary" onClick={() => tog_varying2()}>Open Modal for Jennifer</Button>
    <Button variant="primary" onClick={() => tog_varying3()}>Open Modal for Roderick</Button>
</div>

<Modal show={modal_varying1} onHide={() => { tog_varying1(); }} id="exampleModal">
    <ModalHeader>
        <h5 className="modal-title" id="exampleModalLabel">New message to Mary</h5>
        <Button
            type="button"
            className="btn-close"
            onClick={() => {
                setmodal_varying1(false);
            }}
            aria-label="Close"
        ></Button>
    </ModalHeader>
    <ModalBody>
        <form>
            <div className="mb-3">
                <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                <Input type="text" className="form-control" id="customer-name" value="Mary" />
            </div>
            <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text" rows="4"></textarea>
            </div>
        </form>
    </ModalBody>
    <ModalFooter>
        <Button
        variant="light"
            className="btn btn-light"
            onClick={() => {
                setmodal_varying1(false);
            }}
        >
            Back
        </Button>
        <Button color="primary">
            Send message
        </Button>
    </ModalFooter>
</Modal>
`;

const VaryingModalExample = () => (
    <PrismCode
        code={varyingModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default VaryingModalExample