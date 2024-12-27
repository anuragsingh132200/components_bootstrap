import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
// import {SimpleRadar,MultipleRadar,PolygonRadar} from './RadarCharts';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

import SimpleRadar from '@component/RadarChart/SimpleRadar';
import MultipleRadar from '@component/RadarChart/MultipleRadar';
import PolygonRadar from '@component/RadarChart/PolygonRadar';
const RadarCharts = () => {

    return (
        <div className="page-content">
            <Container fluid>

                <Head>
                    <title>Radar Charts | Hybrix - Admin & Dashboard Template</title>
                </Head>

                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Radar Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Radar Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <SimpleRadar dataColors='["--tb-success"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radar Chart - Multiple series</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultipleRadar dataColors='["--tb-danger", "--tb-success", "--tb-primary"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radar Chart - Polygon Fill</h4>
                            </Card.Header>
                            <Card.Body>
                                <PolygonRadar dataColors='["--tb-info"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RadarCharts