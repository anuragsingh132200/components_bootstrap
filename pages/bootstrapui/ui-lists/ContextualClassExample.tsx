import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const contextualClassCode =
    `
<!-- Contextual Classes -->
<ListGroup>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
    <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
    <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
    <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
    <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
    <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
    <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
    <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
</ListGroup>
`;

const ContextualClassExample = () => (
    <PrismCode
        code={contextualClassCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ContextualClassExample;