import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

// Width

const widthCode =
`
<!-- Width -->
<div className="w-25 p-3 bg-light">Width 25%</div>

<div className="w-50 p-3 bg-light">Width 50%</div>

<div className="w-75 p-3 bg-light">Width 75%</div>

<div className="w-100 p-3 bg-light">Width 100%</div>

<div className="w-auto p-3 bg-light">Width auto</div>
`;

const WidthExample = () => (
    <PrismCode
        code={widthCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default WidthExample;