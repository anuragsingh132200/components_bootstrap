import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const roundedButtonsCode =
    `
<!-- Rounded Buttons -->
<Button variant='primary' className="rounded-pill">Primary</Button>

<Button variant='secondary' className="rounded-pill">Secondary</Button>

<Button variant='success' className="rounded-pill">Success</Button>

<Button variant='info' className="rounded-pill">Info</Button>

<Button variant='warning' className="rounded-pill">Warning</Button>

<Button variant='danger' className="rounded-pill">Danger</Button>

<Button variant='dark' className="rounded-pill">Dark</Button>

<Button variant='light' className="rounded-pill">Light</Button>
`;

const RoundedButtonsExample = () => (
    <PrismCode
        code={roundedButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default RoundedButtonsExample;