import React from 'react';
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Import Images
import avatar1 from '@assets/images/users/avatar-1.jpg'
import img4 from '@assets/images/small/img-4.jpg'

const uiProfile = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Profile | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Custom UI" breadcrumbItem="Profile" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Basic Example</h5>
                                </Card.Header>
                                <Card.Body>
                                    <Card className="border-0 shadow-none mb-0">
                                        <Card.Body className="rounded profile-basic" style={{backgroundImage: `url(${img4.src})`, backgroundSize: "cover"}}></Card.Body>
                                        <Card.Body>
                                            <div className="mt-n5">
                                                <Image src={avatar1} alt="" className="avatar-lg rounded-circle p-1 bg-card-custom mt-n3" />
                                            </div>
                                        </Card.Body>
                                        <Card.Body className="pt-0">
                                            <Row className="justify-content-between gy-4">
                                                <Col xl={5} md={7}>
                                                    <h5 className="fs-17">Edward Diana</h5>
                                                    <div className="mb-3 text-muted">
                                                        <i className="bi bi-geo-alt"></i> Phoenix, USA
                                                    </div>
                                                    <p>Product visual designer, expert in UI design</p>
                                                    
                                                    <div className="hstack gap-2">
                                                        <Button variant="primary">Invite to Project</Button>
                                                        <Button variant='soft-info' className="btn-icon"><i className="bi bi-chat-left-text"></i></Button>

                                                        <Dropdown role="button">
                                                            <Dropdown.Toggle as="a" className="btn btn-soft-danger btn-icon arrow-none">
                                                                <i className="bi bi-three-dots-vertical"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul" className="dropdown-menu">
                                                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                                <Col xl={3} md={5}>
                                                    <div>
                                                        <p className="text-muted fw-medium mb-2">Language Knows</p>
                                                        <ul className="list-inline mb-4">
                                                            <li className="list-inline-item">
                                                                <span className="badge badge-soft-info">English</span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="badge badge-soft-info">Russian</span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="badge badge-soft-info">Chinese</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <p className="text-muted fw-medium mb-2">Featured Skills</p>
                                                        <ul className="d-flex gap-2 flex-wrap list-unstyled mb-0">
                                                            <li>
                                                                <span className="badge badge-soft-dark">Business Marketing</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-dark">Google Ads Management</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-dark">Social Ads Management</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-dark">Content SEO</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Center Profile</h5>
                                </Card.Header>
                                <Card.Body>
                                    <div className="card border-0 shadow-none mb-0">
                                        <Card.Body className="rounded profile-basic" style={{backgroundImage: `url(${img4.src})`, backgroundSize: "cover"}}></Card.Body>
                                        <Card.Body>
                                            <div className="mt-n5 text-center">
                                                <Image src={avatar1} alt="" className="avatar-lg rounded-circle p-1 bg-card-custom mt-n3 mx-auto" />
                                            </div>
                                        </Card.Body>
                                        <Card.Body className="pt-0">
                                            <Row className="justify-content-center gy-4">
                                                <Col lg={5} className="text-center">
                                                    <h5 className="fs-17">Edward Diana</h5>
                                                    <div className="mb-3 text-muted">
                                                        <i className="bi bi-geo-alt"></i> Phoenix, USA
                                                    </div>
                                                    <p>Product visual designer, expert in UI design</p>
                    
                                                    <div className="hstack gap-2 justify-content-center">
                                                        <Button variant="primary">Invite to Project</Button>
                                                        <Button variant='soft-info' className="btn-icon"><i className="bi bi-chat-left-text"></i></Button>
            
                                                        <Dropdown role="button">
                                                            <Dropdown.Toggle as="a" className="btn btn-soft-danger btn-icon arrow-none">
                                                                <i className="bi bi-three-dots-vertical"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul" className="dropdown-menu">
                                                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">End Profile</h5>
                                </Card.Header>
                                <Card.Body>
                                    <Card className="border-0 shadow-none mb-0">
                                        <Card.Body className="rounded profile-basic" style={{backgroundImage: `url(${img4.src})`, backgroundSize: "cover"}}></Card.Body>
                                        <Card.Body>
                                            <div className="mt-n5 text-end">
                                                <Image src={avatar1} alt="" className="avatar-lg rounded-circle p-1 bg-card-custom mt-n3" />
                                            </div>
                                        </Card.Body>
                                        <Card.Body className="pt-0">
                                            <Row className="justify-content-between gy-4">
                                                <Col xl={3} md={5} className="order-last order-lg-first">
                                                    <div className="text-end text-lg-start">
                                                        <p className="text-muted fw-medium mb-2">Language Knows</p>
                                                        <ul className="list-inline mb-4">
                                                            <li className="list-inline-item">
                                                                <span className="badge badge-soft-info">English</span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="badge badge-soft-info">Russian</span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <span className="badge badge-soft-info">Chinese</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                
                                                    <div className="text-end text-lg-start">
                                                        <p className="text-muted fw-medium mb-2">Featured Skills</p>
                                                        <ul className="d-flex gap-2 flex-wrap list-unstyled mb-0 justify-content-end justify-content-lg-start">
                                                            <li>
                                                                <span className="badge badge-soft-dark">Business Marketing</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-dark">Google Ads Management</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-dark">Social Ads Management</span>
                                                            </li>
                                                            <li>
                                                                <span className="badge badge-soft-dark">Content SEO</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl={5} md={7} className="text-end">
                                                    <h5 className="fs-17">Edward Diana</h5>
                                                    <div className="mb-3 text-muted">
                                                        <i className="bi bi-geo-alt"></i> Phoenix, USA
                                                    </div>
                                                    <p>Product visual designer, expert in UI design</p>
                    
                                                    <div className="hstack gap-2 justify-content-end">
                                                        <Button variant="primary">Invite to Project</Button>
                                                        <Button variant='soft-info' className="btn-icon"><i className="bi bi-chat-left-text"></i></Button>
                                                        <Dropdown role="button">
                                                            <Dropdown.Toggle as="a" className="btn btn-soft-danger btn-icon arrow-none">
                                                                <i className="bi bi-three-dots-vertical"></i>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu as="ul" className="dropdown-menu">
                                                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={3} md={6}>
                            <Card>
                                <Card.Body>
                                    <Image src={img4} alt="" className="rounded object-cover" width="323" height="120"/>

                                    <div className="text-center">
                                        <div className="mt-n4">
                                            <Image src={avatar1} alt="" className="avatar-md rounded-circle p-1 bg-card-custom mt-n2"/>
                                        </div>
                                        <div className="mt-4 border-bottom border-bottom-dashed">
                                            <h5 className="fs-17">Edward Diana</h5>
                                            <p className="mb-3 text-muted">Marketing Expert</p>
                                        </div>
                                        <div className="mt-3">
                                            <Row>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">254</span></h5>
                                                        <p className="text-muted mb-0">Posts</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">12k</span></h5>
                                                        <p className="text-muted mb-0">Followers</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">3,501</span></h5>
                                                        <p className="text-muted mb-0">Follwing</p>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={3} md={6}>
                            <Card>
                                <Card.Body>
                                    <div className="w-100 rounded object-cover bg-secondary" style={{height: "120px"}}></div>
                        
                                    <div className="text-center">
                                        <div className="mt-n4">
                                            <Image src={avatar1} alt="" className="avatar-md rounded-circle p-1 bg-card-custom mt-n2"/>
                                        </div>
                                        <div className="mt-4 border-bottom border-bottom-dashed">
                                            <h5 className="fs-17">Edward Diana</h5>
                                            <p className="mb-3 text-muted">Marketing Expert</p>
                                        </div>
                                        <div className="mt-3">
                                            <Row>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">254</span></h5>
                                                        <p className="text-muted mb-0">Posts</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">12</span>k</h5>
                                                        <p className="text-muted mb-0">Followers</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">3,501</span></h5>
                                                        <p className="text-muted mb-0">Follwing</p>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={3} md={6}>
                            <Card>
                                <Card.Body>
                                    <div className="w-100 rounded object-cover bg-success-subtle" style={{height: "120px"}}></div>
                        
                                    <div className="text-center">
                                        <div className="mt-n4">
                                            <Image src={avatar1} alt="" className="avatar-md rounded-circle p-1 bg-card-custom mt-n2"/>
                                        </div>
                                        <div className="mt-4 border-bottom border-bottom-dashed">
                                            <h5 className="fs-17">Edward Diana</h5>
                                            <p className="mb-3 text-muted">Marketing Expert</p>
                                        </div>
                                        <div className="mt-3">
                                            <Row>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">254</span></h5>
                                                        <p className="text-muted mb-0">Posts</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">12</span>k</h5>
                                                        <p className="text-muted mb-0">Followers</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">3,501</span></h5>
                                                        <p className="text-muted mb-0">Follwing</p>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={3} md={6}>
                            <Card className="border-danger border-opacity-25">
                                <Card.Body>
                                    <div className="w-100 rounded object-cover bg-danger-subtle" style={{height: "120px"}}></div>
                        
                                    <div className="text-center">
                                        <div className="mt-n4">
                                            <Image src={avatar1} alt="" className="avatar-md rounded-circle p-1 bg-card-custom mt-n2"/>
                                        </div>
                                        <div className="mt-4 border-bottom border-bottom-dashed border-danger border-opacity-25">
                                            <h5 className="fs-17">Edward Diana</h5>
                                            <p className="mb-3 text-muted">@edward_diana</p>
                                        </div>
                                        <div className="mt-3">
                                            <Row>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">254</span></h5>
                                                        <p className="text-muted mb-0">Posts</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">12</span>k</h5>
                                                        <p className="text-muted mb-0">Followers</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div>
                                                        <h5><span className="counter-value" data-target="40">3,501</span></h5>
                                                        <p className="text-muted mb-0">Follwing</p>
                                                    </div>
                                                </div>
                                            </Row>
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

export default uiProfile;