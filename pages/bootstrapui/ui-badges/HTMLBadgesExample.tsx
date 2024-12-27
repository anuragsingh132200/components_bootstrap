import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const htmlBadgesCode =
`
<h1>Example heading <Badge bg="secondary">New</Badge></h1>

<h2>Example heading <Badge bg="secondary">New</Badge></h2>

<h3>Example heading <Badge bg="secondary">New</Badge></h3>

<h4>Example heading <Badge bg="secondary">New</Badge></h4>

<h5>Example heading <Badge bg="secondary">New</Badge></h5>

<h6 className="mb-0">Example heading <span className="badge text-bg-secondary">New</span></h6>

`;

const HTMLBadgesExample = () => (
    <PrismCode
        code={htmlBadgesCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default HTMLBadgesExample;