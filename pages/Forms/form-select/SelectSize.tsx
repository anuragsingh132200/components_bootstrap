import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const SelectSize = () => {

    const code =
    `<Row className="align-items-center g-3">
    <Col lg={4}>
        <Form.Select className="form-select-sm" aria-label=".form-select-sm example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </Col>
    <Col lg={4}>
        <Form.Select aria-label=".form-select-sm example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </Col>
    <Col lg={4}>
        <Form.Select className="form-select-lg" aria-label=".form-select-lg example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    </Col>
    </Row>
    `;
        return (
            <React.Fragment>
                <PrismCode
                    code={code}
                     language={"react"}
                />
            </React.Fragment>
        );
    };

    export default SelectSize;