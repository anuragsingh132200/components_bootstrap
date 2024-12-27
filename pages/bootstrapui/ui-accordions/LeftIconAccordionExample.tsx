import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const leftIconAccordionCode =
    `
<!-- Left Icon Accordions -->
<Accordion>
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
`;

const LeftIconAccordionExample = () => (
    <PrismCode
        code={leftIconAccordionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default LeftIconAccordionExample;