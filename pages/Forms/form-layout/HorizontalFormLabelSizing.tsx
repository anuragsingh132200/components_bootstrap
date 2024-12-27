import React from 'react';
import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false });

const HorizontalFormLabelSizing = () => {
    const code = `
    <Col xxl={4}>
        <Row>
            <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
            <Col sm={10}>
                <Form.Control type="email" id="colFormLabelSm" placeholder="col-form-label-sm"/>
            </Col>
        </Row>
    </Col>
    <Col xxl={4}>
        <Row>
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
            <Col sm={10}>
                <Form.Control type="email" id="colFormLabel" placeholder="col-form-label"/>
            </Col>
        </Row>
    </Col>
    <Col xxl={4}>
        <Row>
            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <Col sm={10}>
                <Form.Control type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
            </Col>
        </Row>
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
    
export default HorizontalFormLabelSizing;