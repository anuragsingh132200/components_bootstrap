import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// import { SlideCodeExample, WithControlExample, WithIndicatorExample, WithCaptionExample, CrossFadeExample, InduvidualIntervalExample, DisableTouchExample, DarkVariantExample } from './uiCarouselCode'
import SlideCodeExample from './SlideCodeExample';
import WithControlExample from './WithControlExample';
import WithIndicatorExample from './WithIndicatorExample';
import WithCaptionExample from './WithCaptionExample';
import CrossFadeExample from './CrossFadeExample';
import InduvidualIntervalExample from './InduvidualIntervalExample';
import DisableTouchExample from './DisableTouchExample';
import DarkVariantExample from './DarkVariantExample';

// Import Components
import Slide from './uiCarouselTypes/Slide';
import SlideWithControls from './uiCarouselTypes/SlideWithControls';
import WithIndicators from './uiCarouselTypes/WithIndicators';
import WithCaptions from './uiCarouselTypes/WithCaptions'
import CrossfadeAnimation from './uiCarouselTypes/CrossfadeAnimation'
import CarouselitemInterval from './uiCarouselTypes/CarouselitemInterval'
import DisableTouch from './uiCarouselTypes/DisableTouch'
import DarkVariant from './uiCarouselTypes/DarkVariant'

const uiCarousel = () => {
    return (
        <React.Fragment>

            <Head>
                <title>Carousel | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Carousel" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Slides Only</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use<code> slide</code> class to set carousel with slides. Note the presence of the <code>d-block</code> and <code>w-100</code> class on carousel images to prevent browser default image alignment.</p>
                                    <Slide />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <SlideCodeExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">With Controls</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class with &lt;button&gt; or &lt;a&gt; tag element to show carousel with control navigation.</p>
                                    <SlideWithControls />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <WithControlExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">with Indicators</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>carousel-indicators</code> class with &lt;ol&gt; element to show carousel with indicators.</p>
                                    <WithIndicators />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <WithIndicatorExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">with Captions</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>carousel-caption</code> class to add captions to the carousel.</p>
                                    <WithCaptions />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <WithCaptionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Crossfade Animation</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>carousel-fade</code> class to the carousel to animate slides with a fade transition instead of a slide.</p>
                                    <CrossfadeAnimation />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <CrossFadeExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Individual carousel-item Interval</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>data-bs-interval=" "</code> to a carousel-item to change the amount of time to delay between automatically cycling to the next item.</p>
                                    <CarouselitemInterval />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <InduvidualIntervalExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Disable Touch Swiping</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Carousels support swiping left/right on touchscreen devices to move between slides.
                                        This can be disabled using the <code>data-bs-touch</code> attribute. The example below also does not include the
                                        <code>data-bs-ride attribute</code> and has <code>data-bs-interval="false"</code> so it doesn’t autoplay.
                                    </p>
                                    <DisableTouch />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <DisableTouchExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dark Variant</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>carousel-dark</code> class to the carousel for darker controls, indicators, and captions.</p>
                                    <DarkVariant />
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <DarkVariantExample />
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

export default uiCarousel;