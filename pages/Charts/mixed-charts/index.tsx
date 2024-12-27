import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

// import {
//     Line,
//     YAxis,
//     Area,
//     LineColumnArea
// } from "./MixedCharts";

import Line from '@component/MixChart/Line';
import YAxis from '@component/MixChart/YAxis';
import Area from '@component/MixChart/Area';
import LineColumnArea from '@component/MixChart/LineColumnArea';

const MixedCharts = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Mixed Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Mixed Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line & Column Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Line dataColors='["--tb-primary", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multiple Y-Axis Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <YAxis dataColors='["--tb-primary", "--tb-info", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line & Area Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Area dataColors='["--tb-primary", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line, Column & Area Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <LineColumnArea dataColors='["--tb-primary", "--tb-success", "--tb-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MixedCharts;