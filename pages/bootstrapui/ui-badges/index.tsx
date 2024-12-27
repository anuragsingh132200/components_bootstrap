import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Link from 'next/link';
import Head from 'next/head';

// import Badges Code
// import {DefaultBadgesExample, HTMLBadgesExample, ButtonBadgesExample, ButtonPositionBadgesExample, GradientBadgesExample, OutlinePillBadgesExample, LabelBadgesExample, SoftBadgesExample, OutlineBadgesExample, RoundedPillBadgesExample, RoundSoftBadgesExample, SoftBorderBadgesExample } from './uiBadgesCode'
import DefaultBadgesExample from './DefaultBadgesExample';
import HTMLBadgesExample from './HTMLBadgesExample';
import ButtonBadgesExample from './ButtonBadgesExample';
import ButtonPositionBadgesExample from './ButtonPositionBadgesExample';
import GradientBadgesExample from './GradientBadgesExample';
import OutlinePillBadgesExample from './OutlinePillBadgesExample';
import LabelBadgesExample from './LabelBadgesExample';
import SoftBadgesExample from './SoftBadgesExample';
import OutlineBadgesExample from './OutlineBadgesExample';
import RoundedPillBadgesExample from './RoundedPillBadgesExample';
import RoundSoftBadgesExample from './RoundedSoftBadgesExample';
import SoftBorderBadgesExample from './SoftBorderBadgesExample';

const uiBadges = () => {
    return (
        <React.Fragment>

            <Head>
                <title>Badges | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Badges" />
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge</code> class to set a default badge.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge bg='primary' >Primary</Badge>
                                        <Badge bg='secondary' >Secondary</Badge>
                                        <Badge bg='success' >Success</Badge>
                                        <Badge bg='info' >Info</Badge>
                                        <Badge bg='warning' >Warning</Badge>
                                        <Badge bg='danger' >Danger</Badge>
                                        <Badge bg='dark' >Dark</Badge>
                                        <Badge bg='light text-dark' >Light</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <DefaultBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Soft Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge-soft-</code> class with the below-mentioned variation to create a softer badge. </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge badge-soft-primary">Primary</span>
                                        <span className="badge badge-soft-secondary">Secondary</span>
                                        <span className="badge badge-soft-success">Success</span>
                                        <span className="badge badge-soft-info">Info</span>
                                        <span className="badge badge-soft-warning">Warning</span>
                                        <span className="badge badge-soft-danger">Danger</span>
                                        <span className="badge badge-soft-dark">Dark</span>
                                        <span className="badge badge-soft-light text-dark">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <SoftBadgesExample/>
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Outline Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>badge-outline-</code> class with the below-mentioned variation to create a badge with the outline.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Link href="#" className="badge badge-outline-primary">Primary</Link>
                                        <span className="badge badge-outline-secondary">Secondary</span>
                                        <span className="badge badge-outline-success">Success</span>
                                        <span className="badge badge-outline-info">Info</span>
                                        <span className="badge badge-outline-warning">Warning</span>
                                        <span className="badge badge-outline-danger">Danger</span>
                                        <span className="badge badge-outline-dark">Dark</span>
                                        <span className="badge badge-outline-light text-dark">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <OutlineBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Rounded Pill Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>rounded-pill</code> class to make badges more rounded with a larger border-radius.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge bg="primary" pill>Primary</Badge>
                                        <Badge bg="secondary" pill>Secondary</Badge>
                                        <Badge bg="success" pill>Success</Badge>
                                        <Badge bg="info" pill>Info</Badge>
                                        <Badge bg="warning" pill>Warning</Badge>
                                        <Badge bg="danger" pill>Danger</Badge>
                                        <Badge bg="dark" pill>Dark</Badge>
                                        <Badge bg="light text-dark" pill>Light</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <RoundedPillBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Rounded Pill Badges with soft effect</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>rounded-pill badge-soft-</code> class with the below-mentioned variation to create a badge more rounded with a soft background.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge rounded-pill badge-soft-primary">Primary</span>
                                        <span className="badge rounded-pill badge-soft-secondary">Secondary</span>
                                        <span className="badge rounded-pill badge-soft-success">Success</span>
                                        <span className="badge rounded-pill badge-soft-info">Info</span>
                                        <span className="badge rounded-pill badge-soft-warning">Warning</span>
                                        <span className="badge rounded-pill badge-soft-danger">Danger</span>
                                        <span className="badge rounded-pill badge-soft-dark">Dark</span>
                                        <span className="badge rounded-pill badge-soft-light text-dark">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <RoundSoftBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Soft Border Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">
                                        Use the <code>badge-border</code> and <code>badge-soft-</code> with below
                                        mentioned modifier classes to make badges with border & soft backgorund.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge badge-soft-primary badge-border">Primary</span>
                                        <span className="badge badge-soft-secondary badge-border">Secondary</span>
                                        <span className="badge badge-soft-success badge-border">Success</span>
                                        <span className="badge badge-soft-danger badge-border">Danger</span>
                                        <span className="badge badge-soft-warning badge-border">Warning</span>
                                        <span className="badge badge-soft-info badge-border">Info</span>
                                        <span className="badge badge-soft-dark badge-border">Dark</span>
                                        <span className="badge badge-soft-light badge-border text-dark">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <SoftBorderBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Outline Pill Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">
                                        Use the <code>rounded-pill badge-outline-</code> class with the below-mentioned
                                        variation to create a outline Pill badge.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="badge rounded-pill badge-outline-primary">Primary</span>
                                        <span className="badge rounded-pill badge-outline-secondary">Secondary</span>
                                        <span className="badge rounded-pill badge-outline-success">Success</span>
                                        <span className="badge rounded-pill badge-outline-info">Info</span>
                                        <span className="badge rounded-pill badge-outline-warning">Warning</span>
                                        <span className="badge rounded-pill badge-outline-danger">Danger</span>
                                        <span className="badge rounded-pill badge-outline-dark">Dark</span>
                                        <span className="badge rounded-pill badge-outline-light text-dark">Light</span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <OutlinePillBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Label Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">
                                        Use the <code>badge-label</code> class to create a badge with the label.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge bg='primary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Primary</Badge>
                                        <Badge bg='secondary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Secondary</Badge>
                                        <Badge bg='success' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Success</Badge>
                                        <Badge bg='danger' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Danger</Badge>
                                        <Badge bg='warning' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Warning</Badge>
                                        <Badge bg='info' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Info</Badge>
                                        <Badge bg='dark' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Dark</Badge>
                                        <Badge bg='light' className="badge-label text-dark"> <i className="mdi mdi-circle-medium"></i> Light</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <LabelBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gradient Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">
                                    Use the <code>badge-gradient-*</code> class to create a gradient styled badge.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Badge className="badge-gradient-primary">Primary</Badge>
                                        <Badge className="badge-gradient-secondary">Secondary</Badge>
                                        <Badge className="badge-gradient-success">Success</Badge>
                                        <Badge className="badge-gradient-danger">Danger</Badge>
                                        <Badge className="badge-gradient-warning">Warning</Badge>
                                        <Badge className="badge-gradient-info">Info</Badge>
                                        <Badge className="badge-gradient-dark">Dark</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <GradientBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Button Position Badges</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the below utilities to modify a badge and position it in the corner of a link or button.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Button color='primary' className="position-relative">
                                            Mails <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">+99
                                                <span className="visually-hidden">unread messages</span></span>
                                        </Button>

                                        <Button className="btn-light position-relative">
                                            Alerts <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                                        </Button>

                                        <Button color='primary' className="position-relative p-0 avatar-xs rounded">
                                            <span className="avatar-title bg-transparent">
                                                <i className="bx bxs-envelope"></i>
                                            </span>
                                            <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span>
                                        </Button>

                                        <Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
                                            <span className="avatar-title bg-transparent text-reset">
                                                <i className="bx bxs-bell"></i>
                                            </span>
                                        </Button>

                                        <Button className="btn-light position-relative p-0 avatar-xs rounded-circle">
                                            <span className="avatar-title bg-transparent text-reset">
                                                <i className="bx bx-menu"></i>
                                            </span>
                                            <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1"><span className="visually-hidden">unread messages</span></span>
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <ButtonPositionBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Badges With Button</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Badges can be used as part of buttons to provide a counter.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button color='primary'>
                                            Notifications <span className="badge bg-success ms-1">4</span>
                                        </Button>
                                        <Button color='success' className="btn-success">
                                            Messages <span className="badge bg-danger ms-1">2</span>
                                        </Button>
                                        <Button variant="outline-secondary">
                                            Draft <span className="badge bg-success ms-1">2</span>
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <ButtonBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Badges with Heading</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Example of the badge used in the HTML Heading.</p>
                                    <h1>Example heading <Badge bg="secondary">New</Badge></h1>
                                    <h2>Example heading <Badge bg="secondary">New</Badge></h2>
                                    <h3>Example heading <Badge bg="secondary">New</Badge></h3>
                                    <h4>Example heading <Badge bg="secondary">New</Badge></h4>
                                    <h5>Example heading <Badge bg="secondary">New</Badge></h5>
                                    <h6 className="mb-0">Example heading <span className="badge text-bg-secondary">New</span></h6>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "175px"}}>
                                        <HTMLBadgesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
}

export default uiBadges;