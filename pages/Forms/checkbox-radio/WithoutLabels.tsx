import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const WithoutLabels = () => {
    const code = `<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox1" value="option1" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox2" value="option2" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox3" value="option3" disabled />
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio1" value="option1" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio2" value="option2" />
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions" id="WithoutinlineRadio3" value="option3" disabled />
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch" />
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch1" />
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitchdisabled" disabled />
        </div>
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

export default WithoutLabels;