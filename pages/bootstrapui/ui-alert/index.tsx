import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// Import Code Components
// import { DefaultAlertsExample, LabelIconArrowAlertsExample, SolidAlertsExample, RoundedLabelIconAlertsExample, BorderlessExample, DismissingExample, TopBarAlertsExample, LinkColorExample, LiveExample, OutlineAlertsExample, AdditionalContentCodeExample, LeftBorderAlertsExample, LabelIconAlertsExample, ModernAlertsExample } from './uiAlertCode';
import DefaultAlertsExample from './DefaultAlertsExample';
import LabelIconArrowAlertsExample from './LabelIconArrowAlertsExample';
import SolidAlertsExample from './SolidAlertExample';
import RoundedLabelIconAlertsExample from './RoundedLabelIconAlertsExample';
import BorderlessExample from './BorderlessExample';
import DismissingExample from './DismissingExample';
import TopBarAlertsExample from './TopBarAlertsExample';
import LinkColorExample from './LinkColorExample';
import LiveExample from './LiveExample';
import OutlineAlertsExample from './OutlineAlertsExample';
import AdditionalContentCodeExample from './AdditionalContentCodeExample';
import LeftBorderAlertsExample from './LeftBorderAlertsExample';
import LabelIconAlertsExample from './LabelIconAlertsExample';
import ModernAlertsExample from './ModernAlertsExample';

const UiAlert = () => {

    const favouriteBtn = (ele: any) => {
        ele.closest("div").remove();
    };

    const [show, setShow] = useState(false);

    return (
        <React.Fragment>

            <Head>
                <title>Alert | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Alerts" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert </code>class to show a default alert.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary">
                                                <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary">
                                                <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success">
                                                <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> —check it out!
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="mb-xl-0">
                                                <strong> Something is very wrong! </strong> A simple <b>danger alert</b> —check it out!
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning">
                                                <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info">
                                                <strong>Don't forget' it !</strong> A simple <b>info alert</b> —check it out!
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light">
                                                <strong>Mind Your Step!</strong> A simple <b>light alert</b> —check it out!
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="mb-0">
                                                <strong>Did you know?</strong> A simple <b>dark alert</b> —check it out!
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <DefaultAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Borderless Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-borderless</code> class to set alert without border.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-borderless">
                                                <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-borderless">
                                                <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-borderless">
                                                <strong> How are you! </strong> A simple <b>success alert</b> —check it out!
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-borderless mb-xl-0">
                                                <strong> Something is very wrong! </strong> A simple danger alert—check it out!
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-borderless">
                                                <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-borderless">
                                                <strong>Don't forget' it !</strong> A simple <b>info alert</b> —check it out!
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-borderless bg-light">
                                                <strong>Mind Your Step!</strong> A simple <b>light alert</b> —check it out!
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-borderless mb-0">
                                                <strong>Did you know?</strong> A simple <b>dark alert</b> —check it out!
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <BorderlessExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dismissing Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-dismissible</code> class to add dismissing button to the alert.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="fade alert-dismissible show">
                                                <strong> Hi! </strong> A simple <b>Dismissible primary Alert </b> — check it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="fade alert-dismissible show">
                                                <strong> How are you! </strong> A simple <b>Dismissible secondary alert</b>
                                                —check it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="fade alert-dismissible show">
                                                <strong>Right Way !</strong> A simple <b>Dismissible success alert</b> —check
                                                it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="fade alert-dismissible show">
                                                <strong> Something is very wrong! </strong> A simple <b>Dismissible danger alert</b> —check
                                                it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant='warning' className="fade alert-dismissible show">
                                                <strong>Welcome Back!</strong> A simple <b>Dismissible warning alert</b> —check it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant='info' className="fade alert-dismissible show">
                                                <strong>Don't forget' it !</strong> A simple <b>Dismissible info alert</b>
                                                —check it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant='light' className="fade alert-dismissible show">
                                                <strong>Mind Your Step!</strong> A simple <b>Dismissible light alert</b>
                                                —check it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant='dark' className="fade alert-dismissible show">
                                                <strong>Did you know?</strong> A simple <b>Dismissible dark alert</b>
                                                —check it out!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <DismissingExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Link Color Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-link</code> class at &lt;a&gt; tag to show matching colored links within the given alert.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary">
                                                A simple Primary alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary">
                                                A simple Secondary alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success">
                                                A simple Success alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className=" mb-xl-0">
                                                A simple Danger alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning">
                                                A simple Warning alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info">
                                                A simple Info alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light">
                                                A simple Light alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className=" mb-0">
                                                A simple Dark alert with <Alert.Link href="#">an example
                                                    link</Alert.Link>. Give it a click if you like.
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <LinkColorExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Live Alert Example</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Click the Show live alert button to show an alert on button click.</p>
                                    <div id="liveAlertPlaceholder"></div>
                                    <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                                        Nice, you triggered this alert message!
                                    </Alert>
                                    <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "82px" }}>
                                        <LiveExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Outline Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-outline</code> class to set an alert with outline.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Outline Alert</h6>
                                            <Alert variant="primary" className="alert-dismissible alert-outline fade show">
                                                <strong> Hi! </strong> - Outline <b>primary alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Outline Alert</h6>
                                            <Alert variant="secondary" className=" alert-dismissible alert-outline fade show">
                                                <strong> How are you! </strong> - Outline <b>secondary alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Outline Alert</h6>
                                            <Alert variant="success" className="alert-dismissible alert-outline fade show">
                                                <strong> Yey! Everything worked! </strong> - Outline <b>success alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Outline Alert</h6>
                                            <Alert variant="danger" className="alert-dismissible alert-outline fade show mb-xl-0">
                                                <strong> Something is very wrong! </strong> - Outline <b>danger alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Outline Alert</h6>
                                            <Alert variant="warning" className="alert-dismissible alert-outline fade show">
                                                <strong> Uh oh, something went wrong! </strong> - Outline <b>warning alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Outline Alert</h6>
                                            <Alert variant="info" className="alert-dismissible alert-outline fade show">
                                                <strong>Don't forget' it !</strong> - Outline <b>info alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-dismissible alert-outline fade show mb-0">
                                                <strong>Did you know?</strong> - Outline <b>dark alert</b> example
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <OutlineAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Left Border Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-border-left </code> class to set an alert with the left border & outline.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-border-left alert-dismissible fade show">
                                                <i className="ri-user-smile-line me-3 d-inline-block align-middle fs-16"></i><strong>Primary</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-border-left alert-dismissible fade show">
                                                <i className="ri-check-double-line me-3 d-inline-block align-middle fs-16"></i><strong>Secondary</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-border-left alert-dismissible fade show">
                                                <i className="ri-notification-off-line me-3 d-inline-block align-middle fs-16"></i><strong>Success</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-border-left alert-dismissible fade show mb-xl-0">
                                                <i className="ri-error-warning-line me-3 d-inline-block align-middle fs-16"></i><strong>Danger</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <div className="col-xl-6">
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-border-left alert-dismissible fade show">
                                                <i className="ri-alert-line me-3 d-inline-block align-middle fs-16"></i><strong>Warning</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-border-left alert-dismissible fade show">
                                                <i className="ri-airplay-line me-3 d-inline-block align-middle fs-16"></i><strong>Info</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-border-left alert-dismissible fade show">
                                                <i className="ri-mail-line me-3 d-inline-block align-middle fs-16"></i><strong>Light</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-border-left alert-dismissible fade show mb-0">
                                                <i className="ri-refresh-line me-3  d-inline-block align-middle fs-16"></i><strong>Dark</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </div>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <LeftBorderAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Modern Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-modern </code> class to set an alert modern.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-modern alert-dismissible fade show">
                                                <i className="bi bi-info-circle icons"></i><strong>This is a information.</strong> You should do something about it.
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-modern alert-dismissible fade show">
                                                <i className="bi bi-command icons"></i><strong>Secondary</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-modern alert-dismissible fade show">
                                                <i className="bi bi-check2-all icons"></i> Yay! Everything worked!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-modern alert-dismissible fade show mb-xl-0">
                                                <i className="bi bi-exclamation-diamond icons"></i><strong>This is error.</strong> You should do something about it.
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-modern alert-dismissible fade show">
                                                <i className="bi bi-exclamation-triangle icons"></i><strong>This is warning</strong> You should do something about it.
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-modern alert-dismissible fade show">
                                                <i className="ri-airplay-line icons"></i><strong>Info</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-modern alert-dismissible fade show">
                                                <i className="ri-mail-line icons"></i><strong>Light</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-modern alert-dismissible fade show mb-0">
                                                <i className="ri-refresh-line icons"></i><strong>Dark</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <ModernAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Label Icon Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-label-icon</code> class to set an alert with a label icon.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-dismissible alert-solid alert-label-icon fade show">
                                                <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -
                                                Label icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-dismissible alert-solid alert-label-icon fade show">
                                                <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong>
                                                - Label icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-dismissible alert-solid alert-label-icon fade show">
                                                <i className="ri-notification-off-line label-icon"></i><strong>Success</strong>
                                                - Label icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-dismissible alert-solid alert-label-icon fade show mb-xl-0">
                                                <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong>
                                                - Label
                                                icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-dismissible alert-solid alert-label-icon fade show">
                                                <i className="ri-alert-line label-icon"></i><strong>warning</strong> - Label
                                                icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-dismissible alert-solid alert-label-icon fade show">
                                                <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label
                                                icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-dismissible alert-solid alert-label-icon fade show">
                                                <i className="ri-mail-line label-icon"></i><strong>Light</strong> -
                                                Label icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-dismissible alert-solid alert-label-icon fade show mb-0">
                                                <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> -
                                                Label icon alert
                                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <LabelIconAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Additional Content Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-additional</code> class and Use the <code>alert-</code> class to HTML elements like headings, paragraphs, dividers etc.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-dismissible alert-additional fade show">
                                                <div className="alert-body">
                                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-error-warning-line fs-16 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="alert-heading">Well done !</h5>
                                                            <p className="mb-0">Aww yeah, you successfully read this important alert message. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alert-content">
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-dismissible alert-additional fade show mb-xl-0">
                                                <div className="alert-body">
                                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-alert-line fs-16 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="alert-heading">Something is very wrong!</h5>
                                                            <p className="mb-0">Change a few things up and try submitting again.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alert-content">
                                                    <p className="mb-0">Whenever you need to, be sure to use margin
                                                        utilities to keep things nice and tidy.</p>
                                                </div>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-dismissible alert-additional fade show">
                                                <div className="alert-body">
                                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-notification-off-line fs-16 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="alert-heading">Yey! Everything worked!</h5>
                                                            <p className="mb-0">This alert needs your attention, but it's not super important.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alert-content">
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>
                                            </Alert>

                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-dismissible alert-additional fade show mb-0">
                                                <div className="alert-body">
                                                    <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <i className="ri-alert-line fs-16 align-middle"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <h5 className="alert-heading">Uh oh, something went wrong!</h5>
                                                            <p className="mb-0">Better check yourself, you're not looking too good.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alert-content">
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                                </div>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <AdditionalContentCodeExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Top Border with Outline Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-top-border</code> class to set an alert with the top border and outline.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-top-border alert-dismissible fade show">
                                                <i className="ri-user-smile-line me-3 align-middle d-inline-block fs-16 text-primary"></i><strong>Primary</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>


                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-top-border alert-dismissible fade show">
                                                <i className="ri-check-double-line me-3 align-middle d-inline-block fs-16 text-secondary"></i><strong>Secondary</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-top-border alert-dismissible fade show">
                                                <i className="ri-notification-off-line me-3 align-middle d-inline-block fs-16 text-success"></i><strong>Success</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-top-border alert-dismissible fade show mb-xl-0">
                                                <i className="ri-error-warning-line me-3 align-middle d-inline-block fs-16 text-danger "></i><strong>Danger</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-top-border alert-dismissible fade show">
                                                <i className="ri-alert-line me-3 align-middle d-inline-block fs-16 text-warning"></i><strong>Warning</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-top-border alert-dismissible fade show">
                                                <i className="ri-airplay-line me-3 align-middle d-inline-block fs-16 text-info"></i><strong>Info</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-top-border alert-dismissible fade show">
                                                <i className="ri-mail-line me-3 align-middle d-inline-block fs-16 text-dark"></i><strong>Light</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-top-border alert-dismissible fade show mb-0">
                                                <i className="ri-refresh-line me-3 align-middle d-inline-block fs-16 text-dark"></i><strong>Dark</strong>
                                                - Top border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <TopBarAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Label Icon Arrow Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-label-icon label-arrow</code> class to show an alert with label icon and arrow.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-dismissible alert-label-icon label-arrow fade show">
                                                <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -
                                                Label icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-dismissible alert-label-icon label-arrow fade show">
                                                <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong> -
                                                Label icon
                                                arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-dismissible alert-label-icon label-arrow fade show">
                                                <i className="ri-notification-off-line label-icon"></i><strong>Success</strong>
                                                - Label
                                                icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-dismissible alert-label-icon label-arrow fade show mb-xl-0">
                                                <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong>
                                                - Label
                                                icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-dismissible alert-label-icon label-arrow fade show">
                                                <i className="ri-alert-line label-icon"></i><strong>Warning</strong> -
                                                Label icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>info Alert</h6>
                                            <Alert variant="info" className="alert-dismissible alert-label-icon label-arrow fade show">
                                                <i className="ri-airplay-line label-icon"></i><strong>Info</strong> -
                                                Label icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-dismissible alert-label-icon label-arrow fade show">
                                                <i className="ri-mail-line label-icon"></i><strong>Light</strong>
                                                - Label icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-dismissible alert-label-icon label-arrow fade show mb-0">
                                                <i className="ri-refresh-line label-icon"></i><strong>Dark</strong>
                                                - Label icon arrow alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <LabelIconArrowAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Rounded Label Icon Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-label-icon rounded-label</code> class to set an alert with a rounded label icon.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>
                                            <Alert variant="primary" className="alert-dismissible alert-label-icon rounded-label fade show">
                                                <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -
                                                Rounded label alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-dismissible alert-label-icon rounded-label fade show">
                                                <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong>
                                                - Rounded
                                                label alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-dismissible alert-label-icon rounded-label fade show">
                                                <i className="ri-notification-off-line label-icon"></i><strong>Success</strong>
                                                - Rounded
                                                label alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Alert</h6>
                                            <Alert variant="danger" className="alert-dismissible alert-label-icon rounded-label fade show mb-xl-0">
                                                <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong>
                                                - Rounded
                                                label alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <div className="col-xl-6">
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-dismissible alert-label-icon rounded-label fade show">
                                                <i className="ri-alert-line label-icon"></i><strong>Warning</strong> - Rounded
                                                label alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-dismissible alert-label-icon rounded-label fade show">
                                                <i className="ri-airplay-line label-icon"></i><strong>Info</strong> -
                                                Rounded label
                                                alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-dismissible alert-label-icon rounded-label fade show">
                                                <i className="ri-mail-line label-icon"></i><strong>Light</strong> -
                                                Rounded label
                                                alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-dismissible alert-label-icon rounded-label fade show mb-0">
                                                <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> -
                                                Rounded label
                                                alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </div>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <RoundedLabelIconAlertsExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Solid Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-solid</code> class to set an alert with solid style.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Solid Alert</h6>
                                            <Alert variant="primary" className="alert-dismissible alert-solid fade show">
                                                <strong>Hi!</strong> - Solid <b>primary alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Solid Alert</h6>
                                            <Alert variant="secondary" className="alert-dismissible alert-solid fade show">
                                                <strong>How are you!</strong> - Solid <b>secondary alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Success Solid Alert</h6>
                                            <Alert variant="success" className="alert-dismissible alert-solid fade show">
                                                <strong>Yey! Everything worked! </strong> - Solid <b>success alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Danger Solid Alert</h6>
                                            <Alert variant="danger" className="alert-dismissible alert-solid fade show mb-xl-0">
                                                <strong>Something is very wrong!</strong> - Solid <b>danger alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Solid Alert</h6>
                                            <Alert variant="warning" className="alert-dismissible alert-solid fade show">
                                                <strong>Uh oh, something went wrong!</strong> - Solid <b>warning alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Solid Alert</h6>
                                            <Alert variant="info" className="alert-dismissible alert-solid fade show">
                                                <strong>Don't forget' it !</strong> - Solid <b>info alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>


                                            <h6>Light Solid Alert</h6>
                                            <Alert variant="light" className="alert-dismissible alert-solid fade show">
                                                <strong>Mind Your Step!</strong> - Solid <b>secondary alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Solid Alert</h6>
                                            <Alert variant="dark" className="alert-dismissible alert-solid fade show mb-0">
                                                <strong>Did you know?</strong> - Solid <b>dark alert</b> example
                                                <Button type="button" className="btn-close btn-close-white" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>
                                </Card.Body>

                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <SolidAlertsExample />
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

export default UiAlert;