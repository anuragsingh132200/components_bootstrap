import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const coloredListCode =
    `
<!-- Colored Lists -->
<ListGroup>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-primary">A simple primary list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-secondary">A simple secondary list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-success">A simple success list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-danger">A simple danger list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-warning">A simple warning list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-info">A simple info list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-light">A simple light list group item</ListGroup.Item>
    <ListGroup.Item className="list-group-fill-dark">A simple dark list group item</ListGroup.Item>
</ListGroup>
`;

const ColoredListExample = () => (
    <PrismCode
        code={coloredListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ColoredListExample;