import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const linkColorAlertsCode = `
<!-- Primary Alert -->
<Alert variant="primary">
    A simple Primary alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Secondary Alert -->
<Alert variant="secondary">
    A simple Secondary alert with <Alert.Link to="#">an example link</Alert.Link>.  Give it a click if you like.
</Alert>

<!-- Success Alert -->
<Alert variant="success">
    A simple Success alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Danger Alert -->
<Alert variant="danger" className="mb-xl-0">
    A simple Danger alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Warning Alert -->
<Alert variant="warning">
    A simple Warning alert with <Alert.Link to="#">an example link</Alert.Link>. Give  it a click if you like.
</Alert>

<!-- Info Alert -->
<Alert variant="info">
    A simple Info alert with <Alert.Link to="#">an example link</Alert.Link>. Give it  a click if you like.
</Alert>

<!-- Light Alert -->
<Alert variant="light">
    A simple Light alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>

<!-- Dark Alert -->
<Alert variant="dark" className="mb-0">
    A simple Dark alert with <Alert.Link to="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>`;

const LinkColorExample = () => (
    <PrismCode
        code={linkColorAlertsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default LinkColorExample;