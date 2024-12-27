import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const ButtonsCheckboxesRadiosGroup = () => {
    const code =
        `<!-- Checkbox Input -->
<Row className="g-3">
    <Col lg={6}>
        <InputGroup>
            <div className="input-group-text">
                <Form.Check className="mt-0" type="checkbox" defaultValue="" aria-label="Checkbox for following text input" />
            </div>
            <Form.Control type='checkbox' aria-label="Text input with checkbox" />
        </InputGroup>
    </Col>
    <Col lg={6}>
        <InputGroup>
            <div className="input-group-text">
                <Form.Check className="mt-0" type="radio" defaultValue="" aria-label="Radio button for following text input" />
            </div>
            <Form.Control type="radio" aria-label="Text input with radio button" />
        </InputGroup>
    </Col>
    <Col lg={6}>
        <InputGroup>
            <Button variant="outline-primary" id="button-addon1">Button</Button>
            <Form.Control type="text" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </InputGroup>
    </Col>
    <Col lg={6}>
        <InputGroup>
            <Form.Control type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <Button variant="outline-success" id="button-addon2">Button</Button>
        </InputGroup>
    </Col>
    <Col lg={6}>
        <InputGroup>
            <Button variant="primary">Button</Button>
            <Button variant="success">Button</Button>
            <Form.Control type="text" placeholder="" aria-label="Example text with two button addons" />
        </InputGroup>
    </Col>
    <Col lg={6}>
        <InputGroup>
            <Form.Control type="text" aria-label="Recipient's username with two button addons" />
            <Button variant="primary">Button</Button>
            <Button variant="success">Button</Button>
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

export default ButtonsCheckboxesRadiosGroup;