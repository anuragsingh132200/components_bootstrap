import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const liveAlertsCode = `
const [show, setShow] = useState(false);
<Alert show={show} variant="success" onClose={() => setShow(true)} dismissible>
    Nice, you triggered this alert message!
</Alert>
<button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>`;

const LiveExample = () => (
    <PrismCode
        code={liveAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default LiveExample;