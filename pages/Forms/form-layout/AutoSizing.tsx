import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const AutoSizing = () => {
    const code = `
    <Form action="#">
        <Row className="gy-2 gx-3 mb-3 align-items-center">
            <div className="col-sm-auto">
                <Form.Label className="visually-hidden" htmlFor="autoSizingInput">Name</Form.Label>
                <Form.Control type="text" id="autoSizingInput" placeholder="Jane Doe"/>
            </div>
            <div className="col-sm-auto">
                <Form.Label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</Form.Label>
                <div className="input-group">
                    <div className="input-group-text">@</div>
                    <Form.Control type="text" id="autoSizingInputGroup" placeholder="Username"/>
                </div>
            </div>
            <div className="col-sm-auto">
                <Form.Label className="visually-hidden" htmlFor="autoSizingSelect">Preference</Form.Label>
                <Form.Select data-choices data-choices-sorting="true" id="autoSizingSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </div>
            <div className="col-sm-auto">
                <div className="form-check">
                    <Form.Check type="checkbox" id="autoSizingCheck"/>
                    <Form.Label htmlFor="autoSizingCheck">
                        Remember me
                    </Form.Label>
                </div>
            </div>
            <div className="col-sm-auto">
                <Button type="button" variant="primary">Submit</Button>
            </div>
        </Row>
    </Form>
    
    <Form action="#">
        <Row className="gx-3 gy-2 align-items-center">
            <Col sm={3}>
                <Form.Label className="visually-hidden" htmlFor="specificSizeInputName">Name</Form.Label>
                <Form.Control type="text" id="specificSizeInputName" placeholder="Jane Doe"/>
            </Col>
            <Col sm={3}>
                <Form.Label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</Form.Label>
                <div className="input-group">
                    <div className="input-group-text">@</div>
                    <Form.Control type="text" id="specificSizeInputGroupUsername" placeholder="Username"/>
                </div>
            </Col>
            <Col sm={3}>
                <Form.Label className="visually-hidden" htmlFor="specificSizeSelect">Preference</Form.Label>
                <Form.Select data-choices data-choices-sorting="true" id="specificSizeSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Col>
            <div className="col-auto">
                <div className="form-check">
                    <Form.Check type="checkbox" id="autoSizingCheck2"/>
                    <Form.Label htmlFor="autoSizingCheck2">
                        Remember me
                    </Form.Label>
                </div>
            </div>
            <div className="col-auto">
                <Button type="button" variant="primary">Submit</Button>
            </div>
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

    export default AutoSizing;