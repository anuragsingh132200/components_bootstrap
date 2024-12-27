import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
// import {BasicPolar,PolarMonochrome} from './PolarCharts'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

import BasicPolar from '@component/PolarChart/BasicPolar';
import PolarMonochrome from '@component/PolarChart/PolarMonochrome';

const Polarcharts = () => {

    return (
        <div className="page-content">
            <Container fluid>

                <Head>
                    <title>Polar Charts | Hybrix - Admin & Dashboard Template</title>
                </Head>

                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Polar Charts" />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Polararea Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <BasicPolar dataColors='["--tb-primary", "--tb-success", "--tb-warning","--tb-danger", "--tb-info", "--tb-success", "--tb-primary", "--tb-dark", "--tb-secondary"]'/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">PolarArea Monochrome</h4>
                            </Card.Header>
                            <Card.Body>
                                <PolarMonochrome />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Polarcharts