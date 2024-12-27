import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Bootstrap Toasts

const bootstrapToastsCode =
`<!-- Default Toast --> 
const [toast1, setToast1] = useState(true);
const togglesetToast1 = () => setToast1(!setToast1);

<Toast className="fade" show={toast1} onClose={togglesetToast1}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Hybrix</span>
        <small>06 mins ago</small>
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>

<!-- Translucent Toast --> 
const [toast2, setToast2] = useState(true);
const togglesetToast2 = () => setToast2(!setToast2);

<Toast className="fade" show={toast2} onClose={togglesetToast2}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Hybrix</span>
        <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>

<!-- Stacking Toast --> 
const [toast3, setToast3] = useState(true);
const [toast3, setToast4] = useState(true);

const togglesetToast3 = () => setToast3(!setToast3);
const togglesetToast4 = () => setToast4(!setToast4);

<Toast className="fade" show={toast3} onClose={togglesetToast3}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Hybrix</span>
        <small>Just now</small>
    </Toast.Header>
    <Toast.Body>
        See? Just like this.
    </Toast.Body>
</Toast>

<Toast className="fade" show={toast4} onClose={togglesetToast4}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Hybrix</span>
        <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>
        Heads up, toasts will stack automatically
    </Toast.Body>
</Toast>

<!-- Placement Toast --> 
const [toast5, setToast5] = useState(true);
const togglesetToast5 = () => setToast4(!setToast4);

<Toast className="fade" show={toast5} onClose={togglesetToast5} style={{position: "absolute", top: "16px", right: "16px"}}>
    <Toast.Header>
        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
        <span className="fw-semibold me-auto">Hybrix</span>
        <small>06 mins ago</small>
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>

 <!-- Flexbox container for aligning the toasts -->
const [toast6, setToast6] = useState(true);
const togglesetToast6 = () => setToast5(!setToast6);

<div aria-live="polite" aria-atomic="true" className="bg-light d-flex justify-content-center align-items-center" style={{height: "200px"}}>
    <Toast className="fade" show={toast6} onClose={togglesetToast6}>
        <Toast.Header>
            <Image src={logosm} className="rounded me-2" alt="..." height="20" />
            <span className="fw-semibold me-auto">Hybrix</span>
            <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>
            Hello, world! This is a toast message.
        </Toast.Body>
    </Toast>
</div>
`;

const BootstrapToastsExample = () => (
    <PrismCode
        code={bootstrapToastsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BootstrapToastsExample