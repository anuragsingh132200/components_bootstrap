import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Width

const widthCode =
    `
<!-- Width Sizing-->
<div>
    <span className="placeholder w-50"></span>
    <span className="placeholder w-75"></span>
    <span className="placeholder w-25"></span>
    <span className="placeholder w-100"></span>
</div>
`;

const WidthExample = () => (
    <PrismCode
        code={widthCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default WidthExample