import React from 'react';
import Head from 'next/head';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Breadcrumb from '@common/Breadcrumb';
import Image from 'next/image';

// Import Images
import img3 from '@assets/images/small/img-3.jpg'
import img4 from '@assets/images/small/img-4.jpg'
import img5 from '@assets/images/small/img-5.jpg'
import img6 from '@assets/images/small/img-6.jpg'
import img7 from '@assets/images/small/img-7.jpg'
import img8 from '@assets/images/small/img-8.jpg'

import smallImg4 from "@assets/images/small/img-4.jpg"
import smallImg5 from "@assets/images/small/img-5.jpg"
import smallImg6 from "@assets/images/small/img-6.jpg"
import smallImg7 from "@assets/images/small/img-7.jpg"

import avatar1 from "@assets/images/users/avatar-1.jpg"
import avatar2 from "@assets/images/users/avatar-2.jpg"
import avatar3 from "@assets/images/users/avatar-3.jpg"
import avatar4 from "@assets/images/users/avatar-4.jpg"
import avatar5 from "@assets/images/users/avatar-5.jpg"
import avatar6 from "@assets/images/users/avatar-6.jpg"
import avatar7 from "@assets/images/users/avatar-7.jpg"
import avatar8 from "@assets/images/users/avatar-8.jpg"

const UiTabs = () => {
    return (
        <React.Fragment>

            <Head>
                <title>Tabs | Hybrix - Admin & Dashboard Template</title>
            </Head>
            
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Base UI" breadcrumbItem="Tabs" />
                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Default Tabs</h5>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="product1">
                                        <p className="text-muted">Use <code>nav-tabs</code> class to generate a default tabbed interface.</p>

                                        <Nav as="ul" variant='tabs' className="mb-3">
                                            <Nav.Item as="li"> <Nav.Link eventKey="home"> Home </Nav.Link> </Nav.Item>
                                            <Nav.Item as="li"> <Nav.Link eventKey="product1"> Product </Nav.Link> </Nav.Item>
                                            <Nav.Item as="li"> <Nav.Link eventKey="messages"> Messages </Nav.Link> </Nav.Item>
                                            <Nav.Item as="li"> <Nav.Link eventKey="settings"> Settings </Nav.Link> </Nav.Item>
                                        </Nav>

                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="home" id="home">
                                                <h6>Graphic Design</h6>
                                                <p className="mb-0">
                                                    They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="product1" id="product1">
                                                <h6>Product</h6>
                                                <p className="mb-0">
                                                    You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="messages" id="messages">
                                                <h6>Messages</h6>
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="settings" id="settings">
                                                <h6>Settings</h6>
                                                <p className="mb-0">
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                    art party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                    art party locavore wolf cliche high life echo park Austin. Cred
                                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                    farm-to-table VHS.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <h5 className="mb-3">Justify Tabs</h5>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="product">
                                        <p className="text-muted">Use <code>nav-justified</code> class to generate equal-width elements with all horizontal space will be occupied by nav links.</p>
                                        <Nav as="ul" variant='tabs' className="nav-justified mb-3">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="base-justified-home">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="product">
                                                    Product
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="base-justified-messages">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="base-justified-settings">
                                                    Settings
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="base-justified-home">
                                                <h6>Graphic Design</h6>
                                                <p className="mb-0">
                                                    They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="product">
                                                <h6>Product</h6>
                                                <p className="mb-0">
                                                    You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="base-justified-messages">
                                                <h6>Messages</h6>
                                                <p className="mb-0">
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                    farm-to-table readymade. Messenger bag gentrify pitchfork
                                                    tattooed craft beer, iphone skateboard locavore carles etsy
                                                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="base-justified-settings">
                                                <h6>Settings</h6>
                                                <p className="mb-0">
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                    art party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                    art party locavore wolf cliche high life echo park Austin. Cred
                                                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                    farm-to-table VHS.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Vertical Nav Tabs</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Use <code>flex-column</code> class to create Vertical nav tabs.</p>
                                    <Tab.Container defaultActiveKey="v-pills-home-tab">
                                        <Row>
                                            <Col md={3}>
                                                <Nav variant="pills" className="flex-column text-center" id="v-pills-tab" aria-orientation="vertical">
                                                    <Nav.Link eventKey="v-pills-home-tab" className="mb-2" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</Nav.Link>
                                                    <Nav.Link eventKey="v-pills-profile-tab" className="mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</Nav.Link>
                                                    <Nav.Link eventKey="v-pills-messages-tab" className="mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</Nav.Link>
                                                    <Nav.Link eventKey="v-pills-settings-tab" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</Nav.Link>
                                                </Nav>
                                            </Col>
                                            <Col md={9}>
                                                <Tab.Content className="text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                                    <Tab.Pane eventKey="v-pills-home-tab">
                                                        <div className="d-flex mb-2">
                                                            <div className="flex-shrink-0">
                                                                <Image src={smallImg4} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0">
                                                            This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                                        </p>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="v-pills-profile-tab">
                                                        <div className="d-flex mb-2">
                                                            <div className="flex-shrink-0">
                                                                <Image src={smallImg5} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0"> I also decreased the transparency in the text so that the mountains come through the text, bringing the quote truly to life. Make sure that the placement of your text is pleasing to look at, and you try to achieve symmetry for this effect.</p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0">
                                                            You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary. You can always play around with the text that is overlaid on an image.
                                                        </p>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="v-pills-messages-tab">
                                                        <div className="d-flex mb-2">
                                                            <div className="flex-shrink-0">
                                                                <Image src={smallImg6} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0">In this image, you can see that the line height has been reduced significantly, and the size was brought up exponentially. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0">
                                                            They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard This may be the most commonly encountered tip I received from the designers I spoke with.
                                                        </p>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="v-pills-settings-tab">
                                                        <div className="d-flex mb-2">
                                                            <div className="flex-shrink-0">
                                                                <Image src={smallImg7} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0">When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.</p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0">
                                                            If you’re using multiple elements, make sure that your principal object is larger than the others, as the eye of your viewer will automatically be drawn to the larger of the two objects.
                                                        </p>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <h5 className="mb-3">Card Header Tabs</h5>
                            <Card>
                                <Tab.Container defaultActiveKey="home2">
                                    <Card.Header className="card-header align-items-center d-flex">
                                        <div className="flex-grow-1 oveflow-hidden">
                                            <p className="text-muted text-truncates mb-0">Use <code>card-header-tabs</code> class to create card header tabs.</p>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <Nav as="ul" variant="tabs" className="justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0">
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="home2">
                                                        Home
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="profile2">
                                                        Profile
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="messages2">
                                                        Message
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="home2">
                                                <p className="flex-grow-1 mb-0"><Image src={avatar2} alt="" className="avatar-lg rounded float-start me-3" />
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                    aesthetic magna delectus. If you’re using multiple elements, make sure that your principal object is larger than assumenda.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="profile2">
                                                <p className="me-3 mb-0">
                                                    <Image src={avatar3} alt="" className="avatar-lg rounded float-end ms-3" /> Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus Scale all elements of your design: text, elements, buttons, everything. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="messages2">
                                                <p className="ms-3 mb-0">
                                                    <Image src={avatar5} alt="" className="avatar-lg rounded float-start me-3" />Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna delectus Scale all elements of your design: text, elements, buttons, everything.Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Tab.Container>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Custom Tabs Bordered</h5>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="home1">
                                        <p className="text-muted">Use <code>nav-tabs-custom</code> class to create custom tabs with borders.</p>

                                        <Nav as="ul" variant="tabs" className="nav-tabs-custom nav-success nav-justified mb-3">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="home1">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="profile1">
                                                    Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="messages1">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="settings1">
                                                    Settings
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="home1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="profile1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="messages1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="settings1">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-multiple-blank-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-sm btn-soft-primary">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <h5 className="mb-3">Arrow Nav tabs</h5>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="arrow-overview">
                                        <p className="text-muted">Use <code>arrow-navtabs </code>class to create arrow nav tabs.</p>
                                        <Nav as="ul" variant="pills" className="arrow-navtabs nav-success bg-light mb-3">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="arrow-overview">
                                                    <span className="d-block d-sm-none"><i className="mdi mdi-home-variant"></i></span>
                                                    <span className="d-none d-sm-block">Overview</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="arrow-profile">
                                                    <span className="d-block d-sm-none"><i className="mdi mdi-account"></i></span>
                                                    <span className="d-none d-sm-block">Profile</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="arrow-contact">
                                                    <span className="d-block d-sm-none"><i className="mdi mdi-email"></i></span>
                                                    <span className="d-none d-sm-block">Contact</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="arrow-overview">
                                                <h6>Give your text a good structure</h6>
                                                <p className="mb-0">
                                                    Contrary to popular belief, you don’t have to work endless nights and hours to create a <a href="#" className="text-decoration-underline"><b>Fantastic Design</b></a> by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years, which is excellent news to the beginner and advanced designer.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="arrow-profile">
                                                <h6>Use a color palette</h6>
                                                <p className="mb-0">
                                                    Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in <a href="#" className="text-decoration-underline"><b>Graphic Design</b></a> is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="arrow-contact">
                                                <h6>Contact</h6>
                                                <p className="mb-0">
                                                    Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent news to the beginner and advanced <a href="#" className="text-decoration-underline"><b>Contact Designer</b></a>.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Header Justify Tabs</h5>
                            <Card>
                                <Tab.Container defaultActiveKey="developers">
                                    <Card.Header className="align-items-xl-center d-xl-flex">
                                        <p className="text-muted flex-grow-1 mb-xl-0">Use <code>card-header-pills</code> class to create header justify tab.</p>
                                        <div className="flex-shrink-0">
                                            <Nav as="ul" variant="pills" className="card-header-pills">
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="developers">
                                                        Developers
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="designers">
                                                        Designers
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="managers">
                                                        Managers
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>

                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="developers">
                                                <Row>
                                                    <Col sm="6">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar8} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Dominic Charlton</h6>
                                                                <p className="mb-0">520 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar7} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Charlie Pritchard</h6>
                                                                <p className="mb-0">45.2K Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar6} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Harvey Wells</h6>
                                                                <p className="mb-0">1025 Followers</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm="6">
                                                        <div className="d-flex mt-3 mt-sm-0">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar5} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Amelie Townsend</h6>
                                                                <p className="mb-0">6584 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar4} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Emily Slater</h6>
                                                                <p className="mb-0">24.8K Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar3} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Declan Long</h6>
                                                                <p className="mb-0">1.5K Followers</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="designers">
                                                <Row>
                                                    <Col sm="6">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar1} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Luke Brown</h6>
                                                                <p className="mb-0">654 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar2} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Matilda Walker</h6>
                                                                <p className="mb-0">270 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar3} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Leo Stokes</h6>
                                                                <p className="mb-0">4120 Followers</p>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col sm="6">
                                                        <div className="d-flex mt-3 mt-sm-0">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar4} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Chelsea Preston</h6>
                                                                <p className="mb-0">9854 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar5} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Jennifer Barker</h6>
                                                                <p className="mb-0">15.8K Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar6} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Callum Murray</h6>
                                                                <p className="mb-0">2K Followers</p>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                </Row>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="managers">
                                                <Row>
                                                    <Col sm="6">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar7} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Dominic Charlton</h6>
                                                                <p className="mb-0">784 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar8} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Matilda Walker</h6>
                                                                <p className="mb-0">6549 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar4} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Jennifer Barker</h6>
                                                                <p className="mb-0">2100 Followers</p>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col sm="6">
                                                        <div className="d-flex mt-3 mt-sm-0">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar5} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Amelie Townsend</h6>
                                                                <p className="mb-0">4565 Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar1} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Emily Slater</h6>
                                                                <p className="mb-0">8K Followers</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-shrink-0">
                                                                <Image src={avatar2} alt="" className="avatar-sm rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h6 className="mb-1 fs-14">Declan Long</h6>
                                                                <p className="mb-0">9800 Followers</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Tab.Container>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <h5 className="mb-3">Bottom Card Nav Tabs</h5>
                            <Card>
                                <Tab.Container defaultActiveKey="bottomtabs-home">
                                    <Card.Body>
                                        <p className="text-muted">Use <code>card-footer-tabs</code> class to create the bottom card nav justify tab.</p>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="bottomtabs-home">
                                                <h5><i className="ri-home-3-line align-bottom me-1"></i> Home</h5>
                                                <p className="mb-2">
                                                    On the note of consistency, color consistency is a MUST. If you’re not trying to create crazy contrast in your design, then a great idea would be for you to use a color palette throughout your entire design. It will subconsciously interest viewers and also is very pleasing to look at.
                                                </p>
                                                <p className="mb-0">
                                                    Any bypasser will stop to see what you have to see, even if your design has nothing to do with them, for the simple fact that it is beautiful to look at.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="bottomtabs-profile">
                                                <h5><i className="ri-user-2-line align-bottom me-1"></i> Profile</h5>
                                                <p className="mb-2">
                                                    Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable.
                                                </p>
                                                <p className="mb-0">
                                                    A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="bottomtabs-messages">
                                                <h5><i className="ri-mail-line align-bottom me-1"></i> Messages</h5>
                                                <p className="mb-2">
                                                    Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy! ", Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him.
                                                </p>
                                                <p className="mb-0">
                                                    Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                    <Card.Footer className="bg-transparent border-top">

                                        <Nav as="ul" variant='pills' className="nav-justified card-footer-tabs fs-17" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="bottomtabs-home">
                                                    <i className="ri-home-3-line"></i>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="bottomtabs-profile">
                                                    <i className="ri-user-2-line"></i>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="bottomtabs-messages">
                                                    <i className="ri-mail-line"></i>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Footer>
                                </Tab.Container>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Custom Hover Tabs</h5>
                            <Card>
                                <Tab.Container defaultActiveKey="custom-hover-customere">
                                    <Card.Body>
                                        <p className="text-muted">Use <code>custom-hover-nav-tabs</code> class to create custom hover tabs.</p>
                                    </Card.Body>
                                    <div className="border">
                                        <Nav as="ul" variant='pills' className="custom-hover-nav-tabs">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="custom-hover-customere">
                                                    <i className="ri-user-fill nav-icon nav-tab-position"></i>
                                                    <h5 className="nav-titl nav-tab-position m-0">Customer</h5>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="custom-hover-description">
                                                    <i className="ri-file-text-line nav-icon nav-tab-position"></i>
                                                    <h5 className="nav-titl nav-tab-position m-0">Description</h5>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="custom-hover-reviews">
                                                    <i className="ri-star-half-line nav-icon nav-tab-position"></i>
                                                    <h5 className="nav-titl nav-tab-position m-0">Reviews</h5>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Card.Body>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="custom-hover-customere">
                                                <h6>Customer Details</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Address</th>
                                                                <th scope="col">Country</th>
                                                                <th scope="col">Pincode</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>Ruby Butcher</td>
                                                                <td>412 Rosewood Lane</td>
                                                                <td>New York</td>
                                                                <td>10019</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Martha T Goldberg</td>
                                                                <td>2760 Clarksburg Park Road</td>
                                                                <td>Arizona</td>
                                                                <td>86038</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="custom-hover-description">
                                                <h6>Description</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Title</th>
                                                                <th scope="col">Categories</th>
                                                                <th scope="col">Author</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Building Web Apps With Wordpress</td>
                                                                <td>Web, Wordpress, Design</td>
                                                                <td>Lucia Victor</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Information Technology</th>
                                                                <td>Management, Manager, Design</td>
                                                                <td>Arora Sumita</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="custom-hover-reviews">
                                                <h6>Customer Reviews</h6>
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Location</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Ratings</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Luke Brown</td>
                                                                <td>New York</td>
                                                                <td>$745</td>
                                                                <td>4.4 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Matilda Walker</td>
                                                                <td>USA</td>
                                                                <td>$87.125</td>
                                                                <td>2.7 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Tab.Container>
                            </Card>
                        </Col>


                        <Col xxl={6}>
                            <h5 className="mb-3">Custom Vertical Tabs</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Use <code>custom-verti-nav-pills</code> class to create custom vertical tabs.</p>
                                    <Row>
                                        <Tab.Container defaultActiveKey="custom-v-pills-home">
                                            <Col lg={3}>
                                                <Nav variant='pills' className="flex-column nav-pills-tab custom-verti-nav-pills text-center" role="tablist" aria-orientation="vertical">
                                                    <Nav.Link eventKey="custom-v-pills-home">
                                                        <i className="ri-home-4-line d-block fs-20 mb-1"></i> Home
                                                    </Nav.Link>
                                                    <Nav.Link eventKey="custom-v-pills-profile">
                                                        <i className="ri-user-2-line d-block fs-20 mb-1"></i> Profile
                                                    </Nav.Link>
                                                    <Nav.Link eventKey="custom-v-pills-messages">
                                                        <i className="ri-mail-line d-block fs-20 mb-1"></i> Messages
                                                    </Nav.Link>
                                                </Nav>
                                            </Col>
                                            <Col lg={9}>
                                                <Tab.Content className="text-muted mt-3 mt-lg-0">
                                                    <Tab.Pane eventKey="custom-v-pills-home">
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <Image src={img4} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0">Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3">
                                                                <p className="mb-0">Always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <Image src={img5} alt="" width="150" className="rounded" />
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="custom-v-pills-profile">
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <Image src={img3} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3">
                                                                <p className="mb-0">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. For that very reason, I went on a quest and spoke to many different professional graphic designers.</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <Image src={img6} alt="" width="150" className="rounded" />
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>

                                                    <Tab.Pane eventKey="custom-v-pills-messages">
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <Image src={img7} alt="" width="150" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <p className="mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1 me-3">
                                                                <p className="mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <Image src={img8} alt="" width="150" className="rounded" />
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>

                                                </Tab.Content>
                                            </Col>
                                        </Tab.Container>
                                    </Row>
                                </Card.Body>
                            </Card>

                        </Col>


                    </Row>


                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Animation Nav</h5>
                            <Card>
                                <Card.Body>
                                    <Tab.Container defaultActiveKey="animation-home">
                                        <p className="text-muted">Use <code>animation-nav</code> class to create animated tabs.</p>

                                        <Nav as="ul" variant="pills" className="animation-nav nav-justified gap-2 mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="animation-home">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="animation-profile">
                                                    Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="animation-messages">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="animation-settings">
                                                    Settings
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="animation-home">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="animation-profile">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="animation-messages">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="animation-settings">
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <h5 className="mb-3">Nav with Badge</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Example of nav tabs with badge wrapped in nav item.</p>
                                    <Tab.Container defaultActiveKey="nav-badge-home">
                                        <Nav as="ul" variant="tabs" className="nav-justified mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-badge-home">
                                                    Explore
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-badge-profile" className="align-middle">
                                                    Profile <span className="badge bg-success">Done</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-badge-messages" className="align-middle">
                                                    Messages <span className="badge bg-danger rounded-circle">5</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-badge-settings">
                                                    Settings
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="nav-badge-home">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-badge-profile">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-badge-messages">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-badge-settings">
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Border Top Nav</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Use <code>nav-border-top</code> class to create nav tabs with border at top.</p>
                                    <Tab.Container defaultActiveKey="nav-border-top-home">
                                        <Nav as="ul" variant="tabs" className="nav-border-top nav-border-top-primary mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-top-home">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-top-profile">
                                                    Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-top-messages">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-top-settings">
                                                    Settings
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="nav-border-top-home">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-line text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-link">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-border-top-profile">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-line text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-link">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-border-top-messages">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-line text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-link">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-border-top-settings">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-line text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the.
                                                        <div className="mt-2">
                                                            <a href="#" className="btn btn-link">Read More <i className="ri-arrow-right-line ms-1 align-middle"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col xxl={6}>
                            <h5 className="mb-3">Border Top Nav Justified Tabs</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Use <code>nav-border-top nav-justified</code> class to create nav tabs with border at top with justified tabs position.</p>
                                    <Tab.Container defaultActiveKey="nav-border-justified-home">
                                        <Nav as="ul" variant="tabs" className="nav-justified nav-border-top nav-border-top-success mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-justified-home">
                                                    <i className="ri-home-5-line align-middle me-1"></i> Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-justified-profile">
                                                    <i className="ri-user-line me-1 align-middle"></i> Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-border-justified-messages">
                                                    <i className="ri-question-answer-line align-middle me-1"></i>Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="nav-border-justified-home">
                                                <h6>Give your text a good structure</h6>
                                                <p className="mb-0">
                                                    Contrary to popular belief, you don’t have to work endless nights and hours to create a <a href="#" className="text-decoration-underline"><b>Fantastic Design</b></a> by using complicated 3D elements. Flat design is your friend. Remember that. And the great thing about flat design is that it has become more and more popular over the years, which is excellent news to the beginner and advanced designer.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-border-justified-profile">
                                                <h6>Use a color palette</h6>
                                                <p className="mb-0">
                                                    Opposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting colors in <a href="#" className="text-decoration-underline"><b>Graphic Design</b></a> is a must. It’s eye-catching, it makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-border-justified-messages">
                                                <h6>Message</h6>
                                                <p className="mb-0">
                                                    Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people’s interest is that it has become more and more popular over the years, which is excellent news to the beginner and advanced <a href="#" className="text-decoration-underline"><b>Contact Designer</b></a>.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Outline Border Nav</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                                    <Tab.Container defaultActiveKey="border-nav-home">
                                        <Nav as="ul" variant="pills" className="nav-custom-outline nav-primary mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-nav-home">
                                                    Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-nav-profile">
                                                    Profile</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-nav-messages">
                                                    Messages</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-nav-settings">
                                                    Settings</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="border-nav-home">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The
                                                        goal is to make your text as comfortable to read as possible.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="border-nav-profile">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        In some designs, you might adjust your tracking to create a certain artistic effect. It can also help
                                                        you fix fonts that are poorly spaced to begin with.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
                                                        enjoy with my whole heart.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="border-nav-messages">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to
                                                        be creative and make your own style choices.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and
                                                        asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="border-nav-settings">
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and
                                                        asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        After gathering lots of different opinions and graphic design basics, I came up with a list of 30
                                                        graphic design tips that you can start implementing.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col xxl={6}>
                            <h5 className="mb-3">Custom Nav</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">*Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                                    <Tab.Container defaultActiveKey="border-navs-home">
                                        <Nav as="ul" variant="pills" className="nav-customs nav-danger mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-navs-home">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-navs-profile">
                                                    Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-navs-messages">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="border-navs-settings">
                                                    Settings
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="border-navs-home">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Raw denim you probably haven't heard of them jean shorts Austin.
                                                        Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Too much or too little spacing, as in the example below, can make things unpleasant for the
                                                        reader. The
                                                        goal is to make your text as comfortable to read as possible.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="border-navs-profile">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        In some designs, you might adjust your tracking to create a certain artistic effect. It can
                                                        also help
                                                        you fix fonts that are poorly spaced to begin with.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                                                        spring which I
                                                        enjoy with my whole heart.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="border-navs-messages">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        Each design is a new, unique piece of art birthed into this world, and while you have the
                                                        opportunity to
                                                        be creative and make your own style choices.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic
                                                        designers and
                                                        asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="border-navs-settings">
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic
                                                        designers and
                                                        asked them what graphic design tips they live.
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="flex-shrink-0">
                                                        <i className="ri-checkbox-circle-fill text-success"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        After gathering lots of different opinions and graphic design basics, I came up with a list
                                                        of 30
                                                        graphic design tips that you can start implementing.
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>


                    <Row>
                        <Col xxl={6}>
                            <h5 className="mb-3">Colored Nav</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                                    <Tab.Container defaultActiveKey="nav-colored-home">
                                        <Nav as="ul" variant="pills" className="nav-custom nav-custom-success mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-colored-home">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-colored-profile">
                                                    Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-colored-messages">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="nav-colored-home">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar2} alt="" className="avatar-md rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                        single-origin coffee squid. Exercitation +1 labore velit, blog
                                                        sartorial PBR leggings next level wes anderson artisan four loko
                                                        farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 me-3">
                                                        For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar3} alt="" className="avatar-md rounded" />
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-colored-profile">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar4} alt="" className="avatar-md rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 me-3">
                                                        Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar1} alt="" className="avatar-md rounded" />
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-colored-messages">
                                                <div className="d-flex mb-3">
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar4} alt="" className="avatar-md rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 me-3">
                                                        Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything..
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Image src={avatar1} alt="" className="avatar-md rounded" />
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col xxl={6}>
                            <h5 className="mb-3">Light Nav</h5>
                            <Card>
                                <Card.Body>
                                    <p className="text-muted">Use <code>nav-custom-light</code> class to lighten the nav tabs area.</p>
                                    <Tab.Container defaultActiveKey="nav-light-home">
                                        <Nav as="ul" variant="pills" className="nav-custom nav-custom-light mb-3" role="tablist">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-light-home">
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-light-profile">
                                                    Profile
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="nav-light-messages">
                                                    Messages
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="text-muted">
                                            <Tab.Pane eventKey="nav-light-home">
                                                <div className="d-flex mb-1">
                                                    <div className="flex-grow-1 me-3">
                                                        Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting.
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Image src={img4} alt="" width="150" className="rounded" />
                                                    </div>
                                                </div>
                                                <p className="mb-0"> Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-light-profile">
                                                <div className="d-flex mb-1">
                                                    <div className="flex-grow-1 me-3">
                                                        Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable Any bypasser will stop to see what you have to see, even if your design has nothing to do with them.
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Image src={img5} alt="" width="150" className="rounded" />
                                                    </div>
                                                </div>
                                                <p className="mb-0">It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="nav-light-messages">
                                                <div className="d-flex mb-1">
                                                    <div className="flex-grow-1 me-3">
                                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin On the note of consistency, color consistency is a MUST. If you’re not trying to create crazy contrast in your design.
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <Image src={img5} alt="" width="150" className="rounded" />
                                                    </div>
                                                </div>
                                                <p className="mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default UiTabs;