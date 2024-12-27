import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Step Progress with Arrow
const contentProgressExmapleCode =
    `
<!-- Content Progress -->
<Card className="bg-light overflow-hidden shadow-none">
    <Card.Body>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-secondary">30%</b> Update in progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">1 min left</h6>
            </div>
        </div>
    </Card.Body>
    <div className="bg-secondary-subtle rounded-0">
        <ProgressBar now={30} variant='secondary' />
    </div>
</Card>

<Card className="bg-light overflow-hidden shadow-none">
    <Card.Body>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-success">60%</b> Update in progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">45s left</h6>
            </div>
        </div>
    </Card.Body>
    <div className="bg-success-subtle rounded-0">
        <ProgressBar now={60} variant='success' />
    </div>
</Card>

<Card className="bg-light overflow-hidden shadow-none">
    <Card.Body>
        <div className="d-flex">
            <div className="flex-grow-1">
                <h6 className="mb-0"><b className="text-danger">82%</b> Update in progress...</h6>
            </div>
            <div className="flex-shrink-0">
                <h6 className="mb-0">25s left</h6>
            </div>
        </div>
    </Card.Body>
    <div className="bg-danger-subtle rounded-0">
        <ProgressBar now={82} variant='danger' />
    </div>
</Card>
`;

const ContentProgressExmaple = () => (
    <PrismCode
        code={contentProgressExmapleCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ContentProgressExmaple