import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

// import {
//     BasicColumn,
//     ColumnWithLable,
//     StackedColumn,
//     StackedColumn2,
//     ColumnMarker,
//     RotateLable,
//     NagetiveLable,
//     RangeColumn,
//     DynamicColumn,
//     Quarter,
//     DistributedColumn,
//     ColumnGroupLabels
// } from "./ColumnCharts";

import BasicColumn from '@component/ColumnChart/BasicColumn';
import ColumnWithLable from '@component/ColumnChart/ColumnWithLable';
import StackedColumn from '@component/ColumnChart/StackedColumn';
import StackedColumn2 from '@component/ColumnChart/StackedColumn2';
import ColumnMarker from '@component/ColumnChart/ColumnMaker';
import RotateLable from '@component/ColumnChart/RotateLable';
import NagetiveLable from '@component/ColumnChart/NagetiveLable';
import RangeColumn from '@component/ColumnChart/RangeColumn';
import DynamicColumn from '@component/ColumnChart/DynamicColumn';
import Quarter from '@component/ColumnChart/Quarter';
import DistributedColumn from '@component/ColumnChart/DistributedColumn';
import ColumnGroupLabels from '@component/ColumnChart/ColumnGroupLabels';

const ColumnCharts = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Column Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">           
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Column Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Column Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <BasicColumn dataColors='["--tb-danger", "--tb-primary", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Data Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ColumnWithLable dataColors='["--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Column Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <StackedColumn dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Column 100</h4>
                                </Card.Header>
                                <Card.Body>
                                    <StackedColumn2 dataColors='["--tb-primary", "--tb-success", "--tb-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Markers</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ColumnMarker dataColors='["--tb-success", "--tb-primary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Rotated Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <RotateLable dataColors='["--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Nagetive Values</h4>
                                </Card.Header>
                                <Card.Body>
                                    <NagetiveLable dataColors='["--tb-success", "--tb-danger", "--tb-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Range Column Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <RangeColumn dataColors='["--tb-primary", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dynamic Loaded Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div id="dynamicloadedchart-wrap" dir="ltr">
                                        <div id="chart-year" className="apex-charts">
                                            <DynamicColumn dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-info"]'/>
                                        </div>
                                        <div id="chart-quarter" className="apex-charts">
                                            <Quarter dataColors='["--tb-primary"]'/>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Distributed Columns Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <DistributedColumn dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger", "--tb-dark", "--tb-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Group Label</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ColumnGroupLabels dataColors='["--tb-info"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ColumnCharts;