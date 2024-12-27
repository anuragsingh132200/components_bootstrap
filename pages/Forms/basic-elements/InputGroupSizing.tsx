import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const InputGroupSizing = () => {
    const code =
        `<!-- Input Group Sizing -->
<Row className="align-items-center g-3">
    <Col lg={4}>
        <InputGroup className="input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
            <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
    </Col>
    <Col lg={4}>
        <InputGroup>
            <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
            <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </InputGroup>
    </Col>
    <Col lg={4}>
        <InputGroup className="input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
            <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
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

export default InputGroupSizing;