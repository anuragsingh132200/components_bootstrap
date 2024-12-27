import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

const RangeSlider = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Range Slider | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Advanced" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Bootstrap Range</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div className="live-preview">
                                        <div>
                                            <div>
                                                <h5 className="fs-14">Default Range</h5>
                                                <p className="text-muted">Use <code>type="range"</code> attribute and <code>form-range</code> class to create a deafult range.</p>
                                                
                                                <Form.Range className="form-range" id="customRange1" />
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="fs-14">Disabled</h5>
                                                <p className="text-muted">Use <code>disabled</code> attribute on an input to give it a grayed out appearance and remove pointer events.</p>

                                                <Form.Range className="form-range" id="disabledRange" disabled />
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="fs-14">Min and Max</h5>
                                                <p className="text-muted">Use <code>min</code> and <code>max</code> attribute with specified range input respectively.</p>

                                                <Form.Range className="form-range" min="0" max="5" id="customRange2" />
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="fs-14">Steps</h5>
                                                <p className="text-muted">By default, range inputs “snap” to integer values. To change this, you can specify a step value. In the example below, we double the number of steps by using <code>step="0.5"</code> attribute.</p>

                                                <Form.Range className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Nouislider</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted mb-4">noUiSlider is a lightweight JavaScript range slider</p>
                                    <div className="live-preview">
                                        <div>
                                            <div className="mb-3">
                                                <Row className="align-items-center">
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Basic Example</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div data-rangeslider>
                                                            <Form.Range />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row className="align-items-center">
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Multi elements range handle</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div data-multielement>
                                                        <Form.Range />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Using HTML5 Input Elements</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div className="d-inline-flex gap-2 mb-3">
                                                            <select id="input-select" className="form-select form-select-sm w-xs shadow-none"></select>
                                                            <Form.Control type="number" className="form-control form-control-sm w-xs shadow-none" min="-20" max="40" step="1" id="input-number" />
                                                        </div>
                                                        <div id="html5"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Non linear slider</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div id="nonlinear"><Form.Range /></div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="example-val" id="lower-value"></div>
                                                            <div className="example-val" id="upper-value"></div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Locking sliders together</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div className="slider" id="slider1"></div>
                                                        <span className="example-val mt-2" id="slider1-span"><Form.Range /></span>

                                                        <div className="slider" id="slider2"></div>
                                                        <span className="example-val mt-2" id="slider2-span"><Form.Range /></span>

                                                        <button id="lockbutton" className="btn btn-primary" style={{float: "right", margin: "20px 0 0"}}>Lock</button>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row className="align-items-center">
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Merging overlapping tooltips</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div className="slider" id="slider-merging-tooltips"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Only showing tooltips when sliding handle</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div className="slider" id="slider-hide"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="mt-4 mb-5">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Moving the slider by clicking pips</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div className="slider" id="slider-pips"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Colored Connect Elements</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div className="slider" id="slider-color"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Creating a toggle</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div id="slider-toggle"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="border border-dashed"></div>

                                            <div className="my-4">
                                                <Row>
                                                    <Col lg={3}>
                                                        <h5 className="fs-14">Soft limits</h5>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <div id="soft"><Form.Range /></div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Color Scheme</h4>
                                </Card.Header>
                                <Card.Body>

                                    <Row>
                                        <Col xl={4} lg={6}>
                                            <div>
                                                <h5 className="fs-14">Primary</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="primary"</code> attribute to set primary color scheme.</p>
                                                <div data-rangeslider data-slider-color="primary"><Form.Range /></div>
                                            </div>
                                        </Col>
                                        
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <h5 className="fs-14">Secondary</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="secondary"</code> attribute to set secondary color scheme.</p>
                                                <div data-rangeslider data-slider-color="secondary"><Form.Range /></div>
                                            </div>
                                        </Col>
                                        
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4 mt-xl-0">
                                                <h5 className="fs-14">Success</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="success"</code> attribute to set success color scheme.</p>
                                                <div data-rangeslider data-slider-color="success"><Form.Range /></div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-4">
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4">
                                                <h5 className="fs-14">Info</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="info"</code> attribute to set info color scheme.</p>
                                                <div data-rangeslider data-slider-color="info"><Form.Range /></div>
                                            </div>
                                        </Col>
                                        
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4">
                                                <h5 className="fs-14">Warning</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="warning"</code> attribute to set warning color scheme.</p>
                                                <div data-rangeslider data-slider-color="warning"><Form.Range /></div>
                                            </div>
                                        </Col>
                                        
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4">
                                                <h5 className="fs-14">Danger</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="danger"</code> attribute to set danger color scheme.</p>
                                                <div data-rangeslider data-slider-color="danger"><Form.Range /></div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mt-4">
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4">
                                                <h5 className="fs-14">Dark</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-color="dark"</code> attribute to set dark color scheme.</p>
                                                <div data-rangeslider data-slider-color="dark"><Form.Range /></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Sizes</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col xl={4} lg={6}>
                                            <div>
                                                <h5 className="fs-14">Large</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-size="lg"</code> attribute to set large size rangeslider.</p>
                                                <div data-rangeslider data-slider-size="lg"><Form.Range /></div>
                                            </div>
                                        </Col>
                                        
                                        <Col xl={4} lg={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <h5 className="fs-14">Medium</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-size="md"</code> attribute to set medium size data-rangeslider.</p>
                                                <div data-rangeslider data-slider-size="md"><Form.Range /></div>
                                            </div>
                                        </Col>

                                        <Col xl={4} lg={6}>
                                            <div className="mt-4 mt-xl-0">
                                                <h5 className="fs-14">Small</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-size="sm"</code> attribute to set small size rangeslider.</p>
                                                <div data-rangeslider data-slider-size="sm"><Form.Range /></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Styling</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <div>
                                                <h5 className="fs-14">Line Rangeslider</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-style="line"</code> attribute to set line rangeslider.</p>
                                                <div data-rangeslider data-slider-style="line"><Form.Range /></div>
                                            </div>
                                        </Col>
                                        
                                        <Col lg={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <h5 className="fs-14">Circle Bordered Rangeslider</h5>
                                                <p className="text-muted mb-4">Use <code>data-slider-style="border"</code> attribute to set circle bordered rangeslider.</p>
                                                <div data-rangeslider data-slider-style="border"><Form.Range /></div>
                                            </div>
                                        </Col>

                                        <Row className="mt-4">
                                            <Col lg={6}>
                                                <div className="mt-4">
                                                    <h5 className="fs-14">Square Rangeslider</h5>
                                                    <p className="text-muted mb-4">Use <code>data-slider-style="square"</code> attribute to set square shape rangeslider.</p>
                                                    <div data-rangeslider data-slider-style="square"><Form.Range /></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default RangeSlider;