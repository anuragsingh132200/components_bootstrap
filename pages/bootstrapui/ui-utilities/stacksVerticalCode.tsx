import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Stacks - Vertical

const stacksVerticalCode =
    `
<!-- Stacks - Vertical -->
<div className="vstack gap-3">
    <div className="bg-light border p-1 px-2">First item</div>
    <div className="bg-light border p-1 px-2">Second item</div>
    <div className="bg-light border p-1 px-2">Third item</div>
</div>

<div className="mt-5">
    <h5 className="fs-14 mb-3">Vertical Stacks Examples</h5>
    <div className="vstack gap-2 col-md-5 mx-auto">
        <Button variant="primary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
    </div>
</div>
`;

const StacksVerticalExample = () => (
    <PrismCode
        code={stacksVerticalCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default StacksVerticalExample