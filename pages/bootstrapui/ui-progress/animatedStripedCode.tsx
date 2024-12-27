import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Animated Striped Progress
const animatedStripedCode =
    `
<!-- Animated Striped Progress -->
<div>
    <ProgressBar striped animated now={75} />
</div>
`;

const AnimatedStripedExample = () => (
    <PrismCode
        code={animatedStripedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default AnimatedStripedExample;