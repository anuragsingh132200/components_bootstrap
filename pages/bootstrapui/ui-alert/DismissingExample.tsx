import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const dismissingAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary" className="fade alert-dismissible show">
    <strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> — check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary" className="fade alert-dismissible show">
    <strong> How are you! </strong> A simple <b>Dismissible secondary alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Success Alert -->
<Alert variant="success" className="fade alert-dismissible show">
    <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="fade alert-dismissible show mb-xl-0">
    <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Warning Alert -->
<Alert variant="warning" className="fade alert-dismissible show">
    <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Info Alert -->
<Alert variant="info" className="fade alert-dismissible show">
    <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Light Alert -->
<Alert variant="light" className="fade alert-dismissible show">
    <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="fade alert-dismissible show mb-0">
    <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b> —check it out!
    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
</Alert>`;

const DismissingExample = () => (
    <PrismCode
        code={dismissingAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DismissingExample;