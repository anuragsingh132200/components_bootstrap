import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// 
import Simple from '@component/BubbleChart/Simple';
import ThreeDBubble from '@component/BubbleChart/ThreeDBubble';

import { Card, Col, Container, Row } from 'react-bootstrap';

const BubbleChart = () => {

    return (
        <React.Fragment>

            <Head>
                <title>Bubble Charts | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">                
                <Container fluid>
                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Bubble Charts" />

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Bubble Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Simple dataColors='["--tb-primary", "--tb-info", "--tb-warning", "--tb-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">3D Bubble Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ThreeDBubble dataColors='["--tb-primary", "--tb-success", "--tb-warning", "--tb-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BubbleChart;