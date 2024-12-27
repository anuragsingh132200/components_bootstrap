import React from 'react';
// import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// import {
//     Basic,
//     ComboCandlestick,
//     ComboCandlestick1,
//     Category,
//     CandlestickLine
// } from "./CandlestickChart";
import Basic from "@component/CandlestickChart/Basic"
import ComboCandlestick from "@component/CandlestickChart/ComboCandlestick"
import ComboCandlestick1 from "@component/CandlestickChart/ComboCandlestick1"
import Category from "@component/CandlestickChart/CandlestickLine"
import CandlestickLine from "@component/CandlestickChart/CandlestickLine";

import { Card, Col, Container, Row } from 'react-bootstrap';

const CandlestickChart = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Candlestick Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Candlestick Chart" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Candlestick Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Basic dataColors='["--tb-success", "--tb-danger"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Candlestick Synced with Brush Chart (Combo)</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <div id="combo_candlestick">
                                            <ComboCandlestick dataColors='["--tb-info", "--tb-danger"]' />
                                        </div>
                                        <div id="combo_candlestick_chart">
                                            <ComboCandlestick1 dataColors='["--tb-warning", "--tb-danger"]' />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Category X-Axis</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Category dataColors='["--tb-success", "--tb-danger"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Candlestick with line</h4>
                                </Card.Header>

                                <Card.Body>
                                    <CandlestickLine dataColors='["--tb-success", "--tb-danger", "--tb-info", "--tb-warning"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CandlestickChart;