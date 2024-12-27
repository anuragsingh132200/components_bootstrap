import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const ghostButtonsCode =
    `
<!-- Ghost Buttons -->

<Button className="btn-ghost-primary">Primary</Button>

<Button className="btn-ghost-secondary">Secondary</Button>

<Button className="btn-ghost-success">Success</Button>

<Button className="btn-ghost-info">Info</Button>

<Button className="btn-ghost-warning">Warning</Button>

<Button className="btn-ghost-danger">Danger</Button>

<Button className="btn-ghost-dark">Dark</Button>
`;

const GhostButtonsExample = () => (
    <PrismCode
        code={ghostButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default GhostButtonsExample;