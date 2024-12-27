import React, { useState } from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Button, Card, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import Image from 'next/image';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

// Import Components

import BootstrapToastsExample from './bootstrapToastsCode';
import ToastPlacementExample from './toastPlacementCode';
import BorderIconExample from './borderIconCode';

// Import Images
import logosm from '@assets/images/logo-sm.png';

const UiNotifications = () => {

    const [toast1, setToast1] = useState(true);
    const [toast2, setToast2] = useState(true);
    const [toast3, setToast3] = useState(true);
    const [toast4, setToast4] = useState(true);
    const [toast5, setToast5] = useState(true);
    const [toast6, setToast6] = useState(true);

    const [toast7, setToast7] = useState(false);
    const [toast8, setToast8] = useState(false);
    const [toast9, setToast9] = useState(false);
    const [toast10, setToast10] = useState(false);

    const [toast11, setToast11] = useState(true);
    const [position, setPosition] = useState<any>();
    
    const togglesetToast1 = () => setToast1(!setToast1);
    const togglesetToast2 = () => setToast2(!setToast2);
    const togglesetToast3 = () => setToast3(!setToast3);
    const togglesetToast4 = () => setToast4(!setToast4);
    const togglesetToast5 = () => setToast5(!setToast5);
    const togglesetToast6 = () => setToast6(!setToast6);

    const togglesetToast7 = () => setToast7(!setToast7);
    const togglesetToast8 = () => setToast8(!setToast8);
    const togglesetToast9 = () => setToast9(!setToast9);
    const togglesetToast10 = () => setToast10(!setToast10);

    const defaultnotify = () => toast("Welcome Back! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-primary text-white', transition: Slide, });
    const successnotify = () => toast("Your application was successfully sent", { position: "top-center", hideProgressBar: true, closeOnClick: false, className: 'bg-success text-white', transition: Slide });
    const warningnotify = () => toast("Warning ! Something went wrong try again", { position: "top-center", hideProgressBar: true, closeOnClick: false, className: 'bg-warning text-white', transition: Slide });
    const errornotify = () => toast("Error ! An error occurred.", { position: "top-center", hideProgressBar: true, closeOnClick: false, className: 'bg-danger text-white', transition: Slide });

    const topleftnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-left", hideProgressBar: true, className: 'bg-success text-white' });
    const topcenternotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-center", hideProgressBar: true, className: 'bg-success text-white' });
    const toprightnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-success text-white' });
    const bottomleftnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-left", hideProgressBar: true, className: 'bg-success text-white' });
    const bottomcenternotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-center", hideProgressBar: true, className: 'bg-success text-white' });
    const bottomrightnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "bottom-right", hideProgressBar: true, className: 'bg-success text-white' });

    const offsetnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-success text-white m-5' });
    const closeiconnotify = () => toast("Welcome Back ! This is a Toast Notification", { position: "top-right", hideProgressBar: true, className: 'bg-success text-white' });
    const durationnotify = () => toast("Toast Duration 5s", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white' });

    return (
        <React.Fragment>

            <Head>
                <title>Notifications | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Notifications" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bootstrap Toasts</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <Row className="g-3">
                                            <Col xxl={6}>
                                                <h5 className="fs-14 mb-3">Default Toast</h5>
                                                <p className="text-muted">Use <code>toast</code> class to set a default toast.</p>
                                                <Toast className="fade" show={toast1} onClose={togglesetToast1}>
                                                    <Toast.Header>
                                                        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                        <span className="fw-semibold me-auto">Hybrix</span>
                                                        <small>06 mins ago</small>
                                                    </Toast.Header>
                                                    <Toast.Body>
                                                        Hello, world! This is a toast message.
                                                    </Toast.Body>
                                                </Toast>

                                                <div className="mt-4">
                                                    <h5 className="fs-14">Translucent</h5>
                                                    <p className="text-muted">Toasts are slightly translucent, too, so they blend over whatever they might appear over.</p>
                                                    <div className="p-3 bg-light">
                                                        <Toast className="fade" show={toast2} onClose={togglesetToast2}>
                                                            <Toast.Header>
                                                                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                <span className="fw-semibold me-auto">Hybrix</span>
                                                                <small>11 mins ago</small>
                                                            </Toast.Header>
                                                            <Toast.Body>
                                                                Hello, world! This is a toast message.
                                                            </Toast.Body>
                                                        </Toast>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xxl={6}>
                                                <div>
                                                    <h5 className="fs-14">Stacking</h5>
                                                    <p className="text-muted">When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>

                                                    <div className="p-3 bg-light">
                                                        <Toast className="fade" show={toast3} onClose={togglesetToast3}>
                                                            <Toast.Header>
                                                                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                <span className="fw-semibold me-auto">Hybrix</span>
                                                                <small>Just now</small>
                                                            </Toast.Header>
                                                            <Toast.Body>
                                                                See? Just like this.
                                                            </Toast.Body>
                                                        </Toast>

                                                        <Toast className="fade" show={toast4} onClose={togglesetToast4}>
                                                            <Toast.Header>
                                                                <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                <span className="fw-semibold me-auto">Hybrix</span>
                                                                <small>2 seconds ago</small>
                                                            </Toast.Header>
                                                            <Toast.Body>
                                                                Heads up, toasts will stack automatically
                                                            </Toast.Body>
                                                        </Toast>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mt-5">
                                            <h5 className="fs-14">Placement</h5>
                                            <Row className="g-3">
                                                <Col xxl={6}>
                                                    <div>
                                                        <p className="text-muted">Place toasts with custom CSS as you need them.
                                                            The top right
                                                            is often used
                                                            for notifications, as is the top middle. If you’re only ever
                                                            going to show one toast
                                                            at a time, put
                                                            the positioning styles right on the <code>.toast</code>.</p>

                                                        <div className="bg-light" aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px"}}>
                                                            <Toast className="fade" show={toast5} onClose={togglesetToast5} style={{position: "absolute", top: "16px", right: "16px"}}>
                                                                <Toast.Header>
                                                                    <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                    <span className="fw-semibold me-auto">Hybrix</span>
                                                                    <small>06 mins ago</small>
                                                                </Toast.Header>
                                                                <Toast.Body>
                                                                    Hello, world! This is a toast message.
                                                                </Toast.Body>
                                                            </Toast>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col xxl={6}>
                                                    <div>
                                                        <p className="text-muted">You can also get fancy with flexbox utilities
                                                            to align toasts horizontally and/or vertically.</p>

                                                        <div aria-live="polite" aria-atomic="true" className="bg-light d-flex justify-content-center align-items-center" style={{height: "200px"}}>
                                                            <Toast className="fade" show={toast6} onClose={togglesetToast6}>
                                                                <Toast.Header>
                                                                    <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                                    <span className="fw-semibold me-auto">Hybrix</span>
                                                                    <small>11 mins ago</small>
                                                                </Toast.Header>
                                                                <Toast.Body>
                                                                    Hello, world! This is a toast message.
                                                                </Toast.Body>
                                                            </Toast>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "300px"}}>
                                        <BootstrapToastsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Toast Placement</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Various example of <code>toast placement</code>.</p>
                                    <div>
                                        <Form>
                                            <div className="mb-3">
                                                <select className="form-select mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
                                                    <option value="">Select a position...</option>
                                                    <option value="top-0 start-0">Top left</option>
                                                    <option value="top-0 start-50 translate-middle-x">Top center</option>
                                                    <option value="top-0 end-0">Top right</option>
                                                    <option value="top-50 start-0 translate-middle-y">Middle left</option>
                                                    <option value="top-50 start-50 translate-middle">Middle center</option>
                                                    <option value="top-50 end-0 translate-middle-y">Middle right</option>
                                                    <option value="bottom-0 start-0">Bottom left</option>
                                                    <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                                    <option value="bottom-0 end-0">Bottom right</option>
                                                </select>
                                            </div>
                                        </Form>
                                        <div aria-live="polite" aria-atomic="true" className="bd-example bg-light position-relative" style={{height: "300px"}}>
                                            <div className={"toast-container position-absolute p-3 " + position} id="toastPlacement">
                                                <Toast show={toast11} onClose={() => setToast11(!toast11)}>
                                                    <Toast.Header>
                                                        <Image src={logosm} className="rounded me-2" alt="..." height="20" />
                                                        <strong className="me-auto">Hybrix</strong>
                                                        <small>11 mins ago</small>
                                                    </Toast.Header>
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
                                                    </div>
                                                </Toast>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <ToastPlacementExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bordered with Icon Toast</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>toast-border-</code> with below-mentioned color variation to set a toast with border and icon.</p>
                                    <div>
                                        <div className="position-relative">
                                            <div className="hstack flex-wrap gap-2">
                                                <Button variant="primary" onClick={() => setToast7(!toast7)}  id="borderedToast1Btn">Primary Toast</Button>
                                                <Button variant="success" onClick={() => setToast8(!toast8)}  id="borderedToast2Btn">Success Toast</Button>
                                                <Button variant="warning" onClick={() => setToast9(!toast9)}  id="borderedTost3Btn">Warning Toast</Button>
                                                <Button variant="danger" onClick={() => setToast10(!toast10)} id="borderedToast4Btn">Danger Toast</Button>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast show={toast7} onClose={togglesetToast7} className="toast-border-primary overflow-hidden mt-3">
                                                    <Toast.Body>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <i className="ri-user-smile-line align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-0">Your application was successfully sent.</h6>
                                                            </div>
                                                        </div>
                                                    </Toast.Body>
                                                </Toast>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast show={toast8} onClose={togglesetToast8} className="toast-border-success overflow-hidden mt-3">
                                                    <Toast.Body>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <i className="ri-checkbox-circle-fill align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-0">Yey! Everything worked!</h6>
                                                            </div>
                                                        </div>
                                                    </Toast.Body>
                                                </Toast>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast show={toast9} onClose={togglesetToast9} className="toast-border-warning overflow-hidden mt-3">
                                                    <Toast.Body>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <i className="ri-notification-off-line align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-0">Something went wrong, try again.</h6>
                                                            </div>
                                                        </div>
                                                    </Toast.Body>
                                                </Toast>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast show={toast10} onClose={togglesetToast10} className="toast-border-danger overflow-hidden mt-3">
                                                    <Toast.Body>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 me-2">
                                                                <i className="ri-alert-line align-middle"></i>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-0">Something is very wrong! <a href="#" className="text-decoration-underline">See detailed report.</a></h6>
                                                            </div>
                                                        </div>
                                                    </Toast.Body>
                                                </Toast>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <BorderIconExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Toastify JS</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>data-toast</code> <code>data-toast-text=""</code> <code>data-toast-gravity=""</code> <code>data-toast-position=""</code> <code>data-toast-className=""</code> <code>data-toast-duration=""</code> <code>data-toast-close="close"</code> <code>data-toast-style="style"</code> as per your toast requirement.</p>
                                    <div>
                                        <div className="hstack flex-wrap gap-2">
                                            <Button variant="light" onClick={defaultnotify} className="w-xs">Default</Button>
                                            <Button variant="light" onClick={successnotify} className="w-xs">Success</Button>
                                            <Button variant="light" onClick={warningnotify} className="w-xs">Warning</Button>
                                            <Button variant="light" onClick={errornotify} className="w-x">Error</Button>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <h5 className="fs-14 mb-3">Display Position</h5>
                                            <div className="hstack flex-wrap gap-2">
                                                <Button variant="light" className="w-xs" onClick={topleftnotify}>Top Left</Button>
                                                <Button variant="light" className="w-xs" onClick={topcenternotify}>Top Center</Button>
                                                <Button variant="light" className="w-xs" onClick={toprightnotify}>Top Right</Button>
                                                <Button variant="light" className="w-xs" onClick={bottomleftnotify}>Bottom Left</Button>
                                                <Button variant="light" className="w-xs" onClick={bottomcenternotify}>Bottom Center</Button>
                                                <Button variant="light" className="w-xs" onClick={bottomrightnotify}>Bottom Right</Button>
                                            </div>
                                        </div>

                                        <Row className="mt-3">
                                            <Col lg={4}>
                                                <div className="mt-4">
                                                    <h5 className="fs-14 mb-3">Offset Position</h5>
                                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                                        <Button variant="light" className="w-xs" onClick={offsetnotify}>Click Me</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mt-4">
                                                    <h5 className="fs-14 mb-3">Close icon Display</h5>
                                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                                        <Button variant="light" className="w-xs" onClick={closeiconnotify}>Click Me</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="mt-4">
                                                    <h5 className="fs-14 mb-3">Duration</h5>
                                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                                        <Button variant="light" className="w-xs" onClick={durationnotify}>Click Me</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
            <ToastContainer/>
        </React.Fragment>
    );
};

export default UiNotifications;