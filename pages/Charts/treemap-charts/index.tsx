import React from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';
import BasicTreemap from '@component/TreemapChart/BasicTreemap';
import MultiTreemap from '@component/TreemapChart/MultiTreemap';
import DiffColorTreemap from '@component/TreemapChart/DiffColorTreemap';
import ColorRangeTreemap from '@component/TreemapChart/ColorRangeTreemap';

const TreemapCharts = () => {

  return (
    <React.Fragment>
            <div className="page-content">
                <Container fluid>

                <Head>
                    <title>Treemap Charts | Hybrix - Admin & Dashboard Template</title>
                </Head>

                    <Breadcrumb breadcrumb="Apexcharts" breadcrumbItem="Treemap Charts" />

                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Basic Treemap Charts</h4>
                                    </Card.Header>

                                    <Card.Body>
                                        <BasicTreemap dataColors='["--tb-success"]'/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            

                            <Col xl={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Multi-Dimensional Treemap Chart</h4>
                                    </Card.Header>

                                    <Card.Body>
                                        <MultiTreemap dataColors='["--tb-primary","--tb-success"]'/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>                       

                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Distributed Treemap Chart (Different Color for  each Cell)</h4>
                                    </Card.Header>

                                    <Card.Body>
                                        <DiffColorTreemap dataColors='["--tb-primary", "--tb-secondary", "--tb-success", "--tb-info","--tb-warning", "--tb-danger"]'/>
                                    </Card.Body>
                                </Card>
                            </Col>                            

                            <Col xl={6}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Treemap Chart with Color Ranges</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <ColorRangeTreemap dataColors='["--tb-info","--tb-danger"]'/>
                                    </Card.Body>
                                </Card>
                            </Col>                            
                        </Row>                     
                    </Container>
            </div>
        </React.Fragment>
  )
}

export default TreemapCharts