import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';
import { Card, Col, Container, Row } from 'react-bootstrap';

// import {
//     Basic,
//     Datetime,
//     ImagesChart
// } from "./ScatterCharts";
import Basic from '@component/BarCharts/Basic';
import Datetime from '@component/ScatterChart/Datetime';
import ImagesChart from '@component/ScatterChart/ImageChart';

const ScatterCharts = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <Head>
                        <title>Scatter Charts | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Scatter Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Scatter Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Basic dataColors='["--tb-primary", "--tb-success", "--tb-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Scatter - Datetime Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Datetime dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-warning", "--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>        
                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Scatter Images Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ImagesChart dataColors='["--tb-primary", "--tb-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ScatterCharts;