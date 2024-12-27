import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Single Button Dropdown

const singleButtonDropdownCode = `
<!-- Single Button Dropdown -->
<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown>
    <Dropdown.Toggle variant="secondary">
        Dropdown link
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#" active> Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;

const SingleButtonDropdownExample = () => (
  <PrismCode
    code={singleButtonDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default SingleButtonDropdownExample;