import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const SwitchColor = () => {
    const code = `<Col md={6}>
    <div>
        <div className="form-check form-switch mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck1" defaultChecked />
            <Form.Label htmlFor="SwitchCheck1">Switch Default</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-secondary mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck2" defaultChecked />
            <Form.Label htmlFor="SwitchCheck2">Switch Secondary</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-success mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck3" defaultChecked />
            <Form.Label htmlFor="SwitchCheck3">Switch Success</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-warning mb-2 mb-md-0">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck4" defaultChecked />
            <Form.Label htmlFor="SwitchCheck4">Switch Warning</Form.Label>
        </div>
    </div>
</Col>

<Col md={6}>
    <div>
        <div className="form-check form-switch form-switch-danger mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck5" defaultChecked />
            <Form.Label htmlFor="SwitchCheck5">Switch Danger</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-info mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck6" defaultChecked />
            <Form.Label htmlFor="SwitchCheck6">Switch Info</Form.Label>
        </div>

        <div className="form-check form-switch form-switch-dark mb-3">
            <Form.Check type="checkbox" role="switch" id="SwitchCheck7" defaultChecked />
            <Form.Label htmlFor="SwitchCheck7">Switch Dark</Form.Label>
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

export default SwitchColor;