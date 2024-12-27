import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Grids in Modals
const gridsModalCode =
`
<!-- Grids in modals -->

const [modal_grid, setmodal_grid] = useState(false);

    function tog_grid() {
        setmodal_grid(!modal_grid);
    }

<Button variant="primary" onClick={() => tog_grid()}>
    Launch Demo Modal
</Button>

<Modal
    show={modal_grid}
    onHide={() => {
        tog_grid();
    }}
>
    <Modal.Header className="modal-title fw-bold">
        Grid Modals
    </Modal.Header>
    <Modal.Body>
        <form action="#">
            <div className="row g-3">
                <Col xxl={6}>
                    <div>
                        <Form.Label htmlFor="firstName" className="form-label">First Name</Form.Label>
                        <Form.Control type="text" className="form-control" id="firstName" placeholder="Enter firstname" />
                    </div>
                </Col>
                <Col xxl={6}>
                    <div>
                        <Form.Label htmlFor="lastName" className="form-label">Last Name</Form.Label>
                        <Form.Control type="text" className="form-control" id="lastName" placeholder="Enter lastname" />
                    </div>
                </Col>
                <Col lg={12}>
                    <Form.Label className="form-label">Gender</Form.Label>
                    <div>
                        <div className="form-check form-check-inline">
                            <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <Form.Label className="form-check-label" htmlFor="inlineRadio1">Male</Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <Form.Label className="form-check-label" htmlFor="inlineRadio2">Female</Form.Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <Form.Label className="form-check-label" htmlFor="inlineRadio3">Others</Form.Label>
                        </div>
                    </div>
                </Col>
                <Col xxl={6}>
                    <Form.Label htmlFor="emailInput" className="form-label">Email</Form.Label>
                    <Form.Control type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                </Col>
                <Col xxl={6}>
                    <Form.Label htmlFor="passwordInput" className="form-label">Password</Form.Label>
                    <Form.Control type="password" className="form-control" id="passwordInput" value="451326546" placeholder="Enter password" />
                </Col>
                <Col lg={12}>
                    <div className="hstack gap-2 justify-content-end">
                        <Button variant="light" onClick={() => setmodal_grid(false)}>Close</Button>
                        <Button variant="primary" >Submit</Button>
                    </div>
                </Col>
            </div>
        </form>
    </Modal.Body>
</Modal>
`;

const GridsModalExample = () => (
    <PrismCode
        code={gridsModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default GridsModalExample