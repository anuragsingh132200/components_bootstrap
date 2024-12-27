import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Head from 'next/head';

// Import Flatpickr
import Flatpickr from "react-flatpickr";

const FormPickers = () => {
    const date: any = new Date()

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Pickers | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Pickers" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Flatpickr - Datepicker</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Form action="#">
                                        <Row className="gy-3">
                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label className="form-label mb-0">Basic</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            dateFormat: "d M, Y"
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label className="form-label mb-0">DateTime</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            enableTime: true,
                                                            dateFormat: "Y-m-d H:i",
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Human-Friendly Dates</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            altInput: true,
                                                            altFormat: "F j, Y",
                                                            dateFormat: "Y-m-d",
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">MinDate and MaxDate</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            minDate: "today",
                                                            maxDate: date.fp_incr(14)
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Default Date</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            dateFormat: "Y-m-d",
                                                            defaultDate: ["2022-01-20"]
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Disabling Dates</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            disable: ["2022-01-30", "2022-02-21", "2022-03-08", new Date(2025, 4, 9)],
                                                            dateFormat: "Y-m-d",
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Selecting Multiple Dates</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            mode: "multiple",
                                                            dateFormat: "Y-m-d"
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Range</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            mode: "range",
                                                            dateFormat: "Y-m-d"
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Inline</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            inline: true,
                                                            dateFormat: "Y-m-d"
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Week Numbers</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            weekNumbers: true,
                                                            altInput: true,
                                                            altFormat: "F j, Y",
                                                            dateFormat: "Y-m-d",
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>

                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Flatpickr - Timepicker</h4>
                                </Card.Header>

                                <Card.Body>
                                    <Form action="#">
                                        <Row className="gy-3">
                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label className="form-label mb-0">Timepicker</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: "H:i",
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label className="form-label mb-0">24-hour Time Picker</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: "H:i",
                                                            time_24hr: true
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Time Picker w/ Limits</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: "H:i",
                                                            minTime: "16:00",
                                                            maxTime: "22:30",
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Preloading Time</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            dateFormat: "H:i",
                                                            defaultDate: "13:45"
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mt-3">
                                                    <Form.Label className="form-label mb-0">Inline</Form.Label>
                                                    <Flatpickr
                                                        className="form-control"
                                                        options={{
                                                            enableTime: true,
                                                            noCalendar: true,
                                                            // inline: true,
                                                        }}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default FormPickers;