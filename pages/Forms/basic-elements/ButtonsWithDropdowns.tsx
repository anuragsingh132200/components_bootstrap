import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const ButtonsWithDropdowns = () => {
    const code =
        ` 
<!-- Buttons with dropdowns -->
<Row className="g-3">
    <Col lg={6}>
        <InputGroup>
            <Dropdown>
                <Dropdown.Toggle variant="primary">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <FormControl type="text" aria-label="Text input with dropdown button" />
        </InputGroup>
    </Col>
    <Col lg={6}>
        <InputGroup>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </InputGroup>
    </Col>
    <Col lg={12}>
        <InputGroup>
            <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
            <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                    Dropdown
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" active> Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </InputGroup>
    </Col>
</Row>
`
    return (
        <React.Fragment>
            <PrismCode
                code={code}
                language={"react"}
            />
        </React.Fragment>
    )
}

export default ButtonsWithDropdowns;