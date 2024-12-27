import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';

// Import Images
import avatar1 from '@assets/images/users/avatar-1.jpg'
import avatar2 from '@assets/images/users/avatar-2.jpg'
import avatar3 from '@assets/images/users/avatar-3.jpg'
import avatar4 from '@assets/images/users/avatar-4.jpg'

// Import Components
// import { ListBadgeExample, CustomListExample, ListNumberedExample, ListIconExample, CustomContentExample, ColoredListExample, ContextualLinkExample, DefaultListExample, ActiveItemExample, DisabledItemExample, ListlinkExample, ListButtonExample, FlushListExample, HorizontalListExample, ContextualClassExample, ListCheckboxsExample, ListRadiosExample } from './uiListsCode'
import ListBadgeExample from './ListBadgeExample'
import CustomListExample from './CustomListExample';
import ListNumberedExample from './ListNumberedExample';
import ListIconExample from './ListIconExample';
import CustomContentExample from './CustomContentExample';
import ColoredListExample from './ColoredListExample';
import ContextualLinkExample from './ContextualLinkExample';
import DefaultListExample from './DefaultListExample';
import ActiveItemExample from './ActiveItemExample';
import DisabledItemExample from './DisabledItemExample';
import ListlinkExample from './ListlinkExample';
import ListButtonExample from './ListButtonExample';
import FlushListExample from './FlushListExample';
import HorizontalListExample from './HorizontalListExample';
import ContextualClassExample from './ContextualClassExample';
import ListCheckboxsExample from './ListCheckboxExample';
import ListRadiosExample from './ListRadiosExample';

import SimpleBar from 'simplebar-react';

const uiLists = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Lists | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Lists" />

                    <Row>
                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default List</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>list-group</code> class in an unordered list and <code>list-group-item</code> class to create a default list group.</p>
                                    <div>
                                        <ListGroup as='ul'>
                                            <ListGroup.Item><i className="ri-bill-line align-middle me-2"></i> Send the billing agreement</ListGroup.Item>
                                            <ListGroup.Item><i className="ri-file-copy-2-line align-middle me-2"></i>Send over all the documentation.</ListGroup.Item>
                                            <ListGroup.Item><i className="ri-question-answer-line align-middle me-2"></i>Meeting with daron to review the intake form</ListGroup.Item>
                                            <ListGroup.Item><i className="ri-secure-payment-line align-middle me-2"></i>Check uikings theme and give customer support</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <DefaultListExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Active Item</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>active</code> class to <code>list-group-item</code> to indicate the current active selection.</p>
                                    <div>
                                        <ListGroup as='ul'>
                                            <ListGroup.Item as='li' active>Send the billing agreement</ListGroup.Item>
                                            <ListGroup.Item as='li'>Send over all the documentation.</ListGroup.Item>
                                            <ListGroup.Item as='li'>Meeting with daron to review the intake form</ListGroup.Item>
                                            <ListGroup.Item as='li'>Check uikings theme and give customer support</ListGroup.Item>
                                            <ListGroup.Item as='li'>Start making a presentation</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height:"110px"}}>
                                        <ActiveItemExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Disabled Items</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>disabled</code> class to <code>list-group-item</code> to make it <em>appear</em> disabled.</p>
                                    <ListGroup as='ul'>
                                        <ListGroup.Item disabled aria-disabled="true">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar1} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    James Ballard
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar2} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    Nancy Martino
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    Henry Baird
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    Erica Kernan
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height:"105px"}}>
                                        <DisabledItemExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Link</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>&lt;a&gt;</code> tag to create actionable list group items with hover, disabled, and active states by adding list-group-item-action.</p>
                                    <ListGroup className="list-group-fill-success">
                                        <ListGroup.Item as='a' className="list-group-item-action active"><i className="ri-download-2-fill align-middle me-2"></i>Category Download</ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action"><i className="ri-shield-check-line align-middle me-2"></i>Security Access</ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action"><i className="ri-database-2-line align-middle me-2"></i>Storage folder</ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action"><i className="ri-notification-3-line align-middle me-2"></i>Push Notification</ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action disabled" tabIndex={-1}><i className="ri-moon-fill align-middle me-2"></i>Dark Mode</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ListlinkExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Button</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>&lt;button&gt;</code> tag to create actionable list group items with hover, disabled, and active states by adding list-group-item-action.</p>
                                    <ListGroup>
                                        <ListGroup.Item type="button" className="list-group-item-action" active aria-current="true"><i className="ri-reply-fill align-middle me-2"></i>Reply</ListGroup.Item>
                                        <ListGroup.Item type="button" className="list-group-item-action"><i className="ri-share-forward-fill align-middle me-2"></i>Forward Message</ListGroup.Item>
                                        <ListGroup.Item type="button" className="list-group-item-action"><i className="ri-equalizer-line align-middle me-2"></i>Filter Message</ListGroup.Item>
                                        <ListGroup.Item type="button" className="list-group-item-action"><i className="ri-delete-bin-5-line align-middle me-2"></i>Delete Message</ListGroup.Item>
                                        <ListGroup.Item type="button" className="list-group-item-action" disabled><i className="ri-forbid-line align-middle me-2"></i>Block "Mark Spencer</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ListButtonExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Flush List</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>list-group-flush</code> class to remove some borders and rounded corners to render list group items.</p>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Send the billing agreement</ListGroup.Item>
                                        <ListGroup.Item>Send over all the documentation.</ListGroup.Item>
                                        <ListGroup.Item>Meeting with daron to review the intake form</ListGroup.Item>
                                        <ListGroup.Item>Check uikings theme and give customer support</ListGroup.Item>
                                        <ListGroup.Item>Start making a presentation</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "155px"}}>
                                        <FlushListExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal List</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>list-group-horizontal</code> class to change the layout of list group items from vertical to horizontal across all breakpoints.</p>
                                    <div>
                                        <ListGroup horizontal className="mb-3">
                                            <ListGroup.Item>Inbox</ListGroup.Item>
                                            <ListGroup.Item>Work</ListGroup.Item>
                                            <ListGroup.Item>Shopping</ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup horizontal className="justify-content-center mb-3">
                                            <ListGroup.Item>Inbox</ListGroup.Item>
                                            <ListGroup.Item>Work</ListGroup.Item>
                                            <ListGroup.Item>Shopping</ListGroup.Item>
                                        </ListGroup>
                                        <ListGroup horizontal className="justify-content-end">
                                            <ListGroup.Item>Inbox</ListGroup.Item>
                                            <ListGroup.Item>Work</ListGroup.Item>
                                            <ListGroup.Item>Shopping</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <HorizontalListExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Contextual Classes</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use contextual classes to style list items with a stateful background and color.</p>
                                    <ListGroup>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
                                        <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
                                        <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
                                        <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
                                        <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
                                        <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
                                        <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
                                        <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ContextualClassExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Contextual Classes with Link</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Contextual classes also work with <code>.list-group-item-action</code>. Note the addition of the hover styles here not present in the previous example.</p>
                                    <div className="live-preview">
                                        <ListGroup>
                                            <ListGroup.Item as='a' className="list-group-item-action">A simple default list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-primary">A simple primary list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-secondary">A simple secondary list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-success">A simple success list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-danger">A simple danger list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-warning">A simple warning list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-info">A simple info list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-light">A simple light list group item</ListGroup.Item>
                                            <ListGroup.Item as='a' className="list-group-item-action list-group-item-dark">A simple dark list group item</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "200px"}}>
                                        <ContextualLinkExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Colored Lists</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>list-group-fill-</code> with modifier class to style list items with a stateful background and color.</p>
                                    <div className="live-preview">
                                        <ListGroup>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-primary">A simple primary list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-secondary">A simple secondary list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-success">A simple success list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-danger">A simple danger list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-warning">A simple warning list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-info">A simple info list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-light">A simple light list group item</ListGroup.Item>
                                            <ListGroup.Item className="list-group-fill-dark">A simple dark list group item</ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "200px"}}>
                                        <ColoredListExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Content</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</a>.</p>
                                    <ListGroup>
                                        <ListGroup.Item as='a' active className="list-group-item-action">
                                            <div className="float-end">
                                                Pending
                                            </div>
                                            <div className="d-flex mb-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar1} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="list-title fs-15 mb-1">Charlie Pritchard</h5>
                                                    <p className="list-text mb-0 fs-12">12 min Ago</p>
                                                </div>
                                            </div>
                                            <p className="list-text mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action">
                                            <div className="float-end">
                                                Pending
                                            </div>
                                            <div className="d-flex mb-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar2} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="list-title fs-15 mb-1">Dominic Charlton</h5>
                                                    <p className="list-text mb-0 fs-12">12 min Ago</p>
                                                </div>
                                            </div>
                                            <p className="list-text mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action">
                                            <div className="float-end">
                                                Rejected
                                            </div>
                                            <div className="d-flex mb-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar3} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="list-title fs-15 mb-1">Declan Long</h5>
                                                    <p className="list-text mb-0 fs-12">12 min Ago</p>
                                                </div>
                                            </div>
                                            <p className="list-text mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item as='a' className="list-group-item-action">
                                            <div className="float-end">
                                                Successful
                                            </div>
                                            <div className="d-flex mb-2 align-items-center">
                                                <div className="flex-shrink-0">
                                                    <Image src={avatar4} alt="" className="avatar-sm rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="list-title fs-15 mb-1">Angela Bernier</h5>
                                                    <p className="list-text mb-0 fs-12">5 days Ago</p>
                                                </div>
                                            </div>
                                            <p className="list-text mb-0">Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.</p>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <CustomContentExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Badges</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use badges to any list group item to show unread counts, activity, and more with the help of some <a href="https://getbootstrap.com/docs/5.1/utilities/">utilities</a>.</p>
                                    <ListGroup as='ul'>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Send the billing agreement <span className="badge bg-success">High</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Send over all the documentation
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Meeting with daron to review the intake form <span className="badge bg-danger">Low</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Check uikings theme and give customer support <span className="badge bg-secondary">Medium</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Start making a presentation <span className="badge bg-success">High</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "222px"}}>
                                        <ListBadgeExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Checkboxs</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use Bootstrap’s checkboxes within list group items and customize as needed. </p>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Declined Payment
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input me-1" type="checkbox" value="" defaultChecked />
                                            Delivery Error
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input me-1" type="checkbox" value="" defaultChecked />
                                            Wrong Amount
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Wrong Address
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Wrong UX/UI Solution
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <ListCheckboxsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Radios</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use Bootstrap’s radios within list group items and customize as needed. </p>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                            Declined Payment
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" defaultChecked />
                                            Delivery Error
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                            Wrong Amount
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                            Wrong Address
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <input className="form-check-input fs-14 mt-0 align-middle me-1" name="exampleRadios" type="radio" value="" />
                                            Wrong UX/UI Solution
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <ListRadiosExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Icon</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use icons to any list group item to show icons to list group items.</p>
                                    <ListGroup>
                                        <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send the billing agreement</ListGroup.Item>
                                        <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Send over all the documentation.</ListGroup.Item>
                                        <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Meeting with daron to review the intake form</ListGroup.Item>
                                        <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Check uikings theme and give customer support</ListGroup.Item>
                                        <ListGroup.Item><i className="mdi mdi-check-bold align-middle lh-1 me-2"></i> Start making a presentation</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ListIconExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">List with Numbered</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>list-group-numbered</code> class (optionally use an <code>&lt;ol&gt;</code> element) to show numbered list group items. </p>
                                    <ListGroup as='ol' className="list-group-numbered">
                                        <ListGroup.Item>Send the billing agreement</ListGroup.Item>
                                        <ListGroup.Item>Send over all the documentation.</ListGroup.Item>
                                        <ListGroup.Item>Meeting with daron to review the intake form</ListGroup.Item>
                                        <ListGroup.Item>Check uikings theme and give customer support</ListGroup.Item>
                                        <ListGroup.Item>Start making a presentation</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "128px"}}>
                                        <ListNumberedExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={4} xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Content Lists</h4>
                                </Card.Header>
                                <Card.Body>
                                    <SimpleBar data-simplebar style={{ maxHeight: "320px" }}>
                                        <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href="https://getbootstrap.com/docs/5.1/utilities/flex/">flexbox utilities</a>.</p>
                                        <div data-simplebar style={{maxHeight: "215px"}}>
                                            <ListGroup as='ul' className="mb-1">
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 avatar-xs">
                                                                    <div className="avatar-title bg-danger-subtle text-danger rounded">
                                                                        <i className="ri-netflix-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <h6 className="fs-14 mb-0">Netfilx</h6>
                                                                    <small className="text-muted">2 min Ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="text-danger">-$25.50</span>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 avatar-xs">
                                                                    <div className="avatar-title bg-success-subtle text-success rounded">
                                                                        <i className="ri-spotify-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <h6 className="fs-14 mb-0">Spotify</h6>
                                                                    <small className="text-muted">5 days Ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="text-success">$48.25</span>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <Image src={avatar2} alt="" className="avatar-xs rounded" />
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <h6 className="fs-14 mb-0">Emily Slater</h6>
                                                                    <small className="text-muted">8 days Ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="text-success">$354.90</span>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 avatar-xs">
                                                                    <div className="avatar-title bg-secondary-subtle text-secondary rounded">
                                                                        <i className="ri-paypal-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <h6 className="fs-14 mb-0">Paypal</h6>
                                                                    <small className="text-muted">1 month Ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="text-danger">-$12.22</span>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <Image src={avatar3} alt="" className="avatar-xs rounded" />
                                                                </div>
                                                                <div className="flex-shrink-0 ms-2">
                                                                    <h6 className="fs-14 mb-0">Harvey Wells</h6>
                                                                    <small className="text-muted">4 month Ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="text-success">-$459.78</span>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </SimpleBar>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "128px"}}>
                                        <CustomListExample />
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

export default uiLists;