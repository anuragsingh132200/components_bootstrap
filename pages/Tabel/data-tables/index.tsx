import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// Import Components
// import { BasicTable, ScrollVertical, ScrollHorizontal, AlternativePagination, FixedHeaderDatatables, ModalDataDatatables, AjaxDatatables } from './datatableCom'
import BasicTable from './BasicTable';
import ScrollVertical from './ScrollVertical';
import ScrollHorizontal from './ScrollHorizontal';
import AlternativePagination from './AlternativePagination';
import FixedHeaderDatatables from './FixedHeaderDatatables';
import ModalDataDatatables from './ModalDataDatatables';
import AjaxDatatables from './AjaxDatatables';
const Datatables = () => {

    return (    
        <React.Fragment>

            <Head>
                <title>Data Tables | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Tabel" breadcrumbItem="Datatables" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Basic Datatables</h5>
                                </Card.Header>
                                <Card.Body>
                                    <BasicTable />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Scroll - Vertical</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ScrollVertical />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Scroll - Horizontal</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ScrollHorizontal />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Alternative Pagination</h5>
                                </Card.Header>
                                <Card.Body>
                                    <AlternativePagination />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Fixed Header Datatables</h5>
                                </Card.Header>
                                <Card.Body>
                                    <FixedHeaderDatatables />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Modal Data Datatables</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ModalDataDatatables />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h5 className="card-title mb-0">Ajax Datatables</h5>
                                </Card.Header>
                                <Card.Body>
                                    <AjaxDatatables />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default Datatables;