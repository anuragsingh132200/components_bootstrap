import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const multipleTargetCollapseCode =
`
<!-- Multiple Targets Collapse -->

    const [coll3, setcoll3] = useState(true);
    const [coll4, setcoll4] = useState(true);

    const t_coll3 = () => {
        setcoll3(!coll3);
    };

    const t_coll4 = () => {
        setcoll4(!coll4);
    };

    const t_coll5 = () => {
        setcoll3(!coll3);
        setcoll4(!coll4);
    };

<div className="hstack gap-2 flex-wrap mb-3">
    <Button variant='primary' onClick={t_coll3}>Toggle First Element</Button>
    <Button variant='primary' onClick={t_coll4}>Toggle Second Element</Button>
    <Button variant='primary' onClick={t_coll5}>Toggle Both Elements</Button>
</div>
<Row>
    <Col>
        <Collapse in={coll3}>
            <Card body className="mb-0">
                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </Card>
        </Collapse>
    </Col>
    <Col>
        <Collapse in={coll4}>
            <Card body className="mb-0">
                Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </Card>
        </Collapse>
    </Col>
</Row>
`;

const MultipleTargetCollapseExample = () => (
    <PrismCode
        code={multipleTargetCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default MultipleTargetCollapseExample;