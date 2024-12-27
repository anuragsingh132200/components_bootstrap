import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const iconCollapseCode =
    `
<!-- Collapse with Icon -->
<div className="hstack gap-3 mb-3">
    <Link className="link-success" onClick={() => seticonCol(!iconCol)}>
        <i className="ri-arrow-down-circle-line fs-16"></i>
    </Link>
    <Button variant='light' onClick={() => seticonCol2(!iconCol2)}>
        <i className="ri-filter-2-line"></i>
    </Button>
</div>
<Collapse in={iconCol}>
    <Card className="mb-0">
        <Card.Body>
            If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options.
        </Card.Body>
    </Card>
</Collapse>
<Collapse in={iconCol2}>
    <Card className="mb-0 mt-3">
        <Card.Body>
            When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results.
        </Card.Body>
    </Card>
</Collapse>
`;

const IconCollapseExample = () => (
    <PrismCode
        code={iconCollapseCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default IconCollapseExample;