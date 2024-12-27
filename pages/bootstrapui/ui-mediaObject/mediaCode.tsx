import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Media Alignment

const mediaCode =
    `
<!-- Media Alignment -->
<div className="d-flex align-items-start text-muted mb-4">
    <div className="flex-shrink-0 me-3">
        <Image src={avatar2} className="avatar-sm rounded" alt="..." />
    </div>

    <div className="flex-grow-1">
        <h5 className="fs-14">Top Aligned media</h5>
        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
</div>
<div className="d-flex align-items-center text-muted mb-4">
    <div className="flex-shrink-0 me-3">
        <Image src={avatar6} className="avatar-sm rounded" alt="..." />
    </div>

    <div className="flex-grow-1">
        <h5 className="fs-14">Center Aligned media</h5>
        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
</div>
<div className="d-flex align-items-end text-muted">
    <div className="flex-shrink-0 me-3">
        <Image src={avatar8} className="avatar-sm rounded" alt="..." />
    </div>
    <div className="flex-grow-1">
        <h5 className="fs-14">Bottom Aligned media</h5>
        <p className="mb-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
</div>
`;

const MediaExample = () => (
    <PrismCode
        code={mediaCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default MediaExample