import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
// import { SimpleRadialbar, MultipleRadialbar, CircleRadialbar, GradientCircleRadialbar, StrokedCircleRadial, SemiCircularRadial, ImageRadialbar } from './RadialbarCharts';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';
import SimpleRadialbar from '@component/RadialbarChart/SimpleRadialbar';
import MultipleRadialbar from '@component/RadialbarChart/MultipleRadialbar';
import CircleRadialbar from '@component/RadialbarChart/CircleRadialbar';
import GradientCircleRadialbar from '@component/RadialbarChart/GradientCircleRadialbar';
import StrokedCircleRadial from '@component/RadialbarChart/StrokedCircleRadial';
import SemiCircularRadial from '@component/RadialbarChart/SemiCircularRadial';
import ImageRadialbar from '@component/RadialbarChart/ImageRadialbar';

const RadialbarCharts = () => {

    return (
        <div className="page-content">
            <Container fluid>

                <Head>
                    <title>Radialbar Charts | Hybrix - Admin & Dashboard Template</title>
                </Head>

                <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Radialbar Charts" />

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Radialbar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SimpleRadialbar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multiple Radialbar</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultipleRadialbar dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Circle Chart - Custom Angle</h4>
                            </Card.Header>
                            <Card.Body>
                                <CircleRadialbar dataColors='["--tb-primary", "--tb-info", "--tb-danger", "--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Gradient Circle Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <GradientCircleRadialbar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stroked Circle Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <StrokedCircleRadial dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radialbars with Image</h4>
                            </Card.Header>

                            <Card.Body>
                                <ImageRadialbar dataColors='["--tb-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Semi Circular Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SemiCircularRadial dataColors='["--tb-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RadialbarCharts;