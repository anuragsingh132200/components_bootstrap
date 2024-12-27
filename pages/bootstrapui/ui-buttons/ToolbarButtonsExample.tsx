import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })



const toolbarButtonsCode =
    `
<!-- Buttons Toolbar -->
<ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup className="me-2" aria-label="First group">
        <Button variant='light'>1</Button>
        <Button variant='light'>2</Button>
        <Button variant='light'>3</Button>
        <Button variant='light'>4</Button>
    </ButtonGroup>
    <ButtonGroup className="me-2" aria-label="Second group">
        <Button variant="light">5</Button>
        <Button variant="light">6</Button>
        <Button variant="light">7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
        <Button variant="light">8</Button>
    </ButtonGroup>
</ButtonToolbar>
`;

const ToolbarButtonsExample = () => (
    <PrismCode
        code={toolbarButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default ToolbarButtonsExample;