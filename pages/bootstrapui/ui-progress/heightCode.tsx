import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Height
const heightCode =
    `
<!-- Prgress sm -->
<div className="mb-4">
    <h5 className="fs-13">Small Progress</h5>
    <ProgressBar now={25} className="progress-sm" />
</div>

<!-- Prgress Default -->
<div className="mb-4">
    <h5 className="fs-13">Default Progress </h5>
    <ProgressBar variant='success' now={40} />
</div>

<!-- Prgress lg -->
<div className="mb-4">
    <h5 className="fs-13">Large Progress</h5>
    <ProgressBar variant='warning' now={25} className="progress-lg" />
</div>

<!-- Prgress xl -->
<div>
    <h5 className="fs-13">Extra Large Progress</h5>
    <ProgressBar variant='danger' now={25} className="progress-xl" />
</div>
`;

const HeightExample = () => (
    <PrismCode
        code={heightCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default HeightExample