import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Progress with background color

const backgroundColorCode =
    `
<!-- Backgrounds -->
<div>
    <div className="mb-4">
        <ProgressBar variant='primary' now={15} />
    </div>
    <div className="mb-4">
        <ProgressBar variant='success' now={25} />
    </div>
    <div className="mb-4">
        <ProgressBar variant='info' now={50} />
    </div>
    <div className="mb-4">
        <ProgressBar variant='warning' now={75} />
    </div>
    <div>
        <ProgressBar variant='danger' now={100} />
    </div>
</div>`;

const BackgroundColorExample = () => (
    <PrismCode
        code={backgroundColorCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default BackgroundColorExample