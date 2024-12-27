import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Optional Sizes
const optionalModalCode =
    `
<!-- Optional Modal Sizes -->

<!-- Fullscreen modal --> 
const [modal_fullscreen, setmodal_fullscreen] = useState(false);

    function tog_fullscreen() {
        setmodal_fullscreen(!modal_fullscreen);
    }

<!-- Extra Large modal --> 
const [modal_xlarge, setmodal_xlarge] = useState(false);

    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
    }

<!-- Large modal --> 
const [modal_large, setmodal_large] = useState(false);

    function tog_large() {
        setmodal_large(!modal_large);
    }

<!-- Small modal -->
const [modal_small, setmodal_small] = useState(false);

    function tog_small() {
        setmodal_small(!modal_small);
    }

<div className="hstack flex-wrap gap-2">

    <!-- Fullscreen modal --> 
    <Button variant="primary" onClick={() => tog_fullscreen()}>Fullscreen Modal</Button>

    <!-- Extra Large modal --> 
    <Button variant="info" onClick={() => tog_xlarge()}>Extra large Modal</Button>

    <!-- Large modal --> 
    <Button variant="success" onClick={() => tog_large()}>Large Modal</Button>

    <!-- Small modal --> 
    <Button variant="danger" onClick={() => tog_small()}>Small Modal</Button></div>

<Modal
    size="xl"
    show={modal_fullscreen}
    onHide={() => {
        tog_fullscreen();
    }}
    className="modal-fullscreen"
    id="exampleModalFullscreen"
>
    ...
</Modal>

<Modal
    size="xl"
    show={modal_xlarge}
    onHide={() => {
        tog_xlarge();
    }}
>
    ...
</Modal>

<Modal
    size="lg"
    show={modal_large}
    onHide={() => {
        tog_large();
    }}
>
    ...
</Modal>

<Modal
    size="sm"
    show={modal_small}
    onHide={() => {
        tog_small();
    }}
>
    ...
</Modal>
`;

const OptionalModalExample = () => (
    <PrismCode
        code={optionalModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default OptionalModalExample