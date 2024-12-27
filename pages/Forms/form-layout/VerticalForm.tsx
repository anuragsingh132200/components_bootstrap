import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const VerticalForm = () => {
    const code = `
<div className="mb-3">
    <Form.Label htmlFor="employeeName">Employee Name</Form.Label>
    <Form.Control type="text" id="employeeName" placeholder="Enter emploree name"/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="employeeUrl">Employee Department URL</Form.Label>
    <Form.Control type="url" id="employeeUrl" placeholder="Enter emploree url"/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="StartleaveDate">Start Leave Date</Form.Label>
    <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="EndleaveDate">End Leave Date</Form.Label>
    <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
</div>
<div className="mb-3">
    <Form.Label htmlFor="VertimeassageInput">Message</Form.Label>
    <textarea className="form-control" id="VertimeassageInput" rows={3} placeholder="Enter your message"></textarea>
</div>
<div className="text-end">
    <button type="submit" variant="primary">Add Leave</button>
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

export default VerticalForm;