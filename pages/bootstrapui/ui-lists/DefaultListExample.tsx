import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const defaultListCode =
    `
<!-- Default List -->
<ListGroup as='ul'>
    <ListGroup.Item><i className="ri-bill-line align-middle me-2"></i> Send the billing agreement</ListGroup.Item>
    <ListGroup.Item><i className="ri-file-copy-2-line align-middle me-2"></i>Send over all the documentation.</ListGroup.Item>
    <ListGroup.Item><i className="ri-question-answer-line align-middle me-2"></i>Meeting with daron to review the intake form</ListGroup.Item>
    <ListGroup.Item><i className="ri-secure-payment-line align-middle me-2"></i>Check uikings theme and give customer support</ListGroup.Item>
</ListGroup>
`;

const DefaultListExample = () => (
    <PrismCode
        code={defaultListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DefaultListExample;