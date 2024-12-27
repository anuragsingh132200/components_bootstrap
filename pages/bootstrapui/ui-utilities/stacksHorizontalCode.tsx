import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Stacks - Horizontal

const stacksHorizontalCode =
`
<!-- Stacks - Horizontal -->
<div className="hstack gap-3">
    <div className="bg-light border p-1 px-2">First item</div>
    <div className="bg-light border p-1 px-2">Second item</div>
    <div className="bg-light border p-1 px-2">Third item</div>
</div>
<div className="mt-4">
    <p className="text-muted mb-3">Using horizontal margin utilities like <code>ms-auto</code> as spacers:</p>

    <div className="hstack gap-3">
        <div className="bg-light border p-1 px-2">First item</div>
        <div className="bg-light border p-1 px-2 ms-auto">Second item</div>
        <div className="bg-light border p-1 px-2">Third item</div>
    </div>
    <div className="hstack gap-3 mt-3">
        <div className="bg-light border p-1 px-2">First item</div>
        <div className="vr"></div>
        <div className="bg-light border p-1 px-2">Second item</div>

        <div className="bg-light border p-1 px-2 ms-auto">Third item</div>
    </div>
</div>

<div className="mt-5">
    <h5 className="fs-13 mb-3">Horizontal Stacks Examples</h5>
    <div className="hstack gap-3">
        <input className="form-control me-auto" type="text" placeholder="Add your item here..." />
        <Button variant="primary">Submit</Button>
        <div className="vr"></div>
        <Button variant="outline-secondary">Reset</Button>
    </div>
</div>
`;

const StacksHorizontalExample = () => (
    <PrismCode
        code={stacksHorizontalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default StacksHorizontalExample;