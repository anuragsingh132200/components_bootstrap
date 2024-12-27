import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const gridButtonsCode =
    `
<!-- Buttons Grid -->
<div className="d-grid gap-2">
<Button variant='primary'>Button</Button>
<Button variant='primary'>Button</Button>
</div>
`;

const GridButtonsExample = () => (
    <PrismCode
        code={gridButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default GridButtonsExample;