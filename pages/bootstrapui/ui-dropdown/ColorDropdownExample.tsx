import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const colorDropdownCode = `
<!-- Dropdown Variant -->
<Dropdown>
    <Dropdown.Toggle variant="primary">
        primary
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
    <Dropdown.Toggle variant="success">
        success
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
    <Dropdown.Toggle variant="light">
        light
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
    <Dropdown.Toggle variant="secondary">
        secondary
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
    <Dropdown.Toggle variant="warning">
        warning
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
    <Dropdown.Toggle variant="danger">
        danger
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
    <Dropdown.Toggle variant="dark">
        dark
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

`;

const ColorDropdownExample = () => (
  <PrismCode
    code={colorDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default ColorDropdownExample;