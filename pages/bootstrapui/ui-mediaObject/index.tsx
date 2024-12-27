import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';

// Import Images
import avatar2 from '@assets/images/users/avatar-2.jpg'
import avatar3 from '@assets/images/users/avatar-3.jpg'
import avatar4 from '@assets/images/users/avatar-4.jpg'
import avatar6 from '@assets/images/users/avatar-6.jpg'
import avatar8 from '@assets/images/users/avatar-8.jpg'

// Import Components

import DefultExample from './defultCode';
import NestingExample from './nestingCode';
import MediaExample from './mediaCode';

const uiMediaObject = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Media Object | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Media Object" />

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Examples</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted mb-4">Use few flex utilities that allow even more flexibility and customization than before.</p>
                                    <div>
                                        <div className="d-flex align-items-start text-muted mb-4">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                            </div>

                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Media heading</h5>
                                                This is some content from a media component. You can replace this with any content and adjust it as needed.
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start text-muted mb-4">
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Media heading</h5>
                                                This is some content from a media component. You can replace this with any content and adjust it as needed.
                                            </div>
                                            <div className="flex-shrink-0 ms-3">
                                                <Image src={avatar3} className="avatar-sm rounded" alt="..." />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start text-muted">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Media heading</h5>
                                                This is some content from a media component. You can replace this with any content and adjust it as needed.
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "333px"}}>
                                        <DefultExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Nesting Example</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted mb-4">Media objects can be infinitely nested, though we suggest you stop at some point. Place nested <code>d-flex align-items-start</code> within the <code>flex-grow-1</code> of a parent media object.</p>
                                    <div>
                                        <div className="d-flex align-items-start text-muted mb-4">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Media heading</h5>
                                                This is some content from a media component. You can replace this with any content and adjust it as needed.
                                                <div className="d-flex align-items-start text-muted mt-3">
                                                    <div className="flex-shrink-0 me-3">
                                                        <Image src={avatar3} className="avatar-sm rounded" alt="..." />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h5 className="fs-14">Media heading</h5>
                                                        This is some content from a media component. You can replace this with any content and adjust it as needed.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-start text-muted">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar4} className="avatar-sm rounded" alt="..." />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Media heading</h5>
                                                This is some content from a media component. You can replace this with any content and adjust it as needed.
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <NestingExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Media Alignment</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted mb-4">The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
                                    <div>
                                        <div className="d-flex align-items-start text-muted mb-4">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar2} className="avatar-sm rounded" alt="..." />
                                            </div>

                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Top Aligned media</h5>
                                                <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center text-muted mb-4">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar6} className="avatar-sm rounded" alt="..." />
                                            </div>

                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Center Aligned media</h5>
                                                <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end text-muted">
                                            <div className="flex-shrink-0 me-3">
                                                <Image src={avatar8} className="avatar-sm rounded" alt="..." />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14">Bottom Aligned media</h5>
                                                <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <MediaExample />
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

export default uiMediaObject;