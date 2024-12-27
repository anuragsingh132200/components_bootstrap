import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const listNumberedCode =
    `
<!-- List with Numbered -->
<ListGroup as='ol' className="list-group-numbered">
    <ListGroup.Item>Send the billing agreement</ListGroup.Item>
    <ListGroup.Item>Send over all the documentation.</ListGroup.Item>
    <ListGroup.Item>Meeting with daron to review the intake form</ListGroup.Item>
    <ListGroup.Item>Check uikings theme and give customer support</ListGroup.Item>
    <ListGroup.Item>Start making a presentation</ListGroup.Item>
</ListGroup>
`;

const ListNumberedExample = () => (
    <PrismCode
        code={listNumberedCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ListNumberedExample;