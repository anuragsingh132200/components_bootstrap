import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

//FormGrid code
const FormGrid = () => {
const code =
`<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="firstNameinput" className="form-label">First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your firstname" id="firstNameinput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="lastNameinput" className="form-label">Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your lastname" id="lastNameinput"/>
</div>
</Col>

<Col md={12}>
<div className="mb-3">
    <Form.Label htmlFor="compnayNameinput" className="form-label">Company Name</Form.Label>
    <Form.Control type="text" placeholder="Enter company name" id="compnayNameinput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="phonenumberInput" className="form-label">Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="+(245) 451 45123" id="phonenumberInput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="emailidInput" className="form-label">Email Address</Form.Label>
    <Form.Control type="email" placeholder="example@gamil.com" id="emailidInput"/>
</div>
</Col>

<Col md={12}>
<div className="mb-3">
    <Form.Label htmlFor="address1ControlTextarea" className="form-label">Address</Form.Label>
    <Form.Control type="text" placeholder="Address 1" id="address1ControlTextarea"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="citynameInput" className="form-label">City</Form.Label>
    <Form.Control type="email" placeholder="Enter your city" id="citynameInput"/>
</div>
</Col>

<Col md={6}>
<div className="mb-3">
    <Form.Label htmlFor="ForminputState" className="form-label">State</Form.Label>
    <select id="ForminputState" className="form-select" data-choices data-choices-sorting="true">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
</Col>

<Col lg={12}>
    <div className="text-end">
        <Button type="submit" variant="primary">Submit</Button>
    </div>
</Col>
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

export default FormGrid;