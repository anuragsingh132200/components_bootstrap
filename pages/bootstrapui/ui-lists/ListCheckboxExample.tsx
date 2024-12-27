import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })
const listCheckboxCode =
    `
<!-- List with Checkboxs -->
<ListGroup>
    <ListGroupItem tag="label">
        <Input className="form-check-input me-1" type="checkbox" value="" />
        Declined Payment
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input me-1" type="checkbox" value="" defaultChecked />
        Delivery Error
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input me-1" type="checkbox" value="" defaultChecked />
        Wrong Amount
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input me-1" type="checkbox" value="" />
        Wrong Address
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input me-1" type="checkbox" value="" />
        Wrong UX/UI Solution
    </ListGroupItem>
</ListGroup>
`;

const ListCheckboxExample = () => (
    <PrismCode
        code={listCheckboxCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default ListCheckboxExample;