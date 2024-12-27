import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Text Selection

const textSelectionCode =
    `
<!-- Text Selection -->
<p className="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>

<p className="user-select-auto">This paragraph has default select behavior.</p>

<p className="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.</p>
`;

const TextSelectionExample = () => (
    <PrismCode
        code={textSelectionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default TextSelectionExample;