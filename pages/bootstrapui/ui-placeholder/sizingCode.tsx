import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Sizing

const sizingCode =
    `
<!-- Sizing -->
<span className="placeholder placeholder-lg w-100"></span>

<span className="placeholder w-100"></span>

<span className="placeholder placeholder-sm w-100"></span>

<span className="placeholder placeholder-xs w-100"></span>
`;

const SizingExample = () => (
    <PrismCode
        code={sizingCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default SizingExample