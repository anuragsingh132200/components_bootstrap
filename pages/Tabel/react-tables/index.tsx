import React from 'react';
import { Card, Col, Container, Row} from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// import { DefaultTable, PaginationTable, SearchTable, SortingTable, LoadingStateTable, HiddenColumns } from './ReactTable'
import DefaultTable from './DefaultTable';
import PaginationTable from './PaginationTable';
import SearchTable from './SearchTable';
import SortingTable from './SortingTable';
import LoadingStateTable from './LoadingStateTable';
import HiddenColumns from './HiddenColumns';
const Listjs = () => {

    return (    
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>React Table | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Tables" breadcrumbItem="React Table" />

                    <Row>
                        <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h5 className="card-title mb-0">Default Tables</h5>
                            </Card.Header>
                            <Card.Body>
                                <DefaultTable />
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h5 className="card-title mb-0">Pagination Table</h5>
                            </Card.Header>
                            <Card.Body>
                                <PaginationTable />
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h5 className="card-title mb-0">Search Table</h5>
                            </Card.Header>
                            <Card.Body>
                                <SearchTable />
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h5 className="card-title mb-0">Sorting Table</h5>
                            </Card.Header>
                            <Card.Body>
                                <SortingTable />
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h5 className="card-title mb-0">Loading State Table</h5>
                            </Card.Header>
                            <Card.Body>
                                <LoadingStateTable />
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h5 className="card-title mb-0">Hidden Columns</h5>
                            </Card.Header>
                            <Card.Body>
                                <HiddenColumns />
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default Listjs;