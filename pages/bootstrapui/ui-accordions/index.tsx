import React, {useState} from 'react';
import Breadcrumb from '@common/Breadcrumb';
import { Accordion, Button, Card, Col, Collapse, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';

// Import Components
// import { DefaultAccordionExample, MultipleTargetCollapseExample, FlushAccordionExample, IconAccordionExample, WithIconAccordionExample, PlusIconAccordionExample, LeftIconAccordionExample, BorderedAccordionExample, NestingAccordionExample, FillColoredAccordionExample, CollapseExample, HorizontalCollapseExample, IconCollapseExample, InlineBLockCollapseExample } from './uiAccordionsCode'
import DefaultAccordionExample from './DefaultAccordionExample';
import MultipleTargetCollapseExample from './MultipleTargetCollapseExample';
import FlushAccordionExample from './FlushAccordionExample';
import IconAccordionExample from './IconAccordionExample';
import WithIconAccordionExample from './WithIconAccordionExample';
import PlusIconAccordionExample from './PlusIconAccordionExample';
import LeftIconAccordionExample from './LeftIconAccordionExample';
import BorderedAccordionExample from './BorderedSAccordionExample';
import NestingAccordionExample from './NestingAccordionExample';
import FillColoredAccordionExample from './FillColoredAccordionExample';
import CollapseExample from './CollapseExample';
import HorizontalCollapseExample from './HorizontalCollapseExample';
import IconCollapseExample from './IconCollapseExample';
import InlineBLockCollapseExample from './InlineBlockCollapseExample';

const UiAccordions = () => {

    const [open, setOpen] = useState(false);
    const [collOpen, setcollOpen] = useState(true);
    const [iconColl, seticonColl] = useState(true);
    const [iconColl2, seticonColl2] = useState(true);
    const [blockColl, setblockColl] = useState(true);
    const [blockColl2, setblockColl2] = useState(true);

    const [coll3, setcoll3] = useState(true);
    const [coll4, setcoll4] = useState(true);

    const t_coll3 = () => {
        setcoll3(!coll3);
    };

    const t_coll4 = () => {
        setcoll4(!coll4);
    };

    const t_coll5 = () => {
        setcoll3(!coll3);
        setcoll4(!coll4);
    };

    return (
        <React.Fragment>

            <Head>
                <title>Accordions | Hybrix - Admin & Dashboard Template</title>
            </Head>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb breadcrumb="Bootstrap Ui" breadcrumbItem="Accordions" />
                    
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Default Accordion</h4>
                                </Card.Header>

                                <Card.Body>
                                    <p className="text-muted">Use the <code>accordion</code> class to expand/collapse the accordion content.</p>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header id="headingOne">
                                                How to create a group booking ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                    Although you probably won’t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header id="headingTwo">
                                                Why do we use it ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply."
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header id="headingThree">
                                                Where does it come from ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "330px"}}>
                                        <DefaultAccordionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Accordion Flush </h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>accordion-flush</code> class to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>
                                    <Accordion className="accordion-flush" defaultActiveKey="0">
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header id="flush-headingOne">
                                                How do I set up my profile ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                The renewal of your SlickText service happens on the anniversary of your original paid sign up date. Upgrading in the middle of your billing period will not change the billing date. Upgrading does however force an immediate, pro-rated charge to take place on your account.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header id="flush-headingTwo">
                                                What can I do with my project ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                If you had signed up on a free account with Slicktext, then upgraded to a paid plan at a later date, your bill will renew based on the date you had upgraded to a paid plan. All invoices are able to be viewed under your plan options in your SlickText account.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header id="flush-headingThree">
                                                Where can I go to edit voice settings
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                No, we cannot provide this information. Opting out from a list is an anonymous, private act. This prevents further harassment. Providing this information is considered bad practice, and further communication after they opt out would be considered against compliance.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <FlushAccordionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Accordions with Icons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>custom-accordionwithicon</code> class to show custom icon at accordion.</p>
                                    <Accordion defaultActiveKey='0' className='custom-accordionwithicon accordion-secondary'>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>
                                                <i className="ri-global-line me-2"></i> How Does Age Verification Work?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>
                                                <i className="ri-user-location-line me-2"></i> How Does Link Tracking Work?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header>
                                                <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "330px"}}>
                                        <IconAccordionExample/>
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Accordions without Icons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>accordion-icon-none</code> class to remove icon at accordion.</p>
                                    <Accordion defaultActiveKey='0'>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>
                                                <i className="ri-global-line me-2"></i> How Does Age Verification Work?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. For that very reason, I went on a quest and spoke to many different professional graphic designers.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>
                                                <i className="ri-user-location-line me-2"></i> How Does Link Tracking Work?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header>
                                                <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                    Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <div className="card-body bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </div>
                                <div className="card-body">
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <WithIconAccordionExample />
                                    </pre>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Col xl={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Accordions with Plus Icon</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>custom-accordionwithicon-plus</code> class to show plus icon at the accordion.</p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header id="accordionwithplusExample1">
                                            What is User Interface Design?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='1'>
                                        <Accordion.Header>
                                            What is Digital Marketing?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header>
                                            Where does it come from ?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. omo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                            </Card.Body>
                            <Card.Body>
                                <pre className="language-markup" style={{height: "310px"}}>
                                    <PlusIconAccordionExample />
                                </pre>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Left Icon Accordions</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>lefticon-accordion</code> class to show the icon on the left side of the accordion.</p>
                                    <Accordion defaultActiveKey='0'>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>
                                                What is User Interface Design?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>
                                                What is Digital Marketing?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header>
                                                Where does it come from ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <LeftIconAccordionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Accordions Bordered</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>custom-accordion-border</code> class to create the border at the accordion.</p>
                                    <Accordion defaultActiveKey='0' className="custom-accordion-border accordion-border-box accordion-success">
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>
                                                What is User Interface Design?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua nulla assumenda shoreditch et.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>
                                                What is Digital Marketing?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header>
                                                Where does it come from ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <BorderedAccordionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Nesting Accordions</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>nesting-accordion</code> class to create a nesting accordion.</p>
                                    <Accordion defaultActiveKey='0'>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>
                                                How Do I Add Contacts/Subscribers?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                This opt in method is perfect for those looking to integrate a different software such Shopify or Hubspot with Slicktext. For example, upon cashing out online, a subscriber may submit to have their mobile number to receive marketing messages. The API will pass this information from said software over to Slicktext via API integration.
                                                    <Accordion defaultActiveKey='1'>
                                                        <Accordion.Item eventKey='1'> 
                                                            <Accordion.Header>
                                                                How Do I Search For Contacts?
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                When you are in need of finding a specific subscriber, you will want to use the help of SlickText's search navigation tool, located under the Contacts tab of your Slicktext account. Once here, you will have options to sort by, filter, and search your contacts.
                                                                    <Accordion>
                                                                        <Accordion.Item eventKey='2'>
                                                                            <Accordion.Header className="accordion-header" id="accordionnesting4Example2">
                                                                                How do I reset my digital tide watch ?
                                                                            </Accordion.Header>
                                                                            <Accordion.Body>
                                                                                Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                                                                            </Accordion.Body>
                                                                        </Accordion.Item>
                                                                    </Accordion>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey='3'>
                                                            <Accordion.Header>
                                                                How Do I Delete a Contact From My List?
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='4'>
                                            <Accordion.Header>
                                                How Does Personalization Work?
                                            </Accordion.Header>
                                                <Accordion.Body>
                                                    Personalization allows you to provide a personal touch to your outbound text marketing campaigns. SlickText uses merge tags as placeholders that are replaced with contact-specific information when a text message is sent. These merge tags may also be known as personalization fields.
                                                    <Accordion>
                                                        <Accordion.Item eventKey='5'>
                                                            <Accordion.Header>
                                                                Howe does temperature impact my watch?
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                Opting out a subscriber will allow SlickText to maintain the history of the subscriber as it pertains to the textword you are opting them out of. If this user was to text to join again, the initial text they are met with will be a "welcome back" message instead of the auto reply.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='6'>
                                            <Accordion.Header>
                                                What Happens When I Run Out of Messages?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                When you run out of messages, you will not be able to send any outbound campaigns. This would include any scheduled messages, drip campaigns, and birthday messages. However, we will continue to deliver your auto-reply messages to allow your subscriber list to continue to grow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                                <Card.Body>
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <NestingAccordionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Accordions Fill Colored</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>accordion-fill-</code> class with modifier class to the color accordion.</p>
                                    <Row>
                                        <Col xxl={6}>
                                            <Accordion defaultActiveKey='0' className="accordion-fill-success">
                                                <Accordion.Item eventKey='0'>
                                                    <Accordion.Header>
                                                        What are webhooks?
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Webhooks allow you to gather real time data on key interactions that happen with your Slick Text account. Simply provide us with a url where you'd like the data to be sent, choose which events you'd like to be informed of, and click save.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey='1'>
                                                    <Accordion.Header>
                                                        Where can I find my Textword ID?
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Head over to the Textwords page. Click options on the right hand side, and then click Settings. This will redirect you to your Textword Setting page. Now, go check your url, and the textword ID will be the number after "word=". Too much or too little spacing, as in the example below.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey='2'>
                                                    <Accordion.Header>
                                                        Where is your API documentation?
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                        
                                        <Col xxl={6}>
                                            <Accordion defaultActiveKey='0' className="accordion-fill-secondary">
                                                <Accordion.Item eventKey='0'>
                                                    <Accordion.Header>
                                                        How Does Age Verification Work?
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey='1'>
                                                    <Accordion.Header>
                                                        What Kind of List Growth Should I Expect?
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Consistency is the one thing that can take all of the different elements in your design, and tie them all together and make them work. In an awareness campaign, it is vital for people to begin put 2 and 2 together and begin to recognize your cause. Consistency piques people’s interest.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey='2'>
                                                    <Accordion.Header>
                                                        How Do I Delete a Contact From My List?
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <FillColoredAccordionExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Collapse Example</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">
                                        You can use a link with the <code>href</code> attribute, or a button with the <code>data-bs-target</code> attribute. In both cases, the <code>data-bs-toggle="collapse"</code> is required.
                                    </p>
                                    <div className="hstack gap-2 flex-wrap mb-3">
                                        <Button variant='primary' onClick={() => setOpen(!open)}>
                                            Link with href
                                        </Button>
                                        <Button variant='primary' onClick={() => setOpen(!open)}>
                                            Button with data-bs-target
                                        </Button>
                                    </div>
                                    <Collapse in={open}>
                                        <Card className="mb-0">
                                            <Card.Body>
                                                When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
                                            </Card.Body>
                                        </Card>
                                    </Collapse>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "265px"}}>
                                        <CollapseExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal Collapse</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>collapse-horizontal</code> class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element for horizontal collapse.</p>
                                    <div className="mb-3">
                                        <Button variant='primary' onClick={() => setcollOpen(!collOpen)}>
                                            Toggle Width Collapse
                                        </Button>
                                    </div>
                                    <Collapse in={collOpen} dimension="width">
                                        <div id='example-collapse-text'>
                                            <Card body className="mb-0" style={{width: "300px"}}>
                                                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                                            </Card>
                                        </div>
                                    </Collapse>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup">
                                        <HorizontalCollapseExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Collapse with Icon</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">
                                        Here is the example of collapse in which the icon is wrapped within the button collapse toggle.
                                    </p>
                                    <div className="hstack gap-3 mb-3">
                                        <Link scroll={false} href='#' className="link-success" onClick={() => seticonColl(!iconColl)}>
                                            <i className="ri-arrow-down-circle-line fs-16"></i>
                                        </Link>
                                        <Button variant='light' onClick={() => seticonColl2(!iconColl2)}>
                                            <i className="ri-filter-2-line"></i>
                                        </Button>
                                    </div>
                                    <Collapse in={iconColl}>
                                        <Card className="mb-0">
                                            <Card.Body>
                                                If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options.
                                            </Card.Body>
                                        </Card>
                                    </Collapse>
                                    <Collapse in={iconColl2}>
                                        <Card className="mb-0 mt-3">
                                            <Card.Body>
                                                When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results.
                                            </Card.Body>
                                        </Card>
                                    </Collapse>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "295px"}}>
                                        <IconCollapseExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Inline & Block Element Collapse</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Inline element collapse takes all horizontal space hence you can activate the collapse within by clicking on full-width horizontal space. Block element collapse can be activated by clicking on collapse toggle only.</p>
                                    <div className="mb-3">
                                        <h6 className="text-primary" onClick={() => setblockColl(!blockColl)}>
                                            <code>&lt;h6&gt;</code> Inline Element Collapse
                                        </h6>
                                        <span className="text-primary" onClick={() => setblockColl2(!blockColl2)}>
                                            <code>&lt;span&gt;</code> Block Element Collapse
                                        </span>
                                    </div>
                                    <Row className="g-2">
                                        <Collapse dimension='width' in={blockColl}>
                                            <div className="col-auto">
                                                <Card body className="mb-0" style={{width: "300px"}}>
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart.
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <Collapse dimension='width' in={blockColl2} >
                                            <div className="col-auto">
                                                <Card body className="mb-0" style={{width: "300px"}}>
                                                    When you have created a new account schedule and set up the rows, you must set up columns.
                                                </Card>
                                            </div>
                                        </Collapse>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "275px"}}>
                                        <InlineBLockCollapseExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multiple Targets Collapse</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">
                                        A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute. Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
                                        show and hide an element if they each reference it with their href or data-bs-target attribute.
                                    </p>
                                    <div className="hstack gap-2 flex-wrap mb-3">
                                        <Button variant='primary' onClick={t_coll3}>Toggle First Element</Button>
                                        <Button variant='primary' onClick={t_coll4}>Toggle Second Element</Button>
                                        <Button variant='primary' onClick={t_coll5}>Toggle Both Elements</Button>
                                    </div>
                                    <Row>
                                        <Col>
                                            <Collapse in={coll3}>
                                                <Card body className="mb-0">
                                                    Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                </Card>
                                            </Collapse>
                                        </Col>
                                        <Col>
                                            <Collapse in={coll4}>
                                                <Card body className="mb-0">
                                                    Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                </Card>
                                            </Collapse>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                                    <h5 className="fs-12 text-muted mb-0">Next.js Preview</h5>
                                </Card.Body>
                                <Card.Body>
                                    <pre className="language-markup" style={{height: "310px"}}>
                                        <MultipleTargetCollapseExample />
                                    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiAccordions;