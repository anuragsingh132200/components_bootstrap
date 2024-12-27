import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

import Basic from "@component/BarCharts/Basic";
import CustomDataLabel from "@component/BarCharts/CustomDataLabel";
import Stacked from '@component/BarCharts/Stacked';
import Stacked2 from '@component/BarCharts/Stacked2';
import Negative from '@component/BarCharts/Negative';
import Markers from '@component/BarCharts/Markers';
import Reversed from '@component/BarCharts/Reversed';
import Patterned from '@component/BarCharts/Patterned';
import Groupes from '@component/BarCharts/Groupes';
import BarwithImages from '@component/BarCharts/BarWithImages';

const BarCharts = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Bar Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Bar Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Basic dataColors='["--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom DataLabels Bar</h4>
                                </Card.Header>
                                <Card.Body>
                                    <CustomDataLabel dataColors='["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-primary", "--tb-success", "--tb-secondary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Stacked dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Bars 100</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Stacked2 dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bar with Negative Values</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Negative dataColors='["--tb-primary", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bar with Markers</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Markers dataColors='["--tb-success", "--tb-primary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Reversed Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Reversed dataColors='["--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Patterned Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Patterned dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Grouped Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Groupes dataColors='["--tb-primary", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bar with Images</h4>
                                </Card.Header>
                                <Card.Body>
                                    <BarwithImages />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BarCharts;