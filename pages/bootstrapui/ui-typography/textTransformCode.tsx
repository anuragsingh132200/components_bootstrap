import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Text Transform

const textTransformCode =
    `
<!-- Text Transform -->
<p className="text-lowercase">Lowercased text.</p>

<p className="text-uppercase">Uppercased text.</p>

<p className="text-capitalize mb-0">CapiTaliZed text.</p>
`;

const TextTransformExample = () => (
    <PrismCode
        code={textTransformCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TextTransformExample;