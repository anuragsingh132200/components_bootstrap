import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const CustomForms = () => {
    const code =
        `<!-- Select -->
<div>
    <h5 className="fs-15 mb-3">Select</h5>
    <Row className="g-3">
        <Col lg={6}>
            <InputGroup>
                <Form.Label className="input-group-text" htmlFor="inputGroupSelect01">Options</Form.Label>
                <Form.Select id="inputGroupSelect01">
                    <option defaultValue="Choose...">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </InputGroup>
        </Col>
        <Col lg={6}>
            <InputGroup>
                <Form.Select id="inputGroupSelect02">
                    <option defaultValue="Choose...">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Form.Label className="input-group-text" htmlFor="inputGroupSelect02">Options</Form.Label>
            </InputGroup>
        </Col>
        <Col lg={6}>
            <InputGroup>
                <button className="btn btn-outline-primary" type="button">Button</button>
                <Form.Select id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option defaultValue="Choose...">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </InputGroup>
        </Col>
        <Col lg={6}>
            <InputGroup>
                <Form.Select id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option defaultValue="Choose...">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <button className="btn btn-outline-secondary" type="button">Button</button>
            </InputGroup>
        </Col>
    </Row>
</div>
<div className="mt-4">
    <h5 className="fs-15 mb-3">File Input</h5>
    <Row className="g-3">
        <Col lg={6}>
            <div className="input-group">
                <Form.Label className="input-group-text" htmlFor="inputGroupFile01">Upload</Form.Label>
                <Form.Control type="file" id="inputGroupFile01" />
            </div>
        </Col>
        <Col lg={6}>
            <div className="input-group">
                <Form.Control type="file" id="inputGroupFile02" />
                <Form.Label className="input-group-text" htmlFor="inputGroupFile02">Upload</Form.Label>
            </div>
        </Col>
        <Col lg={6}>
            <div className="input-group">
                <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">Button</button>
                <Form.Control type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
            </div>
        </Col>
        <Col lg={6}>
            <div className="input-group">
                <Form.Control type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <button className="btn btn-outline-success" type="button" id="inputGroupFileAddon04">Button</button>
            </div>
        </Col>
    </Row>
</div>
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

export default CustomForms;