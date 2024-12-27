import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const outlineButtonsCode =
    `
<!-- Outline Buttons -->
<Button variant="outline-primary">Primary</Button>

<Button variant="outline-secondary">Secondary</Button>

<Button variant="outline-success">Success</Button>

<Button variant="outline-info">Info</Button>

<Button variant="outline-warning">Warning</Button>

<Button variant="outline-danger">Danger</Button>

<Button variant="outline-dark">Dark</Button>

<Button variant="outline-light">Light</Button>

`;

const OutlineButtonsExample = () => (
    <PrismCode
        code={outlineButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default OutlineButtonsExample;