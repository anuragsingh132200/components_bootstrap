import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Progress

const defaultProgressCode =
    `
<div>
    <div className="mb-4">
        <ProgressBar now={0} />
    </div>
    <div className="mb-4">
        <ProgressBar now={25} />
    </div>
    <div className="mb-4">
        <ProgressBar now={50} />
    </div>
    <div className="mb-4">
        <ProgressBar now={75} />
    </div>
    <div>
        <ProgressBar now={100} />
    </div>
</div>`;

const DefaultProgressExample = () => (
    <PrismCode
        code={defaultProgressCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DefaultProgressExample