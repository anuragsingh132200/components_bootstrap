import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const softButtonsCode =
    `
<!-- Soft Buttons -->
<Button variant="soft-primary">Primary</Button>

<Button variant="soft-secondary">Secondary</Button>

<Button variant="soft-success">Success</Button>

<Button variant="soft-info">Info</Button>

<Button variant="soft-warning">Warning</Button>

<Button variant="soft-danger">Danger</Button>

<Button variant="soft-dark">Dark</Button>
`;

const SoftButtonsExample = () => (
    <PrismCode
        code={softButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default SoftButtonsExample;