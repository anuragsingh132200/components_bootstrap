import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const flushAccordionCode =
    `
<!-- Accordion Flush Example -->
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
`;

const FlushAccordionExample = () => (
    <PrismCode
        code={flushAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default FlushAccordionExample;