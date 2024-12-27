import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })


const sizeButtonsCode =
    `
<!-- Large Button -->
<Button size='lg' variant='primary'>Large button</Button>

<Button size='lg' variant='light'>Large button</Button>

<!-- Small Button -->
<Button size='sm' variant='primary'>Small button</Button>

<Button size='sm' variant='light'>Small button</Button>
`;

const SizeButtonsExample = () => (
    <PrismCode
        code={sizeButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default SizeButtonsExample;