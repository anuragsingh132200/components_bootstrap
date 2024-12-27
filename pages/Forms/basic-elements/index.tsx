import React from 'react';
import { Button, Card, Col, Container, Dropdown, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// import { InputExample, InputSizing, FileInput, InputGroupExample, InputGroupSizing, ButtonsCheckboxesRadiosGroup, MultipleInputs, ButtonsWithDropdowns, CustomForms } from './BasicElementsCode'
import InputExample from './InputExample';
import InputSizing from './InputSizing';
import FileInput from './FileInput';
import InputGroupExample from './InputGroupExample';
import InputGroupSizing from './InputGroupSizing';
import ButtonsCheckboxesRadiosGroup from './ButtonCheckboxesRadiosGroup';
import MultipleInputs from './MultipleInputs';
import ButtonsWithDropdowns from './ButtonsWithDropdowns';
import CustomForms from './CustomForms';
const uiBasicElements = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Basic Elements | Hybrix - Admin & Dashboard Template</title>
                    </Head>
                    
                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Basic Elements" />

                    <Row>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Input Example</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="gy-4">
                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Basic Input</Form.Label>
                                                <Form.Control type="password" id="basiInput" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input with Label</Form.Label>
                                                <Form.Control type="password" id="labelInput" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input with Placeholder</Form.Label>
                                                <Form.Control type="password" id="placeholderInput" placeholder="Placeholder" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input with Value</Form.Label>
                                                <Form.Control type="text" id="valueInput" defaultValue="Input value" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Readonly Plain Text Input</Form.Label>
                                                <Form.Control type="text" className="form-control-plaintext" id="readonlyPlaintext" defaultValue="Readonly input" readOnly />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Readonly Input</Form.Label>
                                                <Form.Control type="text" id="readonlyInput" defaultValue="Readonly input" readOnly />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Disabled Input</Form.Label>
                                                <Form.Control type="text" id="disabledInput" defaultValue="Disabled input" disabled />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input with Icon</Form.Label>
                                                <div className="form-icon">
                                                    <Form.Control type="email" className="form-control form-control-icon" id="iconInput" placeholder="example@gmail.com" />
                                                    <i className="ri-mail-unread-line"></i>
                                                </div>
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input with Icon Right</Form.Label>
                                                <div className="form-icon right">
                                                    <Form.Control type="email" className="form-control form-control-icon" id="iconrightInput" placeholder="example@gmail.com" />
                                                    <i className="ri-mail-unread-line"></i>
                                                </div>
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input Date</Form.Label>
                                                <Form.Control type="date" id="exampleInputdate" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input Time</Form.Label>
                                                <Form.Control type="time" id="exampleInputtime" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input Password</Form.Label>
                                                <Form.Control type="password" id="exampleInputpassword" defaultValue="44512465" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Example Textarea</Form.Label>
                                                <textarea className="form-control" id="exampleFormControlTextarea5" rows={3}></textarea>
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Form Text</Form.Label>
                                                <Form.Control type="password" id="formtextInput" />
                                                <div id="passwordHelpBlock" className="form-text">
                                                    Must be 8-20 characters long.
                                                </div>
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Color Picker</Form.Label>
                                                <Form.Control type="color" className="form-control form-control-color w-100" id="colorPicker" defaultValue="#364574" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Input Border Style</Form.Label>
                                                <Form.Control type="text" className="form-control border-dashed" id="borderInput" placeholder="Enter your name" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Label>Datalist example</Form.Label>
                                            <Form.Select id="datalistOptions" placeholder="Search your country...">
                                                <option value="1">Switzerland</option>
                                                <option value="2">New York</option>
                                                <option value="3">France</option>
                                                <option value="4">Spain</option>
                                                <option value="5">Chicago</option>
                                                <option value="6">Bulgaria</option>
                                                <option value="7">Hong Kong</option>
                                            </Form.Select>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group>
                                                <Form.Label>Rounded Input</Form.Label>
                                                <Form.Control type="text" className="rounded-pill" id="exampleInputrounded" placeholder="Enter your name" />
                                            </Form.Group>
                                        </Col>

                                        <Col xxl={3} md={6}>
                                            <Form.Group className="form-floating">
                                                <Form.Control placeholder="Enter your firstname" />
                                                <Form.Label htmlFor="firstnamefloatingInput">Floating Input</Form.Label>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "450px" }}>
                                        <InputExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Input Sizing</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>form-control-lg</code> class to set large size input and Use <code>form-control-sm</code> class to set small size input. No class is needed for default size input.</p>
                                    <div className="row align-items-center g-3">
                                        <Col lg={4}>
                                            <Form.Control className="form-control-sm" type="text" placeholder=".form-control-sm" />
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Control type="text" placeholder=".form-control" />
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Control className="form-control-lg" type="text" placeholder=".form-control-lg" />
                                        </Col>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <InputSizing />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">File Input</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="align-items-center g-3">
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Default File Input Example</Form.Label>
                                                <p className="text-muted">Use <code>input</code> attribute with <code>type="file"</code> tag for default file input</p>
                                                <Form.Control type="file" id="formFile" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Multiple Files Input Example</Form.Label>
                                                <p className="text-muted">Use <code>multiple</code> attribute within the input attribute to select multiple files.</p>
                                                <Form.Control type="file" id="formFileMultiple" multiple />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Disabled File Input Example</Form.Label>
                                                <p className="text-muted">Use <code>disabled</code> attribute within the input attribute to disable the file input.</p>
                                                <Form.Control type="file" id="formFileDisabled" disabled />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4 align-items-center g-3">
                                        <h5 className="fs-14">File Input Sizing</h5>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Small Size File Input Example</Form.Label>
                                                <p className="text-muted">Use <code>form-control-sm</code> class within the form-control class to set a small size file input.</p>
                                                <Form.Control className="form-control-sm" id="formSizeSmall" type="file" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Default Size File Input Example</Form.Label>
                                                <p className="text-muted">Use <code>form-control </code>class and <code>type="file"</code> attribute within the input attribute to set a default size file input.</p>
                                                <Form.Control id="formSizeDefault" type="file" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Large Size File Input Example</Form.Label>
                                                <p className="text-muted">Use <code>form-control-lg</code> class within the form-control class to set a large size file input.</p>

                                                <Form.Control className="form-control-lg" id="formSizeLarge" type="file" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <FileInput />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Input Group</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <h5 className="fs-15">Basic example</h5>
                                        <p className="text-muted">Use <code>input-group</code> class to div element which contains input attribute to wrap a default input in the group.</p>
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <span className="input-group-text" id="basic-addon1">@</span>
                                                    <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Control type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <span className="input-group-text">$</span>
                                                    <Form.Control type="text" aria-label="Amount (to the nearest dollar)" />
                                                    <span className="input-group-text">.00</span>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Control type="text" placeholder="Username" aria-label="Username" />
                                                    <span className="input-group-text">@</span>
                                                    <Form.Control type="text" placeholder="Server" aria-label="Server" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <span className="input-group-text">With textarea</span>
                                                    <textarea className="form-control" aria-label="With textarea" rows={2}></textarea>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Label htmlFor="basic-url" className="form-label">Your vanity URL</Form.Label>
                                                <InputGroup>
                                                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                                    <Form.Control type="text" id="basic-url" aria-describedby="basic-addon3" />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="fs-15">Wrapping</h5>
                                        <p className="text-muted">Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with <code>flex-nowrap</code> class.</p>
                                        <div className="input-group flex-nowrap">
                                            <span className="input-group-text" id="addon-wrapping">@</span>
                                            <Form.Control type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <InputGroupExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Input Group Sizing</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>input-group-sm</code> class to set a small size input group and <code>input-group-lg</code> class to input-group class to set a large size input group respectively. no such class is required for a default size input group.</p>
                                    <Row className="align-items-center g-3">
                                        <Col lg={4}>
                                            <InputGroup className="input-group-sm">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                                                <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                            </InputGroup>
                                        </Col>
                                        <Col lg={4}>
                                            <InputGroup>
                                                <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                                                <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                            </InputGroup>
                                        </Col>
                                        <Col lg={4}>
                                            <InputGroup className="input-group-lg">
                                                <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                                                <Form.Control type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <InputGroupSizing />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multiple Inputs</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">While multiple <code>&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single <code>&lt;input&gt;</code>.</p>
                                    <div>
                                        <InputGroup className="mb-3">
                                            <span className="input-group-text">First and last name</span>
                                            <Form.Control type="text" aria-label="First name" />
                                            <Form.Control type="text" aria-label="Last name" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <span className="input-group-text">$</span>
                                            <span className="input-group-text">0.00</span>
                                            <Form.Control type="text" aria-label="Dollar amount (with dot and two decimal places)" />
                                        </InputGroup>

                                        <InputGroup>
                                            <Form.Control type="text" aria-label="Dollar amount (with dot and two decimal places)" />
                                            <span className="input-group-text">$</span>
                                            <span className="input-group-text">0.00</span>
                                        </InputGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <MultipleInputs />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons, Checkboxs and Radios Group</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <p className="text-muted">Use any checkbox, radio, or button option within an input group’s addon instead of text. We recommend adding <code>mt-0</code> class to the <code>form-check-input</code> when there’s no visible text next to the input.</p>
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <div className="input-group-text">
                                                        <Form.Check className="mt-0" type="checkbox" defaultValue="" aria-label="Checkbox for following text input" />
                                                    </div>
                                                    <Form.Control type='checkbox' aria-label="Text input with checkbox" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <div className="input-group-text">
                                                        <Form.Check className="mt-0" type="radio" defaultValue="" aria-label="Radio button for following text input" />
                                                    </div>
                                                    <Form.Control type="radio" aria-label="Text input with radio button" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Button variant="outline-primary" id="button-addon1">Button</Button>
                                                    <Form.Control type="text" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Control type="text" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <Button variant="outline-success" id="button-addon2">Button</Button>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Button variant="primary">Button</Button>
                                                    <Button variant="success">Button</Button>
                                                    <Form.Control type="text" placeholder="" aria-label="Example text with two button addons" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Control type="text" aria-label="Recipient's username with two button addons" />
                                                    <Button variant="primary">Button</Button>
                                                    <Button variant="success">Button</Button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <ButtonsCheckboxesRadiosGroup />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons with dropdowns</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <p className="text-muted">You can use a button with the dropdown toggle to set the file input group.</p>
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="primary">
                                                            Dropdown
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <FormControl type="text" aria-label="Text input with dropdown button" />
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success">
                                                            Dropdown
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={12}>
                                                <InputGroup>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="outline-secondary">
                                                            Dropdown
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="outline-secondary">
                                                            Dropdown
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                            <Dropdown.Divider />
                                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <ButtonsWithDropdowns />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Forms</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</p>
                                    <div>
                                        <h5 className="fs-15 mb-3">Select</h5>
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Label className="input-group-text" htmlFor="inputGroupSelect01">Options</Form.Label>
                                                    <Form.Select id="inputGroupSelect01">
                                                        <option defaultValue="Choose...">Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Select id="inputGroupSelect02">
                                                        <option defaultValue="Choose...">Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                    <Form.Label className="input-group-text" htmlFor="inputGroupSelect02">Options</Form.Label>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <button className="btn btn-outline-primary" type="button">Button</button>
                                                    <Form.Select id="inputGroupSelect03" aria-label="Example select with button addon">
                                                        <option defaultValue="Choose...">Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </InputGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <InputGroup>
                                                    <Form.Select id="inputGroupSelect04" aria-label="Example select with button addon">
                                                        <option defaultValue="Choose...">Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                    <button className="btn btn-outline-secondary" type="button">Button</button>
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="fs-15 mb-3">File Input</h5>
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <div className="input-group">
                                                    <Form.Label className="input-group-text" htmlFor="inputGroupFile01">Upload</Form.Label>
                                                    <Form.Control type="file" id="inputGroupFile01" />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="input-group">
                                                    <Form.Control type="file" id="inputGroupFile02" />
                                                    <Form.Label className="input-group-text" htmlFor="inputGroupFile02">Upload</Form.Label>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="input-group">
                                                    <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">Button</button>
                                                    <Form.Control type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="input-group">
                                                    <Form.Control type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                                    <button className="btn btn-outline-success" type="button" id="inputGroupFileAddon04">Button</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "275px" }}>
                                        <CustomForms />
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

export default uiBasicElements;