import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Striped Progress
const stripedCode =
    `
<!-- Striped Prgress -->
<div className="mb-4">
    <ProgressBar striped now={25} />
</div>
<div>
    <ProgressBar variant='success' striped now={40} />
</div>
`;

const StripedExample = () => (
    <PrismCode
        code={stripedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default StripedExample