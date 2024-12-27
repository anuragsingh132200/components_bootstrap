import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const listRadioCode =
    `
<!-- List with Radios -->
<ListGroup>
    <ListGroupItem tag="label">
        <Input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Declined Payment
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" defaultChecked />
        Delivery Error
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Wrong Amount
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Wrong Address
    </ListGroupItem>
    <ListGroupItem tag="label">
        <Input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
        Wrong UX/UI Solution
    </ListGroupItem>
</ListGroup>
`;

const ListRadioExample = () => (
    <PrismCode
        code={listRadioCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ListRadioExample;