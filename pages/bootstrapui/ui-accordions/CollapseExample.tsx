import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const collapseCode =
    `
<!-- Collapse Example -->
<div className="hstack gap-2 flex-wrap mb-3">
    <Button variant='primary' onClick={() => setOpen(!open)}>
        Link with href
    </Button>
    <Button variant='primary' onClick={() => setOpen(!open)}>
        Button with data-bs-target
    </Button>
</div>
<Collapse in={open}>
    <div className="card mb-0">
        <Card.Body>
            When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.
        </Card.Body>
    </div>
</Collapse>
`;

const CollapseExample = () => (
    <PrismCode
        code={collapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default CollapseExample;