import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Default Buttons

const defaultButtonsCode =
    `
<!-- Base Buttons -->
<Button variant='primary'>Primary</Button>

<Button variant='secondary'>Secondary</Button>

<Button variant='success'>Success</Button>

<Button variant='info'>Info</Button>

<Button variant='warning'>Warning</Button>

<Button variant='danger'>Danger</Button>

<Button variant='dark'>Dark</Button>

<Button variant='link'>Link</Button>

<Button variant='light'>Light</Button>
`;

const DefaultButtonsExample = () => (
    <PrismCode
        code={defaultButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DefaultButtonsExample;