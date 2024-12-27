import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const solidAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="alert-dismissible alert-solid fade show">
    <strong>Hi!</strong> - Solid <b>primary alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="secondary" className="alert-dismissible alert-solid fade show">
    <strong>How are you!</strong> - Solid <b>secondary alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="success" className="alert-dismissible alert-solid fade show">
    <strong>Yey! Everything worked! </strong> - Solid <b>success alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="danger" className="alert-dismissible alert-solid fade show mb-xl-0">
    <strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="warning" className="alert-dismissible alert-solid fade show">
    <strong>Uh oh, something went wrong!</strong> - Solid <b>warning alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="info" className="alert-dismissible alert-solid fade show">
    <strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="light" className="alert-dismissible alert-solid fade show">
    <strong>Mind Your Step!</strong> - Solid <b>secondary alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<Alert variant="dark" className="alert-dismissible alert-solid fade show mb-0">
    <strong>Did you know?</strong> - Solid <b>dark alert</b> example
    <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const SolidAlertsExample = () => (
    <PrismCode
        code={solidAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default SolidAlertsExample;