import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Text Wrapping and Overflow

const textWrappingCode =
    `
<!-- Text Wrap -->
<Badge color="primary" className="text-wrap" style={{ width: "6rem" }}>
    This text should wrap.
</Badge>

<!-- Text nowrap -->
<div className="text-nowrap border bg-light mt-3" style={{width: "8rem"}}>
    This text should overflow the parent.
</div>
`;

const TextWrappingExample = () => (
    <PrismCode
        code={textWrappingCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TextWrappingExample