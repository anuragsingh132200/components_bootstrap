import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Headings

const headingsCode =
    `
<!-- Headings -->
<h1 className="mb-3">h1. Bootstrap heading <small className="text-muted">Semibold 2.03125rem (32.5px)</small></h1>

<h2 className="mb-3">h2. Bootstrap heading <small className="text-muted">Semibold 1.625rem (26px)</small></h2>

<h3 className="mb-3">h3. Bootstrap heading <small className="text-muted">Semibold 1.42188rem (22.8px)</small></h3>

<h4 className="mb-3">h4. Bootstrap heading <small className="text-muted">Semibold 1.21875rem (19.5px)</small></h4>

<h5 className="mb-3">h5. Bootstrap heading <small className="text-muted">Semibold 1.01563rem (16.25px)</small></h5>

<h6 className="mb-1">h6. Bootstrap heading <small className="text-muted">Semibold 0.8125rem (13px)</small></h6>
`;

const HeadingsExample = () => (
    <PrismCode
        code={headingsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default HeadingsExample