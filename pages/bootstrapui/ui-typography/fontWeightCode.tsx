import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Font weight and italics

const fontWeightCode =
    `
<!-- Font weight and italics -->
<p className="fw-bold">Bold text.</p>

<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>

<p className="fw-normal">Normal weight text.</p>

<p className="fw-light">Light weight text.</p>

<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>

<p className="fst-italic">Italic text.</p>

<p className="fst-normal mb-0">Text with normal font style</p>
`;

const FontWeightExample = () => (
    <PrismCode
        code={fontWeightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default FontWeightExample;