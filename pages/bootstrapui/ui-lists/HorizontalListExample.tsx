import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const horizontalListCode =
    `
<!-- Start Alignment -->
<ListGroup horizontal className="mb-3">
    <ListGroup.Item>Inbox</ListGroup.Item>
    <ListGroup.Item>Work</ListGroup.Item>
    <ListGroup.Item>Shopping</ListGroup.Item>
</ListGroup>
<ListGroup horizontal className="justify-content-center mb-3">
    <ListGroup.Item>Inbox</ListGroup.Item>
    <ListGroup.Item>Work</ListGroup.Item>
    <ListGroup.Item>Shopping</ListGroup.Item>
</ListGroup>
<ListGroup horizontal className="justify-content-end">
    <ListGroup.Item>Inbox</ListGroup.Item>
    <ListGroup.Item>Work</ListGroup.Item>
    <ListGroup.Item>Shopping</ListGroup.Item>
</ListGroup>
`;

const HorizontalListExample = () => (
    <PrismCode
        code={horizontalListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default HorizontalListExample;