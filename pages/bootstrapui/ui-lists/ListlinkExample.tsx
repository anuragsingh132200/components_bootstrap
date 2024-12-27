import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const listlinkCode =
    `
<!-- List with Link -->
<ListGroup className="list-group-fill-success">
    <ListGroup.Item as='a' href="#" className="list-group-item-action active"><i className="ri-download-2-fill align-middle me-2"></i>Category Download</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action"><i className="ri-shield-check-line align-middle me-2"></i>Security Access</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action"><i className="ri-database-2-line align-middle me-2"></i>Storage folder</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action"><i className="ri-notification-3-line align-middle me-2"></i>Push Notification</ListGroup.Item>
    <ListGroup.Item as='a' href="#" className="list-group-item-action disabled" tabIndex={-1}><i className="ri-moon-fill align-middle me-2"></i>Dark Mode</ListGroup.Item>
</ListGroup>
`;

const ListlinkExample = () => (
    <PrismCode
        code={listlinkCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ListlinkExample;