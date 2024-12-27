import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const menuItemDropdownCode = `
<!-- Dropdown Menu Item Color -->
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
        <Dropdown>
            <Dropdown.Toggle variant="primary">
                Primary 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
        <Dropdown>
            <Dropdown.Toggle variant="secondary">
                Sacondary
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Success link</p>
        <Dropdown>
            <Dropdown.Toggle variant="success">
                Success
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
        <Dropdown>
            <Dropdown.Toggle variant="warning">
                Warning
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Info link</p>
        <Dropdown>
            <Dropdown.Toggle variant="info">
                Info
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
                                                        
<Col lg={4} sm={6}>
    <div className="mt-3">
        <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
        <Dropdown>
            <Dropdown.Toggle variant="danger">
                Danger
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
</Col>
`;

const MenuItemDropdownExample = () => (
  <PrismCode
    code={menuItemDropdownCode}
    language={"js"}
    plugins={["line-numbers"]}
  />
);
export default MenuItemDropdownExample;