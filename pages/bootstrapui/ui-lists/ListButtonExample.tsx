import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const listButtonCode =
    `
<!-- List with Button -->
<ListGroup>
    <ListGroupItem tag="button" className="list-group-item-action active"><i className="ri-reply-fill align-middle me-2"></i>Reply</ListGroupItem>
    <ListGroupItem tag="button" className="list-group-item-action"><i className="ri-share-forward-fill align-middle me-2"></i>Forward Message</ListGroupItem>
    <ListGroupItem tag="button" className="list-group-item-action"><i className="ri-equalizer-line align-middle me-2"></i>Filter Message</ListGroupItem>
    <ListGroupItem tag="button" className="list-group-item-action"><i className="ri-delete-bin-5-line align-middle me-2"></i>Delete Message</ListGroupItem>
    <ListGroupItem tag="button" className="list-group-item-action" disabled><i className="ri-forbid-line align-middle me-2"></i>Block "Mark Spencer</ListGroupItem>
</ListGroup>
`;

const ListButtonExample = () => (
    <PrismCode
        code={listButtonCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ListButtonExample;