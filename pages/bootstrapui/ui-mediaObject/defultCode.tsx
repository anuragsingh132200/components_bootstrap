import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Examples

const defultCode =
`
<div className="d-flex align-items-start text-muted mb-4">
    <div className="flex-shrink-0 me-3">
        <Image src={avatar2} className="avatar-sm rounded" alt="..." />
    </div>

    <div className="flex-grow-1">
        <h5 className="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
</div>
<div className="d-flex align-items-start text-muted mb-4">
    <div className="flex-grow-1">
        <h5 className="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
    <div className="flex-shrink-0 ms-3">
        <Image src={avatar3} className="avatar-sm rounded" alt="..." />
    </div>
</div>
<div className="d-flex align-items-start text-muted">
    <div className="flex-shrink-0 me-3">
        <Image src={avatar2} className="avatar-sm rounded" alt="..." />
    </div>
    <div className="flex-grow-1">
        <h5 className="fs-14">Media heading</h5>
        This is some content from a media component. You can replace this with any content and adjust it as needed.
    </div>
</div>
`;

const DefultExample = () => (
    <PrismCode
        code={defultCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default DefultExample