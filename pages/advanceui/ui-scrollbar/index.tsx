import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import SimpleBar from 'simplebar-react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";

const uiScrollbar = () => {

    return (

        <React.Fragment>

            <Head>
                <title>Scrollbar | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Advance UI" breadcrumbItem="Scrollbar" />

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Scroll</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>SimpleBar</code> attribute and add <code>max-height: **px</code> to set default scrollbar.</p>

                                    <div className="mx-n3">
                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                            <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing</p>
                                            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                                            <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                            <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                        </SimpleBar>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Auto Hide False</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>autoHide={false}</code> attribute and add <code>max-height: **px</code> to show simplebar as default.</p>

                                    <div className="mx-n3">
                                        <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="px-3">
                                            <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing</p>
                                            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                                            <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                            <p className="mb-0">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                        </SimpleBar>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">RTL Direction</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>data-simplebar-direction="rtl"</code> attribute and add <code>max-height: **px</code> to set simplebar at right side.</p>

                                    <div className="mx-n3">
                                        <SimpleBar data-simplebar-direction="rtl" style={{ maxHeight: "220px" }} className="px-3">
                                            <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing</p>
                                            <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                                            <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                            <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                        </SimpleBar>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col lg={12}>
                            <div className="justify-content-between d-flex align-items-center mb-3">
                                <h5 className="mb-0 pb-1 text-decoration-underline">Simplebar Track Color</h5>
                            </div>
                            <Row>
                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Primary Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="primary"</code> attribute to set primary color simplebar track.</p>
                                            
                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-primary" style={{ maxHeight: "275px" }}>
                                                    <Link href="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                                    <i className="ri-checkbox-circle-fill"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <p className="m-0">Your <span className="fw-bold text-dark">Elite</span> author Graphic Optimization <span className="text-secondary">reward</span> is ready!</p>

                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> 30 min ago
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="#!" className="text-reset notification-item d-block dropdown-item active">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <Image src={avatar2} className="rounded-circle img-fluid" alt="user-pic" />
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <h6 className="mb-1 fs-15">Angela Bernier</h6>
                                                                <p className="mb-0">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                                                            </div>

                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> 01 hr ago
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                                                                    <i className="ri-message-2-fill"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <p className="m-0">You have received <span className="fw-bold text-success">20</span> new messages in the conversation</p>
                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> 02 hrs ago
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link href="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <Image src={avatar8} className="rounded-circle img-fluid" alt="user-pic" />
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <h6 className="mb-1 fs-15">Maureen Gibson</h6>
                                                                <p className="mb-0">We talked about a project on linkedin.</p>
                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> 02 hrs ago
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#!" className="text-reset notification-item d-block dropdown-item">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0 avatar-xs me-3">
                                                                <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                                    <i className="ri-checkbox-circle-fill"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow-1 text-muted">
                                                                <p className="m-0">Your <span className="fw-bold text-dark">Elite</span> author Graphic Optimization <span className="text-secondary">reward</span> is ready!</p>

                                                            </div>
                                                            <div className="flex-shrink-0 ms-2">
                                                                <div className="fs-12 text-muted">
                                                                    <i className="mdi mdi-clock-outline"></i> 30 min ago
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="text-center my-2">
                                                        <Link href="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </Link>
                                                    </div>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Secondary Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="secondary"</code> attribute to set secondary color simplebar track.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-secondary" style={{ maxHeight: "275px" }}>
                                                    <div className="list-group list-group-flush">
                                                        <Link href="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            M
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Michael Johnston</h5>
                                                                    <p className="text-truncate mb-0">New updates for ABC Theme</p>
                                                                </div>
                                                                <div className="fs-12">06 mins</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            D
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Darren James</h5>
                                                                    <p className="text-truncate mb-0">Bug Report - abc theme</p>
                                                                </div>
                                                                <div className="fs-12">12 mins</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            P
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Patricia Shelton</h5>
                                                                    <p className="text-truncate mb-0">Nice to meet you</p>
                                                                </div>
                                                                <div className="fs-12">28 mins</div>
                                                            </div>
                                                        </Link>

                                                        <Link href="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            T
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Thomas McNeil</h5>
                                                                    <p className="text-truncate mb-0">This theme is awesome!</p>
                                                                </div>
                                                                <div className="fs-12">02 hrs</div>
                                                            </div>
                                                        </Link>

                                                        <Link href="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            C
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Carolyn Jones</h5>
                                                                    <p className="text-truncate mb-0">I've finished it! See you so</p>
                                                                </div>
                                                                <div className="fs-12">03 hrs</div>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="list-group-item text-muted py-3">
                                                            <div className="d-flex align-items-start">
                                                                <div className="flex-shrink-0 align-self-center me-3">
                                                                    <div className="avatar-xs">
                                                                        <span className="avatar-title rounded-circle bg-light text-primary">
                                                                            M
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex-grow-1 overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Michael Johnston</h5>
                                                                    <p className="text-truncate mb-0">New updates for ABC Theme</p>
                                                                </div>
                                                                <div className="fs-12">03 hrs</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Success Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="success"</code> attribute to set success color simplebar track.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-success" style={{ maxHeight: "275px" }}>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2019 - 21</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Lead designer / Developer</h5>
                                                                    <div className="text-truncate">Xyz Company</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2017 - 19</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Senior Graphic Designer</h5>
                                                                    <div className="text-truncate">Abc Company</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2016 - 17</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Graphic Designer</h5>
                                                                    <div className="text-truncate">Xyz Company</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2017 - 16</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Graphic Designer</h5>
                                                                    <div className="text-truncate">Abc Company</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <div>2016 - 15</div>
                                                                </div>
                                                                <div className="flex-shrink-0 mx-3">
                                                                    <i className="ri-arrow-right-fill text-muted"></i>
                                                                </div>
                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                    <h5 className="text-truncate fs-15 mb-1">Graphic Designer</h5>
                                                                    <div className="text-truncate">Xyz Company</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Info Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="info"</code> attribute to set info color simplebar track.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} className="simplebar-track-info" style={{ maxHeight: "238px" }}>
                                                    <ol className="list-group list-group-flush list-group-numbered">
                                                        <li className="list-group-item d-flex align-items-center">
                                                            A list item
                                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            A second list item
                                                            <Badge bg="danger" className="ms-auto ">Refund</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            A third list item
                                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            A fourth list item
                                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            A Fifth list item
                                                            <Badge bg="warning" className="ms-auto">Inprogress</Badge>
                                                        </li>
                                                        <li className="list-group-item d-flex align-items-center">
                                                            A Sixth list item
                                                            <Badge bg="success" className="ms-auto">Paid</Badge>
                                                        </li>
                                                    </ol>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Warning Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="warning"</code> attribute to set warning color simplebar track.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="simplebar-track-warning px-3">
                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <Image src={avatar3} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-15 mb-1">Esther James</h5>
                                                                <p className="text-muted mb-0">Frontend Developer</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <Image src={avatar4} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-15 mb-1">Jacqueline Steve</h5>
                                                                <p className="text-muted mb-0">UI/UX Designer</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <Image src={avatar5} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-15 mb-1">George Whalen</h5>
                                                                <p className="text-muted mb-0">Backend Developer</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center py-3">
                                                        <div className="avatar-xs flex-shrink-0 me-3">
                                                            <Image src={avatar3} alt="" className="img-fluid rounded-circle" />
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div>
                                                                <h5 className="fs-15 mb-1">Carl Lynch</h5>
                                                                <p className="text-muted mb-0">Frontend Developer</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-2">
                                                            <Button variant="outline-success" size="sm"><i className="ri-user-add-line align-middle"></i></Button>
                                                        </div>
                                                    </div>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Danger Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="danger"</code> attribute to set danger color simplebar track.</p>

                                            <div className="mx-n3">
                                                <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="simplebar-track-danger px-3">
                                                    <Link href="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-15 mb-1">ABC Project Customization</h5>
                                                            <p className="text-muted mb-0">04 Members</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge badge-soft-warning fs-11">Inprogress</div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-15 mb-1">Client - John</h5>
                                                            <p className="text-muted mb-0">02 Members</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge badge-soft-warning fs-11">Inprogress</div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-15 mb-1">Brand logo Design</h5>
                                                            <p className="text-muted mb-0">01 Members</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge badge-soft-success fs-10">Completed</div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-15 mb-1">Project update</h5>
                                                            <p className="text-muted mb-0">03 Members</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge badge-soft-warning fs-11">Inprogress</div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="d-flex align-items-center py-2">
                                                        <div className="flex-shrink-0 avatar-xs me-3">
                                                            <div className="avatar-title bg-light text-primary rounded-circle">
                                                                <i className="ri-hashtag"></i>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <h5 className="fs-15 mb-1">Chat App</h5>
                                                            <p className="text-muted mb-0">05 Members</p>
                                                        </div>
                                                        <div className="flex-shrink-0 align-self-start ms-2">
                                                            <div className="badge badge-soft-success fs-10">Completed</div>
                                                        </div>
                                                    </Link>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <Card>
                                        <Card.Header>
                                            <h4 className="card-title mb-0">Dark Track</h4>
                                        </Card.Header>

                                        <Card.Body>
                                            <p className="text-muted">Use <code>data-simplebar-track="dark"</code> attribute to set dark color simplebar track.</p>

                                            <div className="mx-n3">                                                
                                                <SimpleBar autoHide={false} className="simplebar-track-dark" style={{ maxHeight: "220px" }}>

                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.1</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted">12 Jul, 21</p>
                                                                    </div>
                                                                </div>

                                                                <p className="text-muted mb-4">It will be as simple as in fact, It will seem like simplified</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">Michael Lemire</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                                <Link href="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                                <Link href="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" href="#">Action</Link>
                                                                                    <Link className="dropdown-item" href="#">Another action</Link>
                                                                                    <Link className="dropdown-item" href="#">Something else here</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.0</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted">06 Jul, 21</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-muted mb-4">Sed ut perspiciatis iste error sit</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">Carl Lynch</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                                <Link href="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                                <Link href="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" href="#">Action</Link>
                                                                                    <Link className="dropdown-item" href="#">Another action</Link>
                                                                                    <Link className="dropdown-item" href="#">Something else here</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.2</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted">26 Jun, 21</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-muted mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">Joyce White</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                                <Link href="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                                <Link href="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" href="#">Action</Link>
                                                                                    <Link className="dropdown-item" href="#">Another action</Link>
                                                                                    <Link className="dropdown-item" href="#">Something else here</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="list-group-item">
                                                            <div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <Badge bg="success" className="bg-gradient mb-2"><i className="mdi mdi-star"></i> 4.1</Badge>
                                                                    </div>
                                                                    <div className="flex-shrink-0">
                                                                        <p className="text-muted">24 Jun, 21</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-muted mb-4">Ut enim ad minima veniam, quis nostrum ullam corporis suscipit consequatur nisi ut</p>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-grow-1">
                                                                        <h5 className="fs-15 mb-0">Etta Smith</h5>
                                                                    </div>

                                                                    <div className="flex-shrink-0">
                                                                        <div className="hstack gap-3">
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Like">
                                                                                <Link href="#" className="text-muted"><i className="ri-thumb-up-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div data-bs-toggle="tooltip" data-bs-placement="top" title="Comment">
                                                                                <Link href="#" className="text-muted"><i className="ri-discuss-line"></i></Link>
                                                                            </div>
                                                                            <div className="vr"></div>
                                                                            <div className="dropdown">
                                                                                <Link className="text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                    <i className="ri-more-fill"></i>
                                                                                </Link>

                                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                                    <Link className="dropdown-item" href="#">Action</Link>
                                                                                    <Link className="dropdown-item" href="#">Another action</Link>
                                                                                    <Link className="dropdown-item" href="#">Something else here</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </SimpleBar>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default uiScrollbar;