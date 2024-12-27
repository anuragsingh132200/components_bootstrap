import React, {useState} from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import MultiSelect from './MultiSelect';
import Head from 'next/head';
import SimpleBar from 'simplebar-react';
import Image from 'next/image';

// Import Contry Data
import { country } from '@common/data';

// Import Images
import us from "@assets/images/flags/us.svg"

const FormAdvanced = () => {

    const [defaultCounter, setdefaultCounter] = useState(5);
    const [lightCounter, setlightCounter] = useState(5);
    const [fullwidthCounter, setfullwidthCounter] = useState(5);
    const [lfullwidthCounter, setlfullwidthCounter] = useState(5);
    const [blueCounter, setblueCounter] = useState(5);
    const [skyCounter, setskyCounter] = useState(5);
    const [greenCounter, setgreenCounter] = useState(5);
    const [tealCounter, settealCounter] = useState(5);
    const [yellowCounter, setyellowCounter] = useState(5);
    const [redCounter, setredCounter] = useState(5);

    // Country Change States
    const [seletedCountry, setseletedCountry] = useState('');
    const [seletedCountry1, setseletedCountry1] = useState<any>({});
    const [seletedCountry2, setseletedCountry2] = useState('');
    const [seletedCountry3, setseletedCountry3] = useState<any>
    ({
        id: 240,
        flagImg: us,
        countryName: "United States of America",
        countryCode: "+1"
    });
    const [seletedCountry4, setseletedCountry4] = useState<any>({
        id: 240,
        flagImg: us,
        countryName: "United States of America",
        countryCode: "+1"
    });

    function countUP(id:any, prev_data_attr:any) {
        id(prev_data_attr + 1);
    }
    
    function countDown(id:any, prev_data_attr:any) {
        id(prev_data_attr - 1);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>

                    <Head>
                        <title>Form Advanced | Hybrix - Admin & Dashboard Template</title>
                    </Head>

                    <Breadcrumb breadcrumb="Forms" breadcrumbItem="Form Advanced" />

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom country select input</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="g-3">
                                        <Col lg={6}>
                                            <div>
                                                <Form.Label>Simple select example</Form.Label>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="input" className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry}>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                                            {(country || []).map((item:any, key:number) => (
                                                                <Dropdown.Item as='li' onClick={() =>  setseletedCountry(item.countryName) } key={key} className="dropdown-item d-flex">
                                                                    <div className="flex-shrink-0 me-2">
                                                                        <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <div className="d-flex">
                                                                            <div className="country-name me-1">{item.countryName}</div>
                                                                            <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            ))}
                                                        </SimpleBar>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>

                                            <div className="mt-3">
                                                <Form.Label>Select input flag with img & name</Form.Label>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="input" style={{backgroundImage: `url(${seletedCountry1.flagImg && seletedCountry1.flagImg.src})`}} className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry1.countryName}>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                                            {(country || []).map((item:any, key:number) => (
                                                                <Dropdown.Item as='li' onClick={() =>  setseletedCountry1(item) } key={key} className="dropdown-item d-flex">
                                                                    <div className="flex-shrink-0 me-2">
                                                                        <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <div className="d-flex">
                                                                            <div className="country-name me-1">{item.countryName}</div>
                                                                            <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            ))}
                                                        </SimpleBar>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>

                                            <div className="mt-3">
                                                <Form.Label>Search input false in dropdown menu</Form.Label>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="input" className="form-control rounded-end flag-input form-select" placeholder="Select country" readOnly defaultValue={seletedCountry2}>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                                            {(country || []).map((item:any, key:number) => (
                                                                <Dropdown.Item as='li' onClick={() =>  setseletedCountry2(item.countryName) } key={key} className="dropdown-item d-flex">
                                                                    <div className="flex-shrink-0 me-2">
                                                                        <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <div className="d-flex">
                                                                            <div className="country-name me-1">{item.countryName}</div>
                                                                            <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            ))}
                                                        </SimpleBar>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div>
                                                <Form.Label>Select input with buttons & Flag with number</Form.Label>
                                                <Dropdown className='input-group'>
                                                    <Dropdown.Toggle as="button" className="btn btn-light border arrow-none">
                                                        <Image src={seletedCountry3.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                        <span className="countrylist-codeno text-muted">{seletedCountry3.countryCode}</span>
                                                    </Dropdown.Toggle>
                                                    <Form.Control type="number" className="form-control rounded-end flag-input" placeholder="Enter number" />
                                                    <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                                            {(country || []).map((item:any, key:number) => (
                                                                <Dropdown.Item as='li' onClick={() =>  setseletedCountry3(item)} key={key} className="dropdown-item d-flex">
                                                                    <div className="flex-shrink-0 me-2">
                                                                        <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <div className="d-flex">
                                                                            <div className="country-name me-1">{item.countryName}</div>
                                                                            <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            ))}
                                                        </SimpleBar>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                <div className="dropdown-menu w-100">
                                                    <div className="p-2 px-3 pt-1 searchlist-input">
                                                        <Form.Control type="text" className="form-control-sm border search-countryList" placeholder="Search country name or country code..." />
                                                    </div>
                                                    <ul className="list-unstyled dropdown-menu-list mb-0"></ul>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <Form.Label>Select input with buttons & Flag</Form.Label>
                                                <Dropdown className='input-group'>
                                                    <Dropdown.Toggle as="button" className="btn btn-light border arrow-none">
                                                        <Image src={seletedCountry4.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                    </Dropdown.Toggle>
                                                    <Form.Control type="number" className="form-control rounded-end flag-input" placeholder="Enter number" />
                                                    <Dropdown.Menu as='ul' className="list-unstyled w-100 dropdown-menu-list mb-0">
                                                        <SimpleBar style={{ maxHeight: "220px" }}  className="px-3">
                                                            {(country || []).map((item:any, key:number) => (
                                                                <Dropdown.Item as='li' onClick={() =>  setseletedCountry4(item)} key={key} className="dropdown-item d-flex">
                                                                    <div className="flex-shrink-0 me-2">
                                                                        <Image src={item.flagImg} alt="country flag" className="options-flagimg" height="20" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <div className="d-flex">
                                                                            <div className="country-name me-1">{item.countryName}</div>
                                                                            <span className="countrylist-codeno text-muted">{item.countryCode}</span>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                            ))}
                                                        </SimpleBar>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Form Input Spin</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <Row className="gy-4">
                                            <Col sm={6}>
                                                <div>
                                                    <h5 className="fs-13 fw-medium text-muted">Default</h5>

                                                    <div className="input-step">
                                                        <Button className="minus"
                                                            onClick={() => {
                                                                countDown(setdefaultCounter, defaultCounter);
                                                            }}>
                                                        –
                                                        </Button>
                                                        <Form.Control type="number"
                                                            className="product-quantity"
                                                            value={defaultCounter}
                                                            min="0"
                                                            max="100"
                                                            readOnly
                                                        />
                                                        <Button type="button" className="plus" 
                                                            onClick={() => {
                                                                countUP(setdefaultCounter, defaultCounter);
                                                            }}>
                                                        +
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col sm={6}>
                                                <div>
                                                    <h5 className="fs-13 fw-medium text-muted">Light</h5>
                                                    <div className="input-step light">
                                                        <Button className="minus"
                                                            onClick={() => {
                                                                countDown(setlightCounter, lightCounter);
                                                            }}
                                                        >–</Button>
                                                        <Form.Control type="number"
                                                            className="product-quantity"
                                                            value={lightCounter}
                                                            min="0"
                                                            max="100"
                                                            readOnly />
                                                        <Button className="plus"
                                                            onClick={() => {
                                                                countUP(setlightCounter, lightCounter);
                                                            }}>
                                                        +
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mt-4 pt-2">
                                            <Row className="gy-4">
                                                <Col sm={6}>
                                                    <div>
                                                        <h5 className="fs-13 fw-medium text-muted">Default (Full width)</h5>
                                                        <div className="input-step full-width">
                                                            <Button className="minus" 
                                                            onClick={() => {
                                                                countDown(
                                                                    setfullwidthCounter,
                                                                    fullwidthCounter
                                                                );
                                                                }}>
                                                            –
                                                            </Button>
                                                            <Form.Control type="number" 
                                                                className="product-quantity"
                                                                value={fullwidthCounter}
                                                                min="0"
                                                                max="100" 
                                                                readOnly />
                                                            <Button className="plus"
                                                                onClick={() => {
                                                                    countUP(
                                                                    setfullwidthCounter,
                                                                    fullwidthCounter
                                                                    );
                                                                }}>
                                                            +
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col sm={6}>
                                                    <div>
                                                        <h5 className="fs-13 fw-medium text-muted">Light (Full width)</h5>
                                                        <div className="input-step full-width light">
                                                            <Button className="minus"
                                                                onClick={() => {
                                                                    countDown(
                                                                        setlfullwidthCounter,
                                                                        lfullwidthCounter
                                                                    );
                                                                }}>
                                                            –
                                                            </Button>
                                                            <Form.Control type="number"
                                                                className="product-quantity"
                                                                value={lfullwidthCounter}
                                                                min="0"
                                                                max="100"
                                                                readOnly />
                                                            <Button className="plus" 
                                                                onClick={() => {
                                                                    countUP(
                                                                    setlfullwidthCounter,
                                                                    lfullwidthCounter
                                                                    );
                                                                }}>
                                                            +
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <Row className="mt-4 pt-2">
                                        <h5 className="fs-13 fw-medium text-muted">Colored</h5>
                                        <div className="d-flex flex-wrap align-items-start gap-2">
                                            <div className="input-step step-primary">
                                            <Button
                                            className="minus"
                                            onClick={() => {
                                                countDown(setblueCounter, blueCounter);
                                            }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={blueCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setblueCounter, blueCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                            </div>
                                            <div className="input-step step-secondary">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setskyCounter, skyCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={skyCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setskyCounter, skyCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                            </div>
                                            <div className="input-step step-success">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setgreenCounter, greenCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={greenCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                            className="plus"
                                            onClick={() => {
                                                countUP(setgreenCounter, greenCounter);
                                            }}
                                            >
                                                +
                                            </Button>
                                            </div>
                                            <div className="input-step step-info">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countUP(settealCounter, tealCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={tealCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(settealCounter, tealCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                            </div>
                                            <div className="input-step step-warning">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setyellowCounter, yellowCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={yellowCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setyellowCounter, yellowCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                            </div>
                                            <div className="input-step step-danger">
                                            <Button
                                                className="minus"
                                                onClick={() => {
                                                    countDown(setredCounter, redCounter);
                                                }}
                                            >
                                                –
                                            </Button>
                                            <Form.Control
                                                type="number"
                                                className="product-quantity"
                                                value={redCounter}
                                                min="0"
                                                max="100"
                                                readOnly
                                            />
                                            <Button
                                                className="plus"
                                                onClick={() => {
                                                    countUP(setredCounter, redCounter);
                                                }}
                                            >
                                                +
                                            </Button>
                                            </div>
                                        </div>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Auto Complete</h4>
                                </Card.Header>

                                <Card.Body>
                                    <div>
                                        <Row className="g-3">
                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label className="text-muted">Search Result of Fruit Names</Form.Label>
                                                    <Form.Control placeholder='Search for fruits...' id="autoCompleteFruit" type="text" dir="ltr" spellCheck={false} autoComplete="off" autoCapitalize="off"/>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label className="text-muted">Search Result of Car Names</Form.Label>
                                                    <Form.Control placeholder='Search for cars...' id="autoCompleteCars" type="text" dir="ltr" spellCheck={false} autoComplete="off" autoCapitalize="off"/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multi Select</h4>
                                </Card.Header>

                                <Card.Body>
                                    <MultiSelect />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default FormAdvanced;