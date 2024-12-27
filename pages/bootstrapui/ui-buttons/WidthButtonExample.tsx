import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const widthButtonsCode =
    `
<!-- Width Button -->
<Button variant='primary' className="w-xs">Xs</Button>

<Button variant='danger' className="w-sm">Small</Button>

<Button variant='warning' className="w-md">Medium</Button>

<Button variant='success' className="w-lg">Large</Button>
`;

const WidthButtonsExample = () => (
    <PrismCode
        code={widthButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default WidthButtonsExample;