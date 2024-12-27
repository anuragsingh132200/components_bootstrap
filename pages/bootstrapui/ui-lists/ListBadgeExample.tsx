import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const listBadgeCode =
    `
<!-- List with Badges -->
<ListGroup as='ul'>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
        Send the billing agreement <span className="badge bg-success">High</span>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
        Send over all the documentation
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
        Meeting with daron to review the intake form <span className="badge bg-danger">Low</span>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
        Check uikings theme and give customer support <span className="badge bg-secondary">Medium</span>
    </ListGroup.Item>
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
        Start making a presentation <span className="badge bg-success">High</span>
    </ListGroup.Item>
</ListGroup>
`;

const ListBadgeExample = () => (
    <PrismCode
        code={listBadgeCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ListBadgeExample;
