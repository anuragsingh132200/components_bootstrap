import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Inline List

const inlineListCode =
    `
<!-- Inline List -->
<ul className="list-inline">
    <li className="list-inline-item">Lorem ipsum</li>
    <li className="list-inline-item">Phasellus iaculis</li>
    <li className="list-inline-item">Nulla volutpat</li>
</ul>
`;

const InlineListExample = () => (
    <PrismCode
        code={inlineListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default InlineListExample