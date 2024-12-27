import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Toast Placement
const toastPlacementCode =
    `
<!-- Toast Placement -->

const [toast11, setToast11] = useState(true);
const [position, setPosition] = useState<any>();

<Form>
    <div className="mb-3">
        <select className="form-select mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
            <option value="">Select a position...</option>
            <option value="top-0 start-0">Top left</option>
            <option value="top-0 start-50 translate-middle-x">Top center</option>
            <option value="top-0 end-0">Top right</option>
            <option value="top-50 start-0 translate-middle-y">Middle left</option>
            <option value="top-50 start-50 translate-middle">Middle center</option>
            <option value="top-50 end-0 translate-middle-y">Middle right</option>
            <option value="bottom-0 start-0">Bottom left</option>
            <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
            <option value="bottom-0 end-0">Bottom right</option>
        </select>
    </div>
</Form>
<div aria-live="polite" aria-atomic="true" className="bd-example bg-light position-relative" style={{height: "300px"}}>
    <div className={"toast-container position-absolute p-3 " + position} id="toastPlacement">
        <Toast show={toast11} onClose={() => setToast11(!toast11)}>
            <Toast.Header>
                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                <strong className="me-auto">Hybrix</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <div className="toast-body">
                Hello, world! This is a toast message.
            </div>
        </Toast>
    </div>
</div>
`;

const ToastPlacementExample = () => (
    <PrismCode
        code={toastPlacementCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ToastPlacementExample