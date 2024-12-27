import React from 'react';
import PageBreadcrumb from '@common/Breadcrumb';
import { Button, Breadcrumb, Card, Col, Container, OverlayTrigger, Pagination, Popover, Row, Spinner, Tooltip } from 'react-bootstrap';
import Head from 'next/head';

// Import Components
// import { PopoversExample, TooltipsExample, PaginationExample, SpinnersExample, BreadcrumbExample } from './uiGeneralCode'

import PopoversExample from './PopoversExample';
import TooltipsExample from './TooltipsExample';
import PaginationExample from './PaginationExample';
import BreadcrumbExample from './BreadcrumbExample';
import SpinnersExample from './SpinnersExample';

const uiGeneral = () => {

    return (
        <React.Fragment>

            <Head>
                <title>General | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <PageBreadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="General" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Popovers</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Popovers example are available with follwing options , Directions are mirrored when using Bootstrap in RTL.</p>
                                    <div className="hstack flex-wrap gap-2">
                                        <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="popover-positioned-top"> <Popover.Header as="h3">"Popover top"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                            <Button variant="light">Popover on top</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Popover right"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                            <Button variant="light">Popover on right</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="popover-positioned-bottom"> <Popover.Header as="h3">"Popover bottom"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                            <Button variant="light">Popover on bottom</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-positioned-left"> <Popover.Header as="h3">"Popover left"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
                                            <Button variant="light">Popover on left</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Dismissible popover   "</Popover.Header> <Popover.Body> And here's some amazing content. It's very engaging. Right?" </Popover.Body> </Popover>}>
                                            <Button variant="success">Dismissible popover</Button>
                                        </OverlayTrigger>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <PopoversExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Tooltips</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Tooltip example are available with follwing options, Directions are mirrored when using Bootstrap in RTL.</p>
                                    <div className="hstack flex-wrap gap-2">
                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> Tooltip on Top. </Tooltip>}>
                                            <Button variant="light">Tooltip on Top</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger placement='right' overlay={<Tooltip id="tooltip-right"> Tooltip on right. </Tooltip>}>
                                            <Button variant="light">Tooltip on right</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-bottom"> Tooltip on bottom. </Tooltip>}>
                                            <Button variant="light">Tooltip on bottom</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-left"> Tooltip on left. </Tooltip>}>
                                            <Button variant="light">Tooltip on left</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> <em>Tooltip</em> <u>with</u> <b>HTML</b> </Tooltip>}>
                                            <Button variant="primary"><em>Tooltip</em> <u>with</u> <b>HTML</b></Button>
                                        </OverlayTrigger>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <TooltipsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Breadcrumb</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Indicate the current page’s location within a navigational hierarchy</p>
                                    <div>
                                        <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                        </Breadcrumb>

                                        <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }} >
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item> Library </Breadcrumb.Item>
                                        </Breadcrumb>
                                        <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
                                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
                                            <Breadcrumb.Item> General </Breadcrumb.Item>
                                        </Breadcrumb>

                                        <Breadcrumb listProps={{ className: 'p-3 py-2 bg-light' }}>
                                            <Breadcrumb.Item href="#"><i className="ri-home-5-fill" /></Breadcrumb.Item>
                                            <Breadcrumb.Item href="#">Base UI</Breadcrumb.Item>
                                            <Breadcrumb.Item> General </Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <BreadcrumbExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Pagination</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <Row>
                                            <Col lg={6}>
                                                <h5 className="fs-15">Default Pagination</h5>
                                                <p className="text-muted">Use <code>pagination</code> class to ul element to indicate a series of related content exists across multiple pages. </p>

                                                <nav aria-label="Page navigation example">
                                                    <Pagination>
                                                        <Pagination.Item>Previous</Pagination.Item>
                                                        <Pagination.Item>{1}</Pagination.Item>
                                                        <Pagination.Item>{2}</Pagination.Item>
                                                        <Pagination.Item>{3}</Pagination.Item>
                                                        <Pagination.Item>Next</Pagination.Item>
                                                    </Pagination>
                                                </nav>

                                                <nav aria-label="Page navigation example">
                                                    <Pagination>
                                                        <Pagination.Item>← Prev</Pagination.Item>
                                                        <Pagination.Item>{1}</Pagination.Item>
                                                        <Pagination.Item>{2}</Pagination.Item>
                                                        <Pagination.Item>{3}</Pagination.Item>
                                                        <Pagination.Item>Next →</Pagination.Item>
                                                    </Pagination>
                                                </nav>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-4 mt-lg-0">
                                                    <h5 className="fs-15">Disabled and Active states</h5>
                                                    <p className="text-muted">Use <code>disabled</code> class to links that appear un-clickable and <code>active</code> class to indicate the current page. </p>

                                                    <nav aria-label="...">
                                                        <Pagination>
                                                            <Pagination.Item className="disabled">← Prev</Pagination.Item>
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Item active>{2}</Pagination.Item>
                                                            <Pagination.Item>{3}</Pagination.Item>
                                                            <Pagination.Item>Next →</Pagination.Item>
                                                        </Pagination>
                                                    </nav>

                                                    <nav aria-label="...">
                                                        <Pagination>
                                                            <Pagination.Item disabled>
                                                                <span><i className="mdi mdi-chevron-left"></i></span>
                                                            </Pagination.Item>
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Item active>{2}</Pagination.Item>
                                                            <Pagination.Item>{3}</Pagination.Item>
                                                            <Pagination.Item>
                                                                <i className="mdi mdi-chevron-right"></i>
                                                            </Pagination.Item>
                                                        </Pagination>
                                                    </nav>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-4">
                                                    <h5 className="fs-15">Sizing</h5>
                                                    <p className="text-muted">Use <code>pagination-lg</code> or <code>pagination-sm</code> to set different pagination sizes.</p>

                                                    <nav aria-label="...">
                                                        <Pagination className="pagination-lg">
                                                            <Pagination.Item disabled>← Prev</Pagination.Item>
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Item>{2}</Pagination.Item>
                                                            <Pagination.Item>{3}</Pagination.Item>
                                                            <Pagination.Item>Next →</Pagination.Item>
                                                        </Pagination>
                                                    </nav>

                                                    <nav aria-label="...">
                                                        <Pagination className="pagination-sm">
                                                            <Pagination.Item disabled>← Prev</Pagination.Item>
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Item>{2}</Pagination.Item>
                                                            <Pagination.Item>{3}</Pagination.Item>
                                                            <Pagination.Item>Next →</Pagination.Item>
                                                        </Pagination>
                                                    </nav>
                                                </div>

                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-4">
                                                    <h5 className="fs-15">Alignment</h5>

                                                    <p className="text-muted">Use <code>justify-content-start</code>, <code>justify-content-start</code>, or <code>justify-content-start</code>, class to pagination class to change the alignment of pagination respectively.</p>

                                                    <nav aria-label="Page navigation example">
                                                        <Pagination className="justify-content-center">
                                                            <Pagination.Item className="disabled">← Prev</Pagination.Item>
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Item>{2}</Pagination.Item>
                                                            <Pagination.Item>{3}</Pagination.Item>
                                                            <Pagination.Item>Next →</Pagination.Item>
                                                        </Pagination>
                                                    </nav>

                                                    <nav aria-label="Page navigation example">
                                                        <Pagination className="justify-content-end">
                                                            <Pagination.Item className="disabled">← Prev</Pagination.Item>
                                                            <Pagination.Item>{1}</Pagination.Item>
                                                            <Pagination.Item>{2}</Pagination.Item>
                                                            <Pagination.Item>{3}</Pagination.Item>
                                                            <Pagination.Item>Next →</Pagination.Item>
                                                        </Pagination>
                                                    </nav>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-4">
                                                    <h5 className="fs-15">Custom Separated Pagination</h5>
                                                    <p className="text-muted">Use <code>pagination-separated</code> class to pagination class to set custom separated pagination.</p>

                                                    <Pagination className="pagination-lg pagination-separated">
                                                        <Pagination.Item disabled>←</Pagination.Item>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>{2}</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Item>4</Pagination.Item>
                                                        <Pagination.Item>5</Pagination.Item>
                                                        <Pagination.Item>→</Pagination.Item>
                                                    </Pagination>

                                                    <Pagination className="pagination-separated">
                                                        <Pagination.Item disabled>←</Pagination.Item>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>
                                                            {2}
                                                        </Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Item>4</Pagination.Item>
                                                        <Pagination.Item>5</Pagination.Item>
                                                        <Pagination.Item>→</Pagination.Item>
                                                    </Pagination>

                                                    <Pagination className="pagination-sm pagination-separated">
                                                        <Pagination.Item disabled>←</Pagination.Item>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>{2}</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Item>4</Pagination.Item>
                                                        <Pagination.Item>5</Pagination.Item>
                                                        <Pagination.Item>→</Pagination.Item>
                                                    </Pagination>
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-4">
                                                    <h5 className="fs-15">Custom Rounded Pagination</h5>
                                                    <p className="text-muted">Use <code>pagination-rounded</code> class to pagination class to set custom rounded pagination.</p>

                                                    <Pagination className="pagination-lg pagination-rounded">
                                                        <Pagination.Item disabled>←</Pagination.Item>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>{2}</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Item>4</Pagination.Item>
                                                        <Pagination.Item>5</Pagination.Item>
                                                        <Pagination.Item>→</Pagination.Item>
                                                    </Pagination>

                                                    <Pagination className="pagination-rounded">
                                                        <Pagination.Item disabled>←</Pagination.Item>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>{2}</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Item>4</Pagination.Item>
                                                        <Pagination.Item>5</Pagination.Item>
                                                        <Pagination.Item>→</Pagination.Item>
                                                    </Pagination>

                                                    <Pagination className="pagination-sm pagination-rounded">
                                                        <Pagination.Item disabled>←</Pagination.Item>
                                                        <Pagination.Item>1</Pagination.Item>
                                                        <Pagination.Item active>{2}</Pagination.Item>
                                                        <Pagination.Item>3</Pagination.Item>
                                                        <Pagination.Item>4</Pagination.Item>
                                                        <Pagination.Item>5</Pagination.Item>
                                                        <Pagination.Item>→</Pagination.Item>
                                                    </Pagination>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <PaginationExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Spinners</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <h5 className="fs-15">Border spinner</h5>
                                                    <p className="text-muted">Use <code>spinner-border</code> class for a lightweight loading indicator.</p>
                                                    <div className="d-flex flex-wrap gap-3 mb-2">
                                                        <Spinner animation='border' variant="primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="secondary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="success" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="info" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="warning" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="danger" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="dark" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='border' variant="light" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div>
                                                    <h5 className="fs-15">Growing spinner</h5>
                                                    <p className="text-muted">Use <code>spinner-grow</code> class for a lightweight spinner with growing effect.</p>
                                                    <div className="d-flex flex-wrap gap-3 mb-2">
                                                        <Spinner animation='grow' variant="primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="secondary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="success" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="info" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="warning" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="danger" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="dark" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <Spinner animation='grow' variant="light" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <SpinnersExample />
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

export default uiGeneral;