import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';

// Import Components

import DisplayHeadingExample from './displayHeadingCode';
import ClearfixExample from './clearfixCode';
import VisibilityExample from './visibilityCode';
import TextTruncationExample from './textTruncationCode';
import TextDecrationExample from './textDecrationCode';
import TextTransformExample from './textTransformCode';
import LineHeightExample from './lineHeightCode';
import FontWeightExample from './fontWeightCode';
import FontSizeExample from './fontSizeCode';
import TextWrappingExample from './textWrappingCode';
import HeadingsExample from './headingsCode';
import BlockquotesExample from './blockquotesCode';
import BlockquoteColorExample from './blockquoteColorCode';
import BlockquoteBorderColorExample from './blockquoteBorderColorCode';
import InlineTextExample from './inlineTextCode';
import UnstyleListExample from './unstyleListCode';
import InlineListExample from './inlineListCode';
import DescriptionListExample from './descriptionListCode';

const uiTypography = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Typography | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Typography" />
                    
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Font Family</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Row>
                                        <Col sm={6}>
                                            <div className="text-muted">
                                                <p>Body Font Family</p>
                                                <div>
                                                    <p className="display-4 text-dark fw-medium">Aa</p>
                                                </div>
                                                <div>
                                                    <p className="mb-2">Font Family</p>
                                                    <h5 className="mb-0">"Inter", sans-serif</h5>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={6}>
                                            <div className="text-muted mt-4 mt-sm-0">
                                                <p>Heading Font Family</p>
                                                <div>
                                                    <h1 className="display-4 text-dark fw-medium">Aa</h1>
                                                </div>
                                                <div>
                                                    <p className="mb-2">Font Family</p>
                                                    <h5 className="mb-0">"Inter", sans-serif</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Headings</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>
                                    <div>
                                        <h1 className="mb-3">h1. Bootstrap heading <small className="text-muted">Semibold 2.03125rem (32.5px)</small></h1>
                                        <h2 className="mb-3">h2. Bootstrap heading <small className="text-muted">Semibold 1.625rem (26px)</small></h2>
                                        <h3 className="mb-3">h3. Bootstrap heading <small className="text-muted">Semibold 1.42188rem (22.8px)</small></h3>
                                        <h4 className="mb-3">h4. Bootstrap heading <small className="text-muted">Semibold 1.21875rem (19.5px)</small></h4>
                                        <h5 className="mb-3">h5. Bootstrap heading <small className="text-muted">Semibold 1.01563rem (16.25px)</small></h5>
                                        <h6 className="mb-1">h6. Bootstrap heading <small className="text-muted">Semibold 0.8125rem (13px)</small></h6>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "233px"}}>
                                        <HeadingsExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Display Headings</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Traditional heading elements are designed to work best in the meat of your page content.</p>
                                    <div>
                                        <h1 className="display-1 mb-4">Display 1</h1>
                                        <h1 className="display-2 mb-4">Display 2</h1>
                                        <h1 className="display-3 mb-4">Display 3</h1>
                                        <h1 className="display-4 mb-4">Display 4</h1>
                                        <h1 className="display-5 mb-4">Display 5</h1>
                                        <h1 className="display-6 mb-0">Display 6</h1>
                                    </div>

                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <DisplayHeadingExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Blockquotes</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>&lt;blockquote className="blockquote"&gt;</code> class for quoting blocks of content from another source within your document .</p>
                                    <Row>
                                        <Col xxl={6}>
                                            <div>
                                                <blockquote className="blockquote fs-14 mb-0">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    <footer className="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                                </blockquote>
                                            </div>
                                        </Col>
                                        <Col xxl={6}>
                                            <div className="mt-4 mt-lg-0">
                                                <blockquote className="blockquote blockquote-reverse fs-14 mb-0">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    <footer className="blockquote-footer mt-0">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                                </blockquote>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <BlockquotesExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Blockquote Background Color</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted text-muted">Use <code>blockquote-</code> class with the below-mentioned color variation to set the blockquote background color.</p>
                                    <div>
                                        <Row className="gy-4">
                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-primary rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Primary Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>

                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-secondary rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Secondary Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>

                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-success rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Success Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>

                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-info rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Info Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>

                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-danger rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Danger Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>

                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-warning rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Warning Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>

                                            <Col xl={4} md={6}>
                                                <blockquote className="blockquote custom-blockquote blockquote-dark rounded mb-0">
                                                    <p className="text-dark mb-2">Custom Blockquote Dark Example</p>
                                                    <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                                </blockquote>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <BlockquoteColorExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Blockquote Border Color</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted text-muted">Use <code>blockquote-outline</code> class to set blockquote border color.</p>
                                    <Row className="gy-4">

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-primary rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Primary Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-secondary rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Secondary Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-success rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Success Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-info rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Info Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-danger rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Danger Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-warning rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Warning Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <blockquote className="blockquote custom-blockquote blockquote-outline blockquote-dark rounded mb-0">
                                                <p className="text-dark mb-2">Custom Blockquote Outline Dark Example</p>
                                                <footer className="blockquote-footer mt-0">Angie Burt <cite title="Source Title">Designer</cite></footer>
                                            </blockquote>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <BlockquoteBorderColorExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Inline Text Elements</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Styling for inline HTML5 elements.</p>
                                    <div>
                                        <p className="lead">
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                        </p>
                                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                        <p><u>This line of text will render as underlined</u></p>
                                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                                        <p><strong>This line rendered as bold text.</strong></p>
                                        <p className="mb-0"><em>This line rendered as italicized text.</em></p>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "315px"}}>
                                        <InlineTextExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Unstyled List</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>list-unstyled</code> class Remove the default list-style and left margin on list
                                        items (immediate children only). <strong>This only applies to immediate
                                            children list items</strong>, meaning you will need to add the class
                                        for any nested lists.</p>

                                    <div>
                                        <ul className="list-unstyled mb-0">
                                            <li>Integer molestie lorem at massa</li>
                                            <li>Nulla volutpat aliquam velit
                                                <ul>
                                                    <li>Phasellus iaculis neque</li>
                                                    <li>Purus sodales ultricies</li>
                                                    <li>Vestibulum laoreet porttitor sem</li>
                                                </ul>
                                            </li>
                                            <li>Faucibus porta lacus fringilla vel</li>
                                        </ul>
                                    </div>

                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "140px"}}>
                                        <UnstyleListExample />
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Inline List</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>list-inline</code> and
                                        <code>list-inline-item</code> class combination to remove a list’s bullets and apply some light margin.
                                    </p>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">Lorem ipsum</li>
                                        <li className="list-inline-item">Phasellus iaculis</li>
                                        <li className="list-inline-item">Nulla volutpat</li>
                                    </ul>

                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <InlineListExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Description List Alignment</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Align terms and descriptions
                                        horizontally by using our grid system’s predefined classes (or semantic
                                        mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to
                                        truncate the text with an ellipsis.</p>

                                    <div>
                                        <dl className="row mb-0">
                                            <dt className="col-sm-3">Description lists</dt>
                                            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                                            <dt className="col-sm-3">Euismod</dt>
                                            <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                            <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

                                            <dt className="col-sm-3">Malesuada porta</dt>
                                            <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                                            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                            <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                                            <dt className="col-sm-3">Nesting</dt>
                                            <dd className="col-sm-9 mb-0">
                                                <dl className="row mb-0">
                                                    <dt className="col-sm-4">Nested definition list</dt>
                                                    <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                                                </dl>
                                            </dd>
                                        </dl>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "240px"}}>
                                        <DescriptionListExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Text Wrapping and Overflow</h4>
                                </Card.Header>

                                <Card.Header>
                                    <div>
                                        <p className="text-muted">Use <code>text-wrap</code> class to wrap the text.</p>
                                        <div className="badge bg-primary text-wrap" style={{width: "6rem"}}>
                                            This text should wrap.
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-muted">Use <code>text-nowrap</code> class to prevent text from wrapping.</p>
                                        <div className="text-nowrap border bg-light mt-3" style={{width: "8rem"}}>
                                            This text should overflow the parent.
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "95px"}}>
                                        
                                    </pre>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Word Break</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <p className="text-muted">Use <code>text-break</code> class to prevent long strings of text from breaking your components' layout.</p>
                                        <p className="text-break mb-0">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                                    </div>

                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <TextWrappingExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <div className="col-xxl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Font size</h4>
                                </div>

                                <div className="card-body">
                                    <p className="text-muted">Use <code>fs-1</code>, <code>fs-2</code>, <code>fs-3</code>, <code>fs-4</code>, <code>fs-5</code>, or <code>fs-6</code>, class to change the font-size respectively.</p>
                                    <div>
                                        <p className="fs-1">.fs-1 text</p>
                                        <p className="fs-2">.fs-2 text</p>
                                        <p className="fs-3">.fs-3 text</p>
                                        <p className="fs-4">.fs-4 text</p>
                                        <p className="fs-5">.fs-5 text</p>
                                        <p className="fs-6">.fs-6 text</p>
                                    </div>
                                </div>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <div className="card-body">
                                    <pre className="language-markup">
                                        <FontSizeExample />
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Font weight and italics</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>fst-</code>with modifier class to change font-style and Use <code>fw-</code>with modifier class to change font-weight.</p>
                                    <div>
                                        <p className="fw-bold">Bold text.</p>
                                        <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
                                        <p className="fw-semibold">Semibold weight text.</p>
                                        <p className="fw-normal">Normal weight text.</p>
                                        <p className="fw-light">Light weight text.</p>
                                        <p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
                                        <p className="fst-italic">Italic text.</p>
                                        <p className="fst-normal mb-0">Text with normal font style</p>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "90px"}}>
                                        <FontWeightExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line height</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>lh-</code> with modifier class to change the line height of an element.</p>
                                    <div>
                                        <p className="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
                                        <p className="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
                                        <p className="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>
                                        <p className="lh-lg mb-0">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element.</p>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "160px"}}>
                                        <LineHeightExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Text Transform</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>text-lowercase</code>, <code>text-uppercase</code>, or <code>text-capitalize</code> to transform the text.</p>
                                    <div>
                                        <p className="text-lowercase">Lowercased text.</p>
                                        <p className="text-uppercase">Uppercased text.</p>
                                        <p className="text-capitalize mb-0">CapiTaliZed text.</p>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "118px"}}>
                                        <TextTransformExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Text Decoration</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>text-decoration-underline</code>, <code>text-decoration-line-through</code>, or <code>text-decoration-none</code> class to decorate text in components respectively.</p>
                                    <div>
                                        <p className="text-decoration-underline">This text has a line underneath it.</p>
                                        <p className="text-decoration-line-through">This text has a line going through it.</p>
                                        <Link href="#" className="text-decoration-none">This link has its text decoration removed</Link>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <TextDecrationExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Text Truncation</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>text-truncate</code> class to truncate the text with an ellipsis. Requires <code>display: inline-block</code> or <code>display: block</code>.</p>
                                    <div>
                                        <Row>
                                            <div className="col-2 text-truncate">
                                                This text is quite long, and will be truncated once displayed.
                                            </div>
                                        </Row>

                                        <span className="d-inline-block text-truncate" style={{maxWidth: "150px"}}>
                                            This text is quite long, and will be truncated once displayed.
                                        </span>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "100px"}}>
                                        <TextTruncationExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Visibility</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>visible</code> or <code>invisible</code> class to show or to hide elements respectively.</p>
                                    <div>
                                        <div className="visible">text visible Lorem ipsum dolor sit amet</div>
                                        <div className="invisible">text invisible Lorem ipsum dolor sit amet</div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "105px"}}>
                                        <VisibilityExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Clearfix</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>clearfix</code> class to clear/set floated content within a container.</p>
                                    <div className="bg-light clearfix p-3">
                                        <Button variant='secondary' className="float-start">Example Button floated left</Button>
                                        <Button variant='success' className="float-end">Example Button floated right</Button>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <ClearfixExample />
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

export default uiTypography;