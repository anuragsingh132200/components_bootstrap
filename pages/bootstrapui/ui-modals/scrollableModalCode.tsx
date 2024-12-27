import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Scrollable Modal
const scrollableModalCode =
`
<!-- Scrollable Modal -->
const [modal_scroll, setmodal_scroll] = useState(false);

    function tog_scroll() {
        setmodal_scroll(!modal_scroll);
    }

    <Button variant="primary" onClick={() => tog_scroll()}>Scrollable Modal</Button>

<Modal
    show={modal_scroll}
    onHide={() => {
        tog_scroll();
    }}
    scrollable={true}
    id="exampleModalScrollable"
>
    ...
</Modal>
`;

const ScrollableModalExample = () => (
    <PrismCode
        code={scrollableModalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ScrollableModalExample