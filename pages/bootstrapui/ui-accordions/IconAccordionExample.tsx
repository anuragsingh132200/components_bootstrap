import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const iconAccordionCode =
    `
<!-- Accordions with Icons -->
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
`;

const IconAccordionExample = () => (
    <PrismCode
        code={iconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default IconAccordionExample;