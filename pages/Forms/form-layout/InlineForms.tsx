import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const InlineForms = () => {
    const code = `
    <Row className="row-cols-lg-auto g-3 align-items-center">
        <Col className="col-12">
            <Form.Label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</Form.Label>
            <InputGroup>
                <div className="input-group-text">@</div>
                <Form.Control type="text" id="inlineFormInputGroupUsername" placeholder="Username"/>
            </InputGroup>
        </Col>
        <Col className="col-12">
            <Form.Label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</Form.Label>
            <Form.Select data-choices data-choices-sorting="true" id="inlineFormSelectPref">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Col>
        <Col className="col-12">
            <div className="form-check">
                <Form.Check type="checkbox" id="inlineFormCheck"/>
                <Form.Label htmlFor="inlineFormCheck">
                    Remember me
                </Form.Label>
            </div>
        </Col>
        <div className="col-12">
            <Button type="button" variant="primary">Submit</Button>
        </div>
    </Row>
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

    export default InlineForms;