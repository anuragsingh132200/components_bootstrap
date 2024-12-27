import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Import Images
import img1 from '@assets/images/small/img-1.jpg'
import img2 from '@assets/images/small/img-2.jpg'

// Import Components

import DefaultPlaceholderExample from './defaultPlaceholderCode';
import WidthExample from './widthCode';
import SizingExample from './sizingCode';
import ColorExample from './colorCode';
 
const uiPlaceholder = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Placeholder | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Placeholder" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <Card.Title className="mb-0">Default Placeholder</Card.Title>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”.</p>
                                    <Row className="justify-content-center">
                                        <Col xl={7}>
                                            <Row className="justify-content-between">
                                                <Col lg={5} sm={6}>
                                                    <Card>
                                                        <Image src={img1} width="341" className="card-img-top" alt="card img" />

                                                        <Card.Body>
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col lg={5} sm={6}>
                                                    <Card aria-hidden="true">
                                                        <Image src={img2} width="341" className="card-img-top" alt="card dummy img" />
                                                        <Card.Body>
                                                            <h5 className="card-title placeholder-glow">
                                                                <span className="placeholder col-6"></span>
                                                            </h5>
                                                            <p className="card-text placeholder-glow">
                                                                <span className="placeholder col-7"></span>
                                                                <span className="placeholder col-4"></span>
                                                                <span className="placeholder col-4"></span>
                                                                <span className="placeholder col-6"></span>
                                                            </p>
                                                            <Link href="#" className="btn btn-primary disabled placeholder col-6"></Link>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <DefaultPlaceholderExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Width</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>w-25,w-50,w-75</code> or <code>w-100</code> class to placeholder class to set different widths to the placeholder.</p>
                                    <div>
                                        <span className="placeholder w-50"></span>
                                        <span className="placeholder w-75"></span>
                                        <span className="placeholder w-25"></span>
                                        <span className="placeholder w-100"></span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <WidthExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Sizing</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>placeholder-lg</code>, <code>placeholder-sm</code>, or <code>placeholder-xs</code> class to placeholder class to set different size placeholder.</p>
                                    <Row className="gap-0">
                                        <div className="col-12">
                                            <span className="placeholder placeholder-lg w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder placeholder-sm w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder placeholder-xs w-100"></span>
                                        </div>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "117px"}}>
                                        <SizingExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Color</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-</code> class with the below-mentioned color variation to set a custom color.</p>
                                    <Row className="g-2">
                                        <div className="col-12">
                                            <span className="placeholder w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-primary w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-secondary w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-success w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-danger w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-warning w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-info w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-light w-100"></span>
                                        </div>
                                        <div className="col-12">
                                            <span className="placeholder bg-dark w-100"></span>
                                        </div>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <ColorExample />
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

export default uiPlaceholder;