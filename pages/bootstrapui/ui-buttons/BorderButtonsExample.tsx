import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const borderButtonsCode =
`
<!-- Border Buttons -->

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='primary' className="btn-border">Primary</Button>
    <Button variant='secondary' className="btn-border">Secondary</Button>
    <Button variant='success' className="btn-border">Success</Button>
    <Button variant='warning' className="btn-border">Warning</Button>
    <Button variant='danger' className="btn-border">Danger</Button>
</div>

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button variant='outline-primary' className="btn-border">Primary</Button>
    <Button variant='outline-secondary' className="btn-border">Secondary</Button>
    <Button variant='outline-success' className="btn-border">Success</Button>
    <Button variant='soft-warning' className="btn-border">Warning</Button>
    <Button variant='soft-danger' className="btn-border">Danger</Button>
    <Button variant='soft-dark' className="btn-border">Dark</Button>
</div>
`;

const BorderButtonsExample = () => (
    <PrismCode
        code={borderButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default BorderButtonsExample;