import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Image from 'next/image';
import Head from 'next/head';

// Import Images
import logoDark from '@assets/images/logo-dark.png'
import dummyUser from "@assets/images/users/user-dummy-img.jpg";

// Import Gifs
import congrets from '@assets/images/Gifs/1103-confetti-outline.gif'

const FormsWizard = () => {

    const [activeTab, setactiveTab] = useState<number>(0);
    const [activeArrowTab, setactiveArrowTab] = useState(1);
    const [activeVerticalTab, setactiveVerticalTab] = useState<number>(2);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Wizard | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Wizard" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Progress Nav Steps</h4>
                                </Card.Header>
                                <Card.Body className="form-steps">
                                    <Form onSubmit={(e:any) => e.preventDefault()}>
                                        <Tab.Container activeKey={activeTab}>
                                            <div className="text-center pt-3 pb-4 mb-1">
                                                <h5>Signup Your Account</h5>
                                            </div>
                                            <div id="custom-progress-bar" className="progress-nav mb-4">
                                                <div>
                                                    <ProgressBar now={activeTab * 50} style={{ height: "1px" }}></ProgressBar>
                                                </div>

                                                <Nav as="ul" variant="pills" className="progress-bar-tab custom-nav">
                                                    <Nav.Item as="li">
                                                        <Nav.Link as='button' eventKey="0" onClick={() => setactiveTab(0)} className="rounded-pill">1</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as='button' eventKey="1" onClick={() => setactiveTab(1)} className="rounded-pill">2</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as='button' eventKey="2" onClick={() => setactiveTab(2)} className="rounded-pill">3</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>

                                            <Tab.Content>
                                                <Tab.Pane eventKey="0" id="pills-gen-info" role="tabpanel" aria-labelledby="pills-gen-info-tab">
                                                    <div>
                                                        <div className="mb-4">
                                                            <div>
                                                                <h5 className="mb-1">General Information</h5>
                                                                <p className="text-muted">Fill all Information as below</p>
                                                            </div>
                                                        </div>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Form.Label htmlFor="gen-info-email-input">Email</Form.Label>
                                                                    <Form.Control type="text" id="gen-info-email-input" placeholder="Enter Email" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Form.Label htmlFor="gen-info-username-input">User Name</Form.Label>
                                                                    <Form.Control type="text" id="gen-info-username-input" placeholder="Enter User Name" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="gen-info-password-input">Password</Form.Label>
                                                            <Form.Control type="password" id="gen-info-password-input" placeholder="Enter Password" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveTab(1)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to more info</Button>
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="1" id="pills-info-desc" role="tabpanel" aria-labelledby="pills-info-desc-tab">
                                                    <div>
                                                        <div className="text-center">
                                                            <div className="profile-user position-relative d-inline-block mx-auto mb-2">
                                                                <Image src={dummyUser} className="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image" />
                                                                <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                                    <input id="profile-img-file-input" type="file" className="profile-img-file-input" accept="image/png, image/jpeg" />
                                                                    <Form.Label htmlFor="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-body">
                                                                            <i className="ri-camera-fill"></i>
                                                                        </span>
                                                                    </Form.Label>
                                                                </div>
                                                            </div>
                                                            <h5 className="fs-14">Add Image</h5>

                                                        </div>
                                                        <div>
                                                            <Form.Label htmlFor="gen-info-description-input">Description</Form.Label>
                                                            <textarea className="form-control" placeholder="Enter Description" id="gen-info-description-input" rows={2}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <Button className="btn-link text-decoration-none btn-label previestab" onClick={() => setactiveTab(0)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to General</Button>
                                                        <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit</Button>
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="2" id="pills-success">
                                                    <div>
                                                        <div className="text-center">

                                                            <div className="mb-4">
                                                            <Image
                                                                src={congrets}
                                                                style={{ width: "120px", height: "120px" }}
                                                                alt="">
                                                            </Image>
                                                            </div>
                                                            <h5>Well Done !</h5>
                                                            <p className="text-muted">You have Successfully Signed Up</p>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Arrow Nav Steps</h4>
                                </Card.Header>
                                <Card.Body className="form-steps">
                                    <Form action="#" onSubmit={(e:any) => e.preventDefault()}>
                                        <Tab.Container activeKey={activeArrowTab}>
                                            <div className="text-center pt-3 pb-4 mb-1">
                                                <Image src={logoDark} alt="" height="22" />
                                            </div>
                                            <div className="step-arrow-nav mb-4">

                                                <Nav as="ul" variant="pills" className="custom-nav nav-justified">
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="button" eventKey="1" onClick={() => setactiveArrowTab(1)}>General</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="button" eventKey="2" onClick={() => setactiveArrowTab(2)}>Description</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="button" eventKey="3" onClick={() => setactiveArrowTab(3)}>Finish</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>

                                            <Tab.Content>
                                                <Tab.Pane eventKey="1">
                                                    <div>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Form.Label htmlFor="steparrow-gen-info-email-input">Email</Form.Label>
                                                                    <Form.Control type="text" id="steparrow-gen-info-email-input" placeholder="Enter Email" />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Form.Label htmlFor="steparrow-gen-info-username-input">User Name</Form.Label>
                                                                    <Form.Control type="text" id="steparrow-gen-info-username-input" placeholder="Enter User Name" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="steparrow-gen-info-password-input">Password</Form.Label>
                                                            <Form.Control type="password" id="steparrow-gen-info-password-input" placeholder="Enter Password" />
                                                        </div>
                                                        <div>
                                                            <Form.Label htmlFor="steparrow-gen-info-confirm-password-input">Confirm Password</Form.Label>
                                                            <Form.Control type="password" id="steparrow-gen-info-confirm-password-input" placeholder="Enter Confirm Password" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveArrowTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to more info</Button>
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="2">
                                                    <div>
                                                        <div className="mb-3">
                                                            <Form.Label htmlFor="formFile">Upload Image</Form.Label>
                                                            <Form.Control type="file" id="formFile" />
                                                        </div>
                                                        <div>
                                                            <Form.Label htmlFor="des-info-description-input">Description</Form.Label>
                                                            <textarea className="form-control" placeholder="Enter Description" id="des-info-description-input" rows={3}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-start gap-3 mt-4">
                                                        <Button variant='light' className="btn-label previestab" onClick={() => setactiveArrowTab(1)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to General</Button>
                                                        <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveArrowTab(3)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit</Button>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="3">
                                                    <div className="text-center">

                                                        <div className="avatar-md mt-5 mb-4 mx-auto">
                                                            <div className="avatar-title bg-light text-success display-4 rounded-circle">
                                                                <i className="ri-checkbox-circle-fill"></i>
                                                            </div>
                                                        </div>
                                                        <h5>Well Done !</h5>
                                                        <p className="text-muted">You have Successfully Signed Up</p>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical nav Steps</h4>
                                </Card.Header>
                                <Card.Body className="form-steps">
                                    <Form className="vertical-navs-step" onSubmit={(e:any) => e.preventDefault()}>
                                        <Tab.Container activeKey={activeVerticalTab}>
                                            <Row className="gy-5">
                                                <Col lg={3}>
                                                    <Nav as="div" variant="pills" className="flex-column custom-nav">
                                                        <Nav.Link as="button" className="nav-link done" eventKey="1" onClick={() => setactiveVerticalTab(1)}>
                                                            <span className="step-title me-2">
                                                                <i className="ri-close-circle-fill step-icon me-2"></i> Step 1
                                                            </span>
                                                            Billing Info
                                                        </Nav.Link>
                                                        <Nav.Link as="button" className={activeVerticalTab > 2 ? "nav-link done" : "nav-link"} eventKey="2" onClick={() => setactiveVerticalTab(2)}>
                                                            <span className="step-title me-2">
                                                                <i className="ri-close-circle-fill step-icon me-2"></i> Step 2
                                                            </span>
                                                            Address
                                                        </Nav.Link>
                                                        <Nav.Link as="button" className={activeVerticalTab > 3 ? "nav-link done" : "nav-link"} eventKey="3" onClick={() => setactiveVerticalTab(3)}>
                                                            <span className="step-title me-2">
                                                                <i className="ri-close-circle-fill step-icon me-2"></i> Step 3
                                                            </span>
                                                            Payment
                                                        </Nav.Link>
                                                        <Nav.Link as="button" className={activeVerticalTab > 4 ? "nav-link done" : "nav-link"} eventKey="4" onClick={() => setactiveVerticalTab(4)}>
                                                            <span className="step-title me-2">
                                                                <i className="ri-close-circle-fill step-icon me-2"></i> Step 4
                                                            </span>
                                                            Finish
                                                        </Nav.Link>
                                                    </Nav>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="px-lg-4">
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="1">
                                                                <div>
                                                                    <h5>Billing Info</h5>
                                                                    <p className="text-muted">Fill all information below</p>
                                                                </div>
                                                                <div>
                                                                    <Row className="g-3">
                                                                        <Col sm={6}>
                                                                            <Form.Label htmlFor="firstName">First name</Form.Label>
                                                                            <Form.Control type="text" id="firstName" placeholder="Enter First Name" defaultValue="" />
                                                                        </Col>

                                                                        <Col sm={6}>
                                                                            <Form.Label htmlFor="lastName">Last name</Form.Label>
                                                                            <Form.Control type="text" id="lastName" placeholder="Enter Last Name" defaultValue="" />
                                                                        </Col>

                                                                        <div className="col-12">
                                                                            <Form.Label htmlFor="username">Username</Form.Label>
                                                                            <div className="input-group">
                                                                                <span className="input-group-text">@</span>
                                                                                <Form.Control type="text" id="username" placeholder="Username" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-12">
                                                                            <Form.Label htmlFor="email">Email <span className="text-muted">(Optional)</span></Form.Label>
                                                                            <Form.Control type="email" id="email" placeholder="Enter Email" />
                                                                        </div>
                                                                    </Row>
                                                                </div>

                                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                                    <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveVerticalTab(2)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to Shipping</Button>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="2">
                                                                <div>
                                                                    <h5>Shipping Address</h5>
                                                                    <p className="text-muted">Fill all information below</p>
                                                                </div>

                                                                <div>
                                                                    <Row className="g-3">
                                                                        <div className="col-12">
                                                                            <Form.Label htmlFor="address">Address</Form.Label>
                                                                            <Form.Control type="text" className="form-control" id="address" placeholder="1234 Main St" />
                                                                        </div>

                                                                        <div className="col-12">
                                                                            <Form.Label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></Form.Label>
                                                                            <Form.Control type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                                                        </div>

                                                                        <Col md={5}>
                                                                            <Form.Label htmlFor="country">Country</Form.Label>
                                                                            <select className="form-select" id="country">
                                                                                <option value="">Choose...</option>
                                                                                <option>United States</option>
                                                                            </select>
                                                                        </Col>

                                                                        <Col md={4}>
                                                                            <Form.Label htmlFor="state">State</Form.Label>
                                                                            <select className="form-select" id="state">
                                                                                <option value="">Choose...</option>
                                                                                <option>California</option>
                                                                            </select>
                                                                        </Col>

                                                                        <Col md={3}>
                                                                            <Form.Label htmlFor="zip">Zip</Form.Label>
                                                                            <Form.Control type="text" className="form-control" id="zip" placeholder="" />
                                                                        </Col>
                                                                    </Row>

                                                                    <hr className="my-4 text-muted" />

                                                                    <div className="form-check mb-2">
                                                                        <Form.Check type="checkbox" id="same-address" />
                                                                        <Form.Label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</Form.Label>
                                                                    </div>

                                                                    <div className="form-check">
                                                                        <Form.Check type="checkbox" id="save-info" />
                                                                        <Form.Label className="form-check-label" htmlFor="save-info">Save this information for next time</Form.Label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                                    <Button variant='light' className="btn-label previestab" onClick={() => setactiveVerticalTab(1)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to Billing Info</Button>
                                                                    <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveVerticalTab(3)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to Payment</Button>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="3">
                                                                <div>
                                                                    <h5>Payment</h5>
                                                                    <p className="text-muted">Fill all information below</p>
                                                                </div>

                                                                <div>
                                                                    <div className="my-3">
                                                                        <div className="form-check form-check-inline">
                                                                            <Form.Check id="credit" name="paymentMethod" type="radio" defaultChecked />
                                                                            <Form.Label className="form-check-label" htmlFor="credit">Credit card</Form.Label>
                                                                        </div>
                                                                        <div className="form-check form-check-inline">
                                                                            <Form.Check id="debit" name="paymentMethod" type="radio" />
                                                                            <Form.Label className="form-check-label" htmlFor="debit">Debit card</Form.Label>
                                                                        </div>
                                                                        <div className="form-check form-check-inline">
                                                                            <Form.Check id="paypal" name="paymentMethod" type="radio" />
                                                                            <Form.Label className="form-check-label" htmlFor="paypal">PayPal</Form.Label>
                                                                        </div>
                                                                    </div>

                                                                    <Row className="gy-3">
                                                                        <Col md={12}>
                                                                            <Form.Label htmlFor="cc-name">Name on card</Form.Label>
                                                                            <Form.Control type="text" id="cc-name" placeholder=""/>
                                                                            <small className="text-muted">Full name as displayed on card</small>
                                                                            <div className="invalid-feedback">
                                                                                Name on card is required
                                                                            </div>
                                                                        </Col>

                                                                        <Col md={6}>
                                                                            <Form.Label htmlFor="cc-number">Credit card number</Form.Label>
                                                                            <Form.Control type="text" id="cc-number" placeholder=""/>
                                                                            <div className="invalid-feedback">
                                                                                Credit card number is required
                                                                            </div>
                                                                        </Col>

                                                                        <Col md={3}>
                                                                            <Form.Label htmlFor="cc-expiration">Expiration</Form.Label>
                                                                            <Form.Control type="text" id="cc-expiration" placeholder=""/>
                                                                            <div className="invalid-feedback">
                                                                                Expiration date required
                                                                            </div>
                                                                        </Col>

                                                                        <Col md={3}>
                                                                            <Form.Label htmlFor="cc-cvv">CVV</Form.Label>
                                                                            <Form.Control type="text" id="cc-cvv" placeholder=""/>
                                                                            <div className="invalid-feedback">
                                                                                Security code required
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>

                                                                <div className="d-flex align-items-start gap-3 mt-4">
                                                                    <Button variant='light' className="btn-label previestab" onClick={() => setactiveVerticalTab(2)}><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back to Shipping Info</Button>
                                                                    <Button variant='success' className="btn-label right ms-auto nexttab nexttab" onClick={() => setactiveVerticalTab(4)}><i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i> Order Complete</Button>
                                                                </div>
                                                            </Tab.Pane>

                                                            <Tab.Pane eventKey="4">
                                                                <div className="text-center pt-4 pb-2">

                                                                    <div className="mb-4">
                                                                    <Image
                                                                        src={congrets}
                                                                        style={{ width: "120px", height: "120px" }}
                                                                        alt="">
                                                                    </Image>
                                                                    </div>
                                                                    <h5>Your Order is Completed !</h5>
                                                                    <p className="text-muted">You Will receive an order confirmation email with details of your order.</p>
                                                                </div>
                                                            </Tab.Pane>

                                                        </Tab.Content>
                                                    </div>
                                                </Col>
                                                <Col lg={3}>
                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h5 className="fs-14 text-primary mb-0"><i className="ri-shopping-cart-fill align-middle me-2"></i> Your cart</h5>
                                                        <span className="badge bg-danger rounded-pill">3</span>
                                                    </div>
                                                    <ul className="list-group mb-3">
                                                        <li className="list-group-item d-flex justify-content-between lh-sm">
                                                            <div>
                                                                <h6 className="my-0">Product name</h6>
                                                                <small className="text-muted">Brief description</small>
                                                            </div>
                                                            <span className="text-muted">$12</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between lh-sm">
                                                            <div>
                                                                <h6 className="my-0">Second product</h6>
                                                                <small className="text-muted">Brief description</small>
                                                            </div>
                                                            <span className="text-muted">$8</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between lh-sm">
                                                            <div>
                                                                <h6 className="my-0">Third item</h6>
                                                                <small className="text-muted">Brief description</small>
                                                            </div>
                                                            <span className="text-muted">$5</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between bg-light">
                                                            <div className="text-success">
                                                                <h6 className="my-0">Discount code</h6>
                                                                <small>−$5 Discount</small>
                                                            </div>
                                                            <span className="text-success">−$5</span>
                                                        </li>
                                                        <li className="list-group-item d-flex justify-content-between">
                                                            <span>Total (USD)</span>
                                                            <strong>$20</strong>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default FormsWizard;