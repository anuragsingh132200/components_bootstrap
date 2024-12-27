import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Custom Progress
const customCode =
    `
<!-- Custom Progress -->
<div className="mb-4">
    <ProgressBar now={15} className="custom-progress" />
</div>
<div className="mb-4">
    <ProgressBar now={25} variant='success' className='custom-progress' />
</div>
<div className="custom-progress mb-4">
    <ProgressBar now={50} variant='info' className='custom-progress' />
</div>
<div className="mb-4">
    <ProgressBar now={75} variant='warning' className='custom-progress' />
</div>
<div>
    <ProgressBar now={100} variant='danger' className='custom-progress' />
</div>
`;

const CustomExample = () => (
    <PrismCode
        code={customCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CustomExample