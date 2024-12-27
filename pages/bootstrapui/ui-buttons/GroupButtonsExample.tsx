import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const groupButtonsCode =
    `
<!-- Buttons Group -->
<ButtonGroup aria-label="Basic example">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>

<!-- Radio Buttons -->
<ButtonGroup className="mt-4 mt-sm-0" aria-label="Basic example">
    <Button variant='light' className="btn-icon"><i className="ri-align-right"></i></Button>
    <Button variant='light' className="btn-icon"><i className="ri-align-center"></i></Button>
    <Button variant='light' className="btn-icon"><i className="ri-align-left"></i></Button>
</ButtonGroup>
`;

const GroupButtonsExample = () => (
    <PrismCode
        code={groupButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default GroupButtonsExample;