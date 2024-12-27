import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const outlineBadgesCode =
    `
<span className="badge badge-outline-primary">Primary</span>

<span className="badge badge-outline-secondary">Secondary</span>

<span className="badge badge-outline-success">Success</span>

<span className="badge badge-outline-info">Info</span>

<span className="badge badge-outline-warning">Warning</span>

<span className="badge badge-outline-danger">Danger</span>

<span className="badge badge-outline-dark">Dark</span>    
`;

const OutlineBadgesExample = () => (
    <PrismCode
        code={outlineBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default OutlineBadgesExample;