import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const cssHighlightCode =
`body {
    color: #212529; 
    background-color: #f3f3f9;
    font-family: "Poppins",sans-serif;
}

.example {
    margin: 0;
    color: #74788d; 
}
`;

const CssHighlightExample = () => (
    <PrismCode
        code={cssHighlightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CssHighlightExample;