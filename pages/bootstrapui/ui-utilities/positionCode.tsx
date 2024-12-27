import dynamic from "next/dynamic";
const PrismCode = dynamic(() => import('@common/Prisam'), { ssr: false })

// Position

const positionCode =
    `
<!-- Arrange elements -->
<div className="position-relative p-5 bg-light m-3 border rounded" style={{height: "180px"}}>
    <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
</div>

<!-- Center elements -->
<div className="position-relative m-3 bg-light border rounded" style={{height: "180px"}}>
    <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>

    <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>

    <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
</div>

<!-- Center elements -->
<div className="position-relative m-3 bg-light border rounded" style={{height: "180px"}}>
    <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
    <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded"></div>

    <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
    <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>

    <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
    <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
</div>
`;

const PositionExample = () => (
    <PrismCode
        code={positionCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

export default PositionExample