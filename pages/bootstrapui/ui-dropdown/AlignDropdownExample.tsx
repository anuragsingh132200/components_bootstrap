import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const alignDropdownCode = `
<!-- Alignment options -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown align='end'>
    <Dropdown.Toggle variant="secondary">
        Right-aligned menu
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown align='end'>
    <Dropdown.Toggle variant="secondary">
        Left-aligned, right-aligned lg
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Right-aligned, left-aligned lg
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown drop='start'>
    <Dropdown.Toggle variant="secondary">
        Dropstart
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown drop='end'>
    <Dropdown.Toggle variant="secondary">
        Dropend
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown drop='up'>
    <Dropdown.Toggle variant="secondary">
        Dropup
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const AlignDropdownExample = () => (
  <PrismCode
    code={alignDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default AlignDropdownExample;