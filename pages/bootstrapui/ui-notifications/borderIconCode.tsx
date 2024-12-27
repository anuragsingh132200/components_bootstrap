import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Bordered with Icon Toast
const borderIconCode =
    `
<!-- Bordered With Icon Toast -->
<div className="hstack flex-wrap gap-2">
    <Button variant="primary" onClick={() => setToast7(!toast7)}  id="borderedToast1Btn">Primary Toast</Button>
    <Button variant="success" onClick={() => setToast8(!toast8)}  id="borderedToast2Btn">Success Toast</Button>
    <Button variant="warning" onClick={() => setToast9(!toast9)}  id="borderedTost3Btn">Warning Toast</Button>
    <Button variant="danger" onClick={() => setToast10(!toast10)} id="borderedToast4Btn">Danger Toast</Button>
</div>
    
<div style={{ zIndex: "11" }}>
    <Toast show={toast7} onClose={togglesetToast7} className="toast-border-primary overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-user-smile-line align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Your application was successfully sent.</h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>

<div style={{ zIndex: "11" }}>
    <Toast show={toast8} onClose={togglesetToast8} className="toast-border-success overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-checkbox-circle-fill align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Yey! Everything worked!</h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>

<div style={{ zIndex: "11" }}>
    <Toast show={toast9} onClose={togglesetToast9} className="toast-border-warning overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-notification-off-line align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Something went wrong, try again.</h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>

<div style={{ zIndex: "11" }}>
    <Toast show={toast10} onClose={togglesetToast10} className="toast-border-danger overflow-hidden mt-3">
        <Toast.Body>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                    <i className="ri-alert-line align-middle"></i>
                </div>
                <div className="flex-grow-1">
                    <h6 className="mb-0">Something is very wrong! <a href="#" className="text-decoration-underline">See detailed report.</a></h6>
                </div>
            </div>
        </Toast.Body>
    </Toast>
</div>
`;

const BorderIconExample = () => (
    <PrismCode
        code={borderIconCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BorderIconExample