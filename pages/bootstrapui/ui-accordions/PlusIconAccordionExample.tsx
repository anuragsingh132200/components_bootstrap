import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const plusIconAccordionCode =
    `
<!-- Accordions with Plus Icon -->
<Accordion defaultActiveKey="0">
    <Accordion.Item eventKey='0'>
        <Accordion.Header>
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
`;

const PlusIconAccordionExample = () => (
    <PrismCode
        code={plusIconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default PlusIconAccordionExample;