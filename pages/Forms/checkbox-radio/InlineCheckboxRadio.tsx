import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const InlineCheckboxRadio = () => {
    const code = `<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox6" value="option1" />
            <Form.Label htmlFor="inlineCheckbox6">1</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox7" value="option2" />
            <Form.Label htmlFor="inlineCheckbox7">2</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="checkbox" id="inlineCheckbox8" value="option3" disabled />
            <Form.Label htmlFor="inlineCheckbox8">3 (disabled)</Form.Label>
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
            <Form.Label htmlFor="inlineRadio1">1</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
            <Form.Label htmlFor="inlineRadio2">2</Form.Label>
        </div>
        <div className="form-check form-check-inline">
            <Form.Check type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" disabled />
            <Form.Label htmlFor="inlineRadio3">3 (disabled)</Form.Label>
        </div>
    </div>
</Col>

<Col lg={4}>
    <div className="mt-4 mt-lg-0">
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch5" />
            <Form.Label htmlFor="inlineswitch5">1</Form.Label>
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitch6" />
            <Form.Label htmlFor="inlineswitch6">2</Form.Label>
        </div>
        <div className="form-check form-switch form-check-inline" dir="ltr">
            <Form.Check type="checkbox" id="inlineswitchdisabled2" disabled />
            <Form.Label htmlFor="inlineswitchdisabled2">2</Form.Label>
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

export default InlineCheckboxRadio;