import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const softBorderBadgesCode =
    `
<span className="badge badge-soft-primary badge-border">Primary</span>

<span className="badge badge-soft-secondary badge-border">Secondary</span>

<span className="badge badge-soft-success badge-border">Success</span>

<span className="badge badge-soft-info badge-border">Info</span>

<span className="badge badge-soft-warning badge-border">Warning</span>

<span className="badge badge-soft-danger badge-border">Danger</span>

<span className="badge badge-soft-dark badge-border">Dark</span>

<span className="badge badge-soft-light badge-border">Light</span>
`;

const SoftBorderBadgesExample = () => (
    <PrismCode
        code={softBorderBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default SoftBorderBadgesExample;
