import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// import {
//     Basic,
//     Scatter,
//     Horizontal
// } from "./BoxplotCharts";
import Basic from '@component/BoxplotCharts/Basic';
import Scatter from '@component/BoxplotCharts/Scatter';
import Horizontal from '@component/BoxplotCharts/Horizontal';
import { Card, Col, Container, Row } from 'react-bootstrap';

const BoxplotCharts = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Boxplot Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">           
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Boxplot Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Box Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Basic dataColors='["--tb-primary", "--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Boxplot with Scatter Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Scatter dataColors='["--tb-danger", "--tb-info", "--tb-danger", "--tb-primary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal BoxPlot</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Horizontal dataColors='["--tb-light", "--tb-card-bg-custom"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BoxplotCharts;