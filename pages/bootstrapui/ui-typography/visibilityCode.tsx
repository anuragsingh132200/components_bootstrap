import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Visibility

const visibilityCode =
    `
<!-- Visibility -->
<div className="visible">text visible Lorem ipsum dolor sit amet</div>

<div className="invisible">text invisible Lorem ipsum dolor sit amet</div>
`;

const VisibilityExample = () => (
    <PrismCode
        code={visibilityCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default VisibilityExample