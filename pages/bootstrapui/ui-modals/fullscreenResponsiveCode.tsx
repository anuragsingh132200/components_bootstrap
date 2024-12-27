import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Fullscreen Responsive Modals
const fullscreenResponsiveCode =
    `
<!-- Fullscreen Modals -->
const [modal_fullscreen1, setmodal_fullscreen1] = useState(false);

    function tog_fullscreen1() {
        setmodal_fullscreen1(!modal_fullscreen1);
    }

{/* FullscreenSm */}
const [modal_fullscreen_sm, setmodal_fullscreen_sm] = useState(false);

    function tog_fullscreen_sm() {
        setmodal_fullscreen_sm(!modal_fullscreen_sm);
    }

{/* FullscreenMd */}
const [modal_fullscreen_md, setmodal_fullscreen_md] = useState(false);

    function tog_fullscreen_md() {
        setmodal_fullscreen_md(!modal_fullscreen_md);
    }

{/* FullscreenLg */}
const [modal_fullscreen_lg, setmodal_fullscreen_lg] = useState(false);

    function tog_fullscreen_lg() {
        setmodal_fullscreen_lg(!modal_fullscreen_lg);
    }

{/* FullscreenXl */}
const [modal_fullscreen_xl, setmodal_fullscreen_xl] = useState(false);

    function tog_fullscreen_xl() {
        setmodal_fullscreen_xl(!modal_fullscreen_xl);
    }

{/* FullscreenXxl */}
const [modal_fullscreen_xxl, setmodal_fullscreen_xxl] = useState(false);

    function tog_fullscreen_xxl() {
        setmodal_fullscreen_xxl(!modal_fullscreen_xxl);
    }

<div className="hstack gap-2 flex-wrap">
    <Button variant="primary" onClick={() => tog_fullscreen1()}> Fullscreen modal </Button>
    <Button variant="primary" onClick={() => tog_fullscreen_sm()}>Full Screen Below sm</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_md()}>Full Screen Below md</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_lg()}>Full Screen Below lg</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_xl()}>Full Screen Below xl</Button>
    <Button variant="primary" onClick={() => tog_fullscreen_xxl()}>Full Screen Below xxl</Button>
</div>

{/* Fullscreen Responsive Modals */}
<Modal size="xl" show={modal_fullscreen1} onHide={() => { tog_fullscreen1(); }} className="modal-fullscreen" id="fullscreeexampleModal">
    ...
</Modal>

{/* FullscreenSm */}
<Modal id="exampleModalFullscreenSm" show={modal_fullscreen_sm} onHide={() => { tog_fullscreen_sm(); }} >
    ...
</Modal>

{/* FullscreenMd */}
<Modal id="exampleModalFullscreenMd" show={modal_fullscreen_md} onHide={() => { tog_fullscreen_md(); }} >
    ...
</Modal>

{/* FullscreenLg */}
<Modal id="exampleModalFullscreenLg" show={modal_fullscreen_lg} onHide={() => { tog_fullscreen_lg(); }} >
    ...
</Modal>

{/* FullscreenXl */}
<Modal id="exampleModalFullscreenXl" show={modal_fullscreen_xl} onHide={() => { tog_fullscreen_xl(); }} >
    ...
</Modal>

{/* FullscreenXxl */}
<Modal id="exampleModalFullscreenXxl" show={modal_fullscreen_xxl} onHide={() => { tog_fullscreen_xxl(); }} >
    ...
</Modal>
`;

const FullscreenResponsiveExample = () => (
    <PrismCode
        code={fullscreenResponsiveCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default FullscreenResponsiveExample