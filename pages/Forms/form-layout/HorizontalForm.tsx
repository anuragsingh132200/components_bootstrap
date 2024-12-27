import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const HorizontalForm = () => {
    const code = `<Form action="#">
    <Row className="mb-3">
        <Col lg={3}>
            <Form.Label htmlFor="nameInput" >Name</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="text" id="nameInput" placeholder="Enter your name" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="websiteUrl">Website URL</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="url" id="websiteUrl" placeholder="Enter your url" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="dateInput">Date</Form.Label>
        </Col>
        <Col lg={9}>
            <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="timeInput">Time</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="time" data-provider="timepickr" data-time-basic="true" id="timeInput" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="leaveemails">Email Id</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="email" id="leaveemails" placeholder="Enter your email" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="contactNumber">Contact Number</Form.Label>
        </Col>
        <Col lg={9}>
            <Form.Control type="number" id="contactNumber" placeholder="+91 9876543210" />
        </Col>
    </Row>
    <Row mb={3}>
        <Col lg={3}>
            <Form.Label htmlFor="meassageInput">Message</Form.Label>
        </Col>
        <Col lg={9}>
            <textarea className="form-control" id="meassageInput" rows={3} placeholder="Enter your message"></textarea>
        </Col>
    </Row>
    <div className="text-end">
        <Button type="button" variant="primary">Add Leave</Button>
    </div>
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

export default HorizontalForm;