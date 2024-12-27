import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const activeItemCode =
    `
<!-- Active Item -->
<ListGroup as='ul'>
    <ListGroup.Item as='li' active>Send the billing agreement</ListGroup.Item>
    <ListGroup.Item as='li'>Send over all the documentation.</ListGroup.Item>
    <ListGroup.Item as='li'>Meeting with daron to review the intake form</ListGroup.Item>
    <ListGroup.Item as='li'>Check uikings theme and give customer support</ListGroup.Item>
    <ListGroup.Item as='li'>Start making a presentation</ListGroup.Item>
</ListGroup>
`;

const ActiveItemExample = () => (
    <PrismCode
        code={activeItemCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ActiveItemExample;