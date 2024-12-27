import React from 'react';
import { Button, Card, Col, Container, Dropdown, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

// Import Images
import avatar1 from '@assets/images/users/avatar-1.jpg'
import avatar3 from '@assets/images/users/avatar-3.jpg'
import avatar4 from '@assets/images/users/avatar-4.jpg'
import avatar5 from '@assets/images/users/avatar-5.jpg'
import avatar6 from '@assets/images/users/avatar-6.jpg'

// Import Componets
// import { DefaultTables, Captions, Variants, StrippedRow, TableHead, TablesWithoutBorders, StripedColumnsTables, TablesColors, HoverableRows, CardTables, ActiveTables, BorderedTables, SmallTables, TableFoot, TableNesting, VerticalAlignment, ResponsiveTables, } from './BasicTablesCode'
import DefaultTables from './DefaultTables';
import Captions from './Captions';
import Variants from './Variants';
import StrippedRow from './StrippedRow';
import TableHead from './TableHead';
import TablesWithoutBorders from './TableWithoutBorders';
import StripedColumnsTables from './StripedColumnsTables';
import TablesColors from './TableColors';
import HoverableRows from './HoverableRows';
import CardTables from './CardTables';
import ActiveTables from './ActiveTables';
import BorderedTables from './BorderedTables';
import SmallTables from './SmallTables';
import TableFoot from './TableFoot';
import TableNesting from './TableNesting';
import VerticalAlignment from './VericalAlignment';
import ResponsiveTables from './ResponsiveTables';

const BasicTables = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Basic Tables | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Tables" breadcrumbItem="Basic Tables" />

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Table</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table</code> class to show bootstrap-based default table.</p>
                                    <div className="table-responsive">
                                        <Table className="align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><a href="#" className="fw-medium">#VZ2110</a></th>
                                                    <td>Bobby Davis</td>
                                                    <td>October 15, 2021</td>
                                                    <td>$2,300</td>
                                                    <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="#" className="fw-medium">#VZ2109</a></th>
                                                    <td>Christopher Neal</td>
                                                    <td>October 7, 2021</td>
                                                    <td>$5,500</td>
                                                    <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="#" className="fw-medium">#VZ2108</a></th>
                                                    <td>Monkey Karry</td>
                                                    <td>October 5, 2021</td>
                                                    <td>$2,420</td>
                                                    <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="#" className="fw-medium">#VZ2107</a></th>
                                                    <td>James White</td>
                                                    <td>October 2, 2021</td>
                                                    <td>$7,452</td>
                                                    <td><Link href="#" className="link-success">View More <i className="ri-arrow-right-line align-middle"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>

                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <DefaultTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Striped Rows</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-striped</code> class to add zebra-striping to any table row within the &lt;tbody&gt;.</p>
                                    <div className="table-responsive">
                                        <Table className="table-striped table-nowrap align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Bobby Davis</td>
                                                    <td>Nov 14, 2021</td>
                                                    <td>$2,410</td>
                                                    <td><span className="badge bg-success">Confirmed</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Christopher Neal</td>
                                                    <td>Nov 21, 2021</td>
                                                    <td>$1,450</td>
                                                    <td><span className="badge bg-warning">Waiting</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Monkey Karry</td>
                                                    <td>Nov 24, 2021</td>
                                                    <td>$3,500</td>
                                                    <td><span className="badge bg-success">Confirmed</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">04</td>
                                                    <td>Aaron James</td>
                                                    <td>Nov 25, 2021</td>
                                                    <td>$6,875</td>
                                                    <td><span className="badge bg-danger">Cancelled</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <StrippedRow />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Striped columns</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted mb-4">Use .<code>table-striped-columns</code> to add zebra-striping to any table column.</p>
                                    <div className="table-responsive table-card">
                                        <Table className="align-middle table-nowrap table-striped-columns mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col" style={{width: "46px"}}>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck"/>
                                                            <Form.Label htmlFor="cardtableCheck"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col" style={{width: "150px"}}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck01"/>
                                                            <Form.Label htmlFor="cardtableCheck01"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2110</a></td>
                                                    <td>William Elmore</td>
                                                    <td>07 Oct, 2021</td>
                                                    <td>$24.05</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck02"/>
                                                            <Form.Label htmlFor="cardtableCheck02"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2109</a></td>
                                                    <td>Georgie Winters</td>
                                                    <td>07 Oct, 2021</td>
                                                    <td>$26.15</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck03"/>
                                                            <Form.Label htmlFor="cardtableCheck03"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2108</a></td>
                                                    <td>Whitney Meier</td>
                                                    <td>06 Oct, 2021</td>
                                                    <td>$21.25</td>
                                                    <td><span className="badge bg-danger">Refund</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck04"/>
                                                            <Form.Label htmlFor="cardtableCheck04"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2107</a></td>
                                                    <td>Justin Maier</td>
                                                    <td>05 Oct, 2021</td>
                                                    <td>$25.03</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25 mt-3">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <StripedColumnsTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Tables Colors</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-dark</code> class to set dark color table body and <code>table-success</code> class to set success color table body respectively. use <code>table-</code> class with different color variation to set required table body color.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <div className="table-responsive">
                                                <Table className="table-dark table-striped table-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Customer</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Invoice</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-medium">01</td>
                                                            <td>Bobby Davis</td>
                                                            <td>Nov 14, 2021</td>
                                                            <td>$2,410</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">02</td>
                                                            <td>Christopher Neal</td>
                                                            <td>Nov 21, 2021</td>
                                                            <td>$1,450</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">03</td>
                                                            <td>Monkey Karry</td>
                                                            <td>Nov 24, 2021</td>
                                                            <td>$3,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">04</td>
                                                            <td>Aaron James</td>
                                                            <td>Nov 25, 2021</td>
                                                            <td>$6,875</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>

                                        <Col xl={6}>
                                            <div className="table-responsive mt-4 mt-xl-0">
                                                <Table className="table-success table-striped table-nowrap align-middle mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Invoice</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-medium">01</td>
                                                            <td>Basic Plan</td>
                                                            <td>$860</td>
                                                            <td>Nov 22, 2021</td>
                                                            <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                            <td>
                                                                <div className="hstack gap-3 flex-wrap">
                                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">02</td>
                                                            <td>Premium Plan</td>
                                                            <td>$1200</td>
                                                            <td>Nov 10, 2021</td>
                                                            <td><i className="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                                                            <td>
                                                                <div className="hstack gap-3 flex-wrap">
                                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">03</td>
                                                            <td>Basic Plan</td>
                                                            <td>$860</td>
                                                            <td>Nov 19, 2021</td>
                                                            <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                            <td>
                                                                <div className="hstack gap-3 flex-wrap">
                                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">04</td>
                                                            <td>Corporate Plan</td>
                                                            <td>$1599</td>
                                                            <td>Nov 22, 2021</td>
                                                            <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                            <td>
                                                                <div className="hstack gap-3 flex-wrap">
                                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <TablesColors />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Hoverable Rows</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-hover</code> class to enable a hover state on table rows within a &lt;tbody&gt;.</p>
                                    <Row>
                                        <Col xl={6}>
                                            <div className="table-responsive">
                                                <Table className="table-hover align-middle table-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" style={{width: "25px"}}>
                                                                <div className="form-check">
                                                                    <Form.Check type="checkbox" id="checkAll" value="option1"/>
                                                                </div>
                                                            </th>
                                                            <th scope="col">Order ID</th>
                                                            <th scope="col">Shop</th>
                                                            <th scope="col">Customer</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <Form.Check type="checkbox" id="inlineCheckbox2" value="option1"defaultChecked/>
                                                                </div>
                                                            </th>
                                                            <td>#541254265</td>
                                                            <td>Amezon</td>
                                                            <td>Cleo Carson</td>
                                                            <td>$4,521</td>
                                                            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <Form.Check type="checkbox" id="inlineCheckbox3" value="option1"defaultChecked/>
                                                                </div>
                                                            </th>
                                                            <td>#744145235</td>
                                                            <td>Shoppers</td>
                                                            <td>Juston Eichmann</td>
                                                            <td>$7,546</td>
                                                            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <Form.Check type="checkbox" id="inlineCheckbox4" value="option1"/>
                                                                </div>
                                                            </th>
                                                            <td>#9855126598</td>
                                                            <td>Flipkart</td>
                                                            <td>Bettie Johson</td>
                                                            <td>$1,350</td>
                                                            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">
                                                                <div className="form-check">
                                                                    <Form.Check type="checkbox" id="inlineCheckbox5" value="option1"/>
                                                                </div>
                                                            </th>
                                                            <td>#847512653</td>
                                                            <td>Shoppers</td>
                                                            <td>Maritza Blanda</td>
                                                            <td>$4,521</td>
                                                            <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>

                                        <Col xl={6}>
                                            <div className="table-responsive mt-4 mt-xl-0">
                                                <Table className="table-hover table-striped align-middle table-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Invoice</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="fw-medium">01</td>
                                                            <td>Basic Plan</td>
                                                            <td>$860</td>
                                                            <td>Nov 22, 2021</td>
                                                            <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" defaultChecked/>
                                                                    <Form.Label className="ms-2" htmlFor="SwitchCheck1">Yes/No</Form.Label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">02</td>
                                                            <td>Premium Plan</td>
                                                            <td>$1200</td>
                                                            <td>Nov 10, 2021</td>
                                                            <td><i className="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck2"/>
                                                                    <Form.Label className="ms-2" htmlFor="SwitchCheck2">Yes/No</Form.Label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">03</td>
                                                            <td>Basic Plan</td>
                                                            <td>$860</td>
                                                            <td>Nov 19, 2021</td>
                                                            <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck3"/>
                                                                    <Form.Label className="ms-2" htmlFor="SwitchCheck3">Yes/No</Form.Label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="fw-medium">04</td>
                                                            <td>Corporate Plan</td>
                                                            <td>$1599</td>
                                                            <td>Nov 22, 2021</td>
                                                            <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" defaultChecked/>
                                                                    <Form.Label className="ms-2" htmlFor="SwitchCheck4">Yes/No</Form.Label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <HoverableRows />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Card Tables</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted mb-4">Use <code>table-card</code> class to show card-based table within a &lt;tbody&gt;.</p>
                                    <div className="table-responsive table-card">
                                        <Table className="align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col" style={{width: "46px"}}>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck"/>
                                                            <Form.Label htmlFor="cardtableCheck"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col" style={{width: "150px"}}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck01"/>
                                                            <Form.Label htmlFor="cardtableCheck01"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2110</a></td>
                                                    <td>William Elmore</td>
                                                    <td>07 Oct, 2021</td>
                                                    <td>$24.05</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck02"/>
                                                            <Form.Label htmlFor="cardtableCheck02"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2109</a></td>
                                                    <td>Georgie Winters</td>
                                                    <td>07 Oct, 2021</td>
                                                    <td>$26.15</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck03"/>
                                                            <Form.Label htmlFor="cardtableCheck03"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2108</a></td>
                                                    <td>Whitney Meier</td>
                                                    <td>06 Oct, 2021</td>
                                                    <td>$21.25</td>
                                                    <td><span className="badge bg-danger">Refund</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="cardtableCheck04"/>
                                                            <Form.Label htmlFor="cardtableCheck04"></Form.Label>
                                                        </div>
                                                    </td>
                                                    <td><a href="#" className="fw-medium">#VL2107</a></td>
                                                    <td>Justin Maier</td>
                                                    <td>05 Oct, 2021</td>
                                                    <td>$25.03</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25 mt-3">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <CardTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Active Tables</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-active</code> class to highlight a table row or cell.</p>
                                    <div className="table-responsive">
                                        <Table className="align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style={{width: "42px"}}>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="activetableCheck"/>
                                                            <Form.Label htmlFor="activetableCheck"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Shop</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="activetableCheck01"defaultChecked/>
                                                            <Form.Label htmlFor="activetableCheck01"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td>#541254265</td>
                                                    <td>Amezon</td>
                                                    <td>Cleo Carson</td>
                                                    <td>$4,521</td>
                                                    <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                                <tr className="table-active">
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="activetableCheck02"defaultChecked/>
                                                            <Form.Label htmlFor="activetableCheck02"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td>#744145235</td>
                                                    <td>Shoppers</td>
                                                    <td>Juston Eichmann</td>
                                                    <td>$7,546</td>
                                                    <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="activetableCheck03"/>
                                                            <Form.Label htmlFor="activetableCheck03"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td>#9855126598</td>
                                                    <td>Flipkart</td>
                                                    <td>Bettie Johson</td>
                                                    <td>$1,350</td>
                                                    <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="activetableCheck04"/>
                                                            <Form.Label htmlFor="activetableCheck04"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td>#847512653</td>
                                                    <td>Shoppers</td>
                                                    <td className="table-active">Maritza Blanda</td>
                                                    <td>$4,521</td>
                                                    <td><Link href="#"><i className="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <ActiveTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bordered Tables</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-bordered</code> class to show borders on all sides of the table and cells.</p>
                                    <div className="table-responsive">
                                        <Table className="table-bordered align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Assignee</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Implement new UX</td>
                                                    <td><span className="badge badge-soft-primary">Backlog</span></td>
                                                    <td>Lanora Sandoval</td>
                                                    <td>$4,521</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Design syntax</td>
                                                    <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                                    <td>Calvin Garrett</td>
                                                    <td>$7,546</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Configurable resources</td>
                                                    <td><span className="badge badge-soft-success">Done</span></td>
                                                    <td>Florence Guzman</td>
                                                    <td>$1,350</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">04</td>
                                                    <td>Implement extensions</td>
                                                    <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                                    <td>Maritza Blanda</td>
                                                    <td>$4,521</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <BorderedTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Tables Border Colors</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>border-</code> class with color variation class to set table border color.</p>
                                    <div className="table-responsive">
                                        <Table className="table-bordered border-secondary table-nowrap align-middle mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Assignee</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Implement new UX</td>
                                                    <td><span className="badge badge-soft-primary">Backlog</span></td>
                                                    <td>Lanora Sandoval</td>
                                                    <td>$4,521</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Design syntax</td>
                                                    <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                                    <td>Calvin Garrett</td>
                                                    <td>$7,546</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Configurable resources</td>
                                                    <td><span className="badge badge-soft-success">Done</span></td>
                                                    <td>Florence Guzman</td>
                                                    <td>$1,350</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">04</td>
                                                    <td>Implement extensions</td>
                                                    <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                                    <td>Maritza Blanda</td>
                                                    <td>$4,521</td>
                                                    <td>
                                                        <Dropdown>
                                                            <Dropdown.Toggle as='a' className='arrow-none'>
                                                                <i className="ri-more-2-fill"></i>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <BorderedTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0 flex-grow-1">Tables Without Borders</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-borderless</code> to set a table without borders.</p>
                                    <div className="table-responsive">
                                        <Table className="table-borderless align-middle table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Job Title</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Annette Black</td>
                                                    <td>Industrial Designer</td>
                                                    <td>10, Nov 2021</td>
                                                    <td><span className="badge badge-soft-success">Active</span></td>
                                                    <td>
                                                        <div className="hstack gap-3 fs-15">
                                                            <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                            <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Bessie Cooper</td>
                                                    <td>Graphic Designer</td>
                                                    <td>13, Nov 2021</td>
                                                    <td><span className="badge badge-soft-success">Active</span></td>
                                                    <td>
                                                        <div className="hstack gap-3 fs-15">
                                                            <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                            <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Leslie Alexander</td>
                                                    <td>Product Manager</td>
                                                    <td>17, Nov 2021</td>
                                                    <td><span className="badge badge-soft-success">Active</span></td>
                                                    <td>
                                                        <div className="hstack gap-3 fs-15">
                                                            <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                            <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">04</td>
                                                    <td>Lenora Sandoval</td>
                                                    <td>Applications Engineer</td>
                                                    <td>25, Nov 2021</td>
                                                    <td><span className="badge badge-soft-danger">Disabled</span></td>
                                                    <td>
                                                        <div className="hstack gap-3 fs-15">
                                                            <Button bsPrefix='a' href="#" className="link-primary"><i className="ri-settings-4-line"></i></Button>
                                                            <Button bsPrefix='a' href="#" className="link-danger"><i className="ri-delete-bin-5-line"></i></Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <TablesWithoutBorders />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Small Tables</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-sm</code> class to create any table more compact by cutting all cell padding in half.</p>
                                    <div className="table-responsive">
                                        <Table className="table-sm table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Assignee</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Implement new UX</td>
                                                    <td><span className="badge badge-soft-primary">Backlog</span></td>
                                                    <td>Lanora Sandoval</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Design syntax</td>
                                                    <td><span className="badge badge-soft-secondary">In Progress</span></td>
                                                    <td>Calvin Garrett</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Configurable resources</td>
                                                    <td><span className="badge badge-soft-success">Done</span></td>
                                                    <td>Florence Guzman</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">04</td>
                                                    <td>Implement extensions</td>
                                                    <td><span className="badge badge-soft-dark">Backlog</span></td>
                                                    <td>Maritza Blanda</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">05</td>
                                                    <td>Applications Engineer</td>
                                                    <td>
                                                        <span className="badge badge-soft-success">Done</span>
                                                    </td>
                                                    <td>Leslie Alexander</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <SmallTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Table Head</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-light</code> or <code>table-dark</code> class to create &lt;thead&gt; appear light or dark.</p>
                                    <div className="table-responsive">
                                        <Table className="align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">Student</th>
                                                    <th scope="col">Course</th>
                                                    <th scope="col">Author</th>
                                                    <th scope="col">Payment</th>
                                                    <th scope="col">Process</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Milana Scot</td>
                                                    <td>UI/UX design</td>
                                                    <td>Mitchell Flores</td>
                                                    <td>$450</td>
                                                    <td>
                                                        <ProgressBar variant="success" now={100} className="progress-sm"/>
                                                    </td>
                                                    <td><Button bsPrefix='a' href="#" className="link-success">Confirmed</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>Jassica Welsh</td>
                                                    <td>3d Animation</td>
                                                    <td>Dan Evgeni</td>
                                                    <td>$860</td>
                                                    <td>
                                                        <ProgressBar variant="warning" now={65} className="progress-sm"/>
                                                    </td>
                                                    <td><Button bsPrefix='a' href="#" className="link-warning">Waiting</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>Leslie Alexander</td>
                                                    <td>Logotype Design</td>
                                                    <td>Olimpia Jordan</td>
                                                    <td>$450</td>
                                                    <td>
                                                        <ProgressBar variant="warning" now={35} className="progress-sm"/>
                                                    </td>
                                                    <td><Button bsPrefix='a' href="#" className="link-warning">Waiting</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <TableHead />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Table Foot</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Add <code>&lt;tbody&gt;</code> attribute to group footer content in an HTML table.</p>
                                    <div className="table-responsive">
                                        <Table className="table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Job Title</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Payment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Annette Black</td>
                                                    <td>Industrial Designer</td>
                                                    <td>10, Nov 2021</td>
                                                    <td>$450</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Bessie Cooper</td>
                                                    <td>Graphic Designer</td>
                                                    <td>13, Nov 2021</td>
                                                    <td>$875</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Leslie Alexander</td>
                                                    <td>Product Manager</td>
                                                    <td>17, Nov 2021</td>
                                                    <td>$410</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="table-light">
                                                <tr>
                                                    <td colSpan={4}>Total</td>
                                                    <td>$940</td>
                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <TableFoot />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Captions</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">You can also put the <code>&lt;caption&gt;</code> attribute on the top of the table with <code>caption-top</code> class.</p>
                                    <div className="table-responsive">
                                        <table className="table caption-top table-nowrap mb-0">
                                            <caption>List of users</caption>
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Student</th>
                                                    <th scope="col">Course</th>
                                                    <th scope="col">Author</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Milana Scot</td>
                                                    <td>UI/UX design</td>
                                                    <td>Mitchell Flores</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Jassica Welsh</td>
                                                    <td>3d Animation</td>
                                                    <td>Dan Evgeni</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Leslie Alexander</td>
                                                    <td>Logotype Design</td>
                                                    <td>Olimpia Jordan</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <Captions />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Table Nesting</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Example of basic table nesting. Border styles, active styles, and table variants are not inherited by nested tables.</p>
                                    
                                    <div className="table-responsive">
                                        <Table className="table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Job Title</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Payment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="fw-medium">01</td>
                                                    <td>Annette Black</td>
                                                    <td>Industrial Designer</td>
                                                    <td>10, Nov 2021</td>
                                                    <td>$450</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={5}>
                                                        <table className="table table-nowrap mb-0">
                                                            <thead className="table-light">
                                                                <tr>
                                                                    <th scope="col">ID</th>
                                                                    <th scope="col">Student</th>
                                                                    <th scope="col">Course</th>
                                                                    <th scope="col">Author</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="fw-medium">I</td>
                                                                    <td>Milana Scot</td>
                                                                    <td>3d Animation</td>
                                                                    <td>James Black</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fw-medium">II</td>
                                                                    <td>Juston Eichmann</td>
                                                                    <td>Design syntax</td>
                                                                    <td>Olimpia Jordan</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">02</td>
                                                    <td>Bessie Cooper</td>
                                                    <td>Graphic Designer</td>
                                                    <td>13, Nov 2021</td>
                                                    <td>$875</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">03</td>
                                                    <td>Leslie Alexander</td>
                                                    <td>Product Manager</td>
                                                    <td>16, Nov 2021</td>
                                                    <td>$410</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">04</td>
                                                    <td>Bettie Johson</td>
                                                    <td>Applications Engineer</td>
                                                    <td>24, Nov 2021</td>
                                                    <td>$620</td>
                                                </tr>
                                                <tr>
                                                    <td className="fw-medium">05</td>
                                                    <td>Monkey Karry</td>
                                                    <td>Implement new UX</td>
                                                    <td>25, Nov 2021</td>
                                                    <td>$795</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <TableNesting />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Variants</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-</code> class with below-mentioned color variation class within &lt;tr&gt; to set color on table row.</p>
                                    <div className="table-responsive">
                                        <table className="table table-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Position</th>
                                                    <th scope="col">Department</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Default</td>
                                                    <td>Monkey Karry</td>
                                                    <td>Medical Specialist</td>
                                                    <td>Orthopedics</td>
                                                </tr>
                                                <tr className="table-primary">
                                                    <td>Primary</td>
                                                    <td>James White</td>
                                                    <td>Medical Assistant</td>
                                                    <td>Surgery</td>
                                                </tr>
                                                <tr className="table-secondary">
                                                    <td>Secondary</td>
                                                    <td>Aaron James</td>
                                                    <td>Medical Specialist</td>
                                                    <td>Neurology</td>
                                                </tr>
                                                <tr className="table-success">
                                                    <td>Success</td>
                                                    <td>Bettie Johson</td>
                                                    <td>Medical Specialist</td>
                                                    <td>Cardiology</td>
                                                </tr>
                                                <tr className="table-danger">
                                                    <td>Danger</td>
                                                    <td>Bessie Cooper</td>
                                                    <td>Medical Assistant</td>
                                                    <td>Surgery</td>
                                                </tr>
                                                <tr className="table-warning">
                                                    <td>Warning</td>
                                                    <td>Lenora Sandoval</td>
                                                    <td>Medical Assistant</td>
                                                    <td>Cardiology</td>
                                                </tr>
                                                <tr className="table-info">
                                                    <td>Info</td>
                                                    <td>Eric Pierce</td>
                                                    <td>Medical Specialist</td>
                                                    <td>Neurology</td>
                                                </tr>
                                                <tr className="table-light">
                                                    <td>Light</td>
                                                    <td>Ruth Zimmermann</td>
                                                    <td>Medical Specialist</td>
                                                    <td>Neurology</td>
                                                </tr>
                                                <tr className="table-dark">
                                                    <td>Dark</td>
                                                    <td>Leslie Alexander</td>
                                                    <td>Medical Assistant</td>
                                                    <td>Cardiology</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <Variants />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Vertical alignment</h4>
                                </Card.Header>

                                <Card.Body>

                                    <p className="text-muted">Table cells of <code>&lt;thead&gt;</code> are always vertical aligned to the bottom. Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p>
                                    <div className="table-responsive table-nowrap">
                                        <Table className="align-middle">
                                            <thead>
                                                <tr>
                                                    <th>Heading</th>
                                                    <th>Heading</th>
                                                    <th>Heading</th>
                                                    <th>Heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                                    <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                                    <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                                    <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                                </tr>
                                                <tr className="align-bottom">
                                                    <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                                                    <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                                                    <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
                                                    <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                                </tr>
                                                <tr>
                                                    <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                                    <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
                                                    <td className="align-top">This cell is aligned to the top.</td>
                                                    <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells. Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <VerticalAlignment />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Responsive Tables</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use <code>table-responsive</code> class to make any table responsive across all viewports. Responsive tables allow tables to be scrolled horizontally with ease.</p>
                                    <div className="table-responsive">
                                        <Table className="align-middle table-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col" style={{width: "42px"}}>
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="responsivetableCheck"/>
                                                            <Form.Label htmlFor="responsivetableCheck"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Purchased</th>
                                                    <th scope="col">Revenue</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="responsivetableCheck01"/>
                                                            <Form.Label htmlFor="responsivetableCheck01"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td><a href="#" className="fw-medium">#VZ2110</a></td>
                                                    <td>10 Oct, 14:47</td>
                                                    <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                    <td>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Jordan Kennedy
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Mastering the grid</td>
                                                    <td>$9.98</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="responsivetableCheck02"/>
                                                            <Form.Label htmlFor="responsivetableCheck02"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td><a href="#" className="fw-medium">#VZ2109</a></td>
                                                    <td>17 Oct, 02:10</td>
                                                    <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                    <td>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar4} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Jackson Graham
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Splashify</td>
                                                    <td>$270.60</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="responsivetableCheck03"/>
                                                            <Form.Label htmlFor="responsivetableCheck03"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td><a href="#" className="fw-medium">#VZ2108</a></td>
                                                    <td>26 Oct, 08:20</td>
                                                    <td className="text-primary"><i className="ri-refresh-line fs-17 align-middle"></i> Refunded</td>
                                                    <td>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar5} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Lauren Trujillo
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Wireframing Kit for Figma</td>
                                                    <td>$145.42</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="responsivetableCheck04"/>
                                                            <Form.Label htmlFor="responsivetableCheck04"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td><a href="#" className="fw-medium">#VZ2107</a></td>
                                                    <td>02 Nov, 04:52</td>
                                                    <td className="text-danger"><i className="ri-close-circle-line fs-17 align-middle"></i> Cancel</td>
                                                    <td>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar6} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Curtis Weaver
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Wireframing Kit for Figma</td>
                                                    <td>$170.68</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <Form.Check type="checkbox" value="" id="responsivetableCheck05"/>
                                                            <Form.Label htmlFor="responsivetableCheck05"></Form.Label>
                                                        </div>
                                                    </th>
                                                    <td><a href="#" className="fw-medium">#VZ2106</a></td>
                                                    <td>10 Nov, 07:20</td>
                                                    <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                    <td>
                                                        <div className="d-flex gap-2 align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar1} alt="" className="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                Jason schuller
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Splashify</td>
                                                    <td>$350.87</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="table-light">
                                                <tr>
                                                    <td colSpan={6}>Total</td>
                                                    <td>$947.55</td>
                                                </tr>
                                            </tfoot>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <ResponsiveTables />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default BasicTables;