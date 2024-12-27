import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const softBadgesCode =
    `
<span className="badge badge-soft-primary">Primary</span>

<span className="badge badge-soft-secondary">Secondary</span>

<span className="badge badge-soft-success">Success</span>

<span className="badge badge-soft-info">Info</span>

<span className="badge badge-soft-warning">Warning</span>

<span className="badge badge-soft-danger">Danger</span>

<span className="badge badge-soft-dark">Dark</span>

<span className="badge badge-soft-light">Light</span>
`;

const SoftBadgesExample = () => (
    <PrismCode
        code={softBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default SoftBadgesExample;