import React, { useState } from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Alert, Button, Card, Col, Container, Form, Modal, Popover, Row, Tooltip } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Import Components

import DefaultModalExample from './defaultModalCode';
import CenteredModalExample from './centeredModalCode';
import GridsModalExample from './gridsModalCode';
import StaticBackdropModalExample from './staticBackdropModalCode';
import TogglebetweenExample from './togglebetweenCode';
import TooltipModalExample from './tooltipModalCode';
import ScrollableModalExample from './scrollableModalCode';
import VaryingModalExample from './varyingModalCode';
import OptionalModalExample from './optionalModalCode';
import FullscreenResponsiveExample from './fullscreenResponsiveCode';
import AnimationModalExample from './animationModalCode';
import PositionModalExample from './positionModalCode';

// Import Images
import paymentImg from '@assets/images/modals/success-payment.png'
import loginImg from '@assets/images/modals/login.png'
import subscribeImg from '@assets/images/modals/subscribe.png'
import authbg from '@assets/images/auth-one-bg.jpg'
import signupImg from '@assets/images/modals/signup.png'

// Import Gif
import thumb from '@assets/images/Gifs/1122-thumb-down-outline.gif'
import congrets from '@assets/images/Gifs/1103-confetti-outline.gif'
import wrong from '@assets/images/Gifs/1140-error-outline.gif'
import smile from '@assets/images/Gifs/261-emoji-smile-outline.gif'
import congrets1 from '@assets/images/Gifs/1103-confetti-lineal.gif'

const UiModals = () => {

    const [modal_standard, setmodal_standard] = useState<boolean>(false);
    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    const [modal_center, setmodal_center] = useState<boolean>(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }

    const [modal_grid, setmodal_grid] = useState<boolean>(false);
    function tog_grid() {
        setmodal_grid(!modal_grid);
    }

    const [modal_tooltip, setmodal_tooltip] = useState<boolean>(false);
    function tog_tooltip() {
        setmodal_tooltip(!modal_tooltip);
    }

    const [modal_fullscreen, setmodal_fullscreen] = useState<any>(false);
    function tog_fullscreen() {
        setmodal_fullscreen(!modal_fullscreen);
    }

    const [modal_xlarge, setmodal_xlarge] = useState<boolean>(false);
    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
    }

    const [modal_large, setmodal_large] = useState<boolean>(false);
    function tog_large() {
        setmodal_large(!modal_large);
    }

    const [modal_small, setmodal_small] = useState<boolean>(false);
    function tog_small() {
        setmodal_small(!modal_small);
    }

    const [modal_fullscreen1, setmodal_fullscreen1] = useState<any>(false);
    function tog_fullscreen1() {
        setmodal_fullscreen1(!modal_fullscreen1);
    }

    const [modal_fullscreen_sm, setmodal_fullscreen_sm] = useState<boolean>(false);
    function tog_fullscreen_sm() {
        setmodal_fullscreen_sm(!modal_fullscreen_sm);
    }

    const [modal_fullscreen_md, setmodal_fullscreen_md] = useState<boolean>(false);
    function tog_fullscreen_md() {
        setmodal_fullscreen_md(!modal_fullscreen_md);
    }

    const [modal_fullscreen_lg, setmodal_fullscreen_lg] = useState<boolean>(false);
    function tog_fullscreen_lg() {
        setmodal_fullscreen_lg(!modal_fullscreen_lg);
    }

    const [modal_fullscreen_xl, setmodal_fullscreen_xl] = useState<boolean>(false);
    function tog_fullscreen_xl() {
        setmodal_fullscreen_xl(!modal_fullscreen_xl);
    }

    const [modal_fullscreen_xxl, setmodal_fullscreen_xxl] = useState<boolean>(false);
    function tog_fullscreen_xxl() {
        setmodal_fullscreen_xxl(!modal_fullscreen_xxl);
    }

    const [modal_scroll, setmodal_scroll] = useState<boolean>(false);
    function tog_scroll() {
        setmodal_scroll(!modal_scroll);
    }

    const [modal_backdrop, setmodal_backdrop] = useState<boolean>(false);
    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
    }

    const [modal_varying1, setmodal_varying1] = useState<boolean>(false);
    function tog_varying1() {
        setmodal_varying1(!modal_varying1);
    }

    const [modal_varying2, setmodal_varying2] = useState<boolean>(false);
    function tog_varying2() {
        setmodal_varying2(!modal_varying2);
    }

    const [modal_varying3, setmodal_varying3] = useState<boolean>(false);
    function tog_varying3() {
        setmodal_varying3(!modal_varying3);
    }

    const [modal_togFirst, setmodal_togFirst] = useState<boolean>(false);
    function tog_togFirst() {
        setmodal_togFirst(!modal_togFirst);
    }

    const [modal_togSecond, setmodal_togSecond] = useState<boolean>(false);
    function tog_togSecond() {
        setmodal_togSecond(!modal_togSecond);
    }

    const [modal_animationRight, setmodal_animationRight] = useState<boolean>(false);
    function tog_animationRight() {
        setmodal_animationRight(!modal_animationRight);
    }

    const [modal_animationLeft, setmodal_animationLeft] = useState<boolean>(false);
    function tog_animationLeft() {
        setmodal_animationLeft(!modal_animationLeft);
    }

    const [modal_animationUp, setmodal_animationUp] = useState<boolean>(false);
    function tog_animationUp() {
        setmodal_animationUp(!modal_animationUp);
    }

    const [modal_animationFlip, setmodal_animationFlip] = useState<boolean>(false);
    function tog_animationFlip() {
        setmodal_animationFlip(!modal_animationFlip);
    }

    const [modal_animationZoom, setmodal_animationZoom] = useState<boolean>(false);
    function tog_animationZoom() {
        setmodal_animationZoom(!modal_animationZoom);
    }

    const [modal_positionTop, setmodal_positionTop] = useState<boolean>(false);
    function tog_positionTop() {
        setmodal_positionTop(!modal_positionTop);
    }

    const [modal_positionTopRight, setmodal_positionTopRight] = useState<boolean>(false);
    function tog_positionTopRight() {
        setmodal_positionTopRight(!modal_positionTopRight);
    }

    const [modal_positionBottom, setmodal_positionBottom] = useState<boolean>(false);
    function tog_positionBottom() {
        setmodal_positionBottom(!modal_positionBottom);
    }

    const [modal_positionBottomRight, setmodal_positionBottomRight] = useState<boolean>(false);
    function tog_positionBottomRight() {
        setmodal_positionBottomRight(!modal_positionBottomRight);
    }

    // Custom Modals Example
    const [modal_successMessage, setmodal_successMessage] = useState<boolean>(false);
    function tog_successMessage() {
        setmodal_successMessage(!modal_successMessage);
    }

    const [modal_loginModals, setmodal_loginModals] = useState<boolean>(false);
    function tog_loginModals() {
        setmodal_loginModals(!modal_loginModals);
    }

    const [subscribeModals, set_subscribeModals] = useState<boolean>(false);
    function tog_subscribeModals() {
        set_subscribeModals(!subscribeModals);
    }

    const [modal_signUpModals, setmodal_signUpModals] = useState<boolean>(false);
    function tog_signUpModals() {
        setmodal_signUpModals(!modal_signUpModals);
    }

    return (
        <React.Fragment>

            <Head>
                <title>Modals | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Modals" />
                    
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Modal</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted text-muted">Use <code>modal-dialog</code> class to show default modal.</p>
                                    <div className="live-preview">
                                        <Button variant="primary" onClick={() => tog_standard()}>Standard Modal</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "120px"}}>
                                        <DefaultModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertically Centered Modal</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>modal-dialog-centered</code> class to show vertically center the modal.</p>
                                    <div className="live-preview">
                                        <div>
                                            <Button variant="primary" onClick={() => tog_center()}>Center Modal</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "120px"}}>
                                        <CenteredModalExample />                                            
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Grids in Modals</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>container-fluid</code> class within the modal-body to utilize the Bootstrap grid system within a modal by nesting.</p>
                                    <div className="live-preview">
                                        <Button variant="primary" onClick={() => tog_grid()}>
                                            Launch Demo Modal
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <GridsModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Static Backdrop Modal</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>data-bs-backdrop="static"</code> to modal not to close when clicking outside the modal.</p>
                                    <div className="live-preview">
                                        <div>
                                            <Button variant="primary" onClick={() => tog_backdrop()}>
                                                Static Backdrop Modal
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                        <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <StaticBackdropModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Toggle Between Modal</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Toggle between multiple modals with some clever placement of the <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes. Please note multiple modals cannot be open at the same time. this method simply toggles between two separate modals.</p>
                                    <div className="live-preview">
                                        <div>
                                            <Button variant="primary" onClick={() => tog_togFirst()}>Open First Modal</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                        <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <TogglebetweenExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Tooltips and Popovers </h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted"><a href="https://getbootstrap.com/docs/5.1/components/tooltips/">Tooltips</a> and <a href="https://getbootstrap.com/docs/5.1/components/popovers/">Popovers</a> can be placed within modals as needed.When modals are closed, any tooltips and popovers within are also automatically dismissed.</p>
                                    <div className="live-preview">
                                        <Button variant="primary" onClick={() => tog_tooltip()}>
                                            Launch Demo Modal
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <TooltipModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Scrollable Modal</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use<code> modal-dialog-scrollable</code> class to create a modal scrollable.</p>
                                    <div className="live-preview">
                                        <div>
                                            <Button variant="primary" onClick={() => tog_scroll()}>Scrollable Modal</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "120px"}}>
                                        <ScrollableModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Varying Modal Content</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div className="live-preview">
                                        <div>
                                            <div className="hstack gap-2 flex-wrap">
                                                <Button variant="primary" onClick={() => tog_varying1()}>Open Modal for Mary</Button>
                                                <Button variant="primary" onClick={() => tog_varying2()}>Open Modal for Jennifer</Button>
                                                <Button variant="primary" onClick={() => tog_varying3()}>Open Modal for Roderick</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "100px"}}>
                                        <VaryingModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Optional Sizes</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>modal-fullscreen</code>, <code>modal-xl</code>, <code>modal-lg</code>, or <code>modal-sm</code> class to modal-dialog class to set different size modal respectively.</p>
                                    <div className="live-preview">
                                        <div>
                                            <div className="hstack flex-wrap gap-2">
                                                {/* <!-- Fullscreen modal --> */}
                                                <Button variant="primary" onClick={() => tog_fullscreen()}>Fullscreen Modal</Button>

                                                {/* <!-- Extra Large modal --> */}
                                                <Button variant="info" onClick={() => tog_xlarge()}>Extra large Modal</Button>

                                                {/* <!-- Large modal --> */}
                                                <Button variant="success" onClick={() => tog_large()}>Large Modal</Button>

                                                {/* <!-- Small modal --> */}
                                                <Button variant="danger" onClick={() => tog_small()}>Small Modal</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "120px"}}>
                                        <OptionalModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Fullscreen Responsive Modals</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted text-muted">Below mentioned modifier classes are used to show fullscreen modal as per minimum screen requirement.</p>
                                    <div className="live-preview">
                                        <div>
                                            <div className="hstack gap-2 flex-wrap">
                                                <Button variant="primary" onClick={() => tog_fullscreen1()}> Fullscreen modal </Button>
                                                <Button variant="primary" onClick={() => tog_fullscreen_sm()}>Full Screen Below sm</Button>
                                                <Button variant="primary" onClick={() => tog_fullscreen_md()}>Full Screen Below md</Button>
                                                <Button variant="primary" onClick={() => tog_fullscreen_lg()}>Full Screen Below lg</Button>
                                                <Button variant="primary" onClick={() => tog_fullscreen_xl()}>Full Screen Below xl</Button>
                                                <Button variant="primary" onClick={() => tog_fullscreen_xxl()}>Full Screen Below xxl</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "120px"}}>
                                        <FullscreenResponsiveExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Animation Modals</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>fadeInRight</code>, <code>fadeInLeft</code>, <code>fadeInUp</code>, <code>flip</code>, or <code>zoomIn</code> class to modal class to set different modal with animation effect respectively.</p>
                                    <div className="live-preview">
                                        <div>
                                            <div className="hstack gap-2 flex-wrap">
                                                <Button variant="primary" onClick={() => tog_animationRight()}>Fade In Right Modal</Button>
                                                <Button variant="primary" onClick={() => tog_animationLeft()} >Fade In Left Modal</Button>
                                                <Button variant="primary" onClick={() => tog_animationUp()} >Fade In Up Modal</Button>
                                                <Button variant="primary" onClick={() => tog_animationFlip()} >Flip Modal</Button>
                                                <Button variant="primary" onClick={() => tog_animationZoom()} >Zoom In Modal</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "120px" }}>
                                        <AnimationModalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Modal Positions</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted text-muted">Use <code>modal-dialog-right</code>, <code>modal-dialog-bottom</code>, or <code>modal-dialog-bottom-right</code> class to modal-dialog class to set modal at different positions respectively.</p>
                                    <div className="live-preview">
                                        <div>
                                            <div className="hstack gap-2 flex-wrap">
                                                <Button variant="primary" onClick={() => tog_positionTop()}>Top Modal</Button>
                                                <Button variant="secondary" onClick={() => tog_positionTopRight()}>Top Right Modal</Button>
                                                <Button variant="success" onClick={() => tog_positionBottom()}>Bottom Modal</Button>
                                                <Button variant="danger" onClick={() => tog_positionBottomRight()}>Bottom Right Modal</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                        <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                    </Card.Body>
                                    <Card.Body>
                                        <pre className="language-markup" style={{ height: "120px" }}>
                                            <PositionModalExample />
                                        </pre>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col lg={12}>
                            <div className="justify-content-between d-flex align-items-center mb-3">
                                <h5 className="mb-0 pb-1 text-decoration-underline">Custom Modals Example</h5>
                            </div>
                            <Row>
                                <Col xl={4} md={6}>
                                    <Card className="text-center border">
                                        <Card.Body className="p-4 pb-0">
                                            <h5 className="mb-4">Success Message</h5>
                                            <p className="text-muted">Here is an example of a sweet alert with a success message.</p>
                                            <div>
                                                <Button variant="primary" data-bs-toggle="modal" data-bs-target="#success-Payment" onClick={() => tog_successMessage()} >Click me</Button>
                                            </div>

                                            <Row className="justify-content-center mt-2">
                                                <Col lg={10}>
                                                    <div>
                                                        <Image src={paymentImg} alt="Mac" className="img-fluid" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} md={6}>
                                    <Card className="text-center border">
                                        <Card.Body className="p-4 pb-0">
                                            <h5 className="mb-4">Login Modals</h5>
                                            <p className="text-muted">Here is an example of a sweet alert with a error message.</p>
                                            <div>
                                                <Button variant='primary' onClick={() => tog_loginModals()} data-bs-toggle="modal" data-bs-target="#loginModals">Click me</Button>
                                            </div>

                                            <Row className="justify-content-center mt-2">
                                                <Col lg={10}>
                                                    <div>
                                                        <Image src={loginImg} alt="Mac" className="img-fluid" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} md={6}>
                                    <Card className="text-center border">
                                        <Card.Body className="p-4 pb-0">
                                            <h5 className="mb-4">Subscribe Modals</h5>
                                            <p className="text-muted">Here is an example of a sweet alert with a warning message.</p>
                                            <div>
                                                <Button variant='primary' onClick={() => tog_subscribeModals()} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#subscribeModals">Click me</Button>
                                            </div>

                                            <Row className="justify-content-center mt-2">
                                                <Col lg={10}>
                                                    <div>
                                                        <Image src={subscribeImg} alt="Mac" className="img-fluid" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} md={6}>
                                    <Card className="text-center border">
                                        <Card.Body className="p-4 pb-0">
                                            <h5 className="mb-4">Sign Up Modals</h5>
                                            <p className="text-muted">Here is an example of a sweet alert with a community registration field. </p>

                                            <div>
                                                <Button variant='primary' onClick={() => tog_signUpModals()} data-bs-toggle="modal" data-bs-target="#signupModals">Click me</Button>
                                            </div>

                                            <Row className="justify-content-center mt-2">
                                                <Col lg={10}>
                                                    <div>
                                                        <Image src={signupImg} alt="Mac" className="img-fluid" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Default Modal */}
            <Modal id="myModal" show={modal_standard} onHide={() => { tog_standard(); }} >
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                    <p className="text-muted">It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            tog_standard();
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        color="primary"
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>

            {/* Vertically Centered */}
            <Modal
                show={modal_center}
                onHide={() => {
                    tog_center();
                }}
                centered
            >
                <Modal.Header
                    className="modal-title fw-bold">
                    Center Modal
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={thumb}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4">
                        <h3 className="mb-3">Oops something went wrong!</h3>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Button variant="light" onClick={() => setmodal_center(false)}>Close</Button>
                            <Link href="#" className="btn btn-danger">Try Again</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Grids in Modals */}
            <Modal
                show={modal_grid}
                onHide={() => {
                    tog_grid();
                }}
            >
                <Modal.Header className="modal-title fw-bold">
                    Grid Modals
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="row g-3">
                            <Col xxl={6}>
                                <div>
                                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="firstName" placeholder="Enter firstname" />
                                </div>
                            </Col>
                            <Col xxl={6}>
                                <div>
                                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="lastName" placeholder="Enter lastname" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Form.Label>Gender</Form.Label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <Form.Label className="form-check-label" htmlFor="inlineRadio1">Male</Form.Label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <Form.Label className="form-check-label" htmlFor="inlineRadio2">Female</Form.Label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Form.Check type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                        <Form.Label className="form-check-label" htmlFor="inlineRadio3">Others</Form.Label>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={6}>
                                <Form.Label htmlFor="emailInput">Email</Form.Label>
                                <Form.Control type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                            </Col>
                            <Col xxl={6}>
                                <Form.Label htmlFor="passwordInput">Password</Form.Label>
                                <Form.Control type="password" className="form-control" id="passwordInput" value="451326546" placeholder="Enter password" />
                            </Col>
                            <Col lg={12}>
                                <div className="hstack gap-2 justify-content-end">
                                    <Button variant="light" onClick={() => setmodal_grid(false)}>Close</Button>
                                    <Button variant="primary" >Submit</Button>
                                </div>
                            </Col>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Static Backdrop Modal */}
            <Modal
                show={modal_backdrop}
                onHide={() => {
                    tog_backdrop();
                }}
                backdrop={'static'}
                id="staticBackdrop"
                centered
            >
                <Modal.Header className="modal-title fw-bold" id="staticBackdropLabel" >

                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={congrets}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>

                    <div className="mt-4">
                        <h3 className="mb-3">You've made it!</h3>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_backdrop(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link href="#" className="btn btn-success" onClick={() => setmodal_backdrop(false)}>Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Toggle Between Modal */}

            <Modal
                show={modal_togFirst}
                onHide={() => {
                    tog_togFirst();
                }}
                id="firstmodal"
                centered
            >
                <Modal.Header className="modal-title fw-bold" id="exampleModalToggleLabel">
                    Modal 1
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={wrong}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4 pt-4">
                        <h3>Uh oh, something went wrong!</h3>
                        <p className="text-muted"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>

                        <Button variant="warning" onClick={ () => {tog_togSecond(), tog_togFirst()}}>
                            Continue
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={modal_togSecond}
                toggle={() => {
                    tog_togSecond();
                }}
                id="secondmodal"
                centered
            >
                <Modal.Header className="modal-title fw-bold" id="exampleModalToggleLabel2">
                    Modal 2
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={wrong}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4 pt-3">
                        <h3 className="mb-3">Follow-Up Email</h3>
                        <p className="text-muted mb-4">Hide this modal and show the first with the button below Automatically Send your invitees a follow -Up email.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Button variant="danger" onClick={() => { tog_togFirst(); tog_togSecond(); }}>
                                Back to First
                            </Button>
                            <Button variant="light" onClick={() => tog_togSecond()}>Close</Button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>

            {/* Tooltips and Popovers */}
            <Modal
                show={modal_tooltip}
                onHide={() => {
                    tog_tooltip();
                }}
            >
                <Modal.Header className="modal-title">
                    <h5 className="modal-title"> Tooltips and Popovers Modal </h5>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-17">Popover in a Modal</h5>
                    <p className="text-muted">You only need to know a little to make a big
                        {" "}<Link href="#" className="popover-test fw-medium text-decoration-underline link-success" id="UncontrolledPopover">
                            Popover on Click
                        </Link>{" "}
                        you do every day. So let's get started. First, some common types of fonts and what you need to know about them triggers a popover on click.</p>

                    <h5 className="fs-17">Tooltips in a Modal</h5>
                    <p className="text-muted">Opposites attract, and that’s a fact. It’s in our
                        {" "}<Link href="#" className="tooltip-test text-decoration-underline fw-medium" id="UncontrolledTooltip1">
                            graphic design
                        </Link>{" "} to be interested in the unusual, and that’s why using
                        {" "}<Link href="#" className="tooltip-test text-decoration-underline" id="UncontrolledTooltip2">
                            design
                        </Link> contrasting colors in Graphic Design is a must.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <div className="mx-auto">
                        <Link href="#" className="btn btn-link fw-semibold">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></Link>
                    </div>
                </div>
            </Modal>

            {/* Scrollable Modal  */}
            <Modal
                show={modal_scroll}
                onHide={() => {
                    tog_scroll();
                }}
                scrollable={true}
                id="exampleModalScrollable"
            >
                <Modal.Header className="modal-title fw-bold" id="exampleModalScrollableTitle">
                    Scrollable modal
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <h6 className="fs-17 my-3">Graphic Design</h6>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in Graphic Design is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                </Modal.Body>

                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => setmodal_scroll(false)}
                    >
                        Close
                    </Button>
                    <Button
                        color="primary"
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>


            {/* Full Screen Modal */}
            <Modal
                size="xl"
                show={modal_fullscreen}
                fullscreen={modal_fullscreen}
                onHide={() => {
                    tog_fullscreen();
                }}
                className="modal-fullscreen fw-bold"
                id="exampleModalFullscreen"
            >
                <Modal.Header className="modal-title fw-bold"
                    id="exampleModalFullscreenLabel" closeButton>
                    <h5 className='modal-title'>Fullscreen Modal Heading</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <h6 className="fs-16 my-3">Graphic Design</h6>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in Graphic Design is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href='#'
                        color="light"
                        onClick={() => {
                            tog_fullscreen();
                        }}
                        className="btn btn-link link-success fw-medium"
                    ><i className="ri-close-line me-1 align-middle" />
                        Close
                    </Link>
                    <Button
                        color="primary"
                        className="btn btn-primary "
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>

            {/* Extra Large Modal */}
            <Modal
                size="xl"
                show={modal_xlarge}
                onHide={() => {
                    tog_xlarge();
                }}
            >
                <Modal.Header className="modal-title fw-bold"
                    id="myExtraLargeModalLabel" closeButton>
                    <h5 className='modal-title'>Extra large modal</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <h6 className="fs-16 my-3">Graphic Design</h6>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in Graphic Design is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_xlarge(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary">Save changes</Button>
                </div>
            </Modal>


            {/* Large Modal */}
            <Modal
                size="lg"
                show={modal_large}
                onHide={() => {
                    tog_large();
                }}
            >
                <Modal.Header className="modal-title fw-bold"
                    id="myLargeModalLabel" closeButton>
                    <h5 className='modal-title'>Large Modal</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <h6 className="fs-16 my-3">Graphic Design</h6>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in Graphic Design is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_large(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary">Save changes</Button>
                </div>
            </Modal>

            {/* Small Modal */}
            <Modal
                size="sm"
                show={modal_small}
                onHide={() => {
                    tog_small();
                }}
            >
                <Modal.Header className="modal-title fw-bold"
                    id="mySmallModalLabel" closeButton>
                    <h5 className='modal-title'>Small Modal</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_small(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary">Save changes</Button>
                </div>
            </Modal>

            {/* Fullscreen Responsive Modals */}
            <Modal
                size="xl"
                show={modal_fullscreen1}
                fullscreen={modal_fullscreen1}
                onHide={() => {
                    tog_fullscreen1();
                }}
                className="modal-fullscreen"
                id="fullscreeexampleModal"
            >
                <Modal.Header className="modal-title fw-bold"
                    id="fullscreeexampleModalLabel" closeButton>
                    <h5 className='modal-title'>Full screen modal</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.</p>
                        </div>
                    </div>
                    <h6 className="fs-16 my-3">Graphic Design</h6>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in Graphic Design is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href='#'
                        type="button"
                        onClick={() => {
                            tog_fullscreen1();
                        }}
                        className="btn btn-link link-success fw-medium"
                    ><i className="ri-close-line me-1 align-middle" />
                        Close
                    </Link>
                    <Button
                        variant="primary"
                    >
                        Save changes
                    </Button>
                </div>
            </Modal>

            {/* FullscreenSm */}
            <Modal id="exampleModalFullscreenSm" show={modal_fullscreen_sm} onHide={() => { tog_fullscreen_sm(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenSmLabel" closeButton>
                    <h5 className='modal-title'>Full screen below sm</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_sm(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary"> Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenMd */}
            <Modal id="exampleModalFullscreenMd" show={modal_fullscreen_md} onHide={() => { tog_fullscreen_md(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenMdLabel" closeButton>
                    <h5 className='modal-title'>Full screen below md</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_md(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenLg */}
            <Modal id="exampleModalFullscreenLg" show={modal_fullscreen_lg} onHide={() => { tog_fullscreen_lg(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenLgLabel" closeButton>
                    <h5 className='modal-title'>Full screen below lg</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_lg(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenXl */}
            <Modal id="exampleModalFullscreenXl" show={modal_fullscreen_xl} onHide={() => { tog_fullscreen_xl(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenXlLabel" closeButton>
                    <h5 className='modal-title'>Full screen below xl</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_xl(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* FullscreenXxl */}
            <Modal id="exampleModalFullscreenXxl" show={modal_fullscreen_xxl} onHide={() => { tog_fullscreen_xxl(); }} >
                <Modal.Header className="modal-title fw-bold" id="exampleModalFullscreenXxlLabel" closeButton>
                    <h5 className='modal-title'>Modal Heading</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 className="fs-16">Give your text a good structure</h6>
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <p className="text-muted mb-0">Raw denim you probably haven't heard of them jean shorts Austin.
                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="flex-shrink-0">
                            <i className="ri-checkbox-circle-fill text-success"></i>
                        </div>
                        <div className="flex-grow-1 ms-2 ">
                            <p className="text-muted mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.</p>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer">
                    <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_fullscreen_xxl(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* modal for Mary */}
            <Modal
                show={modal_varying1}
                onHide={() => {
                    tog_varying1();
                }}
                id="exampleModal"
            >
                <Modal.Header className="modal-title fw-bold" id="exampleModalLabel" closeButton>
                    <h5 className="modal-title">New message to Mary</h5>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                            <Form.Control type="text" className="form-control" id="customer-name" value="Mary" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text" rows={4}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            setmodal_varying1(false);
                        }}
                    >
                        Back
                    </Button>
                    <Button variant="primary">
                        Send message
                    </Button>
                </div>
            </Modal>

            {/* modal for Jennifer */}
            <Modal
                show={modal_varying2}
                onHide={() => {
                    tog_varying2();
                }}
            >
                <Modal.Header className="modal-title fw-bold" closeButton>
                    <h5 className="modal-title">New message to Jennifer</h5>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                            <Form.Control type="text" className="form-control" id="customer-name" value="Jennifer" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text" rows={4}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            setmodal_varying2(false);
                        }}
                    >
                        Back
                    </Button>
                    <Button variant="primary">
                        Send message
                    </Button>
                </div>
            </Modal>;

            {/* modal for Roderick */}
            <Modal
                show={modal_varying3}
                onHide={() => {
                    tog_varying3();
                }}
            >
                <Modal.Header className="modal-title fw-bold" closeButton>
                    <h5 className="modal-title">New message to Roderick</h5>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="customer-name" className="col-form-label">Customer Name:</label>
                            <Form.Control type="text" className="form-control" id="customer-name" value="Roderick" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text" rows={4}></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        color="light"
                        onClick={() => {
                            setmodal_varying3(false);
                        }}
                    >
                        Back
                    </Button>
                    <Button variant="primary">
                        Send message
                    </Button>
                </div>
            </Modal>;

            {/* Animation Modals */}

            {/* RightSide Animation */}
            <Modal id="fadeInRightModal" show={modal_animationRight} onHide={() => { tog_animationRight(); }} className="fadeInRight" centered >
                <Modal.Header className="modal-title fw-bold" id="fadeInRightModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationRight(); }}>
                        Close
                    </Button>
                    <Button variant="primary"> Save changes </Button>
                </div>
            </Modal>

            {/* LeftSide Animation */}
            <Modal id="fadeInleftModal" show={modal_animationLeft} onHide={() => { tog_animationLeft(); }} className="fadeInLeft" centered >
                <Modal.Header className="modal-title fw-bold" id="fadeInleftModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationLeft(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* UpSide Animation */}
            <Modal id="fadeInUpModal" show={modal_animationUp} onHide={() => { tog_animationUp(); }} className="fadeInUp" centered >
                <Modal.Header className="modal-title fw-bold" id="fadeInUpModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationUp(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* Flip Animation */}
            <Modal id="flipModal" show={modal_animationFlip} onHide={() => { tog_animationFlip(); }} className="flip" centered >
                <Modal.Header className="modal-title fw-bold" id="flipModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationFlip(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* ZoomIn Animation */}
            <Modal id="flipModal" show={modal_animationZoom} onHide={() => { tog_animationZoom(); }} className="zoomIn" centered >
                <Modal.Header className="modal-title fw-bold" id="flipModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body>
                    <h5 className="fs-16">
                        Overflowing text to show scroll behavior
                    </h5>
                    <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
                </Modal.Body>
                <div className="modal-footer">
                    <Button variant="light" onClick={() => { tog_animationZoom(); }}> Close </Button>
                    <Button variant="primary" > Save changes </Button>
                </div>
            </Modal>

            {/* Position Top */}
            <Modal id="topmodal" show={modal_positionTop} onHide={() => { tog_positionTop(); }}>
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={smile}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_positionTop(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link href="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Top Right */}

            <Modal id="top-rightmodal" show={modal_positionTopRight} onHide={() => { tog_positionTopRight(); }} className="modal-dialog-right">
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={smile}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_positionTopRight(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link href="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Bottom */}

            <Modal id="bottomModal" show={modal_positionBottom} onHide={() => { tog_positionBottom(); }} className="modal-dialog-bottom" >
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={smile}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4">The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_positionBottom(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link href="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Bottom Right */}

            <Modal id="bottom-rightModal" show={modal_positionBottomRight} onHide={() => { tog_positionBottomRight(); }} className="modal-dialog-right" >
                <Modal.Header className="modal-title fw-bold" id="myModalLabel">
                    Modal Heading
                </Modal.Header>
                <Modal.Body className="text-center p-5">
                    <Image
                        src={smile}
                        style={{ width: "120px", height: "120px" }}
                        alt="">
                    </Image>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link href="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_positionBottomRight(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link href="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Custom Modals Example */}

            {/* Success Message */}

            <Modal id="success-Payment" tabIndex="-1" show={modal_successMessage} onHide={() => { tog_successMessage(); }} centered>
                <Modal.Body className='text-center p-5'>
                    <div className="text-end">
                        <button type="button" onClick={() => { tog_successMessage(); }} className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="mt-2">
                        <Image
                            src={congrets1}
                            style={{ width: "120px", height: "120px" }}
                            alt="">
                        </Image>
                        <h4 className="mb-3 mt-4">Your Transaction is Successfull !</h4>
                        <p className="text-muted fs-15 mb-4">Successful transaction is the status of operation whose result is the payment of the amount paid by the customer in favor of the merchant.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <button className="btn btn-primary">New transaction</button>
                            <button className="btn btn-soft-success"><i className="ri-links-line align-bottom"></i> Copy tracking link</button>
                        </div>
                    </div>
                </Modal.Body>
                <div className="modal-footer bg-light p-3 justify-content-center" >
                    <p className="mb-0 text-muted">You like our service? <Link href="#" className="link-secondary fw-semibold">Invite Friends</Link></p>
                </div>
            </Modal>


            {/* Login Modals */}

            <Modal id="loginModals" tabIndex="-1" show={modal_loginModals} onHide={() => { tog_loginModals(); }} centered>
                <div className="modal-content border-0 overflow-hidden">
                    <Modal.Body className='login-modal p-5'>
                        <h5 className="text-white fs-20">Login</h5>
                        <p className="text-white-50 mb-4">Don't have an account? <Link href="/#" className="text-white">Sign Up.</Link></p>
                        <div className="vstack gap-2 justify-content-center">
                            <button className="btn btn-light"><i className="ri-google-fill align-bottom text-danger"></i> Google</button>
                            <button className="btn btn-info"><i className="ri-facebook-fill align-bottom"></i> Facebook</button>
                        </div>
                    </Modal.Body>
                    <Modal.Body className="p-5">
                        <h5 className="mb-3">Login with Email</h5>
                        <form>
                            <div className="mb-2">
                                <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email/username" />
                            </div>
                            <div className="mb-3">
                                <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                                <div className="mt-1 text-end">
                                    <Link href="#">Forgot password ?</Link>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </Modal.Body>
                </div>
            </Modal>

            {/* Subscribe Modals */}
            <Modal id="subscribeModals" tabIndex="-1" show={subscribeModals} onHide={() => { tog_subscribeModals(); }} centered size='lg'>
                <Row className="g-0">
                    <Col lg={7}>
                        <div className="modal-body p-5">
                            <h2 className="lh-base">Subscribe now today to get <span className="text-danger">20% off</span> experiences!</h2>
                            <p className="text-muted mb-4">A free bet is a bet which is provided by a betting
                                site for a customer to place and then benefit from the winnings. Free bets are commonly used as welcome offers.</p>
                            <div className="input-group mb-3">

                                <Form.Control type="text" className="form-control" placeholder="Enter your email" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                <button className="btn btn-primary" type="button" id="button-addon1">Subscript Now</button>
                            </div>

                            <div className="form-check">
                                <Form.Control type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">By subscribing to a particular channel or user on YouTube, you can receive instant updates.</label>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="subscribe-modals-cover h-100">
                            <Image src={authbg} alt="" className="h-100 w-100 object-cover" style={{ clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 25% 50%, 0% 0%)" }} />
                        </div>
                    </Col>
                </Row>
            </Modal>

            {/* Subscribe Modals */}
            <Modal id="signupModals" tabIndex="-1" show={modal_signUpModals} onHide={() => { tog_signUpModals(); }} centered>
                <Modal.Header className="p-3">
                    Sign Up
                </Modal.Header>
                <Alert variant="success" className="rounded-0 mb-0">
                    <p className="mb-0">Up to <span className="fw-semibold">50% OFF</span>, Hurry up before the stock ends</p>
                </Alert>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <Form.Label htmlFor="fullName">Full Name</Form.Label>
                            <Form.Control type="email" className="form-control" id="fullName" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="emailInput">Email address</Form.Label>
                            <Form.Control type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                            <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3 form-check">
                            <Form.Check type="checkbox" id="checkTerms" />
                            <Form.Label className="form-check-label" htmlFor="checkTerms">I agree to the <span className="fw-semibold">Terms of Service</span> and Privacy Policy</Form.Label>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Sign Up Now</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
};

export default UiModals;