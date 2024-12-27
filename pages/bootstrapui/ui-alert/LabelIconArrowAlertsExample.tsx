import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const labelIconArrowAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-label-icon label-arrow fade show">
 <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> - Label icon arrow alert
 <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-notification-off-line label-icon"></i><strong>Success</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-label-icon label-arrow mb-xl-0">
    <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-dismissible alert-label-icon label-arrow fade show">
    <i className="ri-mail-line label-icon"></i><strong>Light</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-label-icon label-arrow fade show mb-0">
    <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> - Label icon arrow alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const LabelIconArrowAlertsExample = () => (
    <PrismCode
        code={labelIconArrowAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default LabelIconArrowAlertsExample;