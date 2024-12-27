import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import Head from 'next/head';

// import Components
// import { VerticalStartExample, VerticalCenterExample, VerticalEndExample, AlignSelfExample, HorizontalAlignExample } from './uiGridCode'
import VerticalStartExample from './VerticalStartExample';
import VerticalCenterExample from './VerticalCenterExample';
import VerticalEndExample from './VerticalEndExample';
import AlignSelfExample from './AlignSelfExample';
import HorizontalAlignExample from './HorizontalAlignExample';
const uiGrid = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Grid | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Grid" />

                    <Row>
                        <div className="col-12">
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Grid Options</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
                                    <div className="table-responsive">
                                        <Table className="table-bordered table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" className="text-center">
                                                        xs<br/>
                                                        <span className="fw-normal">&lt;576px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        sm<br/>
                                                        <span className="fw-normal">≥576px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        md<br/>
                                                        <span className="fw-normal">≥768px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        lg<br/>
                                                        <span className="fw-normal">≥992px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        xl<br/>
                                                        <span className="fw-normal">≥1200px</span>
                                                    </th>
                                                    <th scope="col" className="text-center">
                                                        xxl<br/>
                                                        <span className="fw-normal">≥1400px</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Grid behavior</th>
                                                    <td>Horizontal at all times</td>
                                                    <td colSpan={5}>Collapsed to start, horizontal above breakpoints</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Max container width</th>
                                                    <td>None (auto)</td>
                                                    <td>540px</td>
                                                    <td>720px</td>
                                                    <td>960px</td>
                                                    <td>1140px</td>
                                                    <td>1320px</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Class prefix</th>
                                                    <td><code>col-</code></td>
                                                    <td><code>col-sm-</code></td>
                                                    <td><code>col-md-</code></td>
                                                    <td><code>col-lg-</code></td>
                                                    <td><code>col-xl-</code></td>
                                                    <td><code>col-xxl-</code></td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row"># of columns</th>
                                                    <td colSpan={6}>12</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Gutter width</th>
                                                    <td colSpan={6}>24px (12px on each side of a column)</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Custom gutters</th>
                                                    <td colSpan={6}>Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Nestable</th>
                                                    <td colSpan={6}>Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Offsets</th>
                                                    <td colSpan={6}>Yes</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-nowrap" scope="row">Column ordering</th>
                                                    <td colSpan={6}>Yes</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> 
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical alignment (align-items-start)</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>align-items-start</code> class to vertically align-items at the start.</p>
                                    <div className="bg-light p-3 text-center">
                                        <Row className="align-items-start" style={{minHeight: "6rem"}}>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <VerticalStartExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical alignment (align-items-center)</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>align-items-center</code> class to vertically align-items at the center.</p>

                                    <div className="bg-light p-3 text-center">
                                        <Row className="align-items-center" style={{minHeight: "6rem"}}>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <VerticalCenterExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical alignment (align-items-end)</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>align-items-end</code> class to vertically align-items at the end.</p>
                                    <div className="bg-light p-3 text-center">
                                        <Row className="align-items-end" style={{minHeight: "6rem"}}>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    col-sm-4
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <VerticalEndExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Align Self</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>align-self-start</code>,<code>align-self-center</code>, or <code>align-self-end</code> class respectively to vertically align items with a different position.</p>

                                    <div className="bg-light p-3 text-center">
                                        <Row className="g-2" style={{minHeight: "9rem"}}>
                                            <Col sm={4} className="align-self-start">
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    align-self-start
                                                </div>
                                            </Col>
                                            <Col sm={4} className="align-self-center">
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    align-self-center
                                                </div>
                                            </Col>
                                            <Col sm={4} className="align-self-end">
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    align-self-end
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <AlignSelfExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal Alignment</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>justify-content-start</code>,<code>justify-content-center</code>, or <code>justify-content-end</code> class respectively to horizontally align items with a different position.</p>
                                    <div className="bg-light p-3 text-center">
                                        <Row className="justify-content-start">
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2">
                                                    justify-content-start
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    justify-content-center
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end">
                                            <Col sm={4}>
                                                <div className="bg-primary-subtle text-primary rounded p-2 mt-2 mt-sm-0">
                                                    justify-content-end
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <HorizontalAlignExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default uiGrid;