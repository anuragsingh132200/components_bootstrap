import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const outlineAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-outline fade show">
    <strong> Hi! </strong> - Outline <b>primary alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="alert-dismissible alert-outline fade show">
    <strong> How are you! </strong> - Outline <b>secondary alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="alert-dismissible alert-outline fade show">
    <strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="alert-dismissible alert-outline fade show mb-xl-0">
    <strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="alert-dismissible alert-outline fade show">
    <strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="alert-dismissible alert-outline fade show">
    <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="alert-dismissible alert-outline fade show mb-0">
    <strong>Did you know?</strong> - Outline <b>dark alert</b> example
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const OutlineAlertsExample = () => (
    <PrismCode
        code={outlineAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default OutlineAlertsExample;