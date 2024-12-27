import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const withIconAccordionCode =
    `
<!-- Accordions without Icons -->
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
        <div id="accor_withouticoncollapse2" className="accordion-collapse collapse" aria-labelledby="accordionwithouticonExample2" data-bs-parent="#accordionWithouticon">
            <div className="accordion-body">
                When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown.
            </div>
        </div>
    </Accordion.Item>
    <Accordion.Item eventKey='2'>
        <Accordion.Header>
            <i className="ri-pen-nib-line me-2"></i> How Do I Set Up the Drip Feature?
        </Accordion.Header>
        <Accordion.Body>
            <Accordion.Body>
                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
            </Accordion.Body>
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`;

const WithIconAccordionExample = () => (
    <PrismCode
        code={withIconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default WithIconAccordionExample;