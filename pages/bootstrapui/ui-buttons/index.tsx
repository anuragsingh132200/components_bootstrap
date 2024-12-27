import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, Col, Container, Dropdown, Row, Spinner } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Link from 'next/link';
import Head from 'next/head';

// import { 
     
//     OutlineButtonsExample, 
//     RoundedButtonsExample, 
//     SoftButtonsExample, 
//     GhostButtonsExample 
// } from './uiButtonsCode'
import DefaultButtonsExample from './DefaultButtonsExample';
import VerticalButtonsExample from './VerticalButtonsExample';
import GroupsizingButtonsExample from './GroupsizingButtonsExample';
import ToolbarButtonsExample from './ToolbarButtonsExample';
import IconButtonsExample from './IconButtonsExample';
import GroupButtonsExample from './GroupButtonsExample';
import CheckButtonsExample from './CheckButtonsExample';
import GridButtonsExample from './GridButtonsExample';
import WidthButtonsExample from './WidthButtonExample';
import SizeButtonsExample from './SizeButtonsExample';
import CustomToggleButtonsExample from './CustomToggleButtonsExample';
import DarkenButtonsExample from './DarkenButtonsExample';
import BorderButtonsExample from './BorderButtonsExample';
import LoadingbuttonsExample from './LoadingbuttonsExample';
import LabelButtonsExample from './LabelButtonsExample';
import GradientButtonsExample from './GradientButtonsExample';
import OutlineButtonsExample from './OutlineButtonsExample';
import RoundedButtonsExample from './RoundedButtonsExample';
import SoftButtonsExample from './SoftButtonsExample';
import GhostButtonsExample from './GhostButtonsExample';

const uiButtons = () => {

    const toggleBtn = (ele:any) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    return (
        <React.Fragment>

            <Head>
                <title>Badges | Hybrix - Admin & Dashboard Template</title>
            </Head> 

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Buttons" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the<code> btn</code> class to show the default button style.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant='primary'>Primary</Button>
                                        <Button variant='secondary'>Secondary</Button>
                                        <Button variant='success'>Success</Button>
                                        <Button variant='info'>Info</Button>
                                        <Button variant='warning'>Warning</Button>
                                        <Button variant='danger'>Danger</Button>
                                        <Button variant='dark'>Dark</Button>
                                        <Button variant='link'>Link</Button>
                                        <Button variant='light'>Light</Button>
                                    </div>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <DefaultButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Outline Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-outline-</code> class with the below-mentioned variation to create a button with the outline.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant="outline-primary">Primary</Button>
                                        <Button variant="outline-secondary">Secondary</Button>
                                        <Button variant="outline-success">Success</Button>
                                        <Button variant="outline-info">Info</Button>
                                        <Button variant="outline-warning">Warning</Button>
                                        <Button variant="outline-danger">Danger</Button>
                                        <Button variant="outline-dark">Dark</Button>
                                        <Button variant="outline-light">Light</Button>
                                    </div>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <OutlineButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Rounded Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use the <code>rounded-pill </code>class to make a rounded button.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant='primary' className="rounded-pill">Primary</Button>
                                        <Button variant='secondary' className="rounded-pill">Secondary</Button>
                                        <Button variant='success' className="rounded-pill">Success</Button>
                                        <Button variant='info' className="rounded-pill">Info</Button>
                                        <Button variant='warning' className="rounded-pill">Warning</Button>
                                        <Button variant='danger' className="rounded-pill">Danger</Button>
                                        <Button variant='dark' className="rounded-pill">Dark</Button>
                                        <Button variant='light' className="rounded-pill">Light</Button>
                                    </div>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <RoundedButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Soft Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-soft-</code> class with the below-mentioned variation to create a button with the soft background.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant="soft-primary">Primary</Button>
                                        <Button variant="soft-secondary">Secondary</Button>
                                        <Button variant="soft-success">Success</Button>
                                        <Button variant="soft-info">Info</Button>
                                        <Button variant="soft-warning">Warning</Button>
                                        <Button variant="soft-danger">Danger</Button>
                                        <Button variant="soft-dark">Dark</Button>
                                    </div>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <SoftButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Ghost Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-ghost-</code> class with the below-mentioned variation to create a button with the transparent background.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button className="btn-ghost-primary">Primary</Button>
                                        <Button className="btn-ghost-secondary">Secondary</Button>
                                        <Button className="btn-ghost-success">Success</Button>
                                        <Button className="btn-ghost-info">Info</Button>
                                        <Button className="btn-ghost-warning">Warning</Button>
                                        <Button className="btn-ghost-danger">Danger</Button>
                                        <Button className="btn-ghost-dark">Dark</Button>
                                    </div>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <GhostButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gradient Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-gradient </code>class to create a gradient button.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button className='bg-gradient' variant="primary">Primary</Button>
                                        <Button className='bg-gradient' variant="secondary">Secondary</Button>
                                        <Button className='bg-gradient' variant="success">Success</Button>
                                        <Button className='bg-gradient' variant="info">Info</Button>
                                        <Button className='bg-gradient' variant="warning">Warning</Button>
                                        <Button className='bg-gradient' variant="danger">Danger</Button>
                                        <Button className='bg-gradient' variant="dark">Dark</Button>
                                        <Button className='bg-gradient' variant="light">Light</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <GradientButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Animation Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>bg-animation </code>class to create an animated button.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button className="btn-primary btn-animation" data-text="Primary"><span>Primary</span></Button>
                                        <Button className="btn-secondary btn-animation" data-text="Secondary"><span>Secondary</span></Button>
                                        <Button className="btn-success btn-animation" data-text="Success"><span>Success</span></Button>
                                        <Button className="btn-info btn-animation" data-text="Info"><span>Info</span></Button>
                                        <Button className="btn-warning btn-animation" data-text="Warning"><span>Warning</span></Button>
                                        <Button className="btn-danger btn-animation" data-text="Danger"><span>Danger</span></Button>
                                        <Button className="btn-dark btn-animation" data-text="Dark"><span>Dark</span></Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <GradientButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons with Label</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-label </code>class to create a button with the label.</p>
                                    <Row>
                                        <Col lg={4}>
                                            <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Link href="#" className="btn btn-primary btn-label">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <i className="ri-user-smile-line label-icon align-middle fs-16 me-2"></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            Primary
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Button variant='success' className="btn-label"><i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success</Button>
                                                <Button variant='warning' className="btn-label"><i className="ri-error-warning-line label-icon align-middle fs-16 me-2 "></i> Warning</Button>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Button variant='primary' className="btn-label rounded-pill"><i className="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"></i> Primary</Button>
                                                <Button variant='success' className="btn-label rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"></i> Success</Button>
                                                <Button variant='warning' className="btn-label rounded-pill"><i className="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2 "></i> Warning</Button>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="d-flex flex-wrap gap-2">
                                                <Button variant='primary' className="btn-label right"><i className="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i> Primary</Button>
                                                <Button variant='success' className="btn-label right rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i> Success</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <LabelButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Load More Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Example of loading buttons.</p>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Button variant='outline-primary' className="btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <span className="flex-grow-1 ms-2">
                                                            Loading...
                                                        </span>
                                                    </span>
                                                </Button>
                                                <Button className="btn-success btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <span className="flex-grow-1 ms-2">
                                                            Loading...
                                                        </span>
                                                    </span>
                                                </Button>
                                                <Button variant='outline-secondary' className="btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <Spinner animation="grow" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <span className="flex-grow-1 ms-2">
                                                            Loading...
                                                        </span>
                                                    </span>
                                                </Button>
                                                <Button className="btn-danger btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <Spinner animation="grow" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                        <span className="flex-grow-1 ms-2">
                                                            Loading...
                                                        </span>
                                                    </span>
                                                </Button>
                                            </div>
                                        </Col>
                                        
                                        <Col lg={6}>
                                            <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Button variant='outline-primary' className="btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <span className="flex-grow-1 me-2">
                                                            Loading...
                                                        </span>
                                                        <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </span>
                                                </Button>
                                                <button type="button" className="btn btn-success btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <span className="flex-grow-1 me-2">
                                                            Loading...
                                                        </span>
                                                        <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </span>
                                                </button>
                                                <button type="button" className="btn btn-outline-warning btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <span className="flex-grow-1 me-2">
                                                            Loading...
                                                        </span>
                                                        <Spinner animation="grow" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </span>
                                                </button>
                                                <button type="button" className="btn btn-info btn-load">
                                                    <span className="d-flex align-items-center">
                                                        <span className="flex-grow-1 me-2">
                                                            Loading...
                                                        </span>
                                                        <Spinner animation="grow" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </span>
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <LoadingbuttonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Border Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Example of simple bottom borderd buttons.</p>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Button variant='primary' className="btn-border">Primary</Button>
                                                <Button variant='secondary' className="btn-border">Secondary</Button>
                                                <Button variant='success' className="btn-border">Success</Button>
                                                <Button variant='warning' className="btn-border">Warning</Button>
                                                <Button variant='danger' className="btn-border">Danger</Button>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Button variant='outline-primary' className="btn-border">Primary</Button>
                                                <Button variant='outline-secondary' className="btn-border">Secondary</Button>
                                                <Button variant='outline-success' className="btn-border">Success</Button>
                                                <Button variant='soft-warning' className="btn-border">Warning</Button>
                                                <Button variant='soft-danger' className="btn-border">Danger</Button>
                                                <Button variant='soft-dark' className="btn-border">Dark</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <BorderButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Darken Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Example of simple darken buttons.</p>
                                    <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Button className="btn-darken-primary">Primary</Button>
                                        <Button className="btn-darken-secondary">Secondary</Button>
                                        <Button className="btn-darken-success">Success</Button>
                                        <Button className="btn-darken-warning">Warning</Button>
                                        <Button className="btn-darken-danger">Danger</Button>
                                        <Button className="btn-darken-info">Info</Button>
                                        <Button className="btn-darken-dark">Dark</Button>
                                        <Button className="btn-darken-light">Light</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <DarkenButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Toggle Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <Button className="btn-primary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-alarm-line align-bottom"></i> Active</span> 
                                                    <span className="icon-off">Unactive</span>
                                                </Button>
                                                <Button className="btn-secondary custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-user-add-line align-bottom me-1"></i> Connect</span> 
                                                    <span className="icon-off"><i className="ri-check-fill align-bottom me-1"></i> Unconnect</span>
                                                </Button>
                                                <Button className="btn-success custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-thumb-up-line align-bottom me-1"></i> Yes</span> 
                                                    <span className="icon-off"><i className="ri-thumb-down-line align-bottom me-1"></i> No</span>
                                                </Button>
                                                <Button className="btn-warning custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span> 
                                                    <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                                </Button>
                                                <Button className="btn-danger custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on">On</span> 
                                                    <span className="icon-off">Off</span>
                                                </Button>
                                                <Button className="btn-dark custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-bookmark-line align-bottom me-1"></i> Bookmark</span> 
                                                    <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom me-1"></i> Unbookmark</span>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="d-flex flex-wrap align-items-center gap-2">
                                                <Button variant='outline-primary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on">Active</span> 
                                                    <span className="icon-off">Unactive</span>
                                                </Button>
                                                <Button variant='outline-secondary' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-add-line align-bottom me-1"></i> Follow</span> 
                                                    <span className="icon-off"><i className="ri-user-unfollow-line align-bottom me-1"></i> Unfollow</span>
                                                </Button>
                                                <Button variant='outline-success' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on">On</span>
                                                    <span className="icon-off">Off</span>
                                                </Button>
                                                <Button variant='soft-warning' className="custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on">Follow</span> 
                                                    <span className="icon-off">Unfollow</span>
                                                </Button>
                                                <Button variant='soft-danger' className="custom-toggle" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on">On</span> 
                                                    <span className="icon-off">Off</span>
                                                </Button>
                                                <Button className="btn-dark custom-toggle active" onClick={(e) => toggleBtn(e.target)}>
                                                    <span className="icon-on"><i className="ri-bookmark-line align-bottom"></i></span> 
                                                    <span className="icon-off"><i className="ri-bookmark-3-fill align-bottom"></i></span>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <CustomToggleButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Sizes</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-lg</code> class to create a large size button and <code>btn-sm</code> class to create a small size button.</p>
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <Button size='lg' variant='primary'>Large button</Button>
                                        <Button size='lg' variant='light'>Large button</Button>

                                        <Button size='sm' variant='primary'>Small button</Button>
                                        <Button size='sm' variant='light'>Small button</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <SizeButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Width</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized buttons respectively.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant='primary' className="w-xs">Xs</Button>
                                        <Button variant='danger' className="w-sm">Small</Button>
                                        <Button variant='warning' className="w-md">Medium</Button>
                                        <Button variant='success' className="w-lg">Large</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <WidthButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Tag</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn</code> class with different HTML elements. (though some browsers may apply a slightly different rendering)</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Link href='#' className="btn btn-primary">Link</Link>
                                        <Button variant='success' value="Submit" type="submit">Button</Button>
                                        <Button as='input' variant='info' type="button" value="Input" />
                                        <Button as='input' variant='danger' type="submit" value="Submit" />
                                        <Button as='input' variant='warning' type="reset" value="Reset" />
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <WidthButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>   
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Toggle Status</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">
                                        Use <code>data-bs-toggle="button"</code> to toggle a button’s active state.
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant='primary' data-bs-toggle="button" aria-pressed="false">
                                            Single toggle
                                        </Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <code>
                                            &lt;!-- Toggle Button Status --&gt;
                                            &lt;Button variant=&quot;primary&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
                                            Single toggle
                                            &lt;/Button&gt;</code></pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Grid</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">
                                        Use <code>d-grid</code> class to create a full-width block button.
                                    </p>
                                    <div className="d-grid gap-2">
                                        <Button variant='primary'>Button</Button>
                                        <Button variant='primary'>Button</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <GridButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Checkbox & Radio Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">
                                        Combine button-like <code>checkbox and radio</code> <Link href="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons</Link> into a seamless looking button group.
                                    </p>
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <ButtonGroup aria-label="Basic checkbox toggle button group">
                                            <input type="checkbox" className="btn-check" id="btncheck1" defaultChecked />
                                            <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck1">Checkbox 1</Button>

                                            <input type="checkbox" className="btn-check" id="btncheck2" />
                                            <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck2">Checkbox 2</Button>

                                            <input type="checkbox" className="btn-check" id="btncheck3" />
                                            <Button as='label' variant='primary' className="mb-0" htmlFor="btncheck3">Checkbox 3</Button>
                                        </ButtonGroup>

                                        <ButtonGroup aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                                            <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio1">Radio 1</Button>

                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                            <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio2">Radio 2</Button>

                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                            <Button as='label' variant='outline-secondary' className="mb-0" htmlFor="btnradio3">Radio 3</Button>
                                        </ButtonGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <CheckButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Group</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>btn-group </code> class in the parent class to wrap a series of buttons.</p>
                                    <Row>
                                        <Col sm={6}>
                                            <ButtonGroup aria-label="Basic example">
                                                <Button variant="primary">Left</Button>
                                                <Button variant="primary">Middle</Button>
                                                <Button variant="primary">Right</Button>
                                            </ButtonGroup>
                                        </Col>
                                        <Col sm={6}>
                                            <ButtonGroup className="mt-4 mt-sm-0" aria-label="Basic example">
                                                <Button variant='light' className="btn-icon"><i className="ri-align-right"></i></Button>
                                                <Button variant='light' className="btn-icon"><i className="ri-align-center"></i></Button>
                                                <Button variant='light' className="btn-icon"><i className="ri-align-left"></i></Button>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <GroupButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Icon Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-icon</code> class to wrap icon in button</p>
                                    <Row>
                                        <Col sm={6}>
                                            <div className="hstack gap-2 ">
                                                <Button variant='primary'><i className="ri-map-pin-line"></i></Button>
                                                <Button variant='danger'><i className="ri-delete-bin-5-line"></i></Button>
                                                <Button variant='success'><i className="ri-check-double-line"></i></Button>
                                                <Button variant='light'><i className="ri-brush-2-fill"></i></Button>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="hstack gap-2 mt-4 mt-sm-0">
                                                <Button variant='outline-primary'><i className="ri-24-hours-fill"></i></Button>
                                                <Button variant='outline-danger'><i className="ri-customer-service-2-line"></i></Button>
                                                <Button variant='outline-success'><i className="ri-mail-send-line"></i></Button>
                                                <Button variant='outline-warning'><i className="ri-menu-2-line"></i></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "200px"}}>
                                        <IconButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Buttons Toolbar</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-toolbar</code> class to combine sets of button groups into more complex components.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <ButtonToolbar aria-label="Toolbar with button groups">
                                            <ButtonGroup className="me-2" aria-label="First group">
                                                <Button variant='light'>1</Button>
                                                <Button variant='light'>2</Button>
                                                <Button variant='light'>3</Button>
                                                <Button variant='light'>4</Button>
                                            </ButtonGroup>
                                            <ButtonGroup className="me-2" aria-label="Second group">
                                                <Button variant="light">5</Button>
                                                <Button variant="light">6</Button>
                                                <Button variant="light">7</Button>
                                            </ButtonGroup>
                                            <ButtonGroup aria-label="Third group">
                                                <Button variant="light">8</Button>
                                            </ButtonGroup>
                                        </ButtonToolbar>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "200px"}}>
                                        <ToolbarButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Button Group Sizing</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>btn-group-</code> class with the below-mentioned variation to set the different sizes of button groups.</p>
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <ButtonGroup size='lg' aria-label="Basic example">
                                            <Button variant="primary">Left</Button>
                                            <Button variant="primary">Middle</Button>
                                            <Button variant="primary">Right</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="mt-2" aria-label="Basic example">
                                            <Button variant="light">Left</Button>
                                            <Button variant="light">Middle</Button>
                                            <Button variant="light">Right</Button>
                                        </ButtonGroup>
                                        <ButtonGroup size='sm' className="mt-2" aria-label="Basic example">
                                            <Button variant="secondary">Left</Button>
                                            <Button variant="secondary">Middle</Button>
                                            <Button variant="secondary">Right</Button>
                                        </ButtonGroup>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <GroupsizingButtonsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical Variation</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Make a set of buttons appear <code>vertically</code> stacked .Split button dropdowns are not supported here.</p>
                                    <div className="row gy-3">
                                        <div className="col-auto">
                                            <ButtonGroup aria-label="Button group with nested dropdown">
                                                <Button variant="primary">1</Button>
                                                <Button variant="primary">2</Button>
                                                    <Dropdown>
                                                        <Dropdown.Toggle  id="btnGroupDrop1" variant="primary" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Dropdown
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as="ul" aria-labelledby="btnGroupDrop1">
                                                            <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-auto">
                                            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                                <Button variant="light">Button</Button>
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="btnGroupDrop1" variant="light">
                                                            Dropdown
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                                            <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                                            <li><Dropdown.Item href="#">Dropdown link</Dropdown.Item></li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                <Button variant='light'>Button</Button>
                                                <Button variant='light'>Button</Button>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="btn-group-vertical" aria-label="Vertical radio toggle button group">
                                                <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio1" defaultChecked />
                                                <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio1">Radio 1</Button>
                                                <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio2" />
                                                <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio2">Radio 2</Button>
                                                <input type="radio" className="btn-check" name="vbtn" id="vbtn-radio3" />
                                                <Button as='label' variant="outline-secondary" htmlFor="vbtn-radio3">Radio 3</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <VerticalButtonsExample />
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

export default uiButtons;