import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Blockquote Background Color

const blockquoteColorCode =
    `
<!-- Blockquote Background Color -->
<blockquote className="blockquote custom-blockquote blockquote-primary rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Primary Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-secondary rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Secondary Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-success rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Success Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-info rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Info Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-danger rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Danger Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-warning rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Warning Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-dark rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Dark Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>
`;

const BlockquoteColorExample = () => (
    <PrismCode
        code={blockquoteColorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BlockquoteColorExample