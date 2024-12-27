import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const paginationCode =
`
<Pagination>
    <Pagination.Item>Previous</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next</Pagination.Item>
</Pagination>

<Pagination>
    <Pagination.Item>← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Disabled & Active -->
<Pagination>
    <Pagination.Item className="disabled">← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>

<Pagination>
    <Pagination.Item disabled>
        <span><i className="mdi mdi-chevron-left"></i></span>
    </Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>
        <i className="mdi mdi-chevron-right"></i>
    </Pagination.Item>
</Pagination>


<!-- Pagination sizing -->

<!-- Pagination Large -->
<Pagination className="pagination-lg">
    <Pagination.Item disabled>← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Small -->
<Pagination className="pagination-sm">
    <Pagination.Item disabled>← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Alignment -->

<!-- Center Alignment -->
<Pagination className="justify-content-center">
    <Pagination.Item className="disabled">← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>

<!-- Right Alignment -->
<Pagination className="justify-content-end">
    <Pagination.Item className="disabled">← Prev</Pagination.Item>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>Next →</Pagination.Item>
</Pagination>


<!-- Pagination Rounded -->
<Pagination className="pagination-lg pagination-rounded">
    <Pagination.Item disabled>←</Pagination.Item>
    <Pagination.Item>1</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>4</Pagination.Item>
    <Pagination.Item>5</Pagination.Item>
    <Pagination.Item>→</Pagination.Item>
</Pagination>
`;

const PaginationExample = () => (
    <PrismCode
        code={paginationCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default PaginationExample;