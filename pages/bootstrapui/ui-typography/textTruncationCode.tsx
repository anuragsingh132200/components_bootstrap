import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Text Truncation

const textTruncationCode =
    `
<!-- Block level -->
<Row>
    <div className="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
    </div>
</Row>

<!-- Inline level -->
<span className="d-inline-block text-truncate" style={{maxWidth: "150px"}}>
    This text is quite long, and will be truncated once displayed.
</span>
`;

const TextTruncationExample = () => (
    <PrismCode
        code={textTruncationCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TextTruncationExample;