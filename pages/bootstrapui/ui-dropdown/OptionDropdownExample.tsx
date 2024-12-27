import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const optionDropdownCode = `
<!-- Dropdown Options -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Offset
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="secondary">Reference</Button>
    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>
`;

const OptionDropdownExample = () => (
  <PrismCode
    code={optionDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default OptionDropdownExample;