import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// Import Componets

import RoundedRibbonExample from './RoundedRibbonExample';
import RibbonShapeExample from './ribbonShapeCode';
import RibbonsExample from './ribbonsCode';
import FilledRibbonsExample from './filledRibbonsCode';
import RibbonsHoverExample from './ribbonsHoverCode';

const uiRibbons = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Ribbons Charts | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Custom UI" breadcrumbItem="Ribbons" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="align-items-center">
                                    <h4 className="card-title mb-0">Round Shape</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row className="g-3">
                                        <p className="text-muted">Use <code>round-shape</code> class to show round-shaped ribbon.</p>
                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-primary round-shape">Primary</div>
                                                    <h5 className="fs-14 text-end">Rounded Ribbon</h5>

                                                    <div className="ribbon-content mt-4 text-muted">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-success round-shape">Success</div>
                                                    <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                                                    <div className="ribbon-content mt-4 text-muted">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none right mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-info round-shape">Info</div>
                                                    <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
                                                    <div className="ribbon-content mt-4 text-muted">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <RoundedRibbonExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="align-items-center">
                                    <h4 className="card-title mb-0">Vertical Shape</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row className="g-3">
                                        <p className="text-muted">Use <code>vertical-shape</code> class to show round-shaped ribbon.</p>
                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="d-flex">
                                                        <div className="ribbon ribbon-primary vertical-shape">Primary</div>
                                                        <div className="flex-grow-1">
                                                            <div className="ribbon-content text-muted ms-5">
                                                                <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="d-flex">
                                                             <div className="ribbon ribbon-success vertical-shape">Success</div>
                                                        <div className="flex-grow-1">
                                                            <div className="ribbon-content text-muted ms-5">
                                                                <h5 className="fs-14 text-end">Rounded Ribbon</h5>
                                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none right mb-lg-0">
                                                <Card.Body>
                                                    <div className="d-flex">
                                                        <div className="ribbon ribbon-info vertical-shape">Info</div>
                                                        <div className="flex-grow-1">
                                                            <div className="ribbon-content text-muted me-5">
                                                                <h5 className="fs-14 text-start">Rounded Ribbon Right</h5>
                                                                <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                                    mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <RibbonShapeExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Ribbon Shape</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row className="g-3">
                                        <p className="text-muted">Use <code>ribbon-shape</code> class to show ribbon shaped ribbon.</p>
                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-primary ribbon-shape">Primary</div>
                                                    <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                                    <div className="ribbon-content text-muted mt-4">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-success ribbon-shape">Success</div>
                                                    <h5 className="fs-14 text-end">Ribbon Shape</h5>
                                                    <div className="ribbon-content text-muted mt-4">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none mb-lg-0 right">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-info ribbon-shape">Info</div>
                                                    <h5 className="fs-14 text-start">Ribbon Shape Right</h5>
                                                    <div className="ribbon-content text-muted mt-4">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <RibbonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Filled Ribbons</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row className="g-3">
                                        <p className="text-muted">Use <code>ribbon-fill</code> class to show fill-shaped ribbon.</p>
                                        <Col xxl={4}>
                                            <Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-primary">New</div>
                                                    <h5 className="fs-14 text-end">Fill Ribbon</h5>
                                                    <div className="ribbon-content mt-3 text-muted">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border ribbon-fill shadow-none mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-success">Sale</div>
                                                    <h5 className="fs-14 text-end">Fill Ribbon</h5>
                                                    <div className="ribbon-content mt-3 text-muted">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border ribbon-fill shadow-none right mb-lg-0">
                                                <Card.Body>
                                                    <div className="ribbon ribbon-info">New</div>
                                                    <h5 className="fs-14 text-start">Fill Ribbon Right</h5>
                                                    <div className="ribbon-content mt-3 text-muted">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <FilledRibbonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Ribbons Hover</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row className="g-3">
                                        <p className="text-muted">Use <code>trending-ribbon</code> class to show ribbon with hovering effect.</p>
                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                                <Card.Body className="text-muted">
                                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                        <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                                    </div>
                                                    <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
                                                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box border shadow-none overflow-hidden mb-lg-0">
                                                <Card.Body className="text-muted">
                                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                        <span className="trending-ribbon-text">Trending</span> <i className="ri-flashlight-fill text-white align-bottom float-end ms-1"></i>
                                                    </div>
                                                    <h5 className="fs-14 text-end mb-3">Ribbon Shape</h5>
                                                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col xxl={4}>
                                            <Card className="ribbon-box right border shadow-none overflow-hidden mb-lg-0">
                                                <Card.Body className="text-muted">
                                                    <div className="ribbon ribbon-info ribbon-shape trending-ribbon">
                                                        <i className="ri-flashlight-fill text-white align-bottom float-start me-1"></i> <span className="trending-ribbon-text">Trending</span>
                                                    </div>
                                                    <h5 className="fs-14 mb-3">Ribbon Right Shape</h5>
                                                    <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus.</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <RibbonsHoverExample />
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

export default uiRibbons;