import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const customListCode =
    `
<!-- Custom Content Lists -->
<ListGroup as='ul' className="mb-1">
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-grow-1">
                <div className="d-flex">
                    <div className="flex-shrink-0 avatar-xs">
                        <div className="avatar-title bg-danger-subtle text-danger rounded">
                            <i className="ri-netflix-fill"></i>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <h6 className="fs-14 mb-0">Netfilx</h6>
                        <small className="text-muted">2 min Ago</small>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <span className="text-danger">-$25.50</span>
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-grow-1">
                <div className="d-flex">
                    <div className="flex-shrink-0 avatar-xs">
                        <div className="avatar-title bg-success-subtle text-success rounded">
                            <i className="ri-spotify-fill"></i>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <h6 className="fs-14 mb-0">Spotify</h6>
                        <small className="text-muted">5 days Ago</small>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <span className="text-success">$48.25</span>
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-grow-1">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <Image src={avatar2} alt="" className="avatar-xs rounded" />
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <h6 className="fs-14 mb-0">Emily Slater</h6>
                        <small className="text-muted">8 days Ago</small>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <span className="text-success">$354.90</span>
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-grow-1">
                <div className="d-flex">
                    <div className="flex-shrink-0 avatar-xs">
                        <div className="avatar-title bg-secondary-subtle text-secondary rounded">
                            <i className="ri-paypal-fill"></i>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <h6 className="fs-14 mb-0">Paypal</h6>
                        <small className="text-muted">1 month Ago</small>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <span className="text-danger">-$12.22</span>
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-grow-1">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <Image src={avatar3} alt="" className="avatar-xs rounded" />
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <h6 className="fs-14 mb-0">Harvey Wells</h6>
                        <small className="text-muted">4 month Ago</small>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <span className="text-success">-$459.78</span>
            </div>
        </div>
    </ListGroup.Item>
</ListGroup>
`;

const CustomListExample = () => (
    <PrismCode
        code={customListCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default CustomListExample;