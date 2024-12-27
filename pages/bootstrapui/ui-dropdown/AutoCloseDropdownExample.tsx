import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const autoCloseDropdownCode = `
<!-- Default dropdown -->
<Dropdown>
    <Dropdown.Toggle variant="light">
        Default dropdown
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown autoClose='inside'>
    <Dropdown.Toggle variant="light">
        Clickable outside
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown autoClose='outside'>
    <Dropdown.Toggle variant="light">
        Clickable inside
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown autoClose={false}>
    <Dropdown.Toggle variant="light">
        Manual close
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
        <Dropdown.Item href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const AutoCloseDropdownExample = () => (
  <PrismCode
    code={autoCloseDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default AutoCloseDropdownExample;