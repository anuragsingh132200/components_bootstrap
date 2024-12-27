import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const sizingDropdownCode = `
<!-- Dropdown Sizing -->
<Dropdown>
    <Dropdown.Toggle variant="primary" size='lg'>
        Large Button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="light" size='lg'>Large Split Button</Button>
    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="primary" size='sm'>
        Small Button
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="light" size='sm'>Small Split Button</Button>
    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
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

const SizingDropdownExample = () => (
  <PrismCode
    code={sizingDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default SizingDropdownExample;