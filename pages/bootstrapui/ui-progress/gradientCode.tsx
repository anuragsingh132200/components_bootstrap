import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Gradient Progress
const gradientCode =
    `
<!-- Gradient -->
<div className="mb-4">
    <ProgressBar now={15}/>
</div>
<div className="mb-4">
    <ProgressBar variant='success' now={25}/>
</div>
<div className="mb-4">
    <ProgressBar variant='info' now={50}/>
</div>
<div className="mb-4">
    <ProgressBar variant='warning' now={75}/>
</div>
<div>
    <ProgressBar variant='danger' now={100}/>
</div>
`;

const GradientExample = () => (
    <PrismCode
        code={gradientCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default GradientExample