import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

//Checkbox
const Checkbox = () => {
    const code = `<Col lg={4} md={6}>
<div>
    <p className="text-muted fw-medium">Default Checkbox</p>
    <p className="text-muted">Use <code>type="checkbox"</code> attribute to set a checkbox and add <code>checked</code>attribute to set a checkbox checked by default.</p>
    <div className="form-check mb-2">
        <Form.Check type="checkbox" id="formCheck1" />
        <Form.Label className="form-check-label" htmlFor="formCheck1">
            Default checkbox
        </Form.Label>
    </div>
    <div className="form-check">
        <Form.Check type="checkbox" id="formCheck2" defaultChecked />
        <Form.Label className="form-check-label" htmlFor="formCheck2">
            Checked checkbox
        </Form.Label>
    </div>
</div>
</Col>

<Col lg={4} md={6}>
<div className="mt-4 mt-md-0">
    <p className="text-muted fw-medium">Disabled Checkbox</p>
    <p className="text-muted">Use <code>disabled</code> attribute to set a checkbox disabled and add <code>checked</code> attribute to set a checkbox checked by default.</p>
    <div>
        <div className="form-check form-check-right mb-2">
            <Form.Check type="checkbox" value="" id="flexCheckDisabled" disabled />
            <Form.Label className="form-check-label" htmlFor="flexCheckDisabled">
                Disabled checkbox
            </Form.Label>
        </div>
    </div>
    <div>
        <div className="form-check form-check-right">
            <Form.Check type="checkbox" id="flexCheckCheckedDisabled" defaultValue="" disabled />
            <Form.Label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                Disabled checked checkbox
            </Form.Label>
        </div>
    </div>
</div>
</Col>

<Col lg={4} md={6}>
<div className="mt-4 mt-md-0">
    <p className="text-muted fw-medium">Checkbox Right</p>
    <p className="text-muted">Use <code>form-check-right</code> class to form-check class to set a checkbox on the right side.</p>
    <div className="form-check form-check-right mb-2">
        <Form.Check type="checkbox" name="formCheckboxRight" id="formCheckboxRight1" defaultChecked />
        <Form.Label className="form-check-label" htmlFor="formCheckboxRight1">
            Form Radio Right
        </Form.Label>
    </div>
    <div>
        <div className="form-check form-check-right">
            <Form.Check type="checkbox" value="" id="flexCheckCheckedRightDisabled" defaultChecked disabled />
            <Form.Label className="form-check-label" htmlFor="flexCheckCheckedRightDisabled">
                Disabled checked checkbox
            </Form.Label>
        </div>
    </div>
</div>
</Col>

<Col lg={6}>
<div className="mt-3">
    <p className="text-muted fw-medium">Indeterminate</p>
    <div>
        <div className="form-check">
            <Form.Check type="checkbox" value="" id="defaultIndeterminateCheck" />
            <Form.Label className="form-check-label" htmlFor="defaultIndeterminateCheck">
                Indeterminate checkbox
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
export default Checkbox;