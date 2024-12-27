import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const groupSizingButtonsCode =
`
<!-- Group Buttons Sizing -->
<ButtonGroup size='lg' aria-label="Basic example">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>

<ButtonGroup className="mt-2" aria-label="Basic example">
    <Button variant="light">Left</Button>
    <Button variant="light">Middle</Button>
    <Button variant="light">Right</Button>
</ButtonGroup>

<ButtonGroup size='sm' className="mt-2" aria-label="Basic example">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
</ButtonGroup>
`;

const GroupsizingButtonsExample = () => (
    <PrismCode
        code={groupSizingButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default GroupsizingButtonsExample;