import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const fillColoredAccordionCode =
`
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
`;

const FillColoredAccordionExample = () => (
    <PrismCode
        code={fillColoredAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default FillColoredAccordionExample;