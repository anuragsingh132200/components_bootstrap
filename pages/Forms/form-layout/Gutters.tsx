import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const Gutters = () => {
    const code = `
<Col md={12}>
    <Form.Label htmlFor="fullnameInput">Name</Form.Label>
    <Form.Control type="text" id="fullnameInput" placeholder="Enter your name"/>
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputEmail4">Email</Form.Label>
    <Form.Control type="email" id="inputEmail4" placeholder="Email"/>
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputPassword4">Password</Form.Label>
    <Form.Control type="password" id="inputPassword4" placeholder="Password"/>
</Col>
<Col className="col-12">
    <Form.Label htmlFor="inputAddress">Address</Form.Label>
    <Form.Control type="text" id="inputAddress" placeholder="1234 Main St"/>
</Col>
<Col className="col-12">
    <Form.Label htmlFor="inputAddress2">Address 2</Form.Label>
    <Form.Control type="text" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
</Col>
<Col md={6}>
    <Form.Label htmlFor="inputCity">City</Form.Label>
    <Form.Control type="text" id="inputCity" placeholder="Enter your city"/>
</Col>
<Col md={4}>
    <Form.Label htmlFor="inputState">State</Form.Label>
    <select id="inputState" className="form-select" data-choices data-choices-sorting="true">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</Col>
<Col md={2}>
    <Form.Label htmlFor="inputZip">Zip</Form.Label>
    <Form.Control type="text" id="inputZip" placeholder="Zin code"/>
</Col>
<Col className="col-12">
    <div className="form-check">
        <Form.Check type="checkbox" id="gridCheck"/>
        <Form.Label className="form-check-label" htmlFor="gridCheck">
            Check me out
        </Form.Label>
    </div>
</Col>
<Col className="col-12">
    <div className="text-end">
        <Button type="button" variant="primary">Sign in</Button>
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

export default Gutters;