import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const darkDropdownCode = `
<!-- Dark Dropdowns -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown button
    </Dropdown.Toggle>
    <Dropdown.Menu variant='dark'>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const DarkDropdownExample = () => (
  <PrismCode
    code={darkDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);

export default DarkDropdownExample;