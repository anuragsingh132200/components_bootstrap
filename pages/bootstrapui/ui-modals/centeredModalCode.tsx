import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Vertically Centered Modal
const centeredModalCode =
`
<!-- Vertically Centered -->

const [modal_center, setmodal_center] = useState(false);

    function tog_center() {
        setmodal_center(!modal_center);
    }

<Button variant="primary" onClick={() => tog_center()}>Center Modal</Button>

<Modal
    show={modal_center}
    onHide={() => {
        tog_center();
    }}
    centered
>
    ...
</Modal>
`;

const CenteredModalExample = () => (
    <PrismCode
        code={centeredModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CenteredModalExample