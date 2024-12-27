import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const spinnersCode =
    `
<!-- Border spinner -->

<Spinner animation='border' variant="primary"> Loading... </Spinner>

<Spinner animation='border' variant="secondary"> Loading... </Spinner>

<Spinner animation='border' variant="success"> Loading... </Spinner>

<Spinner animation='border' variant="info"> Loading... </Spinner>

<Spinner animation='border' variant="warning"> Loading... </Spinner>

<Spinner animation='border' variant="danger"> Loading... </Spinner>

<Spinner animation='border' variant="dark"> Loading... </Spinner>

<Spinner animation='border' variant="light"> Loading... </Spinner>


<!-- Growing spinner -->

<Spinner animation='grow' variant="primary"> Loading... </Spinner>

<Spinner animation='grow' variant="secondary"> Loading... </Spinner>

<Spinner animation='grow' variant="success"> Loading... </Spinner>

<Spinner animation='grow' variant="info"> Loading... </Spinner>

<Spinner animation='grow' variant="warning"> Loading... </Spinner>

<Spinner animation='grow' variant="danger"> Loading... </Spinner>

<Spinner animation='grow' variant="dark"> Loading... </Spinner>

<Spinner animation='grow' variant="light"> Loading... </Spinner>
`;

const SpinnersExample = () => (
    <PrismCode
        code={spinnersCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default SpinnersExample;