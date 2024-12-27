import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const contextualLinkCode =
    `
<!-- Contextual Classes with Link -->
<ListGroup>
    <ListGroup.Item as='a' href="#" className="list-group-item-action">A simple default list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-primary">A simple primary list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-secondary">A simple secondary list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-success">A simple success list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-danger">A simple danger list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-warning">A simple warning list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-info">A simple info list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-light">A simple light list group item</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action list-group-item-dark">A simple dark list group item</ListGroup.Item>
</ListGroup>
`;

const ContextualLinkExample = () => (
    <PrismCode
        code={contextualLinkCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ContextualLinkExample;