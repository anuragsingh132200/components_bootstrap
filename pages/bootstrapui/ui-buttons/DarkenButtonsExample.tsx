import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const darkenButtonsCode =
`
<!-- Darken Buttons -->

<div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
    <Button className="btn-darken-primary">Primary</Button>
    <Button className="btn-darken-secondary">Secondary</Button>
    <Button className="btn-darken-success">Success</Button>
    <Button className="btn-darken-warning">Warning</Button>
    <Button className="btn-darken-danger">Danger</Button>
    <Button className="btn-darken-info">Info</Button>
    <Button className="btn-darken-dark">Dark</Button>
    <Button className="btn-darken-light">Light</Button>
</div>
`;

const DarkenButtonsExample = () => (
    <PrismCode
        code={darkenButtonsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DarkenButtonsExample;