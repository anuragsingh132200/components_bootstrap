import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Blockquotes

const blockquotesCode =
`
<!-- Blockquotes -->
<blockquote className="blockquote fs-14 mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer className="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

<blockquote className="blockquote blockquote-reverse fs-14 mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer className="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
`;

const BlockquotesExample = () => (
    <PrismCode
        code={blockquotesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BlockquotesExample