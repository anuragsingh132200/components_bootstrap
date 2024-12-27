import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Progress with Steps
const progressWithStepCode =
    `
<!-- Progress with Steps -->
<div className="position-relative m-4">
    <Progress value={50} style={{ height: "1px" }} />
    <Button size="sm" color="primary" className="position-absolute top-0 start-0 translate-middle rounded-pill" style={{ width: "2rem", height: "2rem" }}>1</Button>
    <Button size="sm" color="primary" className="position-absolute top-0 start-50 translate-middle rounded-pill" style={{ width: "2rem", height: "2rem" }}>2</Button>
    <Button size="sm" color="light" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ width: "2rem", height: "2rem" }}>3</Button>
</div>
`;

const ProgressWithStepExample = () => (
    <PrismCode
        code={progressWithStepCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ProgressWithStepExample