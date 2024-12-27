import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Progress with Label

const labelCode =
    `
<!-- Labels Example -->
<ProgressBar now={25} label={${25}%} />
`;

const LabelExample = () => (
    <PrismCode
        code={labelCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default LabelExample