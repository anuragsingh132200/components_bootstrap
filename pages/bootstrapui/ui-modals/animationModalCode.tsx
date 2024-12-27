import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Animation Modals
const animationModalCode =
    `
<!-- Animation Modals -->

const [modal_animationRight, setmodal_animationRight] = useState(false);
    function tog_animationRight() {
        setmodal_animationRight(!modal_animationRight);
    }

    const [modal_animationLeft, setmodal_animationLeft] = useState(false);
    function tog_animationLeft() {
        setmodal_animationLeft(!modal_animationLeft);
    }

    const [modal_animationUp, setmodal_animationUp] = useState(false);
    function tog_animationUp() {
        setmodal_animationUp(!modal_animationUp);
    }

    const [modal_animationFlip, setmodal_animationFlip] = useState(false);
    function tog_animationFlip() {
        setmodal_animationFlip(!modal_animationFlip);
    }

    const [modal_animationZoom, setmodal_animationZoom] = useState(false);
    function tog_animationZoom() {
        setmodal_animationZoom(!modal_animationZoom);
    }


<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_animationRight()}>Fade In Right Modal</Button>
    <Button variant="primary" onClick={() => tog_animationLeft()} >Fade In Left Modal</Button>
    <Button variant="primary" onClick={() => tog_animationUp()} >Fade In Up Modal</Button>
    <Button variant="primary" onClick={() => tog_animationFlip()} >Flip Modal</Button>
    <Button variant="primary" onClick={() => tog_animationZoom()} >Zoom In Modal</Button>
</div>


<Modal id="fadeInRightModal" show={modal_animationRight} onHide={() => { tog_animationRight(); }} modalClassName="fadeInRight" centered >
    ...
</Modal>

<Modal id="fadeInleftModal" show={modal_animationLeft} onHide={() => { tog_animationLeft(); }} modalClassName="fadeInLeft" centered >
    ...
</Modal>

<Modal id="fadeInUpModal" show={modal_animationUp} onHide={() => { tog_animationUp(); }} modalClassName="fadeInUp" centered >
    ...
</Modal>

<Modal id="flipModal" show={modal_animationFlip} onHide={() => { tog_animationFlip(); }} modalClassName="flip" centered >
    ...
</Modal>

<Modal id="flipModal" show={modal_animationZoom} onHide={() => { tog_animationZoom(); }} modalClassName="zoomIn" centered >
    ...
</Modal>
`;

const AnimationModalExample = () => (
    <PrismCode
        code={animationModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default AnimationModalExample