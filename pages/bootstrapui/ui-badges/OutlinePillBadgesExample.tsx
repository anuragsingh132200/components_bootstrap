import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const outlinePillBadgesCode =
    `
<span className="badge rounded-pill badge-outline-primary">Primary</span>

<span className="badge rounded-pill badge-outline-secondary">Secondary</span>

<span className="badge rounded-pill badge-outline-success">Success</span>

<span className="badge rounded-pill badge-outline-info">Info</span>

<span className="badge rounded-pill badge-outline-warning">Warning</span>

<span className="badge rounded-pill badge-outline-danger">Danger</span>

<span className="badge rounded-pill badge-outline-dark">Dark</span>

<span className="badge rounded-pill badge-outline-light">Light</span>
`;

const OutlinePillBadgesExample = () => (
    <PrismCode
        code={outlinePillBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default OutlinePillBadgesExample;