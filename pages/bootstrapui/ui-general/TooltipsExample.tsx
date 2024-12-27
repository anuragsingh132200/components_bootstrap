import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const tooltipsCode =
`
<!-- Tooltips -->
<div className="hstack flex-wrap gap-2">
    <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> Tooltip on Top. </Tooltip>}>
        <Button variant="light">Tooltip on Top</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='right' overlay={<Tooltip id="tooltip-right"> Tooltip on right. </Tooltip>}>
        <Button variant="light">Tooltip on right</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-bottom"> Tooltip on bottom. </Tooltip>}>
        <Button variant="light">Tooltip on bottom</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='left' overlay={<Tooltip id="tooltip-left"> Tooltip on left. </Tooltip>}>
        <Button variant="light">Tooltip on left</Button>
    </OverlayTrigger>
    <OverlayTrigger placement='top' overlay={<Tooltip id="tooltip-top"> <em>Tooltip</em> <u>with</u> <b>HTML</b> </Tooltip>}>
        <Button variant="primary"><em>Tooltip</em> <u>with</u> <b>HTML</b></Button>
    </OverlayTrigger>
</div>
`;

const TooltipsExample = () => (
    <PrismCode
        code={tooltipsCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default TooltipsExample;