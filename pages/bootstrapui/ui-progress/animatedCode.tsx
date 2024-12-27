import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Animated Progress
const animatedCode =
    `
<!-- Animated Progress -->
<div className="mb-4">
    <ProgressBar animated now={15}/>
</div>
<div className="mb-4">
    <ProgressBar animated variant='success' now={25}/>
</div>
<div className="mb-4">
    <ProgressBar animated variant='info' now={50}/>
</div>
<div className="mb-4">
    <ProgressBar animated variant='warning' now={75}/>
</div>
<div>
    <ProgressBar animated variant='danger' now={100}/>
</div>
`;

const AnimatedExample = () => (
    <PrismCode
        code={animatedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default AnimatedExample