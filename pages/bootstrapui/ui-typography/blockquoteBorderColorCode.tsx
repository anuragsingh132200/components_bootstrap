import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Blockquote Border Color

const blockquoteBorderColorCode =
    `
<!-- Blockquote Border Color -->
<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-primary rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Primary Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Secondary Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Success Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-info rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Info Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-danger rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Danger Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-warning rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Warning Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>

<blockquote className="blockquote custom-blockquote blockquote-outline blockquote-dark rounded mb-0">
    <p className="text-dark mb-2">Custom Blockquote Outline Dark Example</p>
    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
</blockquote>
`;

const BlockquoteBorderColorExample = () => (
    <PrismCode
        code={blockquoteBorderColorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BlockquoteBorderColorExample