import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// Import Componenets
// import { BrowserDefaults, CustomStyles, TooltipsStyles, SupportedElements } from './FormsValidationCode'
import BrowserDefaults from './BrowserDefaults';
import CustomStyles from './CustomStyles';
import TooltipsStyles from './TooltipsStyles';
import SupportedElements from './SupportedElements';
import * as Yup from "yup";
import { useFormik } from 'formik';

const FormsValidation = () => {

    // Form validation
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: "",
            lastname: "",
            city: "",
            state: "",
            zip: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please Enter Your First Name"),
            lastname: Yup.string().required("Please Enter Your Last Name"),
            city: Yup.string().required("Please Enter Your City"),
            state: Yup.string().required("Please Enter Your State"),
            zip: Yup.string().required("Please Enter Your Zip"),
        }),
        onSubmit: (values) => {
            
        },
    });

    const [validated, setValidated] = useState<boolean>(false);
    const [TooltipsValidated, setTooltipsValidated] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleTooltipsSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setTooltipsValidated(true);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Forms Validation | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Forms Validation" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Browser defaults</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.</p>

                                    <Form className="row g-3">
                                        <Col md={4}>
                                            <Form.Label htmlFor="validationDefault01">First name</Form.Label>
                                            <Form.Control type="text" id="validationDefault01" defaultValue="Mark" required />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Label htmlFor="validationDefault02">Last name</Form.Label>
                                            <Form.Control type="text" id="validationDefault02" defaultValue="Otto" required />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Label htmlFor="validationDefaultUsername">Username</Form.Label>
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                <Form.Control type="text" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label htmlFor="validationDefault03">City</Form.Label>
                                            <Form.Control type="text" id="validationDefault03" required />
                                        </Col>
                                        <Col md={3}>
                                            <Form.Label htmlFor="validationDefault04">State</Form.Label>
                                            <select className="form-select" id="validationDefault04" required >
                                                <option disabled defaultValue="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </Col>
                                        <Col md={3}>
                                            <Form.Label htmlFor="validationDefault05">Zip</Form.Label>
                                            <Form.Control type="text" id="validationDefault05" required />
                                        </Col>
                                        <Col className="col-12">
                                            <div className="form-check">
                                                <Form.Check type="checkbox" defaultValue="" id="invalidCheck2" required />
                                                <Form.Label className="form-check-label" htmlFor="invalidCheck2">
                                                    Agree to terms and conditions
                                                </Form.Label>
                                            </div>
                                        </Col>
                                        <Col className="col-12">
                                            <Button variant='primary' type="submit">Submit form</Button>
                                        </Col>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "352px" }}>
                                        <BrowserDefaults />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Styles</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">For custom Bootstrap form validation messages, you’ll need to add the <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the <code>:invalid</code> and <code>:valid</code> styles applied to your form controls.</p>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                    defaultValue="Mark"
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                    defaultValue="Otto"
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                <Form.Label>Username</Form.Label>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Username"
                                                        aria-describedby="inputGroupPrepend"
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please choose a username.
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="City" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid city.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control type="text" placeholder="State" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid state.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control type="text" placeholder="Zip" required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a valid zip.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                required
                                                label="Agree to terms and conditions"
                                                feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </Form.Group>
                                        <Button type="submit">Submit form</Button>
                                    </Form>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <CustomStyles />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Supported Elements</h4>
                                </div>

                                <div className="card-body">
                                    <p className="text-muted">Block-level or inline-level form text can be created using <code>.form-text</code>.</p>

                                    <Form className="was-validated">
                                        <div className="mb-3">
                                            <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                                            <Form.Control as="textarea" type="text-area" className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a message in the textarea.
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className="form-check mb-3">
                                            <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                                            <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
                                            <Form.Control.Feedback type="invalid">Example invalid feedback text</Form.Control.Feedback>
                                        </div>

                                        <div className="form-check">
                                            <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                                            <label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
                                        </div>
                                        <div className="form-check mb-3">
                                            <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                                            <label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
                                            <Form.Control.Feedback type="invalid">More example invalid feedback text</Form.Control.Feedback>
                                        </div>

                                        <div className="mb-3">
                                            <select className="form-select" required aria-label="select example">
                                                <option defaultValue="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <Form.Control.Feedback type="invalid">Example invalid select feedback</Form.Control.Feedback>
                                        </div>

                                        <div className="mb-3">
                                            <input type="file" className="form-control" aria-label="file example" required />
                                            <Form.Control.Feedback type="invalid">Example invalid form file feedback</Form.Control.Feedback>
                                        </div>

                                        <div className="mb-0">
                                            <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <div className="card-body">
                                    <pre className="language-markup" style={{ height: "352px" }}>
                                        <SupportedElements />
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Tooltips</h4>
                                </div>

                                <div className="card-body">
                                    <p className="text-muted">If your form layout allows it, you can swap the <code>.valid | invalid-feedback</code> classes for <code>.valid | invalid-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.</p>

                                    <Form noValidate validated={TooltipsValidated} onSubmit={handleTooltipsSubmit}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="First name"
                                                    defaultValue="Mark"
                                                />
                                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Last name"
                                                    defaultValue="Otto"
                                                />
                                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                <Form.Label>Username</Form.Label>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Username"
                                                        aria-describedby="inputGroupPrepend"
                                                        required
                                                    />
                                                    <Form.Control.Feedback tooltip type="invalid">
                                                        Please choose a username.
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="City" required />
                                                <Form.Control.Feedback tooltip type="invalid">
                                                    Please provide a valid city.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control type="text" placeholder="State" required />
                                                <Form.Control.Feedback tooltip type="invalid">
                                                    Please provide a valid state.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control type="text" placeholder="Zip" required />
                                                <Form.Control.Feedback tooltip type="invalid">
                                                    Please provide a valid zip.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                required
                                                label="Agree to terms and conditions"
                                                feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </Form.Group>
                                        <Button type="submit">Submit form</Button>
                                    </Form>
                                </div>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <div className="card-body">
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <TooltipsStyles />
                                    </pre>
                                </div>
                            </div>
                        </div>



                    </div>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default FormsValidation;