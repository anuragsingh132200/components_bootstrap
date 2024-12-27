import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const additionalContentCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-additional fade show">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-error-warning-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Well done !</h5>
                <p className="mb-0">Aww yeah, you successfully read this important alert message. </p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</Alert>

<!-- Success Alert -->
<Alert variant="danger" className="alert-dismissible alert-additional fade show mb-xl-0">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-alert-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Something is very wrong!</h5>
                <p className="mb-0">Change a few things up and try submitting again.</p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin
            utilities to keep things nice and tidy.</p>
    </div>
</Alert>

<!-- Danger Alert -->
<Alert variant="success" className="alert-dismissible alert-additional fade show">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-notification-off-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Yey! Everything worked!</h5>
                <p className="mb-0">This alert needs your attention, but it's not super important.</p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-dismissible alert-additional fade show mb-0">
    <div className="alert-body">
        <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
                <i className="ri-alert-line fs-16 align-middle"></i>
            </div>
            <div className="flex-grow-1">
                <h5 className="alert-heading">Uh oh, something went wrong!</h5>
                <p className="mb-0">Better check yourself, you're not looking too good.</p>
            </div>
        </div>
    </div>
    <div className="alert-content">
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
</Alert>`;

const AdditionalContentCodeExample = () => (
    <PrismCode
        code={additionalContentCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default AdditionalContentCodeExample;