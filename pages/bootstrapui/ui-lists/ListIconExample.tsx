import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const listIconCode =
    `
<!-- List with Icon -->
<ListGroup>
    <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send the billing agreement</ListGroup.Item>
    <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send over all the documentation.</ListGroup.Item>
    <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Meeting with daron to review the intake form</ListGroup.Item>
    <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Check uikings theme and give customer support</ListGroup.Item>
    <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Start making a presentation</ListGroup.Item>
</ListGroup>
`;

const ListIconExample = () => (
    <PrismCode
        code={listIconCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ListIconExample;