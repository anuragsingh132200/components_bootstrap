import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Static Backdrop Modal
const staticBackdropModalCode =
`
<!-- Static Backdrop -->

const [modal_backdrop, setmodal_backdrop] = useState(false);

    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
    }

    <Button variant="primary" onClick={() => tog_backdrop()}>
        Static Backdrop Modal
    </Button>

<Modal
show={modal_backdrop}
onHide={() => {
    tog_backdrop();
}}
backdrop={'static'}
id="staticBackdrop"
centered
>
    <Modal.Header className="modal-title fw-bold" id="staticBackdropLabel"></Modal.Header>
    <Modal.Body className="text-center p-5">
        ...

        <div className="mt-4">
            <h3 className="mb-3">You've made it!</h3>
            <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
            <div className="hstack gap-2 justify-content-center">
                <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_backdrop(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                <Link href="#" className="btn btn-success" onClick={() => setmodal_backdrop(false)}>Completed</Link>
            </div>
        </div>
    </Modal.Body>
</Modal>
`;

const StaticBackdropModalExample = () => (
    <PrismCode
        code={staticBackdropModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default StaticBackdropModalExample