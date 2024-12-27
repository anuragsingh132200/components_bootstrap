import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const leftBorderAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-border-left alert-dismissible fade show">
    <i className="ri-user-smile-line me-3 align-middle fs-16"></i><strong>Primary</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-border-left alert-dismissible fade show">
    <i className="ri-check-double-line me-3 align-middle fs-16"></i><strong>Secondary</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-border-left alert-dismissible fade show">
    <i className="ri-notification-off-line me-3 align-middle fs-16"></i><strong>Success</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-border-left alert-dismissible fade show mb-xl-0">
    <i className="ri-error-warning-line me-3 align-middle fs-16"></i><strong>Danger</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-border-left alert-dismissible fade show">
    <i className="ri-alert-line me-3 align-middle fs-16"></i><strong>Warning</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-border-left alert-dismissible fade show">
    <i className="ri-airplay-line me-3 align-middle fs-16"></i><strong>Info</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="alert-border-left alert-dismissible fade show">
    <i className="ri-mail-line me-3 align-middle fs-16"></i><strong>Light</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-border-left alert-dismissible fade show mb-0">
    <i className="ri-refresh-line me-3  align-middle fs-16"></i><strong>Dark</strong> - Left border alert
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const LeftBorderAlertsExample = () => (
    <PrismCode
        code={leftBorderAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default LeftBorderAlertsExample;