import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const ColumnSizing = () => {
    const code = `
    <Col sm={6}>
        <Form.Control type="text" placeholder="Firstname" aria-label="First-Name"/>
    </Col>
    <Col sm={6}>
        <Form.Control type="text" placeholder="Lastname" aria-label="Last-Name"/>
    </Col>
    <Col sm={4}>
        <Form.Control type="text" placeholder="Email id" aria-label="Email Id"/>
    </Col>
    <Col sm={4}>
        <Form.Control type="password" placeholder="Password" aria-label="Password"/>
    </Col>
    <Col sm={4}>
        <Form.Control type="password" placeholder="Confirm Password" aria-label="confirm-password"/>
    </Col>
    <Col sm={7}>
        <Form.Control type="text" placeholder="City" aria-label="City"/>
    </Col>
    <div className="col-sm">
        <Form.Control type="text" placeholder="State" aria-label="State"/>
    </div>
    <div className="col-sm">
        <Form.Control type="text" placeholder="Zip" aria-label="Zip"/>
    </div>
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

    export default ColumnSizing;