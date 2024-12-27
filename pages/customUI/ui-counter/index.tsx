import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

const uiCounter = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Counter | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Custom UI" breadcrumbItem="Counter" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Basic</h5>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted mb-4">Use basic counters to show custom details.</p>

                                    <Row className="g-4">
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">25,500</span></h4>
                                                <p className="text-muted fs-14 mb-0">Happy Users & Counting</p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">25,500</span></h4>
                                                <p className="text-muted fs-14 mb-0">Happy Users & Counting</p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">25,500</span></h4>
                                                <p className="text-muted fs-14 mb-0">Happy Users & Counting</p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">25,500</span></h4>
                                                <p className="text-muted fs-14 mb-0">Happy Users & Counting</p>
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
                                    <h5 className="card-title mb-0">Counter with Symbols</h5>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted mb-4">Use symbol with counter to show earning like data.</p>
                    
                                    <Row className="g-4">
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">$674.3k</span></h4>
                                                <p className="text-muted fs-14 mb-0">Total Earnings</p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">3,65,424</span></h4>
                                                <p className="text-muted fs-14 mb-0">Orders</p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">1,03,035M</span></h4>
                                                <p className="text-muted fs-14 mb-0">Customers</p>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="text-center">
                                                <h4 className="fs-22 fw-semibold mb-3"><span className="counter-value" data-target="40">$16589k</span></h4>
                                                <p className="text-muted fs-14 mb-0">My Balance</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} >
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Counter with Icons</h5>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted mb-4">Use icon counter to show your number of Happy clients, Downloads etc data.</p>
                        
                                    <Row className="g-4 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-success-subtle text-success fs-22 rounded-circle">
                                                            <i className="bi bi-emoji-smile"></i>
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-22 fw-semibold"><span className="counter-value" data-target="40">8,000k</span></h4>
                                                    <p className="text-muted fs-14 mb-0">Happy Clients</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center border-secondary border-opacity-25 mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-secondary-subtle text-secondary fs-22 rounded-circle">
                                                            <i className="bi bi-download"></i>
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-22 fw-semibold"><span className="counter-value" data-target="40">3,000k</span></h4>
                                                    <p className="text-muted fs-14 mb-0">Downloads</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-danger-subtle text-danger fs-22 rounded-circle">
                                                            <i className="bi bi-cast"></i>
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-22 fw-semibold"><span className="counter-value" data-target="40">784k</span></h4>
                                                    <p className="text-muted fs-14 mb-0">Project Completed</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title text-bg-primary fs-22 rounded-circle">
                                                            <i className="bi bi-clock"></i>
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-22 fw-semibold"><span className="counter-value" data-target="40">365</span></h4>
                                                    <p className="text-muted fs-14 mb-0">Working Days</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-warning-subtle text-warning fs-22 rounded-circle">
                                                            <i className="bi bi-trophy"></i>
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-22 fw-semibold"><span className="counter-value" data-target="40">59</span></h4>
                                                    <p className="text-muted fs-14 mb-0">Awards</p>
                                                </Card.Body>
                                            </Card>
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
                                    <h5 className="card-title mb-0">Counter Modern</h5>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted mb-4">Use customised counter with highlighted header and footer to show your number of Happy clients, Downloads etc data.</p>
                    
                                    <Row className="g-4 row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Header className="text-bg-success border-0">
                                                    <div className="fs-22 fw-semibold">
                                                    <span className="counter-value" data-target="40">12,000k</span>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-success-subtle text-success fs-22 rounded-circle">
                                                            <i className="bi bi-emoji-smile"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted fs-14 mb-0">Happy Clients</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Header className="text-bg-secondary border-0">
                                                    <div className="fs-22 fw-semibold">
                                                        <span className="counter-value" data-target="40">7,000k</span>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-secondary-subtle text-secondary fs-22 rounded-circle">
                                                            <i className="bi bi-download"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted fs-14 mb-0">Downloads</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center border-danger mb-0 border-opacity-25">
                                                <Card.Header className="bg-danger-subtle text-danger border-0">
                                                    <div className="fs-22 fw-semibold">
                                                        <span className="counter-value" data-target="40">3,800+</span>
                                                    </div>
                                                </Card.Header>
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-danger-subtle text-danger fs-22 rounded-circle">
                                                            <i className="bi bi-cast"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted fs-14 mb-0">Project Completed</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-primary-subtle text-primary fs-22 rounded-circle">
                                                            <i className="bi bi-clock"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted fs-14 mb-0">Working Days</p>
                                                </Card.Body>
                                                <Card.Footer className="text-bg-primary border-0">
                                                    <div className="fs-22 fw-semibold">
                                                        <span className="counter-value" data-target="40">365</span>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="text-center border-warning border-opacity-25 mb-0">
                                                <Card.Body className="py-4">
                                                    <div className="avatar-sm mx-auto mb-4">
                                                        <div className="avatar-title bg-warning-subtle text-warning fs-22 rounded-circle">
                                                            <i className="bi bi-trophy"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-muted fs-14 mb-0">Awards</p>
                                                </Card.Body>
                                                <Card.Footer className="card-footer bg-warning-subtle text-warning border-0">
                                                    <div className="fs-22 fw-semibold">
                                                        <span className="counter-value" data-target="40">59</span>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
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

export default uiCounter;