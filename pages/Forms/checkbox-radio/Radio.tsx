import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const Radio = () => {
    const code = `<Col lg={4} md={6}>
    <div>
        <p className="text-muted fw-medium">Default Radios</p>
        <p className="text-muted">Use <code>type="radio"</code> attribute to set a radio button and add <code>checked</code> attribute to set a radio checked by default.</p>
        <div className="form-check mb-2">
            <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <Form.Label htmlFor="flexRadioDefault1">
                Default radio
            </Form.Label>
        </div>
        <div className="form-check">
            <Form.Check type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
            <Form.Label htmlFor="flexRadioDefault2">
                Default checked radio
            </Form.Label>
        </div>
    </div>
</Col>
<Col lg={4} md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted fw-medium">Disabled Radios</p>
        <p className="text-muted">Use <code>disabled</code> attribute to set a radio button disabled and add <code>checked</code> attribute to set a radio checked by default.</p>
        <div className="form-check mb-2">
            <Form.Check type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
            <Form.Label htmlFor="flexRadioDisabled">
                Disabled radio
            </Form.Label>
        </div>
        <div>
            <div className="form-check">
                <Form.Check type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" defaultChecked disabled />
                <Form.Label htmlFor="flexRadioCheckedDisabled">
                    Disabled checked radio
                </Form.Label>
            </div>
        </div>
    </div>
</Col>
<Col lg={4} md={6}>
    <div className="mt-4 mt-md-0">
        <p className="text-muted fw-medium">Radio Right</p>
        <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a radio button on the right side.</p>
        <div className="form-check form-check-right mb-2">
            <Form.Check type="radio" name="formradioRight" id="formradioRight1" />
            <Form.Label htmlFor="formradioRight1">
                Form Radio Right
            </Form.Label>
        </div>
        <div>
            <div className="form-check form-check-right">
                <Form.Check type="radio" value="" name="formradioRight" id="flexCheckCheckedDisabled2" defaultChecked disabled />
                <Form.Label htmlFor="flexCheckCheckedDisabled2">
                    Disabled checked radio
                </Form.Label>
            </div>
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

export default Radio;   