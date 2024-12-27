import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const MenuSize = () => {

    const code =
        `<Row className="gy-4">
        <Col lg={6}>
            <Form.Select multiple aria-label="multiple select example">
                <option defaultValue="Open this select menu (multiple select option)">Open this select menu (multiple select option)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Col>
        <Col lg={6}>
            <Form.Select aria-label="size 3 select example">
                <option defaultValue="Open this select menu (select menu size)">Open this select menu (select menu size)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
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

export default MenuSize;