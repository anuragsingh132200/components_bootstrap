import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Form, Nav, Row, Tab } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Link from 'next/link';
import SimpleBar from 'simplebar-react';
import Image from 'next/image';
import Head from 'next/head';

// Import Components
// import { SingleButtonDropdownExample, ColorDropdownExample, SplitButtonDropdownExample, SizingDropdownExample, DarkDropdownExample, AlignDropdownExample, OptionDropdownExample, AutoCloseDropdownExample, MenuItemDropdownExample, MenuContentDropdownExample } from './uiDropdownCode';
import SingleButtonDropdownExample from './SingleButtonDropdownExample';
import ColorDropdownExample from './ColorDropdownExample';
import SplitButtonDropdownExample from './SplitButtonDropdownExample';
import SizingDropdownExample from './SizingDropdownExample';
import DarkDropdownExample from './DarkDropdownExample';
import AlignDropdownExample from './AlignDropdownExample';
import OptionDropdownExample from './OptionDropdownExample';
import AutoCloseDropdownExample from './AutoCloseDropdownExample';
import MenuItemDropdownExample from './MenuItemDropdownExample';
import MenuContentDropdownExample from './MenuContentDropdownExample';


// Import Images
import avatar2 from '@assets/images/users/avatar-2.jpg'
import avatar3 from '@assets/images/users/avatar-3.jpg'
import avatar6 from '@assets/images/users/avatar-6.jpg'
import bell from '@assets/images/svg/bell.svg'

const UiDropdown = () => {

    // Default Tabs
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab: any) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };

    // Notification Tabs
    const [NotificationTab, setNotificationTab] = useState("1");
    const toggleNotification = (tab: any) => {
        if (NotificationTab !== tab) {
            setNotificationTab(tab);
        }
    };

    // Notification Tabs
    const [Notification1Tab, setNotification1Tab] = useState("1");
    const toggleNotification1 = (tab: any) => {
        if (Notification1Tab !== tab) {
            setNotification1Tab(tab);
        }
    };

    return (
        <React.Fragment>

            <Head>
                <title>Dropdown | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Dropdowns" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Single Button Dropdown</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>btn</code> class at to create a dropdown
                                        toggle with &lt;button&gt; element.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropdown button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu style={{ margin: 0 }}>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropdown link
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <SingleButtonDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dropdown Color Variant</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-</code> class with below mentioned variation to color dropdown toggle.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary">
                                                primary
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success">
                                                success
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="light">
                                                light
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                secondary
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="warning">
                                                warning
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="danger">
                                                danger
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark">
                                                dark
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <ColorDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Split Button Dropdown</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>dropdown-toggle-split</code> to create split button dropdowns as a single button dropdown. </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="primary">Primary</Button>

                                                <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="success">Success</Button>

                                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="light">Light</Button>

                                                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="info">Info</Button>

                                                <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="secondary">Secondary</Button>

                                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="warning">Warning</Button>

                                                <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="danger">Danger</Button>

                                                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="dark">Dark</Button>

                                                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <SplitButtonDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dropdown Sizing</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-lg</code> class to create a large size dropdown button and <code>btn-sm</code> to create a small size dropdown button.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" size='lg'>
                                                Large button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="light" size='lg'>Large Split Button</Button>

                                                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" size='sm'>
                                                Small Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="light" size='sm'>Small Split Button</Button>

                                                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <SizingDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dark Dropdowns</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>dropdown-menu-dark</code> class onto an existing dropdown-menu to create dropdown items dark.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropdown button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu variant='dark'>
                                                <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <DarkDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Alignment options</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Dropdown demo with various <code>dropdown alignment</code> options.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropdown
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown align='end'>
                                            <Dropdown.Toggle variant="secondary">
                                                Right-aligned menu
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown align='end'>
                                            <Dropdown.Toggle variant="secondary">
                                                Left-aligned, right-aligned lg
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                Right-aligned, left-aligned lg
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown drop='start'>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropstart
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown drop='end'>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropend
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown drop='up'>
                                            <Dropdown.Toggle variant="secondary">
                                                Dropup
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <AlignDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dropdown Options</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>data-bs-offset</code> or
                                        <code>data-bs-reference</code> to change the position of the dropdown.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary">
                                                Offset
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown as={ButtonGroup}>
                                                <Button variant="secondary">Reference</Button>

                                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <OptionDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Auto Close Behavior</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light">
                                                Default dropdown
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown autoClose='inside'>
                                            <Dropdown.Toggle variant="light">
                                                Clickable outside
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown autoClose='outside'>
                                            <Dropdown.Toggle variant="light">
                                                Clickable inside
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown autoClose={false}>
                                            <Dropdown.Toggle variant="light">
                                                Manual close
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <AutoCloseDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dropdown Menu Item Color</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Example of dropdown menu and dropdown item color.</p>
                                    <Row>
                                        <Col xxl={3}>
                                            <div>
                                                <h6 className="font-size-13 mb-3">Dropdown Menu Success link example
                                                </h6>
                                                <div className="clearfix">
                                                    <div className="dropdown-menu d-inline-block position-relative dropdownmenu-success" style={{ zIndex: "1" }}>
                                                        <Link className="dropdown-item" href="#">Action</Link>
                                                        <Link className="dropdown-item" href="#">Another action</Link>
                                                        <Link className="dropdown-item active" href="#">Something else here</Link>
                                                        <div className="dropdown-divider"></div>
                                                        <Link className="dropdown-item" href="#">Separated link</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={9}>
                                            <div className="mt-lg-0 mt-3">
                                                <h6 className="font-size-13 mb-0">Dropdown Menu link Color example</h6>
                                                <div>
                                                    <Row>
                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Primary link</p>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="primary">
                                                                        Primary
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='dropdownmenu-primary'>
                                                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        <Dropdown.Divider />
                                                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>

                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Secondary link</p>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="secondary">
                                                                        Sacondary
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='dropdownmenu-secondary'>
                                                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        <Dropdown.Divider />
                                                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>

                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Success link</p>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success">
                                                                        Success
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='dropdownmenu-success'>
                                                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        <Dropdown.Divider />
                                                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>

                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Warning link</p>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="warning">
                                                                        Warning
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='dropdownmenu-warning'>
                                                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        <Dropdown.Divider />
                                                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>

                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Info link</p>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="info">
                                                                        Info
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='dropdownmenu-info'>
                                                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        <Dropdown.Divider />
                                                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>

                                                        <Col lg={4} sm={6}>
                                                            <div className="mt-3">
                                                                <p className="font-size-13 mb-2">Dropdown menu Danger link</p>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="danger">
                                                                        Danger
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu className='dropdownmenu-danger'>
                                                                        <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        <Dropdown.Divider />
                                                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <MenuItemDropdownExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Menu Content</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Example of dropdown menu containing
                                        <code>Headers, Text and Forms</code> content.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary">
                                                Header
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Header className="noti-title">
                                                    <h5 className="font-size-13 text-muted text-truncate mb-0">Welcome Jessie!</h5>
                                                </Dropdown.Header>
                                                <Dropdown.Item href="#" active>Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success">
                                                Text
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="dropdown-menu-md p-3">
                                                <p>
                                                    Some example text that's free-flowing within the dropdown menu.
                                                </p>
                                                <p className="mb-0">
                                                    And this is more example text.
                                                </p>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="light">
                                                Forms
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="dropdown-menu-md p-4">
                                                <Form>
                                                    <div className="mb-2">
                                                        <Form.Label htmlFor="exampleDropdownFormEmail">Email address</Form.Label>
                                                        <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <Form.Label htmlFor="exampleDropdownFormPassword">Password</Form.Label>
                                                        <Form.Control type="password" className="form-control" id="exampleDropdownFormPassword" placeholder="Password" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" id="rememberdropdownCheck" />
                                                            <Form.Label className="form-check-label" htmlFor="rememberdropdownCheck">Remember me</Form.Label>
                                                        </div>
                                                    </div>
                                                    <Button type="submit" variant="primary">Sign in</Button>
                                                </Form>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <MenuContentDropdownExample />
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

export default UiDropdown;