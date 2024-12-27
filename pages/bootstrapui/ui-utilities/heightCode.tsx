import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Height

const heightCode =
    `
<!-- Height -->
<div className="h-25 p-3 bg-light">Height25%</div>

<div className="h-50 p-3 bg-light">Height50%</div>

<div className="h-75 p-3 bg-light">Height75%</div>

<div className="h-100 p-3 bg-light">Height100%</div>

<div className="h-auto p-3 bg-light">Height auto</div>
`;

const HeightExample = () => (
    <PrismCode
        code={heightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default HeightExample;