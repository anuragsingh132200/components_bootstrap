import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

const disabledItemCode =
    `
<!-- Disabled Items -->
<ListGroup as='ul'>
    <ListGroup.Item disabled aria-disabled="true">
        <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar1} alt="" className="avatar-xs rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-2">
                James Ballard
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar2} alt="" className="avatar-xs rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-2">
                Nancy Martino
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-2">
                Henry Baird
            </div>
        </div>
    </ListGroup.Item>
    <ListGroup.Item>
        <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
                <Image src={avatar3} alt="" className="avatar-xs rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-2">
                Erica Kernan
            </div>
        </div>
    </ListGroup.Item>
</ListGroup>
`;

const DisabledItemExample = () => (
    <PrismCode
        code={disabledItemCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);
export default DisabledItemExample;