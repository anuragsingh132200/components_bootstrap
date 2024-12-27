import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Multiple Bars
const multipleBarsCode =
    `
<!-- Multiple Bars -->
<ProgressBar>
    <ProgressBar now={15} key={1} />
    <ProgressBar variant="success" now={30} key={2} />
    <ProgressBar variant="info" now={20} key={3} />
</ProgressBar>
`;

const MultipleBarsExample = () => (
    <PrismCode
        code={multipleBarsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default MultipleBarsExample