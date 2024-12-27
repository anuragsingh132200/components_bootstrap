import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Modal Positions
const positionModalCode =
`
<!-- Positions Modals -->

const [modal_positionTop, setmodal_positionTop] = useState(false);
    function tog_positionTop() {
        setmodal_positionTop(!modal_positionTop);
    }

    const [modal_positionTopRight, setmodal_positionTopRight] = useState(false);
    function tog_positionTopRight() {
        setmodal_positionTopRight(!modal_positionTopRight);
    }

    const [modal_positionBottom, setmodal_positionBottom] = useState(false);
    function tog_positionBottom() {
        setmodal_positionBottom(!modal_positionBottom);
    }

    const [modal_positionBottomRight, setmodal_positionBottomRight] = useState(false);
    function tog_positionBottomRight() {
        setmodal_positionBottomRight(!modal_positionBottomRight);
    }


<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_positionTop()}>Top Modal</Button>
    <Button variant="secondary" onClick={() => tog_positionTopRight()}>Top Right Modal</Button>
    <Button variant="success" onClick={() => tog_positionBottom()}>Bottom Modal</Button>
    <Button variant="danger" onClick={() => tog_positionBottomRight()}>Bottom Right Modal</Button>
</div>


<Modal id="topmodal" show={modal_positionTop} onHide={() => { tog_positionTop(); }} >
    ...
</Modal>

<Modal id="top-rightmodal" show={modal_positionTopRight} onHide={() => { tog_positionTopRight(); }} className="modal-dialog-right" >
    ...
</Modal>

<Modal id="bottomModal" show={modal_positionBottom} onHide={() => { tog_positionBottom(); }} className="modal-dialog-bottom" >
    ...
</Modal>

<Modal id="bottom-rightModal" show={modal_positionBottomRight} onHide={() => { tog_positionBottomRight(); }} className="modal-dialog-bottom-right" >
    ...
</Modal
`;

const PositionModalExample = () => (
    <PrismCode
        code={positionModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default PositionModalExample