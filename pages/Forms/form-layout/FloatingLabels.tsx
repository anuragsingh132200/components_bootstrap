import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const FloatingLabels = () => {
    const code = `
<Form action="#">
    <Row className="g-3">
        <Col lg={6}>
            <div className="form-floating">
                <Form.Control type="text" id="firstnamefloatingInput" placeholder="Enter your firstname"/>
                <Form.Label htmlFor="firstnamefloatingInput">First Name</Form.Label>
            </div>
        </Col>
        <Col lg={6}>
            <div className="form-floating">
                <Form.Control type="text" id="lastnamefloatingInput" placeholder="Enter your Lastname"/>
                <Form.Label htmlFor="lastnamefloatingInput">Last Name</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="email" id="emailfloatingInput" placeholder="Enter your email"/>
                <Form.Label htmlFor="emailfloatingInput">Email Address</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="password" id="passwordfloatingInput" placeholder="Enter your password"/>
                <Form.Label htmlFor="passwordfloatingInput">Password</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="password" id="passwordfloatingInput1" placeholder="Confirm password"/>
                <Form.Label htmlFor="passwordfloatingInput1">Confirm Password</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="text" id="cityfloatingInput" placeholder="Enter your city"/>
                <Form.Label htmlFor="cityfloatingInput">City</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Select id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Choose...</option>
                    <option value="1">USA</option>
                    <option value="2">Brazil</option>
                    <option value="3">France</option>
                    <option value="4">Germany</option>
                </Form.Select>
                <Form.Label htmlFor="floatingSelect">Country</Form.Label>
            </div>
        </Col>
        <Col lg={4}>
            <div className="form-floating">
                <Form.Control type="number" id="zipfloatingInput" placeholder="Enter your zipcode"/>
                <Form.Label htmlFor="zipfloatingInput">Zipcode</Form.Label>
            </div>
        </Col>
        <Col lg={1}>
            <div className="text-end">
                <Button type="button" variant="primary">Submit</Button>
            </div>
        </Col>
    </Row>
</Form>
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

export default FloatingLabels;