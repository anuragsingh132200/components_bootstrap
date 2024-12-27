import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

//DefaultSelect code
const DefaultSelect = () => {

const code =
    `<Row>
<Col lg={6}>
    <Form.Select className="mb-3" aria-label="Default select example">
        <option selected>Select your Status </option>
        <option value="1">Declined Payment</option>
        <option value="2">Delivery Error</option>
        <option value="3">Wrong Amount</option>
    </Form.Select>
</Col>
<Col lg={6}>
    <Form.Select className="rounded-pill mb-3" aria-label="Default select example">
        <option selected>Search for services</option>
        <option value="1">Information Architecture</option>
        <option value="2">UI/UX Design</option>
        <option value="3">Back End Development</option>
    </Form.Select>
</Col>
<Col lg={6}>
    <Form.Select aria-label="Disabled select example" disabled>
        <option selected>Open this select menu (Disabled)</option>
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

export default DefaultSelect;