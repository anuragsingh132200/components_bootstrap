import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Font size

const fontSizeCode =
    `
<!-- Font size -->
<p className="fs-1">.fs-1 text</p>

<p className="fs-2">.fs-2 text</p>

<p className="fs-3">.fs-3 text</p>

<p className="fs-4">.fs-4 text</p>

<p className="fs-5">.fs-5 text</p>

<p className="fs-6">.fs-6 text</p>
`;

const FontSizeExample = () => (
    <PrismCode
        code={fontSizeCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default FontSizeExample