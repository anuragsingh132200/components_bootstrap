import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const FileInput = () => {
    const code =
        `<!-- Default File Input Example -->
<Row className="align-items-center g-3">
    <Col lg={4}>
        <Form.Group>
            <Form.Label>Default File Input Example</Form.Label>
            <p className="text-muted">Use <code>input</code> attribute with <code>type="file"</code> tag for default file input</p>
            <Form.Control type="file" id="formFile" />
        </Form.Group>
    </Col>
    <Col lg={4}>
        <Form.Group>
            <Form.Label>Multiple Files Input Example</Form.Label>
            <p className="text-muted">Use <code>multiple</code> attribute within the input attribute to select multiple files.</p>
            <Form.Control type="file" id="formFileMultiple" multiple />
        </Form.Group>
    </Col>
    <Col lg={4}>
        <Form.Group>
            <Form.Label>Disabled File Input Example</Form.Label>
            <p className="text-muted">Use <code>disabled</code> attribute within the input attribute to disable the file input.</p>
            <Form.Control type="file" id="formFileDisabled" disabled />
        </Form.Group>
    </Col>
</Row>
<Row className="mt-4 align-items-center g-3">
    <h5 className="fs-14">File Input Sizing</h5>
    <Col lg={4}>
        <Form.Group>
            <Form.Label>Small Size File Input Example</Form.Label>
            <p className="text-muted">Use <code>form-control-sm</code> class within the form-control class to set a small size file input.</p>
            <Form.Control className="form-control-sm" id="formSizeSmall" type="file" />
        </Form.Group>
    </Col>
    <Col lg={4}>
        <Form.Group>
            <Form.Label>Default Size File Input Example</Form.Label>
            <p className="text-muted">Use <code>form-control </code>class and <code>type="file"</code> attribute within the input attribute to set a default size file input.</p>
            <Form.Control id="formSizeDefault" type="file" />
        </Form.Group>
    </Col>
    <Col lg={4}>
        <Form.Group>
            <Form.Label>Large Size File Input Example</Form.Label>
            < className="text-muted">Use <code>form-control-lg</code> class within the form-control class to set a large size file input.</
            <Form.Control className="form-control-lg" id="formSizeLarge" type="file" />
        </Form.Group>
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

export default FileInput;