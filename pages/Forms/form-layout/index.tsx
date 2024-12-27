import React from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Flatpickr from "react-flatpickr";
import Head from 'next/head';

// Import Components
// import { FormGrid, Gutters, VerticalForm, HorizontalFormLabelSizing, ColumnSizing, AutoSizing, InlineForms, FloatingLabels, HorizontalForm } from './FormLayoutCode'
import FormGrid from './FormGrid';
import Gutters from './Gutters';
import VerticalForm from './VerticalForm';
import HorizontalFormLabelSizing from './HorizontalFormLabelSizing';
import HorizontalForm from './HorizontalForm';
import ColumnSizing from './ColumnSizing';
import AutoSizing from './AutoSizing';
import InlineForms from './InlineForms';
import FloatingLabels from './FloatingLabels';

const FormLayout = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Form Layout | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Layout" />

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Form Grid</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. <span className="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p>

                                    <form action="#">
                                        <Row>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="firstNameinput">First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your firstname" id="firstNameinput" />
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="lastNameinput">Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your lastname" id="lastNameinput" />
                                                </div>
                                            </Col>

                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="compnayNameinput">Company Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter company name" id="compnayNameinput" />
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="phonenumberInput">Phone Number</Form.Label>
                                                    <Form.Control type="tel" placeholder="+(245) 451 45123" id="phonenumberInput" />
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="emailidInput">Email Address</Form.Label>
                                                    <Form.Control type="email" placeholder="example@gamil.com" id="emailidInput" />
                                                </div>
                                            </Col>

                                            <Col md={12}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="address1ControlTextarea">Address</Form.Label>
                                                    <Form.Control type="text" placeholder="Address 1" id="address1ControlTextarea" />
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="citynameInput">City</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter your city" id="citynameInput" />
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="ForminputState">State</Form.Label>
                                                    <Form.Select id="ForminputState" data-choices data-choices-sorting="true">
                                                        <option defaultValue="">Choose...</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>

                                            <Col lg={12}>
                                                <div className="text-end">
                                                    <Button variant="primary">Submit</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "375px" }}>
                                        <FormGrid />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gutters</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">By adding <a href="#" className="text-decoration-underline">gutter modifier classes</a>, you can have control over the gutter width in as well the inline as block direction. <span className="fw-medium">Also requires the <code>$enable-grid-classes</code> Sass variable to be enabled</span> (on by default).</p>

                                    <Form action="#" className="row g-3">
                                        <Col md={12}>
                                            <Form.Label htmlFor="fullnameInput">Name</Form.Label>
                                            <Form.Control type="text" id="fullnameInput" placeholder="Enter your name" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label htmlFor="inputEmail4">Email</Form.Label>
                                            <Form.Control type="email" id="inputEmail4" placeholder="Email" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label htmlFor="inputPassword4">Password</Form.Label>
                                            <Form.Control type="password" id="inputPassword4" placeholder="Password" />
                                        </Col>
                                        <Col className="col-12">
                                            <Form.Label htmlFor="inputAddress">Address</Form.Label>
                                            <Form.Control type="text" id="inputAddress" placeholder="1234 Main St" />
                                        </Col>
                                        <Col className="col-12">
                                            <Form.Label htmlFor="inputAddress2">Address 2</Form.Label>
                                            <Form.Control type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label htmlFor="inputCity">City</Form.Label>
                                            <Form.Control type="text" id="inputCity" placeholder="Enter your city" />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Label htmlFor="inputState">State</Form.Label>
                                            <Form.Select id="inputState" data-choices data-choices-sorting="true">
                                                <option defaultValue="">Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label htmlFor="inputZip">Zip</Form.Label>
                                            <Form.Control type="text" id="inputZip" placeholder="Zin code" />
                                        </Col>
                                        <Col className="col-12">
                                            <div className="form-check">
                                                <Form.Check type="checkbox" id="gridCheck" />
                                                <Form.Label className="form-check-label" htmlFor="gridCheck">
                                                    Check me out
                                                </Form.Label>
                                            </div>
                                        </Col>
                                        <Col className="col-12">
                                            <div className="text-end">
                                                <Button type="button" variant="primary">Sign in</Button>
                                            </div>
                                        </Col>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "338px" }}>
                                        <Gutters />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical Form</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Example of vertical form using <code>form-control</code> class. No need to specify row and col class to create vertical form.</p>

                                    <Form action="#">
                                        <div className="mb-3">
                                            <Form.Label htmlFor="employeeName">Employee Name</Form.Label>
                                            <Form.Control type="text" id="employeeName" placeholder="Enter emploree name" />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="employeeUrl">Employee Department URL</Form.Label>
                                            <Form.Control type="url" id="employeeUrl" placeholder="Enter emploree url" />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="StartleaveDate">Start Leave Date</Form.Label>
                                            <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="EndleaveDate">End Leave Date</Form.Label>
                                            <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="VertimeassageInput">Message</Form.Label>
                                            <textarea className="form-control" id="VertimeassageInput" rows={3} placeholder="Enter your message"></textarea>
                                        </div>
                                        <div className="text-end">
                                            <Button variant="primary">Add Leave</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "375px" }}>
                                        <VerticalForm />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal Form</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Create horizontal forms with the grid by adding the <code>row</code> class to form groups and using the <code>col-*-*</code> class to specify the width of your labels and controls. Be sure to add <code>col-form-label</code> class to your <code>&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.</p>

                                    <Form action="#">
                                        <Row className="mb-3">
                                            <Col lg={3}>
                                                <Form.Label htmlFor="nameInput" >Name</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <Form.Control type="text" id="nameInput" placeholder="Enter your name" />
                                            </Col>
                                        </Row>
                                        <Row mb={3}>
                                            <Col lg={3}>
                                                <Form.Label htmlFor="websiteUrl">Website URL</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <Form.Control type="url" id="websiteUrl" placeholder="Enter your url" />
                                            </Col>
                                        </Row>
                                        <Row mb={3}>
                                            <Col lg={3}>
                                                <Form.Label htmlFor="dateInput">Date</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <Flatpickr className="form-control" options={{ dateFormat: "d M, Y" }}/>
                                            </Col>
                                        </Row>
                                        <Row mb={3}>
                                            <Col lg={3}>
                                                <Form.Label htmlFor="timeInput">Time</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <Form.Control type="time" data-provider="timepickr" data-time-basic="true" id="timeInput" />
                                            </Col>
                                        </Row>
                                        <Row mb={3}>
                                            <Col lg={3}>
                                                <Form.Label htmlFor="leaveemails">Email Id</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <Form.Control type="email" id="leaveemails" placeholder="Enter your email" />
                                            </Col>
                                        </Row>
                                        <Row mb={3}>
                                            <Col lg={3}>
                                                <Form.Label htmlFor="contactNumber">Contact Number</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <Form.Control type="number" id="contactNumber" placeholder="+91 9876543210" />
                                            </Col>
                                        </Row>
                                        <Row mb={3}>
                                            <Col lg={3}>
                                                <Form.Label htmlFor="meassageInput">Message</Form.Label>
                                            </Col>
                                            <Col lg={9}>
                                                <textarea className="form-control" id="meassageInput" rows={3} placeholder="Enter your message"></textarea>
                                            </Col>
                                        </Row>
                                        <div className="text-end">
                                            <Button type="button" variant="primary">Add Leave</Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "360px" }}>
<HorizontalForm />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal Form Label Sizing</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>col-form-label-sm</code> class to set small size form label or <code>col-form-label-lg</code> class to set large size form label to &lt;label&gt;. No such class is required for the default size form label.</p>

                                    <Row className="align-items-center g-3">
                                        <Col xxl={4}>
                                            <Row>
                                                <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                                <Col sm={10}>
                                                    <Form.Control type="email" id="colFormLabelSm" placeholder="col-form-label-sm" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xxl={4}>
                                            <Row>
                                                <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                                                <Col sm={10}>
                                                    <Form.Control type="email" id="colFormLabel" placeholder="col-form-label" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xxl={4}>
                                            <Row>
                                                <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                                <Col sm={10}>
                                                    <Form.Control type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <HorizontalFormLabelSizing />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column Sizing</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>col-sm-</code> class with required size value to set column size as per your requirement.</p>

                                    <Row className="g-3">
                                        <Col sm={6}>
                                            <Form.Control type="text" placeholder="Firstname" aria-label="First-Name" />
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Control type="text" placeholder="Lastname" aria-label="Last-Name" />
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Control type="text" placeholder="Email id" aria-label="Email Id" />
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Control type="password" placeholder="Password" aria-label="Password" />
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Control type="password" placeholder="Confirm Password" aria-label="confirm-password" />
                                        </Col>
                                        <Col sm={7}>
                                            <Form.Control type="text" placeholder="City" aria-label="City" />
                                        </Col>
                                        <div className="col-sm">
                                            <Form.Control type="text" placeholder="State" aria-label="State" />
                                        </div>
                                        <div className="col-sm">
                                            <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
                                        </div>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <ColumnSizing />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Auto Sizing</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Change <code>col</code> class to <code>col-auto</code> class so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.</p>

                                    <Form action="#">
                                        <Row className="gy-2 gx-3 mb-3 align-items-center">
                                            <div className="col-sm-auto">
                                                <Form.Label className="visually-hidden" htmlFor="autoSizingInput">Name</Form.Label>
                                                <Form.Control type="text" id="autoSizingInput" placeholder="Jane Doe" />
                                            </div>
                                            <div className="col-sm-auto">
                                                <Form.Label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</Form.Label>
                                                <div className="input-group">
                                                    <div className="input-group-text">@</div>
                                                    <Form.Control type="text" id="autoSizingInputGroup" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <Form.Label className="visually-hidden" htmlFor="autoSizingSelect">Preference</Form.Label>
                                                <Form.Select data-choices data-choices-sorting="true" id="autoSizingSelect">
                                                    <option defaultValue="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </div>
                                            <div className="col-sm-auto">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" id="autoSizingCheck" />
                                                    <Form.Label htmlFor="autoSizingCheck">
                                                        Remember me
                                                    </Form.Label>
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <Button type="button" variant="primary">Submit</Button>
                                            </div>
                                        </Row>
                                    </Form>

                                    <Form action="#">
                                        <Row className="gx-3 gy-2 align-items-center">
                                            <Col sm={3}>
                                                <Form.Label className="visually-hidden" htmlFor="specificSizeInputName">Name</Form.Label>
                                                <Form.Control type="text" id="specificSizeInputName" placeholder="Jane Doe" />
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</Form.Label>
                                                <div className="input-group">
                                                    <div className="input-group-text">@</div>
                                                    <Form.Control type="text" id="specificSizeInputGroupUsername" placeholder="Username" />
                                                </div>
                                            </Col>
                                            <Col sm={3}>
                                                <Form.Label className="visually-hidden" htmlFor="specificSizeSelect">Preference</Form.Label>
                                                <Form.Select data-choices data-choices-sorting="true" id="specificSizeSelect">
                                                    <option defaultValue="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                            <div className="col-auto">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" id="autoSizingCheck2" />
                                                    <Form.Label htmlFor="autoSizingCheck2">
                                                        Remember me
                                                    </Form.Label>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <Button type="button" variant="primary">Submit</Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <AutoSizing />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Inline Forms</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>row-cols-*</code> class to set form inline.</p>
                                    <Form action="#">
                                        <Row className="row-cols-lg-auto g-3 align-items-center">
                                            <Col className="col-12">
                                                <Form.Label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</Form.Label>
                                                <InputGroup>
                                                    <div className="input-group-text">@</div>
                                                    <Form.Control type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
                                                </InputGroup>
                                            </Col>
                                            <Col className="col-12">
                                                <Form.Label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</Form.Label>
                                                <Form.Select data-choices data-choices-sorting="true" id="inlineFormSelectPref">
                                                    <option defaultValue="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                            <Col className="col-12">
                                                <div className="form-check">
                                                    <Form.Check type="checkbox" id="inlineFormCheck" />
                                                    <Form.Label htmlFor="inlineFormCheck">
                                                        Remember me
                                                    </Form.Label>
                                                </div>
                                            </Col>
                                            <div className="col-12">
                                                <Button type="button" variant="primary">Submit</Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <InlineForms />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Floating Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>form-floating</code> class to enable floating labels with Bootstrap’s textual form fields.</p>

                                    <Form action="#">
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <div className="form-floating">
                                                    <Form.Control type="text" id="firstnamefloatingInput" placeholder="Enter your firstname" />
                                                    <Form.Label htmlFor="firstnamefloatingInput">First Name</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="form-floating">
                                                    <Form.Control type="text" id="lastnamefloatingInput" placeholder="Enter your Lastname" />
                                                    <Form.Label htmlFor="lastnamefloatingInput">Last Name</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="form-floating">
                                                    <Form.Control type="email" id="emailfloatingInput" placeholder="Enter your email" />
                                                    <Form.Label htmlFor="emailfloatingInput">Email Address</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="form-floating">
                                                    <Form.Control type="password" id="passwordfloatingInput" placeholder="Enter your password" />
                                                    <Form.Label htmlFor="passwordfloatingInput">Password</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="form-floating">
                                                    <Form.Control type="password" id="passwordfloatingInput1" placeholder="Confirm password" />
                                                    <Form.Label htmlFor="passwordfloatingInput1">Confirm Password</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="form-floating">
                                                    <Form.Control type="text" id="cityfloatingInput" placeholder="Enter your city" />
                                                    <Form.Label htmlFor="cityfloatingInput">City</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="form-floating">
                                                    <Form.Select id="floatingSelect" aria-label="Floating label select example">
                                                        <option defaultValue="">Choose...</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">Brazil</option>
                                                        <option value="3">France</option>
                                                        <option value="4">Germany</option>
                                                    </Form.Select>
                                                    <Form.Label htmlFor="floatingSelect">Country</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={4}>
                                                <div className="form-floating">
                                                    <Form.Control type="number" id="zipfloatingInput" placeholder="Enter your zipcode" />
                                                    <Form.Label htmlFor="zipfloatingInput">Zipcode</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={1}>
                                                <div className="text-end">
                                                    <Button type="button" variant="primary">Submit</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <FloatingLabels />
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

export default FormLayout;