import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Accordion

const defaultAccordionCode =
`<!-- Base Example -->
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
`;

const DefaultAccordionExample = () => (
    <PrismCode
        code={defaultAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DefaultAccordionExample;