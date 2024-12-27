import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Import Images
import img2 from '@assets/images/small/img-2.jpg'
import img3 from '@assets/images/small/img-3.jpg'
import img4 from '@assets/images/small/img-4.jpg'
import img5 from '@assets/images/small/img-5.jpg'

import avatar2 from '@assets/images/users/avatar-2.jpg'
import avatar3 from '@assets/images/users/avatar-3.jpg'
import avatar4 from '@assets/images/users/avatar-4.jpg'
import avatar5 from '@assets/images/users/avatar-5.jpg'
import avatar8 from '@assets/images/users/avatar-8.jpg'
import avatar10 from '@assets/images/users/avatar-10.jpg'

// Import Components
// import { ImgRoundedCircleExample, ImgThumbnailsExample, ImgSizesExample, AvatarExample, AvatarGroupExample, FiguresExample, ResponsiveExample } from './uiImagesCode'
import ImgRoundedCircleExample from './ImgRoundedCircleExample';
import ImgThumbnailsExample from './ImgThumbnailsExample';
import ImgSizesExample from './ImgSizesExample';
import AvatarExample from './AvatarExample';
import AvatarGroupExample from './AvatarGroupExample';
import FiguresExample from './FiguresExample';
import ResponsiveExample from './ResponsiveExample';

const uiImages = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Images | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Images" />

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Image Rounded & Circle</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use<code> rounded</code>class and <code>rounded-circle</code> class to show an image with a round border and rounded shape respectively.
                                    </p>
                                    <Row className="align-items-center">
                                        <Col md={6}>
                                            <Image className="rounded" alt="200x200" width="200" src={img4} data-holder-rendered="true" />
                                        </Col>
                                        <Col md={6}>
                                            <div className="mt-4 mt-md-0">
                                                <Image className="rounded-circle avatar-xl" alt="200x200" src={avatar4} data-holder-rendered="true" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "100px"}}>
                                        <ImgRoundedCircleExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Image Thumbnails</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>img-thumbnail</code> class to give an image rounded 1px border appearance.</p>
                                    <Row>
                                        <div className="col-6">
                                            <Image className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true" />
                                        </div>
                                        <div className="col-6">
                                            <div className="mt-4 mt-md-0">
                                                <Image className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} data-holder-rendered="true" />
                                            </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "95px"}}>
                                        <ImgThumbnailsExample/>
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Image Sizes</h4>
                                </Card.Header>

                                <Card.Body>

                                    <p className="text-muted mb-4">Use <code>avatar-xxs</code>, <code>avatar-xs</code>, <code>avatar-sm</code>, <code>avatar-md</code>, <code>avatar-lg</code>, <code>avatar-xl</code> class for different image sizes.</p>
                                    <Row>
                                        <Col md={12}>
                                            <Row className="g-3">
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar2} alt="" className="rounded avatar-xxs" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-xxs</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar10} alt="" className="rounded avatar-xs" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-xs</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar3} alt="" className="rounded avatar-sm" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-sm</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar4} alt="" className="rounded avatar-md" />
                                                        <p className="mt-2  mb-lg-0"><code>avatar-md</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar5} alt="" className="rounded avatar-lg" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-lg</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar8} alt="" className="rounded avatar-xl" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-xl</code></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col md={12}>
                                            <Row className="g-3 mt-5">
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar2} alt="" className="rounded-circle avatar-xxs" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-xxs</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar10} alt="" className="rounded-circle avatar-xs" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-xs</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar3} alt="" className="rounded-circle avatar-sm" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-sm</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar4} alt="" className="rounded-circle avatar-md" />
                                                        <p className="mt-2  mb-lg-0"><code>avatar-md</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar5} alt="" className="rounded-circle avatar-lg" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-lg</code></p>
                                                    </div>
                                                </Col>
                                                <Col xxl={2} md={4} className="col-6">
                                                    <div>
                                                        <Image src={avatar8} alt="" className="rounded-circle avatar-xl" />
                                                        <p className="mt-2 mb-lg-0"><code>avatar-xl</code></p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <div className="card-body">
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <ImgSizesExample />
                                    </pre>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Avatar With Content</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>avatar-xxs, avatar-xs,avatar-sm,avatar-md,avatar-lg,avatar-xl</code> class to set different avatar content.</p>
                                    <Row className="g-3">
                                        <Col xxl={2} md={4} className="col-6">
                                            <div className="avatar-xxs mt-3">
                                                <div className="avatar-title rounded bg-primary-subtle text-primary fs-10">
                                                    XXS
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div className="avatar-xs mt-3">
                                                <div className="avatar-title rounded bg-secondary-subtle text-secondary">
                                                    XS
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div className="avatar-sm mt-3">
                                                <div className="avatar-title rounded bg-success-subtle text-success fs-14">
                                                    SM
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div className="avatar-md mt-3">
                                                <div className="avatar-title rounded bg-info-subtle text-info fs-16">
                                                    MD
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div className="avatar-lg mt-3">
                                                <div className="avatar-title rounded bg-warning-subtle text-warning fs-20">
                                                    LG
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xxl={2} md={4} className="col-6">
                                            <div className="avatar-xl mt-3">
                                                <div className="avatar-title rounded bg-danger-subtle text-danger fs-22">
                                                    XL
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <div className="card-body">
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <AvatarExample />
                                    </pre>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Avatar Group</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="mt-lg-0 mt-3">
                                                <p className="text-muted">Use <code>avatar-group</code> class to show avatar images with the group.</p>
                                                <div className="avatar-group">
                                                    <div className="avatar-group-item">
                                                        <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
                                                    </div>
                                                    <div className="avatar-group-item">
                                                        <Image src={avatar5} alt="" className="rounded-circle avatar-sm" />
                                                    </div>
                                                    <div className="avatar-group-item">
                                                        <div className="avatar-sm">
                                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                                                A
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="avatar-group-item">
                                                        <Image src={avatar2} alt="" className="rounded-circle avatar-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="mt-lg-0 mt-3">
                                                <p className="text-muted">Use <code>avatar-group</code> class with <code>data-bs-toggle="tooltip"</code> to show avatar group images with tooltip.</p>
                                                <div className="avatar-group">
                                                    <Link href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
                                                        <Image src={avatar4} alt="" className="rounded-circle avatar-sm" />
                                                    </Link>
                                                    <Link href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Frank Hook">
                                                        <Image src={avatar3} alt="" className="rounded-circle avatar-sm" />
                                                    </Link>
                                                    <Link href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Christi">
                                                        <div className="avatar-sm">
                                                            <div className="avatar-title rounded-circle bg-light text-primary">
                                                                C
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-placement="top" title="mORE">
                                                        <div className="avatar-sm">
                                                            <div className="avatar-title rounded-circle">
                                                                2+
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <AvatarGroupExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={8}>
                            <Card>
                                <Card.Header className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Figures</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="card-title-desc text-muted">Use the included <code>figure</code>, <code>figure-img</code> and <code>figure-caption</code> classes to provide some baseline styles for the HTML5 <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements.</p>
                                    <Row className="g-3">
                                        <Col sm={6}>
                                            <figure className="figure mb-0">
                                                <Image src={img4} className="figure-img img-fluid rounded" alt="..." />
                                                <figcaption className="figure-caption">A caption for the above image.</figcaption>
                                            </figure>
                                        </Col>
                                        <Col sm={6}>
                                            <figure className="figure mb-0">
                                                <Image src={img5} className="figure-img img-fluid rounded" alt="..." />
                                                <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                                            </figure>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <FiguresExample/>
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Responsive Images</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="card-title-desc text-muted">Responsive Images with <code>img-fluid,max-width: 100%; and height: auto;</code> to the image so that it scales with the parent width.</p>
                                    <div>
                                        <Image src={img2} className="img-fluid" alt="Responsive image" />
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ResponsiveExample />
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

export default uiImages;