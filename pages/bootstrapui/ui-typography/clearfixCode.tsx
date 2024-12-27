import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Clearfix

const clearfixCode =
    `
<!-- Clearfix -->
<div className="bg-light clearfix">
    <Button color="secondary" className="float-start">Example Button floated left</Button>
    <Button color="success" className="float-end">Example Button floated right</Button>
</div>
`;

const ClearfixExample = () => (
    <PrismCode
        code={clearfixCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ClearfixExample;