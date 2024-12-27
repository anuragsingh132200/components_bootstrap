import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const gradientButtonsCode =
`
<!-- Gradient Buttons -->
<Button variant='primary' className="bg-gradient">Primary</Button>

<Button variant='secondary' className="bg-gradient">Secondary</Button>

<Button variant='success' className="bg-gradient">Success</Button>

<Button variant='info' className="bg-gradient">Info</Button>

<Button variant='warning' className="bg-gradient">Warning</Button>

<Button variant='danger' className="bg-gradient">Danger</Button>

<Button variant='dark' className="bg-gradient">Dark</Button>

<Button variant='light' className="bg-gradient">Light</Button>
`;

const GradientButtonsExample = () => (
    <PrismCode
        code={gradientButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default GradientButtonsExample;