import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Shadows

const shadowsCode =
    `
<!-- Shadows -->
<div className="shadow-none p-3 bg-light rounded">No shadow</div>

<div className="shadow-sm p-3 bg-light rounded">Small shadow</div>

<div className="shadow p-3 bg-light rounded">Regular shadow</div>

<div className="shadow-lg p-3 bg-light rounded">Larger shadow</div>
`;

const ShadowsExample = () => (
    <PrismCode
        code={shadowsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ShadowsExample;