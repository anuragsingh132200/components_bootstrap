import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const loadingbuttonsCode =
    `
<!-- Load More Buttons -->

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='outline-primary' className="btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button className="btn-success btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button variant='outline-secondary' className="btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
    <Button className="btn-danger btn-load">
        <span className="d-flex align-items-center">
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="flex-grow-1 ms-2">
                Loading...
            </span>
        </span>
    </Button>
</div>

<div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='outline-primary' className="btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </Button>
    <button type="button" className="btn btn-success btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </button>
    <button type="button" className="btn btn-outline-warning btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </button>
    <button type="button" className="btn btn-info btn-load">
        <span className="d-flex align-items-center">
            <span className="flex-grow-1 me-2">
                Loading...
            </span>
            <Spinner animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </span>
    </button>
</div>
`;

const LoadingbuttonsExample = () => (
    <PrismCode
        code={loadingbuttonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default LoadingbuttonsExample;