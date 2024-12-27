import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// Import Componets
// import { DefaultSelect, SelectSize, MenuSize } from './FormSelectCode'
import DefaultSelect from './DefaultSelect';
import SelectSize from './SelectSize';
import MenuSize from './MenuSize';
const FormSelect = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Form Select | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Select" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Default Select</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>&lt;select&gt;</code> attribute with numerous options to show value with choice's option.</p>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Select className="mb-3" aria-label="Default select example">
                                                <option defaultValue="Select your Status">Select your Status </option>
                                                <option value="1">Declined Payment</option>
                                                <option value="2">Delivery Error</option>
                                                <option value="3">Wrong Amount</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Select className="rounded-pill mb-3" aria-label="Default select example">
                                                <option defaultValue="Search for services">Search for services</option>
                                                <option value="1">Information Architecture</option>
                                                <option value="2">UI/UX Design</option>
                                                <option value="3">Back End Development</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Select aria-label="Disabled select example" disabled>
                                                <option defaultValue="Open this select menu (Disabled)">Open this select menu (Disabled)</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <DefaultSelect />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-lg-0">Menu Size</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>multiple</code> attribute to select multiple values and <code>size="your value"</code> attribute to show a number of choice option within a select area. </p>
                                    <Row className="gy-4">
                                        <Col lg={6}>
                                            <Form.Select multiple aria-label="multiple select example">
                                                <option defaultValue="Open this select menu (multiple select option)">Open this select menu (multiple select option)</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Select multiple aria-label="multiple select example">
                                                <option defaultValue="Open this select menu (select menu size)">Open this select menu (select menu size)</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "250px" }}>
                                        <MenuSize />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Select Size</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>form-select-sm</code> class to set small select size and <code>form-select-lg</code> class to form-select class to set large select size. No such class is required for default select size.</p>
                                    <div className="row align-items-center g-3">
                                        <Col lg={4}>
                                            <Form.Select className="form-select-sm" aria-label=".form-select-sm example">
                                                <option defaultValue="Open this select menu">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Select aria-label=".form-select-sm example">
                                                <option defaultValue="Open this select menu">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Select className="form-select-lg" aria-label=".form-select-lg example">
                                                <option defaultValue="Open this select menu">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <SelectSize />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Choices</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <div>
                                            <h5 className="fs-14 mb-3">Single select input Example</h5>
                                            <Row>
                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-single-default" className="text-muted">Default</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices</code> attribute to set a default single select.</p>
                                                        <Form.Select data-choices name="choices-single-default" id="choices-single-default">
                                                            <option defaultValue="">This is a placeholder</option>
                                                            <option value="Choice 1">Choice 1</option>
                                                            <option value="Choice 2">Choice 2</option>
                                                            <option value="Choice 3">Choice 3</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-single-groups" className="text-muted">Option Groups</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices data-choices-groups</code> attribute to set option group</p>
                                                        <Form.Select id="choices-single-groups" data-choices data-choices-groups data-placeholder="Select City" name="choices-single-groups">
                                                            <option defaultValue="">Choose a city</option>
                                                            <optgroup label="UK">
                                                                <option value="London">London</option>
                                                                <option value="Manchester">Manchester</option>
                                                                <option value="Liverpool">Liverpool</option>
                                                            </optgroup>
                                                            <optgroup label="FR">
                                                                <option value="Paris">Paris</option>
                                                                <option value="Lyon">Lyon</option>
                                                                <option value="Marseille">Marseille</option>
                                                            </optgroup>
                                                            <optgroup label="DE" disabled>
                                                                <option value="Hamburg">Hamburg</option>
                                                                <option value="Munich">Munich</option>
                                                                <option value="Berlin">Berlin</option>
                                                            </optgroup>
                                                            <optgroup label="US">
                                                                <option value="New York">New York</option>
                                                                <option value="Washington" disabled>Washington</option>
                                                                <option value="Michigan">Michigan</option>
                                                            </optgroup>
                                                            <optgroup label="SP">
                                                                <option value="Madrid">Madrid</option>
                                                                <option value="Barcelona">Barcelona</option>
                                                                <option value="Malaga">Malaga</option>
                                                            </optgroup>
                                                            <optgroup label="CA">
                                                                <option value="Montreal">Montreal</option>
                                                                <option value="Toronto">Toronto</option>
                                                                <option value="Vancouver">Vancouver</option>
                                                            </optgroup>
                                                        </Form.Select>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-single-no-search" className="text-muted">Options added via config with no search</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices data-choices-search-false </code></p>
                                                        <Form.Select id="choices-single-no-search" name="choices-single-no-search" data-choices data-choices-search-false >
                                                            <option value="Zero">Zero</option>
                                                            <option value="One">One</option>
                                                            <option value="Two">Two</option>
                                                            <option value="Three">Three</option>
                                                            <option value="Four">Four</option>
                                                            <option value="Five">Five</option>
                                                            <option value="Six">Six</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-single-no-sorting" className="text-muted">Options added via config with no sorting</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices data-choices-sorting-false</code> attribute.</p>
                                                        <Form.Select id="choices-single-no-sorting" name="choices-single-no-sorting" data-choices data-choices-sorting-false>
                                                            <option value="Madrid">Madrid</option>
                                                            <option value="Toronto">Toronto</option>
                                                            <option value="Vancouver">Vancouver</option>
                                                            <option value="London">London</option>
                                                            <option value="Manchester">Manchester</option>
                                                            <option value="Liverpool">Liverpool</option>
                                                            <option value="Paris">Paris</option>
                                                            <option value="Malaga">Malaga</option>
                                                            <option value="Washington" disabled>Washington</option>
                                                            <option value="Lyon">Lyon</option>
                                                            <option value="Marseille">Marseille</option>
                                                            <option value="Hamburg">Hamburg</option>
                                                            <option value="Munich">Munich</option>
                                                            <option value="Barcelona">Barcelona</option>
                                                            <option value="Berlin">Berlin</option>
                                                            <option value="Montreal">Montreal</option>
                                                            <option value="New York">New York</option>
                                                            <option value="Michigan">Michigan</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-14 mb-3">Multiple select input</h5>
                                            <Row>
                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-multiple-default" className="form-label text-muted">Default</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices multiple</code> attribute.</p>
                                                        <Form.Select id="choices-multiple-default" data-choices name="choices-multiple-default" multiple>
                                                            <option value="Choice 1">Choice 1</option>
                                                            <option value="Choice 2">Choice 2</option>
                                                            <option value="Choice 3">Choice 3</option>
                                                            <option value="Choice 4" disabled>Choice 4</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-multiple-remove-button" className="text-muted">With remove button</Form.Label>
                                                        <p className="text-muted">Set <code> multiple</code> attribute.</p>
                                                        <Form.Select id="choices-multiple-remove-button" name="choices-multiple-remove-button" multiple>
                                                            <option value="Choice 1">Choice 1</option>
                                                            <option value="Choice 2">Choice 2</option>
                                                            <option value="Choice 3">Choice 3</option>
                                                            <option value="Choice 4">Choice 4</option>
                                                        </Form.Select>
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-multiple-groups" className="text-muted">Option groups</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices data-choices-multiple-groups="true" multiple</code> attribute. </p>
                                                        <Form.Select id="choices-multiple-groups" name="choices-multiple-groups" data-choices data-choices-multiple-groups="true" multiple>
                                                            <option defaultValue="">Choose a city</option>
                                                            <optgroup label="UK">
                                                                <option value="London">London</option>
                                                                <option value="Manchester">Manchester</option>
                                                                <option value="Liverpool">Liverpool</option>
                                                            </optgroup>
                                                            <optgroup label="FR">
                                                                <option value="Paris">Paris</option>
                                                                <option value="Lyon">Lyon</option>
                                                                <option value="Marseille">Marseille</option>
                                                            </optgroup>
                                                            <optgroup label="DE" disabled>
                                                                <option value="Hamburg">Hamburg</option>
                                                                <option value="Munich">Munich</option>
                                                                <option value="Berlin">Berlin</option>
                                                            </optgroup>
                                                            <optgroup label="US">
                                                                <option value="New York">New York</option>
                                                                <option value="Washington" disabled>Washington</option>
                                                                <option value="Michigan">Michigan</option>
                                                            </optgroup>
                                                            <optgroup label="SP">
                                                                <option value="Madrid">Madrid</option>
                                                                <option value="Barcelona">Barcelona</option>
                                                                <option value="Malaga">Malaga</option>
                                                            </optgroup>
                                                            <optgroup label="CA">
                                                                <option value="Montreal">Montreal</option>
                                                                <option value="Toronto">Toronto</option>
                                                                <option value="Vancouver">Vancouver</option>
                                                            </optgroup>
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-14 mb-3">Text inputs</h5>

                                            <Row>
                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-text-remove-button" className="form-label text-muted">Set limit values with remove button</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices data-choices-limit="Required Limit" </code> attribute.</p>
                                                        <Form.Control className="form-control" id="choices-text-remove-button" data-choices data-choices-limit="3" type="text" defaultValue="Task-1" />
                                                    </div>
                                                </Col>

                                                <Col lg={4} md={6}>
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="choices-text-unique-values" className="form-label text-muted">Unique values only, no pasting</Form.Label>
                                                        <p className="text-muted">Set <code>data-choices data-choices-text-unique-true</code> attribute.</p>
                                                        <Form.Control className="form-control" id="choices-text-unique-values" data-choices data-choices-text-unique-true type="text" defaultValue="Project-A, Project-B" />
                                                    </div>
                                                </Col>
                                            </Row>

                                            <div>
                                                <Form.Label htmlFor="choices-text-disabled" className="form-label text-muted">Disabled</Form.Label>
                                                <p className="text-muted">Set <code>data-choices data-choices-text-disabled-true</code> attribute.</p>
                                                <Form.Control className="form-control" id="choices-text-disabled" data-choices data-choices-text-disabled-true type="text" defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default FormSelect;