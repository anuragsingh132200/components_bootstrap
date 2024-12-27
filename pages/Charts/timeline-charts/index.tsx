import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

// import {
//     Basic,
//     DifferentColor,
//     MultiSeries,
//     Advanced,
//     MultipleSeries
// } from "./TimelineCharts";
import Basic from '@component/BarCharts/Basic';
import DifferentColor from '@component/TimelineChart/DifferentColor';
import MultiSeries from '@component/TimelineChart/MultiSeries';
import Advanced from '@component/TimelineChart/Advanced';
import MultipleSeries from '@component/TimelineChart/MultipleSeries';

const TimelineCharts = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Timeline Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">                
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Timeline Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic TimeLine Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Basic dataColors='["--tb-primary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Different Color For Each Bar</h4>
                                </Card.Header>
                                <Card.Body>
                                    <DifferentColor dataColors='["--tb-primary", "--tb-danger", "--tb-success", "--tb-warning", "--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multi Series Timeline</h4>
                                </Card.Header>
                                <Card.Body>
                                    <MultiSeries dataColors='["--tb-primary","--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Advanced Timeline (Multiple Range)</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Advanced dataColors='["--tb-primary", "--tb-success", "--tb-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multiple series � Group rows</h4>
                                </Card.Header>

                                <Card.Body>
                                    <MultipleSeries dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info","--tb-gray","--tb-pink","--tb-purple","--tb-secondary", "--tb-dark"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TimelineCharts;