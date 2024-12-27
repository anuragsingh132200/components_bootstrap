import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const roundSoftBadgesCode =
    `
<span className="badge rounded-pill badge-soft-primary">Primary</span>

<span className="badge rounded-pill badge-soft-secondary">Secondary</span>

<span className="badge rounded-pill badge-soft-success">Success</span>

<span className="badge rounded-pill badge-soft-info">Info</span>

<span className="badge rounded-pill badge-soft-warning">Warning</span>

<span className="badge rounded-pill badge-soft-danger">Danger</span>

<span className="badge rounded-pill badge-soft-dark">Dark</span>

<span className="badge rounded-pill badge-soft-light">Light</span>
`;

const RoundSoftBadgesExample = () => (
    <PrismCode
        code={roundSoftBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RoundSoftBadgesExample;