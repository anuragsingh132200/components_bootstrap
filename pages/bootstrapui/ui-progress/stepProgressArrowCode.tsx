import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Step Progress with Arrow
const stepProgressArrowCode =
    `
<!-- Step Progress with Arrow -->
<ProgressBar className='progress-step-arrow progress-info'>
    <ProgressBar now={100} label={'Step1'} />
    <ProgressBar now={100} label={'Step2'} />
    <ProgressBar now={100} variant='light text-dark' label={'Step3'} />
</ProgressBar>
`;

const StepProgressArrowExample = () => (
    <PrismCode
        code={stepProgressArrowCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default StepProgressArrowExample