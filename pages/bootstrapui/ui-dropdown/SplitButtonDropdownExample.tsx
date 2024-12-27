import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const splitButtonDropdownCode = `
<!-- Split Button Dropdown -->
<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="primary">Primary</Button>

    <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

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
    <Dropdown as={ButtonGroup}>
    <Button variant="success">Success</Button>

    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

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
    <Dropdown as={ButtonGroup}>
    <Button variant="light">Light</Button>

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
    <Dropdown as={ButtonGroup}>
    <Button variant="info">Info</Button>

    <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

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
    <Dropdown as={ButtonGroup}>
    <Button variant="secondary">Secondary</Button>

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

<Dropdown>
    <Dropdown as={ButtonGroup}>
    <Button variant="warning">Warning</Button>

    <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

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
    <Dropdown as={ButtonGroup}>
    <Button variant="danger">Danger</Button>

    <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

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
    <Dropdown as={ButtonGroup}>
    <Button variant="dark">Dark</Button>

    <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

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

const SplitButtonDropdownExample = () => (
  <PrismCode
    code={splitButtonDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

export default SplitButtonDropdownExample;