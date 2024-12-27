import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

// import {
//     BasicLineCharts,
//     ZoomableTimeseries,
//     LinewithDataLabels,
//     DashedLine,
//     LinewithAnnotations,
//     BrushChart,
//     BrushChart1,
//     SteplineChart,
//     GradientCharts,
//     MissingData,
//     ChartSyncingLine,
//     ChartSyncingLine2,
//     ChartSyncingArea
// } from "./LineCharts";
import BasicLineCharts from '@component/LineChart/BasicLineCharts';
import ZoomableTimeseries from '@component/LineChart/ZoomableTimeseries';
import LinewithDataLabels from '@component/LineChart/LineWithDataLabels';
import DashedLine from '@component/LineChart/DashedLine';
import LinewithAnnotations from '@component/LineChart/LineWithAnnotations';
import BrushChart from '@component/LineChart/BrushChart';
import BrushChart1 from '@component/LineChart/BrushChart1';
import SteplineChart from '@component/LineChart/SteplineChart';
import GradientCharts from '@component/LineChart/GradientCharts';
import MissingData from '@component/LineChart/MissingData';
import ChartSyncingLine from '@component/LineChart/ChartSyncingLine';
import ChartSyncingLine2 from '@component/LineChart/ChartSyncingLine2';
import ChartSyncingArea from '@component/LineChart/ChartSyncingArea';

const LineCharts = () => {
    return (
        <React.Fragment>

            <Head>
                <title>Line Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Line Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Line Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <BasicLineCharts dataColors='["--tb-primary"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Zoomable Timeseries</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ZoomableTimeseries dataColors='["--tb-secondary"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line with Data Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <LinewithDataLabels dataColors='["--tb-primary", "--tb-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dashed Line</h4>
                                </Card.Header>
                                <Card.Body>
                                    <DashedLine dataColors='["--tb-primary", "--tb-danger", "--tb-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line with Annotations</h4>
                                </Card.Header>
                                <Card.Body>
                                    <LinewithAnnotations dataColors='["--tb-primary"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Brush Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <BrushChart dataColors='["--tb-danger"]' />
                                    </div>
                                    <div>
                                        <BrushChart1 dataColors='["--tb-info"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stepline Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <SteplineChart dataColors='["--tb-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gradient Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <GradientCharts dataColors='["--tb-success"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Missing Data/ Null Value Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <MissingData dataColors='["--tb-primary", "--tb-danger", "--tb-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Syncing Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <ChartSyncingLine dataColors='["--tb-primary"]' className="apex-charts" dir="ltr"/>
                                        <ChartSyncingLine2 dataColors='["--tb-warning"]' className="apex-charts" dir="ltr"/>
                                        <ChartSyncingArea dataColors='["--tb-success"]' className="apex-charts" dir="ltr"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default LineCharts;