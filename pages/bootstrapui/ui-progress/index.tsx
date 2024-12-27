import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Head from 'next/head';

// Import Components

import DefaultProgressExample from './defaultProgressCode';
import BackgroundColorExample from './backgroundColorCode';
import LabelExample from './labelCode';
import MultipleBarsExample from './multipleBarsCode';
import StripedExample from './stripedCode';
import AnimatedStripedExample from './animatedStripedCode';
import HeightExample from './heightCode';
import AnimatedExample from './animatedCode';
import GradientExample from './gradientCode';
import CustomExample from './customCode';
import CustomProgressExample from './customProgressCode';
import StepProgressArrowExample from './stepProgressArrowCode';
import ContentProgressExmaple from './contentProgressExmapleCode';
import ProgressWithStepExample from './progressWithStepCode';

const uiProgress = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Progress | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Progress" />

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>progress</code> class to show default progress.</p>

                                    <div>
                                        <div className="mb-4">
                                            <ProgressBar now={0} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar now={25} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar now={50} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar now={75} />
                                        </div>
                                        <div>
                                            <ProgressBar now={100} />
                                        </div>
                                    </div>

                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "240px" }}>
                                        <DefaultProgressExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Progress with background color</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-</code> class to progress bar class with the below-mentioned color variation to set the background color progress bar.</p>
                                    <div>
                                        <div className="mb-4">
                                            <ProgressBar variant='primary' now={15} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar variant='success' now={25} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar variant='info' now={50} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar variant='warning' now={75} />
                                        </div>
                                        <div>
                                            <ProgressBar variant='danger' now={100} />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "240px" }}>
                                        <BackgroundColorExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Progress with Label</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Add labels to your progress bars by placing text within the progress-bar.</p>
                                    <div>
                                        <ProgressBar now={25} label={`${25}%`} />
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <LabelExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multiple Bars</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-</code> class to progress bar class with the below-mentioned color to change the appearance of individual progress bars.</p>
                                    <ProgressBar>
                                        <ProgressBar now={15} key={1} />
                                        <ProgressBar variant="success" now={30} key={2} />
                                        <ProgressBar variant="info" now={20} key={3} />
                                    </ProgressBar>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "90px" }}>
                                        <MultipleBarsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Height</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>progress-sm</code>, <code>progress-lg</code>, or
                                        <code>progress-xl</code> class to set the different heights of progress.
                                    </p>
                                    <div>
                                        <div className="mb-4">
                                            <h5 className="fs-13">Small Progress</h5>
                                            <div>
                                                <ProgressBar now={25} className="progress-sm" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="fs-13">Default Progress </h5>
                                            <div>
                                                <ProgressBar variant='success' now={40} />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="fs-13">Large Progress</h5>
                                            <div>
                                                <ProgressBar variant='warning' now={25} className="progress-lg" />
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="fs-13">Extra Large Progress</h5>
                                            <div>
                                                <ProgressBar variant='danger' now={25} className="progress-xl" />
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card>
                                    <pre className="language-markup" style={{ height: "310px" }}>
                                        <HeightExample />
                                    </pre>
                                </Card>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Striped Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>progress-bar-striped</code> class to add strip to the progress.</p>
                                    <div>
                                        <div className="mb-4">
                                            <ProgressBar striped now={25} />
                                        </div>
                                        <div>
                                            <ProgressBar variant='success' striped now={40} />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <StripedExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Animated Striped Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>progress-bar-striped progress-bar-animated</code> class to add strip with animation to the progress.</p>
                                    <div>
                                        <ProgressBar striped animated now={75} />
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <AnimatedStripedExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gradient Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-gradient</code> class to show gradient progress bar.</p>
                                    <div>
                                        <div className="mb-4">
                                            <ProgressBar now={15} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar variant='success' now={25} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar variant='info' now={50} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar variant='warning' now={75} />
                                        </div>
                                        <div>
                                            <ProgressBar variant='danger' now={100} />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <GradientExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Animated Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>animated-progress</code> class to show progress with animation.</p>
                                    <div>
                                        <div className="mb-4">
                                            <ProgressBar animated now={15} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar animated variant='success' now={25} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar animated variant='info' now={50} />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar animated variant='warning' now={75} />
                                        </div>
                                        <div>
                                            <ProgressBar animated variant='danger' now={100} />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <AnimatedExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>animated-progress custom-progess </code> class to show custom progress with animation.</p>
                                    <div>
                                        <div className="mb-4">
                                            <ProgressBar now={15} className="custom-progress" />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar now={25} variant='success' className='custom-progress' />
                                        </div>
                                        <div className="custom-progress mb-4">
                                            <ProgressBar now={50} variant='info' className='custom-progress' />
                                        </div>
                                        <div className="mb-4">
                                            <ProgressBar now={75} variant='warning' className='custom-progress' />
                                        </div>
                                        <div>
                                            <ProgressBar now={100} variant='danger' className='custom-progress' />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <CustomExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom Progress with Label</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use
                                        <code>animated-progress custom-progess progress-label</code> class to show
                                        custom progress with animation and label.
                                    </p>
                                    <div>
                                        <div className="d-flex align-items-center pb-2 mt-4">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="progress-label">
                                                    <div>
                                                        <ProgressBar now={15} className='custom-progress' />
                                                        <div className="label">15%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center py-2">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="progress-label">
                                                    <div>
                                                        <ProgressBar variant='success' now={25} className='custom-progress' />
                                                        <div className="label">25%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center py-2">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <div className="avatar-title bg-light rounded-circle text-muted fs-16">
                                                        <i className="mdi mdi-github"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="progress-label">
                                                    <div>
                                                        <ProgressBar variant='info' now={25} className='custom-progress' />
                                                        <div className="label">30%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "330px" }}>
                                        <CustomProgressExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Content Progress</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted pb-2">Example of progress with content wrapped in progress.</p>
                                    <Card.Body>

                                        <Card className="bg-light overflow-hidden shadow-none">
                                            <Card.Body>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0"><b className="text-secondary">30%</b> Update in progress...</h6>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h6 className="mb-0">1 min left</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                            <div className="bg-secondary-subtle rounded-0">
                                                <ProgressBar now={30} variant='secondary' />
                                            </div>
                                        </Card>

                                        <Card className="bg-light overflow-hidden shadow-none">
                                            <Card.Body>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0"><b className="text-success">60%</b> Update in progress...</h6>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h6 className="mb-0">45s left</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                            <div className="bg-success-subtle rounded-0">
                                                <ProgressBar now={60} variant='success' />
                                            </div>
                                        </Card>

                                        <Card className="bg-light overflow-hidden shadow-none">
                                            <Card.Body>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0"><b className="text-danger">82%</b> Update in progress...</h6>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <h6 className="mb-0">25s left</h6>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                            <div className="bg-danger-subtle rounded-0">
                                                <ProgressBar now={82} variant='danger' />
                                            </div>
                                        </Card>

                                    </Card.Body>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{ height: "345px" }}>
                                        <ContentProgressExmaple />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Progress with Steps</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted pb-2">Here is the example of progress which is represented by steps completion.</p>
                                    <div className="position-relative m-4">
                                        <div style={{ height: "1px" }}>
                                            <ProgressBar now={50} className="progress-sm" />
                                        </div>
                                        <Button className="position-absolute top-0 start-0 translate-middle btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>1</Button>
                                        <Button className="position-absolute top-0 start-50 translate-middle btn-sm btn-primary rounded-pill" style={{ width: "2rem", height: "2rem" }}>2</Button>
                                        <Button className="position-absolute top-0 start-100 translate-middle btn-sm btn-light rounded-pill" style={{ width: "2rem", height: "2rem" }}>3</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ProgressWithStepExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Step Progress with Arrow</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted pb-2">Use <code>progress-step-arrow </code>class to create step progress with an arrow.</p>
                                    <ProgressBar className='progress-step-arrow progress-info'>
                                        <ProgressBar now={100} label={'Step1'} />
                                        <ProgressBar now={100} label={'Step2'} />
                                        <ProgressBar now={100} variant='light text-dark' label={'Step3'} />
                                    </ProgressBar>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <StepProgressArrowExample />
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

export default uiProgress;